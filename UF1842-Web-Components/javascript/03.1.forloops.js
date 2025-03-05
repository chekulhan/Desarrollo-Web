// Actividades de FOR

// Imprimir los números en orden inverso (del 5 al 1)

//  Imprimir de 10 a 100 en incrementos de 10

// Imprimir todos los nombres excepto Carlos
let nombres = ["Ana", "Carlos", "Elena", "Luis"];




// Vamos a buscar si el nombre existe en la lista
let invitados = ["Pedro", "Maria", "Juan"];
let buscar = "Maria";
let encontrado = false;



const numbers = [1, 2, 3, 4, 5];
// Cuando llegues a 3, terminar de imprimor los valroes y salir del bucle



// usuarios en un Array
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

// ¿funciona?
for (let users of users) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}





// RESPUESTAS:
let nombres = ["Ana", "Carlos", "Elena", "Luis"];

for (let nombre of nombres) {
    if (nombre === "Carlos") {
        continue; // Salta a la siguiente iteración
    }
    console.log(nombre);
}

let invitados = ["Pedro", "Maria", "Juan"];
let buscar = "Maria";
let encontrado = false;

for (let persona of invitados) {
    if (persona === buscar) {
        encontrado = true;
        break;  // Salimos del bucle si lo encontramos
    }
}

console.log(encontrado ? "✅ Invitado encontrado" : "❌ No está en la lista");


for (let i = 10; i <= 100; i += 10) {
    console.log(`Número: ${i}`);
}




for (let number of numbers) {
    if (number === 3) {
      break;  // Breaks out of the loop when the number is 3
    }
    console.log(number);
  }