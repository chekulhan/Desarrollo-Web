// Actividades de FOR

// Imprimir los números en orden inverso (del 5 al 1)

//  Imprimir de 10 a 100 en incrementos de 10

// Imprimir todos los nombres excepto Carlos
let nombres = ["Ana", "Carlos", "Elena", "Luis"];




// Vamos a buscar si el nombre existe en la lista
let invitados = ["Pedro", "Maria", "Juan"];
let buscar = "Maria";
let encontrado = false;





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