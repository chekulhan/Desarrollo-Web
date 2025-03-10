// Actividades de tipos de datos:

let saludo = "Hola";
let nombre = "Maria";

// Output: "Hola, Maria!"



let num1 = 10;
let num2 = 5;

// Output: 
// Sumar:  15
// Restar: 5
// Multiplicar: 50
// Division: 2



// Qué tipos de datos son
let valor1 = null;
let valor2;




let i = 10;
let j = 3;

// Output:
3.3333333333333335
3.33  // usar toFixed();



let isAdmin = true;
let isUser = false;

console.log(isAdmin && isUser);   
console.log(isAdmin || isUser);   
console.log(!isUser);  

// Extender este ejemplo para crear una funcion:
//function esUsuarioAdmin (user, admin) 




const x = new String("Hello");
console.log(typeof x); // ¿Qué tipo de dato es?



const num1 = 42;  
const num2 = new Number(42);  
// ¿Qué tipos de datoa son?




const x = "Hola";
const y = "Hola";
console.log(x === y); // ¿Qué esperas?



const a = new String("Hello");
const b = new String("Hello");
console.log(a === b); // ¿Qué esperas?



let num = 100;
let bool = true;

// Convertirlos tipos de datos en String



let edad = 20;  // Edad del usuario
let tienePermiso = true;  // Si el usuario tiene permiso

// Los usuarios pueden entrar en el gimnasio si tiene 18 o mas años.
//Si son menores (<18), necesitan el permiso de sus padres
// 




// Verificar si el usuario tiene al menos 5 compras en el historial, es mayor de 18 años y está suscrito a un programa de fidelidad.

let historialDeCompra = 6;  // El número de compras realizadas
let edad = 25;  // Edad del usuario
let isSuscrito = true;  // Si está suscrito al programa de fidelidad

// Lógica para verificar si el usuario es elegible para el descuento

// tiene mas de 10 compras y es mayor a 21 o es suscrito
console.log("¡Felicidades! Eres elegible para un descuento."); 



// De referencia / Objetos

let persona1 = { nombre: "Juan", edad: 25 };
let persona2 = persona1;  // Asignamos la referencia de persona1 a persona2

persona2.nombre = "Carlos";

// ¿Qué esperas ver en la propiedad de nombre de persona1 y persona2. ¿Porque? 



let persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Madrid"
};
// Agregar una propiedad 'pais' al objeto




// Crea una función llamada imprimirPelicula que tome el objeto pelicula como argumento y imprima todas sus propiedades.


// OUTPUT
// Título: 
// Director:
// Año: 

// agregar una propiedad 'genero' al objeto película 
// borrar esta propiedad 'genero' al objeto película 
// Modificar el año de la película
// Mostrar las claves y sus valores usando un bucle for..in


// Arrays

let coches = ["Toyota", "Ferrari", "Mercedes"];
coches[1] = "Tesla"; 
coches.push("Chevrolet");

// Mostrar 'Mercedes'
// Cambiar el primer elemento a 'BMW'
// Eliminar el último elemento usando pop()
// Buscar el índice de 'BMW' usando IndexOf(...) - si no existe un valor, ¿que resultado consigues?
// Verificar si existe 'Toyota' en el array usando .includes(...). ¿Qué valor devuelve?
// ¿Qué hace coches.sort(); y coches.reverse();?




let mixedArray = [42, "Hello", true, { name: "Alice" }, [1, 2, 3], null];

// ¿Funciona?
for (let index = 0; index < mixedArray; index++) {
    console.log(`Valor es ${mixedArray[index]}`);
    console.log();
}

// ¿Funciona?
for (let name of mixedArray) {
    console.log(Valor es ${mixedArray});
}

// Queremos imprimir solo los tipos ded datos string y number. Usar un bucle for y typeof



// Has recibido datos de un formulario FORM de HTML

let usuario = {
  nombre: "Juan",
  edad: undefined,  // Edad no proporcionada
};

// Verificamos si el nombre y la edad son válidos.
// Crear una funcion para verificar el usuario : verificamosUsuario(user)
// Comprobar que los tipos de datos no son undefined ni null


// ¿Qué tipo de dato es saludar
const saludar = function(name) {
  return `Hola, ${name}!`;
};


let str = "Hello";
let arr = str.split('')
// ¿Qué tipo de dato es arr?
// Cambiar 'Hello' a HellA'


let arr = ["a", "b", "c"];
let str = arr.join(''); 

// ¿Cual es el valor de str?
// y si hacemos let str = arr.join(','); 



//Arrays de objetos
const peliculas = [
  {
      titulo: "Inception",
      director: "Christopher Nolan",
      año: 2010
  },
  {
      titulo: "Interstellar",
      director: "Christopher Nolan",
      año: 2014
  }
];

console.log(peliculas);

// mostrar los titulos de las peliculas
// agregar unna nueva pelicula al array


// -------- Respuestas -------


function verificamosUsuario(user) {
  // Verificamos si el nombre y la edad son válidos
  if (user.name === null || user.name === undefined) {
    console.log("El nombre es requerido.");
  } else {
    console.log("Nombre: " + user.name);
  }

  if (user.age === null || user.age === undefined) {
    console.log("La edad es requerida.");
  } else {
    console.log("Edad: " + user.age);
  }
}



// Permisos de gimnasio
let edad = 20;  // Edad del usuario
let tienePermiso = true;  // Si el usuario tiene permiso de los padres

// Verificamos si el usuario puede entrar al gimnasio
if (edad >= 18) {
  console.log("Acceso permitido: Puedes entrar al gimnasio.");
} else if (edad < 18 && tienePermiso) {
  console.log("Acceso permitido: Eres menor de edad pero tienes el permiso de tus padres.");
} else {
  console.log("Acceso denegado: Necesitas ser mayor de edad o tener el permiso de tus padres.");
}


let pelicula = {
  titulo: "Inception",
  director: "Christopher Nolan",
  año: 2010
};

function imprimirPelicula(pelicula) {
  console.log(`Título: ${pelicula.titulo}`);
  console.log(`Director: ${pelicula.director}`);
  console.log(`Año: ${pelicula.año}`);
}

// Llamar a la función para imprimir la película
imprimirPelicula(pelicula);



let mixedArray = [42, "Hello", true, { name: "Alice" }, [1, 2, 3], null];

for (let item of mixedArray) {
    if (typeof item === "string" || typeof item === "number") {
        console.log(`Valor es ${item}`);
    }
}






// Eliminar una película por índice (ej. eliminar "Inception" que está en el índice 0)
peliculas.splice(0, 1); // Elimina 1 elemento en el índice 0