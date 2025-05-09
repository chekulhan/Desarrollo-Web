
# SQLite
https://sqlite.org/

![SQL Lite View](../../x-assets/UF1845/sqliteviewer.png)

SQLite Browser:
- https://sqliteviewer.app/
- https://beta.sqliteviewer.app/
- https://chromewebstore.google.com/detail/visualizador-de-base-de-d/iclckldkfemlnecocpphinnplnmijkol
- https://workspace.google.com/marketplace/app/sqlite_viewer_with_google_drive/298830041920?hl=es

Docker - to do
https://hub.docker.com/r/keinos/sqlite3


## Actividad - miembros de un gimnasio
El objectivo de esta tarea es construir unos comandos de SQL (DML) para generar 2 informes para un gimnasio, sobre sus miembros o socios. Al hacerlo, habrá que cargar la base de datos con datos de usuarios (INSERT).


```sql
-- Tabla de miembros del gimnasio
CREATE TABLE miembros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID único para cada miembro
  nombre TEXT NOT NULL,                  -- Nombre del miembro
  email TEXT UNIQUE NOT NULL,            -- Correo electrónico único
  telefono TEXT,                         -- Número de teléfono
  fecha_registro DATE NOT NULL,          -- Fecha de registro del miembro
  tipo_membresia TEXT NOT NULL,          -- Tipo de membresía (Ej: Mensual, Anual)
  fecha_expiracion DATE,                 -- Fecha de expiración de la membresía
  ultima_asistencia DATE,                -- Fecha de la última vez que asistió al gimnasio
  activo BOOLEAN NOT NULL DEFAULT 1      -- Estado si el miembro está activo (1 = activo, 0 = inactivo)
);
```

Crear un sistema para sacar 2 informes usando comandos de SQL a partir de la tabla de miembros.

Reporte de miembros activos e inactivos:
- Mostrar los miembros que están activos y los que están inactivos (según el campo activo).

Reporte de miembros que no han asistido en un mes:
- Mostrar los miembros cuya ultima_asistencia es anterior a un mes (considerando la fecha actual).



## Actividad - extra
Hacer un ReactJS interfaz para la gestion de usuarios con sqlite.



## Respuestas

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


```sql
SELECT id, nombre, email, ultima_asistencia
FROM miembros
WHERE ultima_asistencia < DATE('now', '-1 month') OR ultima_asistencia IS NULL;
```
