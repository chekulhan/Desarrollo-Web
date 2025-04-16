
# Seguridad con express.validator
(requisitos: Deberias haber hecho la clase sobre calidad de software)

```bash
npm install express-validator
```

Vamos a crear una función de validación para usuarios como middleware en nuestra aplicación. Para organizar el código, primero crearemos un nuevo directorio llamado "middleware" donde colocaremos los archivos necesarios.

La función de validación se aplicará a la ruta de validate, y verificaremos que la URL esté estructurada correctamente, como sigue:

- Ruta válida:
http://localhost:5000/api/v1/users/validate/10 — Esta ruta será aceptada si el ID proporcionado es correcto.

- Ruta inválida:
http://localhost:5000/api/v1/users/validate/abc — En este caso, el ID no es válido y la solicitud debería ser rechazada.

Con esta implementación, aseguramos que solo se procesen solicitudes con IDs válidos, lo que mejora la integridad de los datos de la aplicación.

1. Crear una ruta validate que acepta un parametro de params y comprobamos que funciona primero, antes de meter middleware

```js

router.get('/validate/:id', async (req, res) => {

  const {id} = req.params;

  const result = {message: "correct"};
  res.json(result);

});

```

2. Crear middleware/users.js para validar el paramétro

```js
import { param, validationResult } from 'express-validator';

/**
 * Middleware to validate the 'id' parameter in the request.
 * @function validateUserId
 * @returns {Array} Array of express-validator validation chain
 */
export const validateUserId = [
    param('id')
      .isInt({ min: 1 }).withMessage('El ID debe ser un número entero positivo'),  // Ensures 'id' is a positive integer
  
    // Middleware to handle validation results
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });  // Send validation errors as response
      }
      next();  // Continue if validation passes
    }
  ];
  
```

3. Incluirlo en la ruta de express:

```javascript
import { validateUserId } from '../middleware/users.js';

router.get('/validate/:id', validateUserId, async (req, res) => {

  const {id} = req.params;

  const result = {message: "correct"};
  res.json(result);

});

```

Para gestionar los errores en ReactJS, se podria emplear algo asi, ya que la respuesta devuelve un HTTP 400.

```jsx
const response = await fetch(`/users/${id}/${username}`);
      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errores || []);
        return;
      }
```


## Actividades

Aplicar la validación a Users o Coches:

```js
 param('id')
    .isUUID(4).withMessage('El ID debe ser un UUID válido (v4)'),  // Ensure 'id' is a valid UUID v4
```

Modificar la ruta validate para incorporar las validaciones:
1. 
```js
param('age')
  .isInt({ min: 18, max: 99 }).withMessage('La edad debe estar entre 18 y 99')  
```

2. 
```js
param('isActive')
  .isBoolean().withMessage('El valor de "isActive" debe ser un booleano')  // Validate that 'isActive' is a boolean
```

3. 
```js
param('username')
  .isLength({ min: 3, max: 20 }).withMessage('El nombre de usuario debe tener entre 3 y 20 caracteres')  // Validate length of string 'username'
```

4. 
```js
param('email')
        .isEmail().withMessage('Debe ser un correo electrónico válido'),
```

## Logger
Vamos a implementar un middleware de registro (logger) que nos permitirá registrar información útil sobre cada solicitud que llegue a nuestro servidor. Esto es especialmente útil para depuración y monitoreo de aplicaciones en producción.

Primero, crearemos una función de middleware llamada logger, que se encargará de registrar en la consola detalles de cada solicitud entrante, como la fecha, el método HTTP utilizado y la URL solicitada.

```js
// Logger Middleware
export function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
```

Una vez que tenemos nuestro middleware de logger, necesitamos asegurarnos de que se ejecute para todas las solicitudes que lleguen a la aplicación. Esto se hace importando y registrando el middleware dentro de index.js (o el archivo principal de tu servidor).

Dentro de index.js, lo importamos y ejecutamos globalmente, es decir, para todas las rutas de nuestra aplicación:

```js
import {logger} from './middleware/logger.js';

app.use(logger);
```

Si quieres ejecutar para una ruta específica, usar:

```js
import { logger } from './middleware/logger.js';

// Solo se ejecuta en la ruta "/api/v1/users"
app.get('/api/v1/users', logger, (req, res) => {
  res.send('Lista de usuarios');
});
```

----

Include examples of more specific middleware, like iniciar session, logging, etc....


import express from 'express';

const app = express();

// Logger Middleware
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

// Authentication Middleware
function checkAuthentication(req, res, next) {
    const { auth } = req.query;
    if (auth !== 'true') {
        return res.status(401).send('Unauthorized: Please log in to view the profile');
    }
    next();
}

// Apply the logger middleware globally
app.use(logger);

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server! Use /profile to see user info (authentication required)');
});

// Profile Route with Authentication Middleware
app.get('/profile', checkAuthentication, (req, res) => {
    res.send('User Profile: John Doe, Age 30');
});

// Error Route (404)
app.get('/error', (req, res) => {
    res.status(404).send('Page Not Found');
});

// Custom 404 Middleware
app.use((req, res) => {
    res.status(404).send('Custom 404: The route does not exist');
});

// Start the Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
