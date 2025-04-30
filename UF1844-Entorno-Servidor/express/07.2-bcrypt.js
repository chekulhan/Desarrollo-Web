/*
bcrypt es un algoritmo de hashing diseñado para almacenar contraseñas de forma segura. 
A diferencia de otros algoritmos de hashing, bcrypt incorpora un factor de coste que hace que sea más lento y difícil de romper mediante ataques de fuerza bruta.

🔑 ¿Qué es el Salto (Salt)?
El salto (salt) es una cadena aleatoria de caracteres que bcrypt genera y agrega a la contraseña antes de hacer el hashing. Esto asegura que incluso si dos personas tienen la misma contraseña, sus hashes serán diferentes.

El salt es único para cada usuario.

Añadir un salt hace que los hashes de contraseñas sean únicos, incluso si las contraseñas son iguales.

💣 ¿Qué son las Rondas (Rounds)?
Las rondas (rounds) son la cantidad de veces que bcrypt realiza el proceso de hashing. Cuantas más rondas, más lento será el proceso de hashing. 
Esto hace que los ataques de fuerza bruta sean más difíciles de ejecutar, ya que un atacante tendría que realizar muchas más operaciones para descifrar las contraseñas.

Menos rondas: Rápido, pero más vulnerable a ataques.

Más rondas: Más seguro, pero más lento.

El número de rondas se especifica mediante el factor de coste que le das a bcrypt. Generalmente se utiliza un número entre 10 y 14, aunque puedes aumentar este número según el nivel de seguridad que necesites.
*/


import bcrypt, { hash } from 'bcrypt';


const simplePassword = 'mysecret123';

const hashPassword = async (password) => {

    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);
    console.log("Hashed", hashed);
    return hashed;
}

// IIFE: Immediately Invoked Function Expression - con ESModules, ahora, no hace falta para ejecutar async/await
/*
(function() {
    // Function body
  })();

(() => {
  // Function body
})();

*/
/*
(async () => {
    const hash = await hashPassword(simplePassword);
    const hashed = await bcrypt.hash(simplePassword, 10);
    console.log("done", hashed);
  })();

  */


const abc = await bcrypt.hash(simplePassword, 10);
const match = await bcrypt.compare('mysecret123', abc);
console.log(match ? '✅ Correct' : '❌ Incorrect');


// Pregunta de reflexion. ¿Por qué el resultado es diferente?

const hash1 = await bcrypt.hash('mysecret123', 10);
const hash2 = await bcrypt.hash('mysecret123', 10);
console.log(hash1);
console.log(hash2);


// Actividad - completar las partes que falta, para regsitrar un usuario y login 

import bcrypt from 'bcrypt';

const users = {};  // In-memory "database"

const registerUser = async (username, plainPassword) => {
  const saltRounds = 10;

  // TO DO: conseguir una contraseña hashed

  users[username] = hashedPassword;  // guardar la contraseña hashed en el objeto de usuarios
  console.log(`User registrado "${username}"`);
};

const loginUser = async (username, inputPassword) => {
  const hashedPassword = users[username];
  
  if (!hashedPassword) {
    console.log('User not found');
    return false;
  }

  // TO DO: Comparar la contraseña (inputPassword) con la contraseña guardado en el objeto de usuarios (hashedPassword)
  
  // TO DO: Devolver true o false, dependiendo del resultado
  
};

// --- MAIN ---

const username = 'alice';
const password = 'secret123';

await registerUser(username, password);          // Save hashed password
await loginUser(username, 'wrongpass');          // Should fail
await loginUser(username, 'secret123');          // Should succeed








// Respuesta -----
/*
import bcrypt from 'bcrypt';


const users = {};  // In-memory "database"

const registerUser = async (username, plainPassword) => {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  users[username] = hashedPassword;
  console.log(`User registrado "${username}"`);
};

const loginUser = async (username, inputPassword) => {
  const hashedPassword = users[username];
  if (!hashedPassword) {
    console.log('User not found');
    return false;
  }

  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
  if (isMatch) {
    console.log('Login successful');
    return true;
  } else {
    console.log('Incorrect password');
    return false;
  }
};

// --- MAIN ---

const username = 'alice';
const password = 'secret123';

await registerUser(username, password);          // Save hashed password
await loginUser(username, 'wrongpass');          // Should fail
await loginUser(username, 'secret123');          // Should succeed

*/