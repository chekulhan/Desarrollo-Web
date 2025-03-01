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
