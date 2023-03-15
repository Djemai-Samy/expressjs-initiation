# 1/ ExpresJS: Les Middleswares

## [Page officiel du cours ExpressJS: Les Middlewares](https://djemai-samy.com/posts/3.expressjs-middlewares.article)

![Image du cours: ExpresJS: Les Middlewares](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/3.expressjs-middlewares.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Le middleware est l'un des éléments clés dans le développement d'applications web avec ExpressJS.

Il permet de traiter les requêtes HTTP et les réponses en ajoutant des fonctionnalités supplémentaires à l'application.

Vous découvrirez comment créer des middlewares personnalisés pour ExpressJS, ainsi que les middlewares intégrés d'ExpressJS tels que la gestion de fichiers statiques, la gestion du corps des requêtes HTTP et l'upload de fichiers.

---

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.expressjs-initiation)

1. [ExpressJS: Introduction](https://djemai-samy.com/posts/1.expressjs-introduction.article)
2. [ExpressJS: Les Routes](https://djemai-samy.com/posts/2.expressjs-routes.article)
3. [ExpressJS: Les middlewares](https://djemai-samy.com/posts/3.react-middlewares.article)

---

## Branches sur GitHub

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale et complet de l'article:

- [main](https://github.com/Djemai-Samy/expressjs-initiation)
- [1-introduction](https://github.com/Djemai-Samy/expressjs-initiation/tree/1-introduction)
- [2-routes](https://github.com/Djemai-Samy/expressjs-initiation/tree/2-routes)
- [3-middlewares](https://github.com/Djemai-Samy/expressjs-initiation/tree/3-middlewares)

---

## Branches sur GitLab

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale et complet de l'article:

- [main](https://gitlab.com/tutoriels-dev/expressjs/expressjs-initiation/1.expressjs-initiation/-/tree/main)
- [1-introduction](https://gitlab.com/tutoriels-dev/expressjs/expressjs-initiation/1.expressjs-initiation/-/tree/1-introduction)
- [2-routes](https://gitlab.com/tutoriels-dev/expressjs/expressjs-initiation/1.expressjs-initiation/-/tree/2-routes)
- [3-middlewares](https://gitlab.com/tutoriels-dev/expressjs/expressjs-initiation/1.expressjs-initiation/-/tree/3-middlewares)

---

## Mise en place de l'environnement

Vous pouvez commencer à suivre le cours en clonant le branche **main** avec GitHub:

```bash
git clone https://github.com/Djemai-Samy/expressjs-initiation.git
```

ou avec GitLab:

```bash
git clone https://gitlab.com/tutoriels-dev/expressjs/expressjs-initiation/1.expressjs-initiation/-/tree/main
```

Une fois cloné, vous pouver vous déplacez dans la nouveau dossier:

```bash
cd ./expressjs-initiation
```

Installer les dépendances:

```bash
npm install
```

Et lancé le serveur en mode développement

```bash
npm run dev
```

---

## Mise en place de Postman

Vous pouvez importer l'API pour tester votre application.

Il suffit d'importé la collection situé dans le dossier `/postman` (fichier json), dans le logiciel.

---

## Ojectifs

- **Comprendre** le rôle et l'importance du **middleware** dans le développement web
- **Savoir créer des middlewares** personnalisés pour ExpressJS
- **Comprendre** et **savoir utiliser les middlewares intégrés** d'ExpressJS, tels que la **gestion de fichiers statiques**, la **gestion du corps** des requêtes HTTP et l'**upload de fichiers**

---

## Définition du middleware

  Le **middleware** est un **logiciel** qui agit comme une **couche intermédiaire** entre **différentes applications** et **composants logiciels**.
  
  Il est conçu pour **faciliter l'intégration** de **différents systèmes** et pour **améliorer la performance**, la **sécurité** et la **fiabilité** des applications.

  Dans le contexte du **développement web**, le **middleware** est un **composant clé** qui permet d'**ajouter des fonctionnalités** supplémentaires à une application web.
  
  Les **middlewares** peuvent être **utilisés** pour **gérer les requêtes et les réponses**, pour **analyser les données**, pour **gérer les erreurs**, pour **contrôler l'accès** à l'application...

  ![Representation graphique des routes entre client et serveur avec ExpressJS en developpement web full stack en utilisant des middlewares](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/1.expressjs-middlewares-exemple.svg)

---

## Middleware personnalisé

  Un **middleware personnalisé** est un middleware créé spécifiquement pour **répondre à un besoin particulier** dans une application web.
  
  Il peut être **utilisé** pour **ajouter des fonctionnalités** supplémentaires qui ne sont pas disponibles dans les middlewares intégrés d'ExpressJS.
  Reprenons l'exemple du chapitre précédent.

[***Simple Application CRUD***.](https://djemai-samy.com/posts/2.expressjs-routes.article)

```js
const tasks = ["Aller manger.", "Aller étudier.", "Aller dormir"]

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
app.get('/tasks', (req, res)=>{
  // Aficher les informations de la requête dans la console
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Envoyer une reponse en JSON contenant la liste de taches
  return res.status(200).json({ tasks });
  })

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

  //Envoyé une réponse en JSON avec la liste de tâche mise à jour
  return res.status(200).json({ tasks });
});

// Supprimer une tache
app.delete('/tasks/:id', (req, res)=>{
  // Aficher les informations de la requête dans la console
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Récuperer et convertir l'id dans les paramètre de la requête
  const id = Number(req.params.id);

  // Vérifier que l'id fournit est bien un nombre sinon reponse 400
  if(isNaN(id)) return res.status(400).json({message: "Identifiant invalide"});

  // Vérifier que l'id est trouvable sinon reponse 404
  if(!tasks[id]) return res.status(404).json({message: "Tache introuvable"})

  // Mettre a jour la tache dans la liste
  tasks.splice(id, 1);

  //Envoyé une réponse en JSON avec la nouvelle tache
  return res.status(200).json({ tasks })
})
```

---

Nous avons des **instructions** qui se **répètent** dans les **routes**:

---

**Toutes les routes affichent** les **informations** de la **requête réçu** sur la **console**:

```js
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
```

Les routes `POST` et `PUT` **verifient** si le **query** `task` est **bien fournit**:

```js
// Récuperer la nouvelle tache
const updatedTask = req.query.task;

// Vérifier que l'id fournit est bien un nombre sinon reponse 400
if (!updatedTask) return res.status(400).json({ message: "query task required" });
```

---

**Les** **routes** `PUT` et `DELETE` **verifient** si la **position réçue** dans l'`id` est **valide** et **existe** dans le tableau:

```js
// Récuperer et convertir id dans les paramètre de la requête
const id = Number(req.params.id);

// Vérifier que id fournit est bien un nombre sinon reponse 400
if(isNaN(id)) return res.status(400).json({message: "Identifiant invalide"})

// Vérifier que id est trouvable sinon reponse 404
if(!tasks[id]) return res.status(404).jsong({message: "Tache introuvable"})
```

---

Ces répétitions sont parfaites pour être factorisées dans des middlewares.

---

### Création de middleware

Tout **middleware** dans ExpressJS est une **fonction** qui **prend trois arguments** : `req` (**requête**), `res` (**réponse**) et `next` (**fonction/middleware suivant**).

Dans cet exemple, nous avons **créé une fonction middleware** appelée logger qui **affiche** chaque **requête entrante** dans la **console**.

```js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
```

---

Et une autre une **fonction middleware** appelée `verifyTaskID` qui **verifie** si l'`id` **fournit** dans les **paramètres** de la requête est **bien un nombre**.

Si l'id ne correspond **pas à un nombre**, le middleware **envoit un réponse** avec **le status** `400`

Sinon le middleware **verifie** que la **tâche existe** dans le tableau de tâches à la **position fournit** dans l'`id`.

Si la tâche **n'existe pas**, le middleware **envoit un réponse** avec le **status** `404`.

Enfin, si **tout vas bien**, le middleware **passe la main** aux prochain(s) middlewares avec la **fonction** `next()`

```js
const verifyTaskID = (req, res, next) => {
  // Récuperer et convertir id dans les paramètre de la requête
  const id = Number(req.params.id);

  // Vérifier que id fournit est bien un nombre sinon reponse 400
  if(isNaN(id)) return res.status(400).json({message: "Identifiant invalide"});

  // Vérifier que id est trouvable sinon reponse 404
  if(!tasks[id]) return res.status(404).jsong({message: "Tache introuvable"});

  // Passer l'id convertir dans la requete aux prochains middlewares
  req.taskID = id;

  //Passer au middleware suivant
  next();
};
```

---

Et une dernière **fonction middleware** appelée `verifyTask` qui **verifie** si le query `task` a bien été fournit dans la requête.

Si le **query n'est pas trouvé** dans la **requête**, le middleware **envoit un réponse** avec le **status** `400`.

Sinon, le middleware **passe la main** aux prochain(s) middlewares avec la **fonction** `next()`

```js
const verifyTask = (req, res, next) => {
  // Récuperer la nouvelle tache
  const updatedTask = req.query.task;

  // Vérifier que l'id fournit est bien un nombre sinon reponse 400
  if (!updatedTask) return res.status(400).json({ message: "query task required" });

  //Passer au middleware suivant
  next();
};
```

---

### Utilisation d'un middleware

Pour **utiliser** votre **middleware personnalisé** dans une **application ExpressJS**:

Voudous pouvez **l'appliquer** à **toutes les routes** de l'application en **utilisant la méthode** `app.use(middleware)`

```js
app.use(logger)
```

Ou **l'appliquer** à des **routes spécifiques**:

```js
// Utiliser verifyTask dans la route POST
app.post("/tasks", verifyTask, (req, res) => {
  const newTask = req.query.task;
  tasks.push(newTask);
  return res.status(200).json({ tasks });
});

// Utiliser verifyTaskID et verifyTask  dans la route PUT
app.put('/tasks/:id', verifyTaskID, verifyTask, (req, res)=>{
  const id = req.taskID;
  const updatedTask = req.query.task;
  task[id] = updatedTask;
  return res.status(200).json({ task: taks[id] });
})

// Utiliser verifyTaskID dans la route DELETE
app.delete('/tasks/:id', verifyTaskID, (req, res)=>{
  const id = req.taskID;
  tasks.splice(id, 1);
  return res.status(200).json({ tasks });
})
```

---

## Middlewares intégrés d'ExpressJS

ExpressJS **propose** plusieurs **middlewares intégrés** qui **permettent** d'**ajouter** facilement des **fonctionnalités** à une application.

Ces **middlewares** sont **inclus** dans la **librairie** ExpressJS et peuvent être **utilisés** sans avoir besoin d'installer des packages supplémentaires.

Pour **utiliser** un **middleware intégré**, vous devez **utiliser la méthode** `use` d'ExpressJS et **passer le middleware** en question **comme argument**.

Les **middlewares intégrés** sont **accessibles** via la **propriété** `express.` suivie du **nom du middleware**.

---

### Le Routeur

Le **middleware Routeur** est une **fonctionnalité intégrée** à Express.js qui **permet** de **gérer les routes** de manière **modulaire** et **organisée**.

Il permet de **créer** des **sous-ensembles d'itinéraires** pour une application en les **regroupant** selon leur **fonctionnalité** ou leur **domaine/URL**.

Par convention, les développeur en tendance à **créer un fichier** pour **chaque Routeur** afin de **modulariser** leur application.

Voici un **exemple d'utilisation du middleware Routeur** pour les **toutes les sous routes** de `./tasks`.

D'abord **créez un fichier** `/src/routes/tasks.js`:

```bash
📦expressjs-initiation
┣ 📂node_modules
┣ 📂src
|  ┗ 📂routes
|     ┗ 📜tasks.js
┣ 📜package.json
┗ 📜app.js
```

Puis dans le fichier:

1. Nous allons **déclarer** et **exporter** un **Routeur** nommé `tasksRouter` avec la méthode `Router()`.
2. Nous allons **associer les routes au Routeur** en **ommettant** la partie de l'**url commune**: `/tasks`.

```js
//Import de la librabire pour accéder au middleware
import express from "express";

// Déclaration de l'instance du middleware Router
export const tasksRouter = express.Router();

// ... Déclaration des middlewares créés précedemment ...

const tasks = ["Aller manger.", "Aller étudier.", "Aller dormir"]

// Ajouter la route POST au routeur
tasksRouter.post("/", verifyTask, (req, res) => {
  // ... Code pour ajouté une tache ...
});

// Ajouter la route GET au routeur
tasksRouter.get('/', (req, res)=>{
  // ... Code pour récuperer la liste ...
})

// Ajouter la route PUT au routeur
tasksRouter.put('/:id', verifyTaskID, verifyTask, (req, res)=>{
  // ... Code pour mettre à jour une tache ...
})

// Ajouter la route DELETE au routeur
tasksRouter.delete('/:id', verifyTaskID, (req, res)=>{
  // ... Code pour supprimer un tâche ...
})
```

---

Mantenant, nous pouvons **importer** le **Routeur/Middleware** dans `app.js`, et l'**utiliser** pour les **routes commençants** par `/tasks`:

```js
import express from "express";

// Import du middleware
import { tasksRouter } from "./src/routes/tasks.js";

const app = express();

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

// Utiliser le middleware Routeur pour les routes '/tasks'
app.use("/tasks", tasksRouter);

app.listen(3001, function () {
  console.log("Serveur lancé sur le port 3001!");
});
```

---

## Fichier statiques

**ExpressJS propose** un **middleware intégré** qui permet de **servir des fichiers statiques** tels que des **images**, des **fichiers** `HTML`, des **fichiers** `CSS`, etc.

Pour l'exemple, nous allons **créer un dossier** nommé `/publique` **contanant des fichier statiques**:

```bash
📦expressjs-initiation
┣ 📂node_modules
┣ 📂src
|  ┗ 📂routes
|     ┗ 📜tasks.js
┣ 📂public
|  ┣ 📜index.html
|  ┣ 📜style.css
|  ┗ 📜script.js
┣ 📜package.json
┗ 📜app.js
```

Dans `/public/index.html`:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Récuperer/Charger le fichier style.css -->
    <link rel="stylesheet" href="/style.css" />

    <!-- Récuperer/Charger le fichier script.js -->
    <script src="/script.js"></script>
    <title>Site statique</title>
  </head>
  <body>
    <h1>Un site servit statiquement</h1>
  </body>
</html>
```

Dans `/public/style.css`:

```css
h1 {
  color: red;
}
```

Dans `/public/script.js`:

```js
console.log("Fichier Javascript servit statiquement");
```

Le **middleware** peut être **utilisé** en **spécifiant le répertoire** qui **contient** les **fichiers statiques** que vous souhaitez **servir**.

```js
const express = require('express');
const app = express();

// Utilisation du middleware pour servir des fichiers statiques
app.use(express.static('public'));

// Route principale
app.get('/api/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Démarrage du serveur
app.listen(3001, () => {
  console.log('Le serveur est lancé sur le port 3001');
});
```

Dans cet exemple, nous avons **utilisé** le **middleware intégré** `express.static` pour **servir des fichiers statiques** du répertoire `public`.

Tous les **fichiers statiques** du répertoire `public` sont **accéssible** à partir de l'**URL** de base.

Pour **visiter** votre **site servit statiquement**, vos pouvez **ouvrir un navigateur** sur l'url:

[http://localhost:3001/](http://localhost:3001/)

Le **navigateur envoit une requête au serveur** et **reçoit le fichier** `index.html`, qui s'occupera de **télécharger** les fichiers `style.css` et `script.js`.

![Resultat de l'affichage du site statique HTML, CSS et Javascript servit statiquement avec Express.js en utilisant le middleware express.static](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/2.expressjs-middlewares-statique.svg)

---

### Parser le body

Afin de **récupérer** les **données envoyées** dans le **corps de la requête**, telles que des **formulaires**, des **contenus en JSON** ou des **contenus en texte**, ExpressJS nous **fournit** des **middlewares** permettant de faire cela.

Pour **parser le corps d'une requête** en JSON:

```js
// Utilisation du middleware pour parser le body
app.use(express.json());

// Route qui réçoit un body avec les données
app.post("/api/bonjour", (req, res) => {
  res.send(`Bonjour ${req.body.nom} ${req.body.prenom} !`);
});
```

Dans cet exemple, nous avons **utilisé** le **middleware intégré** `express.json` pour **parser le corps des requêtes entrantes**.

Nous pouvons ensuite **accéder** aux **données envoyées** dans le **corps de la requête** en **utilisant** la **propriété** `body` de l'objet `req`.

![Résultat de la réponse réçue par expressjs après l'envoi d'un requête HTTP POST dans Postman, avec le body en format JSON](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/3.1.expressjs-middlewares-body-json.png)

Vous pouvez aussi **parser** les **corps réçues** en **form-urlencoded** avec **le middleware** `express.urlencoded`:

```js
// Utilisation du middleware pour parser le body JSON
app.use(express.json());

// Utilisation du middleware pour parser le body d'un formulaire
app.use(express.urlencoded({ extended: true }));

// Route qui réçoit un body avec les données
app.post("/api/bonjour", (req, res) => {
  res.send(`Bonjour ${req.body.nom} ${req.body.prenom} !`);
});
```

![Résultat de la réponse réçue par expressjs après l'envoi d'un requête HTTP POST dans Postman, avec le body en format urlencoded](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/3.2.expressjs-middlewares-body-urlencoded.png)

---

## Middlewares externes

En plus des **middlewares intégrés**, il existe de nombreux **middlewares externes** qui peuvent être utilisés avec ExpressJS pour **ajouter des fonctionnalités supplémentaires** à une application.

Voici quelques-uns des **middlewares externes** les plus **populaires** :

---

### multer

`multer` est un **middleware populaire** pour ExpressJS qui est utilisé pour **gérer les téléchargements de fichiers**.

Il est **utilisé** pour **traiter les fichiers envoyés** dans les **requêtes** `HTTP` **multipart**.

- [Package NPM multer](https://www.npmjs.com/package/multer)
- [GitHub de multer](https://github.com/expressjs/multer#readme)

Installation:

```bash
npm install multer
```

Voici un **exemple d'utilisation** pour **télécharger des fichier** sur le serveur dans un **dossier créer au préalable** nommé `/uploads`.

```js
//Import de la librairie
import multer from 'multer';

// Instanciation du middleware en précisant le dossier de déstination de fichier
const upload = multer({ dest: 'uploads/' });

// Utilisation du middleware dans une route pour télécharger le fichier
app.post('/upload', upload.single('file'), (req, res) => {
  // Le fichier est enregistré dans le dossier 'uploads'
  res.send('File uploaded successfully');
});
```

Dans cet exemple, nous avons **créé une application** Express qui gère les **téléchargements de fichiers**.

Nous avons **utilisé** `multer` pour **traiter** les **fichiers envoyés** avec la **requête**.

Nous avons **configuré** `multer` pour **enregistrer** les **fichiers téléchargés** dans le **dossier** `/uploads`.

Nous avons également **spécifié** que nous attendons **un seul fichier** dans la **requête** avec la **méthode** `upload.single('file')`.

Une fois que la **requête** a été **traitée avec succès**, `multer` **stocke le fichier** dans le **dossier** `/uploads` et **appelle** la **fonction/middleware** suivant.

Dans cet exemple, nous avons simplement **renvoyé une réponse** indiquant que le **fichier a été téléchargé avec succès**.

![Résultat de la réponse réçue par expressjs après l'envoi d'un requête HTTP POST dans Postman, avec le body contenant une image a uploader avec multer](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/4.expressjs-middlewares-upload.png)

```bash

📂public
┣ 📂images
|  ┗ 📜expressjs-initiation.svg
┣ 📜index.html
┣ 📜style.css
┗ 📜script.js
```

---

Comme le **fichier** est **ajouté dans le dossier** `/public/images` **servit statiquement**, les **images ajoutées** sont donc **accéssible via l'url** `/images/nom_du_fichier`:

![Résultat de la réponse réçue par expressjs après l'envoi d'un requête HTTP GET dans Postmanpour récuperer une images uploader avec multer et serit statiquement](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/3.expressjs-middlewares/4.1.expressjs-middlewares-upload-static.png)

Il faut noté qu'il faudrait enregistrer les fichiers sous des noms uniques, car multer remplace le fichier portant le meme nom si il existe.

---

### cors

Ce **middleware** permet d'**activer les CORS** (Cross-Origin Resource Sharing) pour une application Express.

`cors` est utilisé pour **autoriser** les **requêtes** `HTTP` **provenant** de **domaines différents**, idéale pour les **API REStful**.

- [Package NPM de cors](https://www.npmjs.com/package/cors)
- [GitHub de la librairie de cors](https://github.com/expressjs/cors#readme)

Installation:

```bash
npm install cors
```

Voici un exemple d'utilisation :

```js
// Import de la librairie
import cors from 'cors';

// Utilisation du middleware au niveau de l'application
app.use(cors());
```

---

### helmet

Ce **middleware** est utilisé pour **sécuriser** les applications Express en **configurant les en-têtes** HTTP.

Il peut être **utilisé** pour **activer** des **en-têtes de sécurité** tels que `X-XSS-Protection`, `X-Content-Type-Options` et `Strict-Transport-Security`.

- [Site web de helmet](https://helmetjs.github.io/)
- [Package NPM helmet](https://www.npmjs.com/package/helmet)
- [GitHub de helmet](https://github.com/helmetjs/helmet)

Installation:

```bash
npm install helmet
```

Voici un exemple d'utilisation :

```js
// Import de la librairie
import helmet from 'helmet';

// Utilisation du middleware au niveau de l'application
app.use(helmet());
```

## Conclusion

Les **middlewares** sont un **élément clés** dans le développement d'applications web avec ExpressJS.

Ils **permettent** d'**ajouter** des **fonctionnalités supplémentaires** à une application et de **simplifier** la **gestion des requêtes** et **des réponses**.

Dans ce chapitre, nous avons vu **comment créer des middlewares personnalisés** et **utiliser les middlewares intégrés** d'ExpressJS, tels que le middleware `Router` pour **modulariser votre application**, le middleware `static` pour **servir des fichiers statiques**, les middlewares `json` et `urlencoded` pour **parser le corps des requêtes** et le middleware `multer` pour **uploader des fichiers**.

Ces **middlewares** peuvent être **combinés** pour **créer des applications web robustes et performantes**.

---

Ce chapitre **clôture l'initiation la librairie ExpresJS**, nous avons **couvert les fonctionnalités clés** d'ExpressJS, une librairie de développement web Node.js populaire.

Nous avons vu comment ExpressJS **permet de créer des applications web robustes et scalables** en utilisant des **routes**, des **middlewares**.

Si vous êtes **intéressé à continuer à apprendre ExpressJS**, voici quelques **suggestions pour vous aider à poursuivre** votre apprentissage :

[***Cours sur Mongoose***](https://djemai-samy.com/posts/expressjs-mongoose)

Utiliser **Mongoose avec ExpressJS** est une pratique courante pour la **gestion des bases de données MongoDB**.

---

[***Cours sur le tamplating avec handlebars***](https://djemai-samy.com/posts/expressjs-handlebars)

**ExpressJS** offre la possibilité d'utiliser des **templates pour générer dynamiquement des pages HTML** en utilisant un **moteur de templates comme handlebars**.

---

[***Cours pour utiliser ReactJS avec ExpressJS***](https://djemai-samy.com/posts/expressjs-react)

Les **applications à page unique** sont trés populaires car elles **offrent une expérience utilisateur plus fluide**.

ExpressJS peut être **utilisé** pour **créer des API RESTful** qui **alimentent des applications SPA** développées en JavaScript tel que **ReactJS**.

---

## Aller plus loin

[Précedent: ExpressJS: Les Routes](https://djemai-samy.com/posts/2.expressjs-routes.article)

[Suivant: Mongoose et ExpressJS](https://djemai-samy.com/posts/expressjs-mongoose)
