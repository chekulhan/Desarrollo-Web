/*
map() es un método de los arrays en JavaScript que permite crear un nuevo array con los resultados de aplicar una función a cada elemento del array original. A diferencia de forEach(), que no devuelve nada, map() siempre devuelve un nuevo array. Además, map() acepta tres parámetros en su función de callback: el valor actual, el índice y el array completo.
*/


// Demo 1

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num=> num * 2);
console.log(doubled)



// Actividad: Usar toUpperCase() para convertir cada fruta en MAYUSCULAS
const frutas = ['manzana', 'platano', 'kiwi'];
//const uppercased = frutas.map(      );
//console.log(uppercased);

// Demo 2
const n = numbers.map((num, index) => {
    return(`Numero ${num} en la posicion ${index}`);
} );

console.log(n);

// Actividad 2:
const nombres = ["Juan", "Ana", "Luis", "Carlos", "Maria"];

// Devolver una nueva lista (array) con:
// El nombre Juan tiene 4 caracteres y está en la posición 0
// El nombre Ana tiene 3 caracteres y está en la posición 1
// ...




// Actividad Avanzada:
// Quieres sacar una nueva lista (array) con las tareas que tienen prioridad ALTA
// Las que todavia no lo han cumplido comparando con la fecha de hoy

const tareas = [
    { tarea: "Finish report", fechaCumplir: "2025-03-10" },
    { tarea: "Call client", fechaCumplir: "2025-03-11" },
    { tarea: "Prepare presentation", fechaCumplir: "2025-03-12" },
    { tarea: "Team meeting", fechaCumplir: "2025-03-13" },
    { tarea: "Write blog post", fechaCumplir: "2025-03-14" }
  ];

// Convertir las fechas en objetos Date para usar <>=
// Por ejemplo: const fechaFin = new Date("2025-03-12"); 




// Respuestas -------
/*
const nombres = ["Juan", "Ana", "Luis", "Carlos", "Maria"];

const n = nombres.map((nombre, index) => {
  return (`El nombre ${nombre} tiene ${nombre.length} caracteres y está en la posición ${index}`);
});




const tareas = [
    { tarea: "Finish report", fechaCumplir: "2025-03-10" },
    { tarea: "Call client", fechaCumplir: "2025-03-11" },
    { tarea: "Prepare presentation", fechaCumplir: "2025-03-12" },
    { tarea: "Team meeting", fechaCumplir: "2025-03-13" },
    { tarea: "Write blog post", fechaCumplir: "2025-03-14" }
  ];

const fechaFin = new Date("2025-03-12"); 

const tareasPrioridades = tareas.map((tarea, index) => {
    curFecha = new Date(tarea.fechaCumplir);

    if (curFecha <= fechaFin) {
        return {tarea: tarea.tarea, prioridad: 'ALTA'}
    }
})
console.log(tareasPrioridades);
*/