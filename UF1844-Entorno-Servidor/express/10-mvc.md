# MVC
El patrón de diseño MVC (Modelo-Vista-Controlador) es una forma de organizar aplicaciones de manera estructurada, separando las responsabilidades en tres componentes principales:

**1. Modelo (Model)**
El modelo es la capa encargada de gestionar la lógica de los datos de la aplicación. Aquí se manejan las operaciones que interactúan con la base de datos, como crear, leer, actualizar y eliminar (CRUD).

Responsabilidades del modelo:

Definir la estructura de los datos.

Interactuar con la base de datos.

Validar datos antes de ser almacenados.

Ejemplo: Imagina un modelo de usuario que define cómo almacenar los datos de los usuarios en una base de datos.

**2. Vista (View)**
La vista es la capa que se encarga de mostrar la información al usuario y de recibir sus interacciones. Aquí no se realiza ningún procesamiento de datos, solo se presenta la información que proviene del controlador.

Responsabilidades de la vista:

Mostrar los datos que le llegan desde el controlador.

Permitir que el usuario realice interacciones (como clics en botones o envío de formularios).

Ejemplo: Si estás trabajando en una interfaz web, la vista podría ser una página HTML que muestra la lista de usuarios obtenida desde el modelo.

**3. Controlador (Controller)**
El controlador actúa como intermediario entre el modelo y la vista. Es responsable de recibir las solicitudes del usuario (por ejemplo, cuando el usuario hace clic en un botón), procesarlas, obtener o modificar los datos a través del modelo y, finalmente, enviar la respuesta adecuada a la vista.

Responsabilidades del controlador:

Recibir las peticiones del usuario (por ejemplo, desde un formulario o clics en botones).

Realizar las acciones correspondientes en el modelo (por ejemplo, obtener o guardar datos).

Enviar la información al cliente a través de la vista.

Ejemplo: Si un usuario quiere ver una lista de usuarios, el controlador recibe esa solicitud, obtiene los usuarios del modelo y luego pasa esos datos a la vista para ser mostrados.

```
📦 mi-proyecto/
├── 📁 controllers/
│   └── userController.js        # Lógica de negocio (recibe req/res y usa el modelo)
├── 📁 models/
│   └── userModel.js             # Funciones que interactúan con la base de datos
├── 📁 routes/
│   └── userRoutes.js            # Define las rutas y conecta con los controladores
├── 📁 db/
│   └── db.js                    # Configuración y conexión a PouchDB
├── 📁 views/                    # (opcional) Archivos de vista si usas plantillas
├── 📁 public/                   # (opcional) Archivos estáticos como imágenes o CSS
├── 📄 server.js                 # Punto de entrada: configura Express y monta rutas
├── 📄 package.json              # Dependencias y scripts del proyecto
└── 📄 .env                      # Variables de entorno (si usas dotenv)
```

## Flujo de trabajo en MVC:
El usuario interactúa con la vista: Por ejemplo, hace clic en un botón para obtener la lista de usuarios.

La vista envía una solicitud al controlador: El controlador maneja la lógica de esa solicitud.

El controlador consulta el modelo: El controlador obtiene los datos del modelo (por ejemplo, una lista de usuarios de la base de datos).

El controlador pasa los datos a la vista: El controlador devuelve los datos al cliente a través de la vista.

La vista muestra los datos: Los datos obtenidos se muestran al usuario.

## Pasos para implementar MVC en una aplicación Express con Node.js:
Crear el modelo: Definir cómo se manejarán los datos, por ejemplo, cómo se almacenarán y se recuperarán desde la base de datos.

Crear el controlador: Crear funciones que manejen las solicitudes del usuario, llamen al modelo y pasen la información a la vista.

Configurar las rutas: Definir las rutas que el servidor escuchará, y asignarlas a las funciones del controlador correspondientes.

Configurar la vista (si aplica): Si tu aplicación es web, utilizar plantillas para renderizar HTML, o enviar respuestas JSON si es una API.

Modelo - /models/userModel.js

```jsx
import db from '../db.js';  // importar PouchDB
const DOC_TYPE = "user";  

// Function to create a new user
const createUser = async (userData) => {
    const user = {
        type: DOC_TYPE,  // Distinguishes this doc as a 'user'
        ...userData,
    };
    const response = await db.post(user); // let PouchDB generate the _id
    return { _id: response.id, _rev: response.rev, ...user,  };
  };
  
  // Function to get all users
  const getUsers = async () => {
    const result = await db.allDocs({ include_docs: true });
    return result.rows
        .map(row => row.doc)
        .filter(doc => doc.type === DOC_TYPE);
  };
  
export { createUser, getUsers };

```

Controlador - /controllers/userController.js

```jsx
import { createUser, getUsers } from '../models/userModel.js';

// Controller to create a new user
const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);  // Call model function
    res.status(201).json(user);  // Send the created user back
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Controller to get all users
const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();  // Call model function
    res.status(200).json(users);  // Send users back
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

export { createUserController, getUsersController };

```

Routes - /routes/userRoutes.js

```jsx
import express from 'express';
import { createUserController, getUsersController } from '../controllers/userController.js';

const router = express.Router();

// Route to create a new user
router.post('/users', createUserController);

// Route to get all users
router.get('/users', getUsersController);

export default router;
```

Index.js
```jsx
import express from "express";
import path from "path";
import cors from 'cors';
import { fileURLToPath } from "url";

import userRouter from './routes/userRoutes.js';  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Montar rutas
app.use('/api/v1', userRouter);


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```


## Actividad
**🔧 Implementación de una arquitectura MVC para la gestión de eventos**

Vamos a construir una aplicación siguiendo el patrón MVC (Modelo - Controlador - Ruta) para gestionar eventos. Deberás implementar cada una de las capas según la guía proporcionada, asegurándote de mantener una separación clara de responsabilidades:

- Modelo: interacción con la base de datos PouchDB

- Controlador: lógica de negocio y validaciones

- Ruta: definición de endpoints y conexión con el controlador

El objetivo es crear una base sólida y escalable que permita realizar operaciones CRUD sobre eventos. 

*Sugerencia: Crear un POST y un GET primero, y posteriormente añadir los demás operaciones CRUD*

**Estructura**
```
mi-app-eventos/
├── controllers/
│   └── eventController.js
├── models/
│   └── eventModel.js
├── routes/
│   └── eventRoutes.js
├── db/
│   └── db.js
├── index.js (o server.js)
├── package.json
```

Ejemplo de un documento en la base de datos
```json
{
  _id: "2025-04-18T14:30:00.000Z", // ISO string
  title: "React Workshop",
  date: "2025-04-25",
  location: "Online",
  description: "Live coding session on hooks.",
  isOnline: true
}
```


