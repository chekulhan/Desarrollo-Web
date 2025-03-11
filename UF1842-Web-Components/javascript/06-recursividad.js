// Antes, terminar las funciones matemáticas

function sumar(a, b) {
    return a + b; 
}

// Recordar que si Pass-by-Reference un Objeto, se modifica su valor original
function cambiarNombre(obj) {
    obj.nombre = "Jon"; // Modificar el objeto original
  }
  
let persona = { nombre: "Jane" };
cambiarNombre(persona);
console.log(persona.nombre); // Output: "Jon" (The original object was modified)
  

// Recursividad -------------------------------


function factorial(n) {
    // Base case: If n is 0, return 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: n * factorial of n-1
    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5));  // Output: 120

// Actividad: CountDown desde 10 a 1!
function countDown(n) {
    if (n <= 0) {
        console.log("!Fin!");
        return;
    }
    else {
        console.log(n);
        return countDown(n-1);
    }
}

// Podrias incorporar esta funcion recursiva en una página web de HTML
setTimeout(() => {
    countDown(number - 1);
}, 1000); // Delay 1 second between counts