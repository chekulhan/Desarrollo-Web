
# Actividad: ¡Conviértete en Product Owner por un día!
Vas a usar tu imaginación y ponerte en lugar de un product owner.

Revisar algunas actividades del product owner: https://www.europeanscrum.org/uploads/2/4/5/1/24513648/gui%CC%81a_oficial_product_owner_2024.v1.0_-_europeanscrum.org.pdf


Imaginación en marcha: Vas a usar tu imaginación y ponerte en el lugar de un Product Owner, la persona encargada de definir qué necesita el producto para mejorar la experiencia del usuario.

Analiza el producto actual: Observa el sitio web actual (por ejemplo, tu app de gatos rebotando). Piensa:

- ¿Qué hace bien esta app?

- ¿Qué podría hacer para ser más divertida, útil o viral?

**Propón una funcionalidad nueva y implementarla:**
Escribe una idea clara para una funcionalidad nueva. Explica:

- ¿Qué hace?

- ¿Quién la usaría?

- ¿Cómo mejora la experiencia?

Hay 2 partes a continuación, la página y el CSS:

/pages/CatBouncePage.jsx

```jsx
import React, { useState } from "react";
import "./CatBounce.css";

const catUrl = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";

export default function CatBouncePage() {
  const [cats, setCats] = useState(generateCats(5));

  function generateCats(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + "%",
      duration: Math.random() * 2 + 1.5 + "s"
    }));
  }

  function addCat() {
    setCats((prev) => [
      ...prev,
      {
        id: prev.length,
        left: Math.random() * 90 + "%",
        duration: Math.random() * 2 + 1.5 + "s"
      }
    ]);
  }

  return (
    <div className="container">
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={catUrl}
          alt="bouncing cat"
          className="cat"
          style={{ left: cat.left, animationDuration: cat.duration }}
        />
      ))}
      <button onClick={addCat} className="add-button">Add Cat</button>
    </div>
  );
}

```

/pages/CatBounce.css

```css
.container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #cce4f7;
  }
  
  .cat {
    position: absolute;
    width: 80px;
    animation-name: bounce;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 200px;
    }
  }
  
  .add-button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #e75480;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .add-button:hover {
    background-color: #d03d6b;
  }
```

# Actividad: bcrypt

Queremos terminar este programa, preguntando al usuario por su contraseña, y mostrando un mensaje con la contraseña codificado usando bcrypt. Por ejemplo, "Hemos registrado el usuario jon. La contraseña es $2b$10$Xh21eJ6osoOMUnzcfpwLK.eKC1tPoa./L.Cz7mweH/EsHyozLcY9S"

```js
import prompt from 'prompt-sync';

const input= prompt();

const username = input("Introducir un nombre de usuario:");
```

Puedes extender este ejemplo para guardar los datos en un archivo de texto. Como no es un servidor web, se podria usar la version sincrona del módule fs, writeFileSync o appendFileSync.


# Actividad: Criterios de Aceptación
Los **criterios de aceptación** son condiciones específicas que deben cumplirse para que una funcionalidad o característica del sistema se considere completa y aceptable para el cliente o usuario final.

Las Pruebas de Aceptación del Usuario (UAT) son una parte crucial del proceso de desarrollo de software. Estas pruebas se centran en verificar que la aplicación funcione correctamente desde la perspectiva del usuario final. El objetivo principal es asegurarse de que el software cumpla con los requisitos y expectativas del cliente antes de que se libere para su uso.

En resumen, UAT verifica que el sistema haga lo que el usuario espera y cómo lo espera.

Ambos están conectados, pero los criterios de aceptación son parte de la planificación, mientras que las pruebas de aceptación del usuario son la validación final.

El estándar **Gherkin** utilizado en Behavior Driven Development (BDD), que es un enfoque común para escribir criterios de aceptación. El formato Dado, Cuando, Entonces es utilizado para describir los criterios de aceptación de una manera clara y estructurada.

Crear un programa, usando prompt-sync y nodejs para cumplie los siguientes criterios de acceptación:

```gherkin
Dado que el usuario ingresa USD de "50",
Cuando la tasa de conversión es "1 USD = 0.85 EUR",
Entonces el programa debe mostrar "42.5 EUR."

Cuando el usuario ingresa un valor no numérico,
Entonces el programa debe mostrarles un mensaje de error.
```

Este escenario sigue la estructura Given-When-Then:
- Given (Dado): Establece el contexto inicial, en este caso, el usuario ingresa "50 USD".
- When (Cuando): Describe la acción o evento, que es la conversión de divisas con una tasa de "1 USD = 0.85 EUR".
- Then (Entonces): Define el resultado esperado, que es que el sistema devuelva "42.5 EUR".

Convertir esta función en un RESTAPI endpoint, por ejemplo, /convertir y crear una página de REACTJS para ejecutarlo y mostrar el resultado.


# Actividad: Generador de HTML

Aprovecharemos el módulo prompt-sync para generar una página de HTML. El usuario, a través de la linea de comandos, contestará a 3 preguntas (título de la página, autor, contenido) y el programa generará un nuevo archivo index.html. Usar fs.writeFile(), que es asíncrono.

Recibes este información de tu product owner. ¿Cómo se llama cada uno y para que se usen?

1. Como desarrollador frontend,
  quiero generar rápidamente un archivo HTML básico
  para que pueda comenzar a prototipar un sitio web estático.

2. Dado que el usuario introduce un título, un autor y un contenido para el cuerpo,
  Cuando confirma los datos,
  Entonces el programa debe crear un archivo llamado index.html con esa información en una estructura HTML básica.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Raul">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer generador de HTML</title>
</head>
<body>
    <h1>Mi primer generador de HTML</h1>
    <p>Eso es el contenido que va a aparecer por primera vez</p>
    <footer><small>Created by Raul</small></footer>
</body>
</html>
```



### Event Loop

https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62

### TDD

https://www.youtube.com/watch?v=1gttkO9JKtU


### PouchDB

Completar este programa en Node.JS. Fijáte que la opcion 3 todavia no existe en el programa.

```js

import PouchDB from 'pouchdb';
import prompt from 'prompt-sync';

const input = prompt();
const db = new PouchDB('tareas');

const main = async () => {

  console.log('--- Gestor de tareas ---');
  console.log('1. Agregar una tarea');
  console.log('2. Listar tareas');
  console.log('3. Completar tarea'); // completar esta opción

  const choice = input('Elegir una opcion: ');

  if (choice === '1') {
    const description = input('Enter task description: '); 
    
    // guardar la tarea, su estado (completed) y un ID facil de usar en la base de datos
    
    console.log('✅ Task saved.');
    
  } else if (choice === '2') {
    try {
      
        // mostrando todas las tareas
        console.log(`${index + 1}. ${task.description} [${task.completed ? '✓' : '✗'}]`);
       
    } catch (err) {
      console.error('❌ Error retrieving tasks:', err);
    }
  } else {
    console.log('❓ Invalid choice.');
  }
};


main();

```


# Actividad: JEST y JSDOC

Estas trababajando en un proyecto de node.js, y tienes el siguiente código en un archivo llamado userService.js:

```js

import fetch from 'node-fetch';

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Unable to fetch user data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Unable to fetch user data');
  }
};

export const getUserName = async (userId) => {
  const userData = await fetchUserData(userId);
  return `${userData.username}`;
};

```

Llevar a cabo lo siguiente:
- Aplicar comentarios necesarios sugún JSDOCs
- Crear un archivo para ejecutar la funcion
- Añadir dos funciones: getUserEmail y getUserAddress (mostrará toda la direccion completa)

- Necesitas crear un informe con los siguiente datos que puedes sacar desde jsonplaceholder.

User 1:
User Name: Bret
Email: Sincere@april.biz

User 2:
User Name: Antonette
Email: Shanna@melissa.tv

User 3:
User Name: Samantha
Email: Nathan@yesenia.net

User 4:
User Name: Karianne
Email: Julianne.OConner@kory.org

User 5:
User Name: Kamren
Email: Lucio_Hettinger@annie.ca


- Llevar a cabo las pruebas unitarias usando jest para getUserName y getUserEmail. Recordar que jest funciona con CommonJS Modules, asi que podemos ejecutarlo con este comando experimental

```bash
node --experimental-vm-modules node_modules/.bin/jest
```

# Actividad: Validación de un Token de Verificación de Correo Electrónico en una Aplicación Web

**Objetivo:**
El objetivo de esta actividad es implementar una página React que se encargue de verificar un token de validación recibido a través de la URL, tal como se hace en los sistemas de verificación de correos electrónicos. Además, la página debe mostrar un mensaje visual según si el token es válido o no.

**Descripción:**
Backend (Express)

Crear un servidor Express que reciba el token de verificación como parámetro de consulta (query string) y valide si es correcto o no.

El servidor responderá con un mensaje indicando si el token es válido o no.

**Frontend (React)**

Implementar una página en React que extraiga el token de la URL utilizando el hook useSearchParams o useLocation de React Router.

Enviar este token al servidor para validarlo.

Mostrar un mensaje visual adecuado (como un Alert de MUI) según si la validación del token es exitosa o fallida.

- Si el token es válido, mostrar un mensaje de éxito.

- Si el token es incorrecto o ha expirado, mostrar un mensaje de error.

Por ejemplo, el usuario recibe un vinculo como lo siguiente: http://localhost:3000/email/verification?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImRzZCIsImlhdCI6MTUxNjIzOTAyMn0.Xd8LY_SaWrgd6zZsBjMfUsIP8QYElzqNi7U2yuU7S-8  y al pincharlo, le llevará a una página de React donde comienzo el proceso de validación.

**TIPS:**
1. Usar https://jwt.io/ para crear o generar un token manualmente.

2. En React, usar el hook useSearchParams() para obtener el token del querystring:

```jsx

import { useSearchParams } from 'react-router-dom';

const [searchParams] = useSearchParams();
const token = searchParams.get('token');
```

3. En Express, usar el método jwt.verify() para verificar si el token es válido o no.
```js
const decoded = jwt.verify(token, JWT_SECRET);
```

Token inválido o expirado: Si el token no es válido (por ejemplo, porque la firma no coincide) o si ha expirado, la función jwt.verify lanzará un error. Puedes capturar ese error y manejarlo adecuadamente, por ejemplo, devolviendo una respuesta de error al cliente o registrando el problema en los logs del servidor.



![Verificar Email](../x-assets/UF1844/emailverificar.png)


# Actividad: custom Hooks

Ya sabemos que lo hooks personalizados no son tan complicados para implementar, pero entenderlo si!

Vas a modificar este ejemplo. Buscar los comentarios con un "TO DO" y actualizar el código para usar un hook que implementa la funcionalidad para verificar una contraseña.

/hooks/usePasswordValidation.jsx
```jsx
import {useState} from 'react';

const usePasswordValidation = (initialPassword = "") => {

    const [password, setPassword] = useState(initialPassword);
    const [error, setError] = useState("");

    const handlePasswordChange = (e) => {

        const existingPassword = e.target.value;
        setPassword(existingPassword);

        if (!validatePassword(existingPassword)) {
            setError("La contraseña no es válida");
        }
        else {
            setError("");
        }
    }

    // TO DO Crear una funcion para validar la longitud de la contraseña
    // const validatePassword = (newPassword) => { ....
    
    
    return {
      password, 
      handlePasswordChange, 
      error
    }

}

export default usePasswordValidation;
```

Componente que usa el hook usePasswordValidation.
/components/PasswordForm.jsx:

```jsx
import React from 'react';
import usePasswordValidation from '../hooks/usePasswordValidation';

const PasswordForm = () => {

  // TO DO definir los constante para usar el password, error y handlePasswordChange del hook usePasswordValidation
  

  return (
    <form>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
        {error && <p>{error}</p>} {/* Display error if exists */}
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  );
};

export default PasswordForm;

```

---

## Respuestas

### bcrypt
```js
import bcrypt from 'bcrypt';
import prompt from 'prompt-sync';

const input= prompt();

const username = input("Introducir un nombre de usuario:");
const password = input("Introducir una contraseña:");


const saltRounds = 10;

const hashedPassword = await bcrypt.hash(password, saltRounds);

console.log(`Hemos registrado el usuario ${username}. La contraseña es ${hashedPassword}`);
```

Guardando a un archivo

```js
import fs from 'fs';

const s = `Hemos registrado en usuario ${username}. La contraseña es ${hashedPassword}`;

//fs.writeFileSync("user.txt", s);
fs.appendFileSync("users.txt", s + '\n');
```

### Criterios de Aceptación
```js
import prompt from 'prompt-sync';

const input= prompt();

const TASA = 0.85;

const valor = parseFloat(input("Introducir un valor numérico de dólares americanos (USD):"));

if (isNaN(valor)) {
    console.log("No es un valor numerico");
}
else {
    let resultado = valor * TASA;

    console.log(`El resultado es ${resultado} EUR`);
}
```

### Generador de HTML

```js
import prompt from 'prompt-sync';
import fs from 'fs';

console.log("=== Static Website Generator ===");


const input= prompt();

const title = input("Enter the page title: ");
const author = input("Enter the author name: ");
const body = input("Enter the body content: ");

const htmlContent = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="${author}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1>${title}</h1>
    <p>${body}</p>
    <footer><small>Created by ${author}</small></footer>
</body>
</html>
`

fs.writeFile("index.html", htmlContent, (err) => {
    if (err) {
        console.error("Error al generar un archivo.");
    }
    else {
        console.log("index.html generado. Muchas gracias!")
    }
});
```

### Event Loop

https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62

### TDD

https://www.youtube.com/watch?v=1gttkO9JKtU


### PouchDB

```js

import PouchDB from 'pouchdb';
import prompt from 'prompt-sync';

const input = prompt();
const db = new PouchDB('tasks');

const main = async () => {
  console.log('--- Task Manager ---');
  console.log('1. Add a task');
  console.log('2. List tasks');
  const choice = input('Choose an option: ');

  if (choice === '1') {
    const description = input('Enter task description: ');
    const task = {
      _id: new Date().toISOString(),
      description,
      completed: false
    };

    try {
      await db.put(task);
      console.log('✅ Task saved.');
    } catch (err) {
      console.error('❌ Error saving task:', err);
    }
  } else if (choice === '2') {
    try {
      const result = await db.allDocs({ include_docs: true });
      const tasks = result.rows.map(row => row.doc);

      if (tasks.length === 0) {
        console.log('📭 No tasks found.');
      } else {
        console.log('\n📋 Task List:');
        tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task.description} [${task.completed ? '✓' : '✗'}]`);
        });
      }
    } catch (err) {
      console.error('❌ Error retrieving tasks:', err);
    }
  } else {
    console.log('❓ Invalid choice.');
  }
};

main();

```

### Jest y JSDocs

```js
// npm install node-fetch

// userService.js
import fetch from 'node-fetch';

// Simulate fetching user data from an external API
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Unable to fetch user data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Unable to fetch user data');
  }
};

// Process the user data and return full name
export const getUserName = async (userId) => {
  const userData = await fetchUserData(userId);
  return `${userData.username}`;
};

export const getUserEmail = async (userId) => {
  const userData = await fetchUserData(userId);
  return userData.email; // Returns the user's email
};

export const getUserAddress = async (userId) => {
  const userData = await fetchUserData(userId);
  const { address } = userData;
  return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`; // Returns the full address
};



import { getUserName } from './userService.js';

const userId = 1; 

getUserName(userId)
  .then((username) => {
    console.log(`User's username is: ${username}`);
  })
  .catch((error) => {
    console.error(error);
  });


const userIds = [1, 2, 3, 4, 5]; 

const fetchAndListUsers = async () => {
  for (const userId of userIds) {
    try {
      const name = await getUserName(userId);
      const email = await getUserEmail(userId);

      console.log(`User ${userId}:`);
      console.log(`User Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log('---');
    } catch (error) {
      console.error(`Error retrieving info for user ${userId}:`, error);
    }
  }
};

fetchAndListUsers();



// Crear un archivo userService.test.js y ejecutarlo con > node --experimental-vm-modules node_modules/.bin/jest 
import { getUserName, getUserEmail } from './userService.js';

describe('userService functions', () => {
    
    test('returns username from getUserName', async () => {
      const username = await getUserName(1);
      expect(username).toBe('Bret');
    });
  
    test('returns email from getUserEmail', async () => {
      const email = await getUserEmail(1);
      expect(email).toBe('Sincere@april.biz');
    });
  
    
  });
```

### JWT Tokens
```jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert } from '@mui/material'; // Using MUI components for UI

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('loading');  // 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      // Send the token to your API for validation
      fetch(`http://localhost:5000/api/v1/tokens/verify?token=${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "success") {
            setStatus('success');
            setMessage(data.message || 'Your email has been successfully verified!');
          } else {
            setStatus('error');
            setMessage(data.message || 'Verification failed. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setStatus('error');
          setMessage('An error occurred while verifying your email.');
        });
    }
  }, [token]);

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h5">Verifying your email...</Typography>

      {/* Display loading spinner while verifying */}
      {status === 'loading' && <CircularProgress />}

      {/* Show success or error message */}
      {status === 'success' && (
        <Alert severity="success" sx={{ marginTop: '20px' }}>
          {message}
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity="error" sx={{ marginTop: '20px' }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

export default EmailVerification;
```

```js
const JWT_SECRET = 'abcd1234567890';  // Replace with your actual secret

// Route that accepts a token in the query string
router.get('/verify', (req, res) => {
  const { token } = req.query; // Extract token from query string

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, JWT_SECRET);

    // If token is valid, return a success message
    res.status(200).json({
      message: 'success',
      //decoded: decoded,  // Decoded JWT payload
    });
  } catch (error) {
    // If token is invalid or expired, return an error message
    res.status(400).json({
      message: 'Invalid or expired token',
      error: error.message,
    });
  }
});
```


### Hooks

```jsx
import {useState} from 'react';


const usePasswordValidation = (initialPassword = "") => {

    const [password, setPassword] = useState(initialPassword);
    const [error, setError] = useState("");

    const handlePasswordChange = (e) => {
        const existingPassword = e.target.value;
        setPassword(existingPassword);

        if (!validatePassword(existingPassword)) {
            setError("Validating password with error");
        }
        else {
            setError("");
        }
    }

    const validatePassword = (newPassword) => {
        if (newPassword.length > 5) {
            return true;
        }
        else {
            return false;
        }
    }
    

    return {password, handlePasswordChange, error}
}

export default usePasswordValidation;
```

Componente que usa el hook:
```jsx
import React from 'react';
import usePasswordValidation from '../hooks/usePasswordValidation';

const PasswordForm = () => {
  const { password, error, handlePasswordChange } = usePasswordValidation('');

  return (
    <form>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
        {error && <p>{error}</p>} {/* Display error if exists */}
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  );
};

export default PasswordForm;

```
