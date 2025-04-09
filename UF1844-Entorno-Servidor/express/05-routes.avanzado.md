# Cómo separar un servidor Express por rutas usando Express Router

1. Estructura
```bash
project/
│
├── index.js           <-- Archivo principal del servidor (o server.js)
├── db.js              <-- Instanciar la base de datos
├── routes/            <-- Carpeta donde van las rutas
│   ├── users.js       <-- Rutas relacionadas con usuarios
│   └── products.js    <-- Rutas relacionadas con productos
│   └── coches.js      <-- Rutas relacionadas con coches
```

2. index.js o server.js (punto de entrada principal)

```javascript
import express from 'express';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';

const app = express();
app.use(express.json());

// Montar rutas
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

```

3. routes/users.js (rutas para usuarios) o productos. Fijáte que estamos importando el codigo para instanciar una base de datos. Y ahora, en lugar de *app.get()* o *app.post*, le llamamos *route.get()* o *route.post()*.

```javascript

import { Router } from 'express';
import db from '../db.js';  // importar PouchDB
const router = Router();

// GET /api/v1/users
router.get('/', (req, res) => {
  res.send('Lista de usuarios');
});

// POST /api/v1/users
router.post('/', (req, res) => {
  res.send('Crear un nuevo usuario');
});

export default router;

```

4. Separar la base de datos en **db.js**

```jsx
import path from 'path';
import { fileURLToPath } from 'url';
import PouchDB from 'pouchdb';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a path to the local "data" directory
const dataDirectory = path.join(__dirname, 'data');

// Use the prefix config for PouchDB to store data in "data" folder
const db = new PouchDB(path.join(dataDirectory, 'tienda')); // 'tienda' is your database name

export default db;
```

Cuando ejecutas tu servidor, las siguientes URLs funcionarán automáticamente:

- GET /users → responde con "Lista de usuarios"

- POST /users → responde con "Crear un nuevo usuario"

- GET /products → responde con "Lista de productos"

- POST /products → responde con "Crear un nuevo producto"


## Ejemplo completo de routes/users.js

```jsx
import { Router } from 'express';
import db from '../db.js';  // importar PouchDB

const router = Router();

// GET /api/v1/users
router.get('/', async (req, res) => {
    try {
        // Fetch all documents from the 'users_db'
        const result = await db.allDocs({ include_docs: true });
        console.log(result);
        
        // Filter the users if 'type' is used in the document
        const users = result.rows
          .filter(row => row.doc.type === 'user')  // Ensure the document type is 'user'
          .map(row => row.doc);  // Map to get the document content
  
  
        // Extract user data from the documents
        //const users = result.rows.map(row => row.doc);
  
        // Send the users as JSON response
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
  });


router.post('/api/v1/users', async (req, res) => {
    try {
        console.log("POSTING")
        const user = req.body; // User data from request body
        user.type = 'user'; // diferenciar los documentos
        console.log(user);
        // Insert new user into the database
        const response = await db.post(user);
  
        // response devuelve un objeto con atributos id y rev
        
        // Respond with success
        res.status(201).json({ id: response.id, ...user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user' });
    }
  });
  
router.put('/api/v1/users', async (req, res) => {
    try {
        console.log("Putting");
        const { _id, _rev, nombre, edad } = req.body;
  
        const updatedUser = {
          _id, 
          _rev, 
          nombre, 
          edad,
          type: 'user'  // diferenciar el documento
        };
        
        console.log(updatedUser);
        // Insert new user into the database
        const response = await db.put(updatedUser);
  
        // Respond with success
        res.json({
          message: 'User updated successfully',
          id: response.id,
          rev: response.rev
        });
  
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to update user' });
    }
  });
  
router.delete('/api/v1/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;  // Get the user ID from the URL parameter
  
      // Fetch the document using the user ID to get the current revision
      const user = await db.get(userId);
      console.log(user);
  
      // Remove the document from the database
      await db.remove(user);
  
      // Respond with success
      res.status(200).json({ message: 'User deleted successfully', id: userId });
    } catch (error) {
      // Handle errors (e.g., document not found)
      if (error.name === 'not_found') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Failed to delete user' });
      }
    }
  }); 
  
  
router.get('/api/v1/users/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const user = await db.get(id);
        
        res.json(user);

    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

export default router;
```