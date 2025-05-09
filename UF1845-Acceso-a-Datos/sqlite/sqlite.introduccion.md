

SQLite Browser:
- https://sqliteviewer.app/
- https://chromewebstore.google.com/detail/visualizador-de-base-de-d/iclckldkfemlnecocpphinnplnmijkol
- https://workspace.google.com/marketplace/app/sqlite_viewer_with_google_drive/298830041920?hl=es

## Actividad
Hacer un ReactJS interfaz para la gestion de usuarios con sqlite.



## Respuesta

```js

import express from 'express';
import cors from 'cors';
import {
  createTable,
  addUser,
  listUsers,
  updateUser,
  deleteUser,
} from './userModel.js';

const app = express();
const port = 4000;

createTable();
app.use(cors());
app.use(express.json());

// GET all users
app.get('/users', (req, res) => {
  listUsers((err, users) => {
    if (err) return res.status(500).send(err.message);
    res.json(users);
  });
});

// POST add user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  addUser(name, email, (err, id) => {
    if (err) return res.status(400).send(err.message);
    res.json({ id });
  });
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const { name } = req.body;
  updateUser(req.params.id, name, (err, changes) => {
    if (err) return res.status(400).send(err.message);
    res.json({ updated: changes });
  });
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  deleteUser(req.params.id, (err, changes) => {
    if (err) return res.status(400).send(err.message);
    res.json({ deleted: changes });
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

```