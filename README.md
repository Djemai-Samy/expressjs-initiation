# 1/ ExpresJS: Les Routes

## [Page officiel du cours ExpressJS: Initiation](https://djemai-samy.com/posts/2.expressjs-routes.article)

![Image du cours: ExpresJS: Les Routes](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/1.expressjs-introduction/2.expressjs-routes.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Avec ExpressJS, les routes sont une des ses principales fonctionnalités, car elle permettent de prépondre aux clients différament suivant l'URL, la méthode de la raquête HTTP.

Dans ce chapitre, nous allons **explorer les différentes manières de créer des routes** avec ExpressJS, allant des routes les plus simples aux plus avancées.

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

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

1. **Comprendre** ce qu'est **ExpressJS** et **pourquoi** il est **utilisé** dans le **développement web**.
2. **Identifier** les **fonctionnalités clés** d'ExpressJS
3. **Savoir** comment **ExpressJS** peut **améliorer** l'**efficacité** du **développement web**.
4. **Savoir configuer** et **lancer** une **application** ExpressJS.

---

## Déscription

**ExpressJS** est une **librairie JavaScript open-source** pour la **création** d'applications web.

Elle est **utilisée** pour la **création** de **serveurs web**, la **gestion** des **routes** et des **middleware**, la **génération de vues dynamiques**...

**ExpressJS** est **largement utilisé** dans le **développement web** pour sa **simplicité**, et sa **flexibilité**.

---

## Prérequis

Pour **suivre** ce chapitre, vous devez **avoir** une bonne **compréhension** du **langage JavaScript** et des **connaissances** de base en **développement web**, y compris la **création** de sites web **statiques** et **dynamiques**:

1. [**_Initiation au language Javascript_**](https://djemai-samy.com/posts/0.javascript-initiation)
2. [**Initiation à la programmation serveur avec NodeJS.**](https://djemai-samy.com/posts/0.nodejs-initiation)
3. [**Introduction a ExpressJS.**](https://djemai-samy.com/posts/2.nodejs-introduction)

---

## Rappel sur le HTTP

Une **requête** `HTTP` (Hypertext Transfer Protocol) est une **demande envoyée** par un **client à un serveur web** pour **récupérer** ou **envoyer** des **informations**.

Cela peut inclure des **demandes de pages web**, **des demandes de données**, **des envois de formulaires**, **des mises à jour de données**, etc.

Une **requête** `HTTP` est **composée** de plusieurs parties :

---

### 1. Les URLs

Une **URL** (Uniform Resource Locator) est une **chaîne de caractères** utilisée pour **identifier** une **ressource** sur le Web.

Dans une application Web basée sur Node.js avec Express.js, les **URLs** sont souvent **utilisées** pour **identifier** les **différentes routes** de l'application.

Une **route** est un point d'**entrée** dans l'application qui peut être **invoqué** en **envoyant** une requête `HTTP` à un **endpoint spécifique**.

![Representation graphique des routes entre cliebt et serveur avec ExpressJS en developpement web full stack](https://djemai-samy.com/blog/2.programmation/2.server/0.servers/1.servers-http/1.servers-http-routes.svg)

Il est **important** de noter que l'URL peut également **contenir** des **paramètres de requête**.

Les **paramètres de requête** sont des **données** qui sont **ajoutées** à la fin de l'**URL** après un point d'**interrogation** `?`, et sont **utilisées** pour **fournir** des **informations** supplémentaires sur la ressource demandée.

Par exemple, si vous **envoyez** une **requête** à la route `/articles?id=2`, l'**URL** dans la requête serait `/articles` et le **paramètre** de requête `id` aurait la valeur `2`.

---

### 2. Les méthodes

Les **méthodes** de requête `HTTP` sont **utilisées** pour **indiquer l'action** à **effectuer** sur une **ressource identifiée** par une **URL**.

Il existe **plusieurs méthodes** de requête `HTTP`, mais les plus **courantes** sont les suivantes :

- `GET` : utilisée pour **récupérer** une ressource.
- `POST` : utilisée pour **créer** une nouvelle ressource.
- `PUT` : utilisée pour **mettre à jour** une ressource existante.
- `DELETE` : utilisée pour **supprimer** une ressource existante.

Ces **méthodes de requête** sont souvent **utilisées** dans le contexte du **CRUD** (**Create**, **Read**, **Update**, **Delete**), qui est un **ensemble d'opérations** de base pour la **gestion des données**.

- **Create** : la méthode `POST` est utilisée pour **créer une nouvelle ressource**. Par exemple, vous pouvez utiliser une requête POST pour **créer un nouvel utilisateur** dans une base de données.
- **Read** : la méthode `GET` est utilisée pour **récupérer une ressource existante**. Par exemple, vous pouvez utiliser une requête GET pour **récupérer les informations d'un utilisateur spécifique** à partir d'une base de données.
- **Update** : la méthode `PUT` est utilisée pour **mettre à jour une ressource existante**. Par exemple, vous pouvez utiliser une requête PUT pour **mettre à jour les informations d'un utilisateur spécifique** dans une base de données.
- **Delete** : la méthode `DELETE` est utilisée pour **supprimer une ressource existante**. Par exemple, vous pouvez utiliser une requête DELETE pour **supprimer un utilisateur spécifique** d'une base de données.

![Representation graphique des routes avec methodes HTTP et URLs entre client et serveur avec ExpressJS en developpement web full stack utilisant CRUD](https://djemai-samy.com/blog/2.programmation/2.server/0.servers/1.servers-http/1.servers-http-methods.svg)

En utilisant ces **méthodes de requête** HTTP et le **CRUD**, les développeurs peuvent **créer** des applications Web **robustes** et **sécurisées** qui permettent aux utilisateurs de **créer**, **lire**, **mettre à jour** et **supprimer** des données de manière **facile** et **sécurisée**.

---

### 3. Les entêtes (headers)

Les **entêtes** sont utilisés pour **transmettre des informations** supplémentaires sur la requête.

Il existe de **nombreux types d'entêtes**, qui peuvent **inclure** des **informations** sur le **client**, le **serveur**, le **contenu de la requête** et les **préférences de l'utilisateur**.

Voici un exemple d'entêtes :

```http
GET /articles?id=2 HTTP/1.1
Host: www.exemple.com
Cookie: session_id=1234567890; user_prefs=dark_mode
Content-Type: applicaiton/json
```

---

### 4. Le corps (body)

Cela **peut être vide** ou **contenir des données**, comme des **données de formulaire** ou des **fichiers à télécharger**.

Voici un exemple :

```http
POST /articles HTTP/1.1
Host: www.exemple.com

{
"title": "Un titre",
"content":"Du contenu"
}

```

![Representation graphique des routes avec methodes HTTP et URLs entre client et serveur avec ExpressJS en developpement web full stack utilisant CRUD](https://djemai-samy.com/blog/2.programmation/2.server/0.servers/1.servers-http/1.servers-http-anatomy.svg)

---

## Les Routes

Les **routes** sont des **points de terminaison** (endpoints) qui **permettent** aux **clients** de **communiquer** avec le **serveur**.

Lorsqu'un client **envoie** une **requête** `HTTP` à un **serveur**, il **inclut** généralement une **URL** qui **indique** au serveur quelle **ressource** il souhaite **récupérer** ou quelle **action** il souhaite **effectuer**.

**Les routes** sont utilisées pour **définir** les correspondances entre les **URLs**, et les **fonctions** qui **traitent** ces requêtes.

---

### 1. Déclaration de route simple

Pour **déclarer** une **route** simple, nous utilisons une des **méthodes** de l'**instance** d'express `app.METHOD(route, controleur)` où `METHOD` est une **méthode HTTP** telle que `GET`, `POST`, `PUT`, `DELETE`, etc.,

Cette **méthode** prend **deux paramètres** :

1. route: L'**URL** pour **accéder** à la **logique**.
2. controleur: **Une fonction callback** qui prend **deux paramètres**, `req` et `res`. La fonction **s'execute** quand une **requête correspond** a l'**URL** et à la **méthode `HTTP`**.

Dans cet exemple, **la route `/example` est déclarée**.

Lorsque l'utilisateur **accède** à cette **URL**, la **fonction** est **exécutée** et du **texte** est **affiché** dans la console.

```js
import express from "express";
const app = express();

// Route GET sur l'url /exemple
app.get("/example", function (req, res) {
	// Afficher un méssage dans la console quand une raquête est interceptée
	console.log("Une requête GET est reçue sur /exemple");

	//Envoyer un message dans la réponse
	res.send("Hello world!");
});

// Lancer le serveur sur le port 3000
app.listen(3000, function () {
	console.log("Example app listening on port 3001!");
});
```

Vous pouvez **tester votre serveur** de plusieurs manières par exemple en utilisant **des logiciels graphiques** comme <a href="https://www.postman.com/" taget="_blank">**Postman, qui permet de tester vos API facilement**.</a>

![Exemple de teste de la requete HTTP envoyé avec Postman sur la route /exemple d'une application expressjs.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/3.expressjs-routes-exemple.png)

---

### 2. La Requête

Le **paramètre** `req` est un **objet** représentant la **requête** `HTTP` entrante.

Cet **objet** contient des **informations** sur la **requête**, telles que les **en-têtes**, le **corps de la requête**, les **paramètres de requête**, les **paramètres de chemin**, etc:

- `req.app`: **l'instance** de l'application Express **utilisée** par cette **requête**.
- `req.baseUrl`: **l'URL** de base sur laquelle la **route actuelle** a été **montée**.
- `req.ip`: **l'adresse** `IP` de l'**hôte** qui a **initié** la **requête**.
- `req.query`: un **objet** contenant les **paramètres de requête**. Les **paramètres de requête** sont des **paires** de **clé-valeur** ajoutées à l'**URL** après un `?`.

Ce **paramètre** est généralement **utilisé** dans la **fonction** de **gestionnaire** de **requêtes** pour **accéder** aux **données** de la **requête entrante** et pour **prendre** des **décisions** en fonction de ces **données**.

Dans cet exemple, nous avons **déclaré** une **route** avec l'**URL** `/hello` qui **contient** un **query** `name`.

Lorsqu'un **client** effectue une **requête** `GET` à cette **URL**, nous **récupérons** la valeur du **query** `name` en **utilisant** la **propriété** `req.query` de l'objet `req`.

Nous **utilisons** ensuite cette **valeur** pour **afficher** le nom réçues dans la console

```js
// Déclaration de la route avec un query name 'name'
app.get("/hello", function (req, res) {
	// Récupération de la valeur du query name 'name' avec la méthode req.query
	var name = req.query.name;

	// Utilisation de la valeur récupérée pour la réponse
	console.log("Hello " + name + "!");

	// Envoyer la réponse avec le nom réçu dans le query
	res.send("Hello " + name + "!");
});
```

Par exemple, si un client **effectue** une **requête** `GET` à l'**URL** `/hello?name=John`, la **valeur** de `name` sera **récupérée** et **utilisée** pour **afficher** dans la **console** le **message** `Hello John!`.

![Exemple de teste de la requete HTTP avec query paramètre envoyé avec Postman sur la route /exemple d'une application expressjs.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/4.expressjs-routes-hello.png)

---

### 3. La Réponse

Le **paramètre** `res` représente **l'objet de réponse** `HTTP` **renvoyé** par le **serveur** à un **client** `HTTP` (comme un navigateur Web).

Il est **utilisé** pour **envoyer** une **réponse** à la **requête** `HTTP` correspondante reçue par le serveur.

**L'objet** `res` contient des **méthodes** et des **propriétés** qui permettent de **personnaliser** la réponse `HTTP`, comme le **code de statut** `HTTP`, les **en-têtes `HTTP`** et le **corps de la réponse**.

- `res.append(field [, value])`: **ajoute** une **valeur** à l'**en-tête** `HTTP` **spécifié** par `field`.
- `res.cookie(name, value [, options]`: **définit** un **cookie** sur le navigateur de l'utilisateur.
- `res.download(path [, filename] [, options] [, fn])`: **télécharge** un **fichier** du serveur.
- `res.send([body])`: **envoie une réponse** `HTTP`.
- `res.json([objet])`: **envoie une réponse** `JSON`.
- `res.sendFile(path [, options] [, fn])`: **définit** le **code de statut** `HTTP` de la **réponse**.
- `res.status(code)`: **envoie un fichier** comme **réponse**.
- `res.redirect([status,] path)`: **redirige** la requête vers une **URL spécifiée**.

Dans cet exemple, nous avons **défini** une **route** `GET` pour l'**URL** `/hello`.

Lorsqu'un client **effectue** une **requête** `GET` à cette **URL**, la **fonction** de rappel de la route est **exécutée** avec les **objets** `req` et `res`.

Nous **récupérons** la **valeur** du **query** `name` en **utilisant** la **propriété** `req.query` de l'objet `req`.

Puis nous **utilisons** l'objet `res` pour **définir** le code de statut `HTTP` à `200` et **envoyer** une réponse avec le **message** `Hello World!` en utilisant la **méthode** `send()`.

```js
app.get("/hello", function (req, res) {
	// Récupération de la valeur 'name' ave req.query
	const name = req.query.name;

	// Envoyer la réponse avec le nom réçu dans le query
	res.status(200).send(`Hello ${name}!`);
});
```

Par exemple, si un client **effectue** une **requête** `GET` à l'**URL** `/hello?name=John`**, la **valeur** de `name` sera **récupérée** et **utilisée** pour **répondre** avec le **message** `Hello John!`**.

---

### 4. Routes avec paramètres

Les **routes** avec **paramètres** sont utilisées pour **capturer** des **valeurs dynamiques** dans l'**URL**.

Par exemple, `/users/1` peut être utilisé pour **récupérer** les **informations** sur l'**utilisateur** avec l'ID `1`.

Pour **déclarer** des **paramètres** dans une **route**, nous utilisons le caractère `:`.

Par exemple, si nous voulons **capturer l'ID de l'ustilisateur**, nous pouvons **déclarer** la route `/users/:id`.

Le **paramètre** est **utilisé** dans la **fonction de routage** en utilisant `req.params.id`.

Dans cet exemple, la **route** `/articles/:id` est **déclarée**.

Lorsque l'utilisateur **accède** à cette **URL**, la fonction est **exécutée** et la **réponse envoyée** est `Article ID est : [id]` où `[id]` est la **valeur de l'ID**.

```js
app.get("/articles/:id", function (req, res) {
	//Récuperer le paramètre dans l'url
	const id = req.params.id;
	res.send("Article ID est : " + id);
});
```

![Exemple de teste de la requete HTTP avec query paramètre envoyé avec Postman sur la route /exemple d'une application expressjs.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/5.expressjs-routes-articles.png)

Exemple d'une route qui utilise deux paramètres

```js
app.get("/users/:id/books/:bookId", function (req, res) {
	res.send("User ID is " + req.params.id + " and Book ID is " + req.params.bookID);
});
```

![Exemple de teste de la requete HTTP avec query paramètre envoyé avec Postman sur la route /exemple d'une application expressjs.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/6.expressjs-routes-books.png)

---

## Exemple: API CRUD Simple

Pour l'exemple, nous allons **implémenter** un **API CRUD** Simple permettant d'**ajouter**, de **récuperer**, de **modifier** et de **supprimer** des tâches depuis une **liste stocker dans un variable**:

```js
const tasks = ["Aller manger.", "Aller étudier.", "Aller dormir"];
```

---

### 1. Ajouter une taches

Pour **ajouter une tâche** le client doit **envoyer une requête** `POST` sur la route `/tasks` en **fournissant les données** dans le **query**.

```js
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
```

Par exemple, vous pouvez **envoyer une requête** sur l'url:

`/tasks?task=Une nouvelle tache`, pour **ajouter une nouvelle tâche** à la liste:

![Exemple de teste de la requete HTTP POST avec query paramètre envoyé avec Postman sur la route /tasks d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/7.expressjs-routes-post.png)

Si vous **envoyer** une requête sur l'url `/tasks?task=` ou `/tasks`, vous recevez un **message d'erreur**:

![Exemple de teste de la requete HTTP POST avec query paramètre envoyé avec Postman sur la route /tasks d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/7.1.expressjs-routes-post-required.png)

---

### 2. Récuperer toutes taches

Pour **récuperer toutes les tâches**, le client doit **envoyer une requête** `GET` sur la route `/tasks`:

```js
// Récuperer toutes les tâches
app.get("/tasks", (req, res) => {
	// Aficher les informations de la requête dans la console
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

	// Envoyer une reponse en JSON contenant la liste de taches
	return res.status(200).json({ tasks });
});
```

Par exemple, vous pouvez **envoyer une requête** `GET` sur l'url: `/tasks` pour **récuperer toutes les tâches**:

![Exemple de teste de la requete HTTP GET aenvoyé avec Postman sur la route /tasks d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/8.expressjs-routes-get.png)

---

### 3. Mettre à jour une tache

Pour **mettre à jour une tâche**, le client doit **envoyer une requête** `PUT` sur la route `/tasks/:id`:

```js
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
```

Par exemple, vous pouvez **envoyer une requête** sur l'url:

`/tasks/3?task=La tâche est modifiée` pour **mettre à jour** la tâche a la **position** `3`.

![Exemple de teste de la requete HTTP PUT envoyé avec Postman sur la route /tasks/3 d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/9.expressjs-routes-put.png)

<Block type='warn'>
Si vous **envoyer une requête** sur l'url: `/tasks/invalide?task=La tâche est modifiée`, vous receverez un **message d'erreur** dans la réponse:

![Exemple de teste de l'erreur 400 avec la requete HTTP PUT envoyé avec Postman sur la route /tasks/invalid d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/9.1.expressjs-routes-put-invalid.png)

Si vous **envoyer une reuqête** sur l'url: `/tasks/111111?task=La tâche est modifiée`, vous receverez un **message d'erreur** dans la réponse:

![Exemple de teste de l'erreur 404 avec la requete HTTP PUT envoyé avec Postman sur la route /tasks/111 d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/9.2.expressjs-routes-put-unknown.png)

Et enfin, si vous **envoyer une reuqête** sur l'url: `/tasks/3`, **sans fournir le query** `task`, vous receverez un **message d'erreur** dans la réponse:

![Exemple de teste de l'erreur 400 avec la requete HTTP PUT envoyé avec Postman sur la route /tasks/3 d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/9.3.expressjs-routes-put-required.png)

---

### 4. Supprimer une tache

Pour **supprimer une tâche**, le client doit **envoyer une requête** `DELETE` sur la route `/tasks/:id`:

```js
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
```

Par exemple, vous pouvez **envoyer une requête** `DELETE` sur l'url: `/tasks/2` pour **supprimer la tâche** à la **position** `2`:

![Exemple de teste de la requete HTTP DELETE envoyé avec Postman sur la route /tasks/3 d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/10.expressjs-routes-delete.png)

Si vous **envoyer une requête** `DELETE` sur l'url: `/tasks/invalide`, vous receverez un **message d'erreur** dans la réponse:

![Exemple de teste de l'erreur 400 avec la requete HTTP DELETE envoyé avec Postman sur la route /tasks/invalid d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/10.1.expressjs-routes-delete-invalid.png)

Si vous **envoyer une requête** `DELETE` sur l'url: `/tasks/111111`, vous receverez un **message d'erreur** dans la réponse:

![Exemple de teste de l'erreur 404 avec la requete HTTP DELETE envoyé avec Postman sur la route /tasks/111 d'une application expressjs en suivant l'apporoche CRUD.](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/2.expressjs-routes/10.2.expressjs-routes-delete-unknown.png)

---

## Conclusion

Dans ce chapitre, nous avons **appris** à **créer** des **routes** avec ExpressJS.

La **création** de **routes** est une partie **essentielle** de toute application web, et **ExpressJS fournit** une manière **simple** et **efficace** de les **créer** des routes et de **gérer** les **données** des **requêtes** et **réponses**.

Avec ces connaissances, **vous êtes prêt à créer des applications web** plus avancées avec ExpressJS.

Dans le prochain chapitre nous allons nous **interesser aux middlewares**. Une des **fonctionnalité**s les plus **importantes** de la libraire.

---

### Aller plus loin

[Précédent: ExpressJS: Introduction](https://djemaisamy.com/posts/1.expressjs-introduction.article)

[Suivant: ExpressJS: Les middlewares](https://djemaisamy.com/posts/3.expressjs-middlewares.article)
