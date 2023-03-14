import express from "express";
const app = express();

// 1. Routes simples
// Route GET sur l'url /exemple
app.get("/example", function (req, res) {
	// Afficher un méssage dans la console quand une raquête est interceptée
	console.log("Une requête GET est reçue sur /exemple");

	//Envoyer un message dans la réponse
	res.send("Hello world!");
});

////////////////////////////////////////////////////////
// 2. Routes avec query
// Déclaration de la route avec un query name 'name'
app.get("/hello", function (req, res) {
	// Récupération de la valeur du query name 'name' avec la méthode req.query
	var name = req.query.name;

	// Utilisation de la valeur récupérée pour la réponse
	console.log("Hello " + name + "!");

	// Envoyer la réponse avec le nom réçu dans le query
	res.send("Hello " + name + "!");
});

////////////////////////////////////////////////////////
// 3. Routes avec paramètres
// Route avec paramètre id réçu et déclaré dans l'url
app.get("/articles/:id", function (req, res) {
	//Récuperer le paramètre dans l'url
	const id = req.params.id;
	res.send("Article ID est : " + id);
});

// Route avec deux paramètres id et bookID réçus et déclarés dans l'url
app.get("/users/:id/books/:bookID", function (req, res) {
	res.send("User ID is " + req.params.id + " and Book ID is " + req.params.bookID);
});

////////////////////////////////////////////////////////
// 4. CRUD: Liste de taches

// Variable pour stocker la liste de tâches
let tasks = ["Aller manger.", "Aller étudier.", "Aller dormir"];

// Ajouter une tache à la liste
app.post("/tasks", (req, res) => {
	// Aficher les informations de la requête dans la console
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

	// Recupérer la tache dans le query de la requête
	const newTask = req.query.task;

	// Vérifier que le query task a été fournit
	if (!newTask) return res.status(400).json({ message: "query task required" });

	// Ajouter la tache dans la liste
	tasks.push(newTask);

	//Repondre en JSON avec un objet contenant la liste de taches
	return res.status(200).json({ tasks });
});

// Récuperer toutes les tâches
app.get("/tasks", (req, res) => {
	// Aficher les informations de la requête dans la console
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

	// Envoyer une reponse en JSON contenant la liste de taches
	return res.status(200).json({ tasks });
});

// Modifier une tache
app.put("/tasks/:id", (req, res) => {
	// Aficher les informations de la requête dans la console
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

	// Récuperer et convertir l'id dans les paramètre de la requête
	const id = Number(req.params.id);

	// Vérifier que l'id fournit est bien un nombre sinon reponse 400
	if (isNaN(id)) return res.status(400).json({ message: "Identifiant invalide" });

	// Vérifier que l'id est trouvable sinon reponse 404
	if (!tasks[id]) return res.status(404).json({ message: "Tache introuvable" });

	// Récuperer la nouvelle tache
	const updatedTask = req.query.task;

	// Vérifier que l'id fournit est bien un nombre sinon reponse 400
	if (!updatedTask) return res.status(400).json({ message: "query task required" });

	// Mettre a jour la tache dans la liste
	tasks[id] = updatedTask;

	//Envoyé une réponse en JSON avec la nouvelle tache
	return res.status(200).json({ tasks });
});

// Supprimer une tache
app.delete("/tasks/:id", (req, res) => {
	// Aficher les informations de la requête dans la console
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

	// Récuperer et convertir l'id dans les paramètre de la requête
	const id = Number(req.params.id);

	// Vérifier que l'id fournit est bien un nombre sinon reponse 400
	if (isNaN(id)) return res.status(400).json({ message: "Identifiant invalide" });

	// Vérifier que l'id est trouvable sinon reponse 404
	if (!tasks[id]) return res.status(404).json({ message: "Tache introuvable" });

	// Mettre a jour la tache dans la liste
	tasks.splice(id, 1);

	//Envoyé une réponse en JSON avec la nouvelle tache
	return res.status(200).json({ tasks });
});

// Lancer le serveur sur le port 3000
app.listen(3001, function () {
	console.log("Example app listening on port 3001!");
});
