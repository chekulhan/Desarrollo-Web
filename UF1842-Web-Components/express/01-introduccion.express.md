# Express

## Historia

## Configuración 
[Express NPM](https://www.npmjs.com/package/express)

```bash
npm init -y
npm install express
```

Modificar el package file para usar ESM - ESModules y incorporar un npm scripts
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node index.js" 
  },
  "type": "module"
```

**Index.js file**
```javascript
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```


**Ejemplo completo de package.json**
```json
{
  "name": "project-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2"
  }
}


```

## Nodemon

```bash
npm install --save-dev nodemon
```

Agregar la configuración de nodemon al 'dev' de package.json:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
```

Ahora, se puede ejecutar el servidor con:
```bash
npm run dev
```

**How devDependencies work:**
- dependencies: These are packages that your app needs to run in production. For example, Express, MongoDB, etc.
- devDependencies: These are packages you need only for development purposes. For example, nodemon, testing libraries, build tools, etc. These dependencies are not installed in the production environment when you run npm install --production.

# Actividad
Crear una route para tu aplicación /faq. Al acceder a la página, enviará HTML directamente al nevegador con información en formato FAQ. Por ejemplo:

```javascript
 res.send('<html><head>...<body><h1>FAQ</h1><p><strong>¿Qué es ...</strong></p></body>');
 ```