# Cómo separar un servidor Express por rutas usando Express Router

1. Estructura
```bash
project/
│
├── server.js          <-- Archivo principal del servidor
├── routes/            <-- Carpeta donde van las rutas
│   ├── users.js       <-- Rutas relacionadas con usuarios
│   └── products.js    <-- Rutas relacionadas con productos
```

2. server.js (punto de entrada principal)

```javascript
import express from 'express';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';

const app = express();
app.use(express.json());

// Montar rutas
app.use('/users', usersRouter);
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

```

3. routes/users.js (rutas para usuarios) o productos

```javascript

import { Router } from 'express';
const router = Router();

// GET /users
router.get('/', (req, res) => {
  res.send('Lista de usuarios');
});

// POST /users
router.post('/', (req, res) => {
  res.send('Crear un nuevo usuario');
});

export default router;

```


Cuando ejecutas tu servidor, las siguientes URLs funcionarán automáticamente:

- GET /users → responde con "Lista de usuarios"

- POST /users → responde con "Crear un nuevo usuario"

- GET /products → responde con "Lista de productos"

- POST /products → responde con "Crear un nuevo producto"
