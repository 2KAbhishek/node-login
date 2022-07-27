<div align = "center">

<h1><a href="https://2kabhishek.github.io/node-login">node-login</a></h1>

<a href="https://github.com/2KAbhishek/node-login/blob/main/LICENSE">
<img alt="License" src="https://img.shields.io/github/license/2kabhishek/node-login?style=flat&color=eee&label="> </a>

<a href="https://github.com/2KAbhishek/node-login/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/2kabhishek/node-login?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/2KAbhishek/node-login/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/2kabhishek/node-login?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/2KAbhishek/node-login/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/2kabhishek/node-login?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/2KAbhishek/node-login/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/2kabhishek/node-login?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/2KAbhishek/node-login/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/2kabhishek/node-login?style=flat&color=e06c75&label="> </a>

<h3>Simple Login Server 🔑🚪</h3>

<figure>
  <img src= "images/screenshot.png" alt="node-login Demo">
  <br/>
  <figcaption>node-login screenshot</figcaption>
</figure>

</div>

## What is this

A login API server written in `node.js` and `mongo` It is a simple login server, which can be used to handle authentication for a web app.

## Inspiration

Was exploring `ejs` and decided to build this.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   You have installed the latest version of `node` and `mongo`

## Getting node-login

To get node-login, follow these steps:

```bash
git clone https://github.com/2kabhishek/node-login
cd node-login
```

## Using node-login

### Setting Up Mongo

For using the app you will need a working MongoDB instance, you can use either MongoDB Atlas or a local instance.
To set the `MONGO_URI` env var use the following command.

```sh
export MONGO_URI="mongodb+srv://username:password@db-location"
```

### Setting Up Node

You will need to have a working version of Node and npm installed on your system.

After that you can run the following command to install the required packages.

```sh
npm install
```

Running The Server

To run the server execute the following command

```sh
node server.js
```

### Web Application Access Instruction

After running the server, open up your web browser and go to this url to access the Web App.

[http://localhost:3000](http://localhost:3000)

## How it was built

node-login was built using `neovim, node, mongo, express` among others.

## Challenges faced

-   Setting up MongoDB locally was a bit tricky, using docker or Atlas is recommended.

## What I learned

-   Explored `ejs`
-   Setup a basic session manager.

Hit the ⭐ button if you found this useful.

## More Info

<div align="center">

<a href="https://github.com/2KAbhishek/node-login">Source</a> | <a href="https://2kabhishek.github.io/node-login">Website</a>

</div>
