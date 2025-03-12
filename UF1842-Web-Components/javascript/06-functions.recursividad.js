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

// Actividad de REPASO (básico)
// 1. Crear una funcion para calcular el área de un rectángulo. Por ejemplo area(3, 4) = 12
// 2. Crear la función para repetir x veces:
//      const mensaje = repeatMessage("Hola! ", 3));
//      console.log(mensaje); 
//      Output: "Hola! Hola! Hola!"


// ARROW FUNCTIONS
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

// PASS by VALUE (inmutable) y PASS by REF (mutable):
// Recordar que si Pass-by-Reference un Objeto, se modifica su valor original
// Actividad 1: Primitive

let val = 10;

function modificarVal(x) {
  x = x * 2; 
  console.log("Dentro de la funcion:", x);
}

console.log(val); // ¿Cual es el valor de val?

// Actividad 2: Objeto
let val = {width: 5};

function modificarObject(obj) {
  obj.width = obj.width * 2; 
  console.log("Dentro de la funcion:", obj); 
}

console.log(val); // ¿Cual es el valor de val?


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

// Actividad de repaso (avanzado)
// Crear una funcion recursiva para sumar los numeros de cada segundo elemento.
// Por ejemplo, sumarSegundo(7) = 7+5+3+1 = 16
// sumarSegundo(6) = 6+4+2 = 12


// --------------------------------
// Respuestas:

function sumSecondNumbers(n) {
  if (n <= 0) return 0; // Base case: Stop when n reaches 0 or negative
  return n + sumSecondNumbers(n - 2); // Recursive step: Add n and call function with n-2
}



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