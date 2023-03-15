//Import de la librabire pour accéder au middleware
import express from "express";

// Déclaration de l'instance du middleware Router
export const tasksRouter = express.Router();

// Déclaration de la Fonction/Middleware pour vérifié l'id
const verifyTaskID = (req, res, next) => {
	// Récuperer et convertir id dans les paramètre de la requête
	const id = Number(req.params.id);

	// Vérifier que id fournit est bien un nombre sinon reponse 400
	if (isNaN(id)) return res.status(400).json({ message: "Identifiant invalide" });

	// Vérifier que id est trouvable sinon reponse 404
	if (!tasks[id]) return res.status(404).json({ message: "Tache introuvable" });

	// Passer l'id convertir dans la requete aux prochains middlewares
	req.taskID = id;

	//Passer au middleware suivant
	next();
};

// Déclaration de la Fonction/Middleware pour vérifié le query
const verifyTask = (req, res, next) => {
	// Récuperer la nouvelle tache
	const updatedTask = req.query.task;

	// Vérifier que l'id fournit est bien un nombre sinon reponse 400
	if (!updatedTask) return res.status(400).json({ message: "query task required" });

	//Passer au middleware suivant
	next();
};

// Déclaration du tableau pour stocker les tâches
const tasks = ["Aller manger.", "Aller étudier.", "Aller dormir"];

// Ajouter la route POST au routeur
tasksRouter.post("/", verifyTask, (req, res) => {
	// Recupérer la tache dans le query de la requête
	const newTask = req.query.task;

	// Ajouter la tache dans la liste
	tasks.push(newTask);

	//Repondre en JSON avec un objet contenant la liste de taches
	return res.status(200).json({ tasks });
});

// Ajouter la route GET au routeur
tasksRouter.get("/", (req, res) => {
	// Envoyer une reponse en JSON contenant la liste de taches
	return res.status(200).json({ tasks });
});

// Ajouter la route PUT au routeur
tasksRouter.put("/:id", verifyTaskID, verifyTask, (req, res) => {
	// Récuperer et convertir l'id dans les paramètre de la requête
	const id = req.taskID;

	// Récuperer la nouvelle tache
	const updatedTask = req.query.task;

	// Mettre a jour la tache dans la liste
	tasks[id] = updatedTask;
	console.log(tasks);
	//Envoyé une réponse en JSON avec la liste de tâche mise à jour
	return res.status(200).json({ tasks });
});

// Ajouter la route DELETE au routeur
tasksRouter.delete("/:id", verifyTaskID, (req, res) => {
	// Récuperer et convertir l'id dans les paramètre de la requête
	const id = req.taskID;

	// Mettre a jour la tache dans la liste
	tasks.splice(id, 1);

	//Envoyé une réponse en JSON avec la nouvelle tache
	return res.status(200).json({ tasks });
});
