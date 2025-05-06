# NPM
npm-check-updates (ncu) es una herramienta que permite detectar y actualizar las dependencias de un proyecto Node.js a sus últimas versiones disponibles, incluso si esas versiones están fuera del rango definido en el archivo package.json.

A diferencia de npm install, que respeta los rangos de versiones ya escritos, ncu te muestra qué hay de nuevo y actualiza esos rangos si lo deseas.

El objetivo principal de npm-check-updates es ayudarte a mantener actualizadas las dependencias de tu proyecto de forma segura y controlada, sin necesidad de hacerlo manualmente.

```bash
npm install npm-check-updates --save-dev
npx npm-check-updates
npx npm-check-updates -u    // Para actualizar el package.json con las versiones más recientes
npm install     // Finalmente, instala las nuevas versiones
```




# Docker

https://www.youtube.com/watch?v=AquOM-ISsnA&list=PLQhxXeq1oc2n7YnjRhq7qVMzZWtDY7Zz0&index=1


```bash
docker pull node:alpine

docker images
docker inspect node:alpine

docker run -it node:alpine sh

docker ps
docker ps -a

docker stop <container_id_or_name>
docker rm <container_id_or_name>

```

Ejecutar un contenedor de nuevo:
```bash
docker run -it --name nodejs node:alpine sh     // crear el contenedor con un nombre

docker ps
docker start <container_id_or_name>
docker exec -it <container_id_or_name> sh

```



# Configurar una aplicacion web con express en el contenedor


docker run -it -p 3000:3000 --name nodejs node:alpine sh
docker cp app.js nodejs:/home/node/app/app.js

docker start nodejs
docker exec -it nodejs sh


mkdir home/node/app - go to node dir and add a app folder
npm init -y
npm install express

/home/node/app # node app.js

Ahora acceder a  http://localhost:3000/ desde tu ordenador.


```js
// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send the "Hello, World!" message as a response
});

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```






# Build una aplicacion de express

Crear una aplicacion básica de express llamado *my-express-app* disponible el puerto 3001.

Confirmar antes que todo funciona ejecutando un *npm start*.
```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js"  
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  }
}

```

index.js
```js
// Import the Express library
import express from "express";

// Create an Express app
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

```

Colocar .dockerignore y Dockerfile en el mismo directorio.

```bash
docker build -t my-express-app .

docker run -d -p 3001:3001 --name my-express-app my-express-app
```
