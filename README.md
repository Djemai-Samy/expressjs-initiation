# 1/ ExpresJS: Introduction

## [Page officiel du cours ExpressJS: Initiation](https://djemai-samy.com/posts/1.expressjs-introduction.article)

![Image du cours: ExpresJS: Introduction](https://djemai-samy.com/blog/2.programmation/2.server/4.expressjs/0.expressjs-initiation/1.expressjs-introduction/1.expressjs-introduction.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Dans ce chapitre, nous allons découvrir ce qu'est ExpressJS, explorer les fonctionnalités clés d'ExpressJS et comprendre pourquoi il est si largement utilisé dans le développement web.

Nous allons aussi installer et configurer un projet basique avec ExpressJS.

---

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.expressjs-initiation)

1. [ExpressJS: Introduction](https://djemai-samy.com/posts/1.expressjs-introduction.article)
2. [ExpressJS: Les Routes](https://djemai-samy.com/posts/2.expressjs-routes.article)
3. [ExpressJS: Les middlewares](https://djemai-samy.com/posts/3.react-middlewares.article)

---

## Branches

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale etcomplet de l'article:

- [main](https://github.com/Djemai-Samy/expressjs-initiation)
- [1-introduction](https://github.com/Djemai-Samy/expressjs-initiation/tree/1-introduction)
- [2-routes](https://github.com/Djemai-Samy/expressjs-initiation/tree/2-routes)
- [3-middlewares](https://github.com/Djemai-Samy/expressjs-initiation/tree/3-middlewares)

---

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

1. **Comprendre** ce qu'est **ExpressJS** et **pourquoi** il est **utilisé** dans le **développement web**.
2. **Identifier** les **fonctionnalités clés** d'ExpressJS
3. **Savoir** comment **ExpressJS** peut **améliorer** l'**efficacité** du **développement web**.
4. **Savoir configuer** et **lancer** une **application** ExpressJS.

---

## Mise en place de l'environnement

Vous pouvez commencer à suivre le cours en clonant le branche **main**:

```bash
git clone https://github.com/Djemai-Samy/expressjs-initiation.git
```

```bash
cd ./expressjs-initiation
```

```bash
npm install
```

```bash
npm run dev
```

---

## Déscription

**ExpressJS** est une **librairie JavaScript open-source** pour la **création** d'applications web.

Elle est **utilisée** pour la **création** de **serveurs web**, la **gestion** des **routes** et des **middleware**, la **génération de vues dynamiques**...

**ExpressJS** est **largement utilisé** dans le **développement web** pour sa **simplicité**, et sa **flexibilité**.

## Prérequis

Pour **suivre** ce chapitre, vous devez **avoir** une bonne **compréhension** du **langage JavaScript** et des **connaissances** de base en **développement web**, y compris la **création** de sites web **statiques** et **dynamiques**:

1. [**_Initiation au language Javascript_**](https://djemai-samy.com/posts/0.javascript-initiation)
2. [**Initiation à la programmation serveur avec NodeJS.**](https://djemai-samy.com/posts/0.nodejs-initiation)

Pour **installer ExpressJS**, vous devez d'abord **installer Node.js**, qui est une **plateforme logicielle** basée sur **JavaScript**.

Node.js est **utilisé** pour **exécuter** du **code JavaScript** côté **serveur**:

[**Tutoriel pour installer NodeJS sur une machine.**](https://djemai-samy.com/posts/1.nodejs-introduction.article#Comment installer Node.js ?)

## Qu'est-ce qu'ExpressJS ?

**ExpressJS** est **devenu** l'une des **librairies** les **plus populaires** pour la **création** d'**applications web**, en grande partie en raison de sa **simplicité** et de sa **flexibilité**.

La **librairie** s'appuie sur les **fonctionnalités** de base du **module** `http` de **Node.js** et permet aux développeurs de **construire** des applications web **rapidement** et **facilement** en utilisant des **outils** et des **méthodes** simples et bien **documentées**.

**ExpressJS** fournit également un ensemble de **middleware intégrés** pour la **gestion** des **requêtes** et des **réponses** `HTTP`, ainsi que la possibilité d'**implémenter** des **middlewares personalisés**.

---

## Pourquoi utiliser ExpressJS ?" level={0}>

Voici les **fonctionnalités clés** d'ExpressJS :

- **Gestion des routes** : ExpressJS permet aux développeurs de **définir des routes** pour leurs applications web en **utilisant des méthodes HTTP** telles que `GET`, `POST`, `PUT`, `DELETE`, etc.

- **Middleware** : ExpressJS fournit un ensemble de **middleware intégrés** pour la **gestion** des **requêtes** et des **réponses** `HTTP`.
  Les développeurs **peuvent** également **créer** leur propre **middleware personnalisé**.

- **Gestion des templates** : ExpressJS prend en charge un certain nombre de **moteurs de templates** pour **générer** des **vues dynamiques** pour les applications web.

- **Gestion des erreurs** et **des exceptions** : ExpressJS permet aux développeurs de **gérer** les **erreurs** et les **exceptions** de manière centralisée pour **améliorer** la qualité de l'application et **faciliter** la maintenance.

- **Sécurité** : ExpressJS fournit une **série d'outils** pour **améliorer la sécurité** de l'application, notamment la **gestion des cookies** et des **sessions utilisateur**, la **validation** des **entrées utilisateur**, etc.

---

## Installationd'ExpressJS

### 1. Initialiser un projet npm

Avant de pouvoir **installer les librairies nécessaires**, nous devons d'abords **initialiser un projet NodeJS**.

Pour **initialiser** un projet avec **NodeJS**, ouvrez une **console de commande** dans le **répertoire désiré** et **entrez** la \*_commande_ suivante\* :

```bash
npm init
```

Une **série de questions** sera **affichée** dans le **terminal** pour **configurer** votre projet, ensuite **vérifiez** que le fichier `package.json` a bien été **créé**.

---

### 2. Installer ExpressJS

Vous pouvez maintenant **installer ExpressJS** en utilisant le **gestionnaire de paquets** `npm` (Node Package Manager), **inclus** avec **Node.js**.

Il suffit de **lancez** dans **console** la **commande suivante** :

```bash
npm install express
```

---

## Lancer le serveur

Maintenant que la **librairie** est **installée**, nous pouvons **implémenter** le **script** qui **lancera le serveur** `HTTP` sur le **port désiré**.

**Créer** un **fichier** dans le **répertoire**.

Par **convention**, nous allons **nommée** le **fichier**: `app.js`:

```js
const express = require("express");
const app = express();

app.listen(3001, function () {
	console.log("Serveur lancé sur le port 3001!");
});
```

Vous pouvez maintenant **executer** le **script** en **lançant** dans **console** la **commande suivante** :

```bash
node app.js
```

---

### Configurer le projet" level={0}>

### Utiliser les modules

Si vous voulez **utiliser** les **modules Javascript** pour les **imports** et **exports**, vous pouvez **ajouter** à la **racine du fichier** `package.json`:

```json
"type":"module"
```

Vous pouvez maintenant **importer** `express` dans votre **script** de cette manière:

```js
import express from "express";
```

---

### Nodemon

Lorsque vous **développez** une application **Express.js**, vous **écrivez** généralement du code dans des **fichiers JavaScript** qui sont ensuite **exécutés** à l'aide de **Node.js**.

Lorsque vous **apportez** des **modifications** à ces fichiers, vous devez **redémarrer manuellement** le serveur Node.js pour **voir les changements**.

Cela peut être **fastidieux**, surtout si vous apportez **fréquemment des modifications** à votre code.

Nodemon est un **outil** qui **facilite le développement** d'applications Node.js en **surveillant** les **modifications** de fichiers dans un projet et en **redémarrant automatiquement** l'application lorsque des **modifications sont détectées**.

Cela vous permet de **gagner** du temps et d'**augmenter** votre **productivité** en vous **évitant** de devoir **redémarrer** le serveur **manuellement** à chaque **modification**.

Pour **utiliser** `nodemon` avec **Express.js**, vous pouvez simplement **installer** Nodemon en tant que **dépendance de développement** dans votre projet.

```bash
npm install nodemon --save-dev
```

Puis **remplacer** la **commande** `node` par `nodemon` pour **exécuter** votre application.

```bash
npx nodemon app.js
```

---

### Scripts

Lorsque vous travaillez avec Node.js et `npm` (le gestionnaire de paquets de Node.js), vous **utilisez** souvent un **fichier** appelé `package.json` pour **décrire** les **dépendances** de votre **projet**, sa version, etc.

Mais vous pouvez également y **ajouter** des **scripts personnalisés** pour **automatiser** certaines **tâches courantes** ou **complexes**.

**Les scripts personnalisés** sont des **commandes** que vous pouvez **exécuter** via la commande `npm run [nom du script]` dans le **terminal**.

Ils sont **utiles** pour **automatiser** des **tâches** telles que la **compilation** de code, l'**exécution** de **tests**, la **génération** de documentation, la **configuration** de l'environnement de développement, etc.

Nous pouvons par exemple **ajouter** deux **script personnalisés** afin de **lancer** le serveur en **mode développement** avec `nodemon`, et de **lancer** le serveur en **mode production** avec `node`.

Voici le fichier complet:

```json
{
	"name": "expressjs-initiation",
	"version": "1.0.0",
	"type": "module",
	"scripts": {
		"start": "node server.js",
		"dev": "nodemon server.js"
	},
	"dependencies": {
		"express": "^4.17.1"
	},
	"devDependencies": {
		"nodemon": "^2.0.21"
	}
}
```

Vous pouvez maitenant **executer** cette **commande** pour **lancer** le serveur en **mode developpement**:

```json
npm run dev
```

Et **executer** cette **commande** pour **lancer** le serveur en **mode production**:

```json
npm start
```

---

## Conclusion

En résumé, dans ce chapitre, nous avons vu comment **installer** et **configurer** une application **ExpressJS**, ainsi que la **gestion** des **dépendances** avec `npm`.

Dans le prochain chapitre, nous allons **explorer** les **fonctionnalités de base d'ExpressJS**, notamment la **gestion des routes**, des **requêtes/réponses**, et les **paramètres d'URL**.

---

### Aller plus loin

[Précédent: NodeJS: Initiation](https://djemaisamy.com/posts/0.nodejs-initiation)

[Suivant: ExpressJS: Les routes](https://djemaisamy.com/posts/2.expressjs-routes.article)
