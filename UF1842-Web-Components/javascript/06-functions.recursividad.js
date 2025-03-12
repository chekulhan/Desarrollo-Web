// function: Las funciones declaradas con function son 'elevadas'. HOISTING / ELEVACIÓN
// Esto significa que puedes llamarlas antes de que estén definidas en el código.

function sumar(a, b) {
    return a + b; 
}


function sumar(a, b) {
    // Hay que forzar que los páramétros son tipos number
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both parameters must be numbers.');
    }

    return a + b;
}

// Usar const con arrow functions (anónimos) o function keyword:
// const con funciones flecha: Las funciones asignadas a const no se elevan, lo que significa que debes definirlas antes de usarlas.
// no tienen su propio 'this'

const sumar = (a, b) => {
    return a + b;
}



// ACTIVIDAD: Convertir estas funciones en unas arrow funciones:

function saludo(nombre, edad) {
    if (edad >= 18) {
      return `Hola, ${nombre}. Eres mayor de edad.`;
    } else {
      return `Hola, ${nombre}. Eres menor de edad.`;
    }
  }

// Crear una function tradicional y luego convertirla en una arrow function
// para calcular el promedio de un array de notas

let notas = [2, 5, 3, 2, 9, 8];


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



// --------------------------------
// Respuestas:
const saludo = (nombre, edad) => {
    if (edad >= 18) {
      return `Hola, ${nombre}. Eres mayor de edad.`;
    } else {
      return `Hola, ${nombre}. Eres menor de edad.`;
    }
  };

const calcularPromedio = (notas) => {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
      total += notas[i];
    }
    let promedio = total / notas.length;
    return promedio;
  };
  

  const calcularPromedio = (notas) => {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
      total += notas[i];
    }
    let promedio = total / notas.length;
    return promedio;
  };