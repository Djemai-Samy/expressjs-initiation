import path from "path";

import express from "express";

// Import du middleware
import { tasksRouter } from "./src/routes/tasks.js";

//Import de la librairie
import multer from "multer";

// Instanciation de l'appilcation
const app = express();

// Déclaration de laFonction/Middleware pour affiché la requête
const logger = (req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next();
};

//////////////////////////////////////////////////////////
/////////////// Utilisation des middleware //////////////

// Utiliser le middleware logger au niveau de toutes l'application
app.use(logger);

// Utilisation du middleware pour servir des fichiers statiques
app.use(express.static("public"));

// Utilisation du middleware pour parser le body
app.use(express.json());

// Utilisation du middleware pour parser le body d'un formulaire
app.use(express.urlencoded({ extended: true }));

// Définir la configuration pour le téléchargement de fichier
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/images/");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

// Instanciation du middleware en précisant le dossier de déstination de fichier
const upload = multer({ storage: storage });

// Utiliser le middleware Routeur pour les routes '/tasks'
app.use("/tasks", tasksRouter);

/////////////// Utilisation des middleware ///////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
/////////////// Les routes de lappication //////////////

// Route principale
app.get("/api/", (req, res) => {
	res.send(`Route principale de l'api!`);
});

// Route qui réçoit un body avec les données
app.post("/api/bonjour", (req, res) => {
	res.send(`Bonjour ${req.body.nom} ${req.body.prenom} !`);
});

// Utilisation du middleware dans une route pour télécharger le fichier
app.post("/api/upload", upload.single("file"), (req, res) => {
	// Le fichier est enregistré dans le dossier 'uploads'
	res.send("File uploaded successfully");
});

/////////////// Les routes de lappication ////////////////
/////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
////////// Lacement du serveur sur le port 3001 /////////

app.listen(3001, function () {
	console.log("Serveur lancé sur le port 3001!");
});

////////// Lacement du serveur sur le port 3001 //////////
/////////////////////////////////////////////////////////
