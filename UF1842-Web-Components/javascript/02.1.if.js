//Actividades de IF condicion


// Si la contraseña es correcta, muestra "Acceso permitido", si no, "Contraseña incorrecta".
// Simulando input
let passwordGuardado = "secreto123";
let passwordIngresado = "secreto123"; 





// Indicar si un numero es par o impar
let numero = 7;

if (numero % 2 ...


// Si la hora está entre las 9:00 y las 18:00, la tienda está abierta.
let horaActual = 15; // Simulación de la hora en formato 24h



/*
Dado un número del 0 al 100, asigna una calificación según la siguiente escala:

90 - 100 → Sobresaliente 🏆
70 - 89 → Aprobado ✅
50 - 69 → Necesita mejorar 🧐
< 50 → Reprobado ❌
*/



// RESPUESTAS:
let horaActual = 15; // Simulación de la hora en formato 24h

if (horaActual >= 9 && horaActual < 18) {
    console.log("🛍️ La tienda está ABIERTA.");
} else {
    console.log("🚪 La tienda está CERRADA.");
}



let nota = 85;  // Puedes cambiar este valor

if (nota >= 90) {
    console.log("🏆 Sobresaliente. ¡Muy bien!");
} else if (nota >= 70) {
    console.log("✅ Aprobado. ¡Sigue así!");
} else if (nota >= 50) {
    console.log("🧐 Necesita mejorar. ¡Puedes hacerlo!");
} else {
    console.log("❌ Reprobado. Necesitas estudiar más.");
}
