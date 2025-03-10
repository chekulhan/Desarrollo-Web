// Actividades de FOR

// Imprimir los números en orden inverso (del 5 al 1)

// Imprimir de 10 a 100 en incrementos de 10

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



//
const names = ["Alice", "Bob", "Charlie", "David"];

names.forEach((name, index) => {
    // imprimir el nombre y su posicion (index)

});


// Mostrar el resultado de la suma de todos los numeros (50), usando for y/o foreach
const numbers = [5, 10, 15, 20];




// Usando for loops in HTML:
/*
ACTIVIDAD 1:


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>For Loop Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 8px;
      background-color: #f4f4f4;
      margin-bottom: 5px;
      border: 1px solid #ddd;
    }
  </style>
</head>
<body>

  <h1>Numeros 1 a 10</h1>
  <ul id="number-list"></ul>

  <script>
    // Obtener el contenedor donde se colocarán los números
    const numberList = document.getElementById("number-list");

    // Usar un for loop de 1 a 10:
      // dentro de cada bucle, hacer:
        const listItem = document.createElement("li");   // crear el elemento <li>
        listItem.textContent = i;  // asignar un valor
        numberList.appendChild(listItem);  // Agregar el elemento a la lista
   
  </script>

</body>
</html>
*/


/*

ACTIVIDAD 2:

En una pagina web tienes un lista de elementos:

<div class="item">Item 1</div>
<div class="item">Item 2</div>
<div class="item">Item 3</div>
<div class="item">Item 4</div>

Aplicar un bucle para cambiar el estilo de todos los textos en la lista a color azul. 
Añadir un boton para ejecutarlo.

PISTA:
let items = document.getElementsByClassName('item');

AVANZADO 1:
<h1>Ordenar la lista de items</h1>

  <ul id="item-list">
    <!-- Popular la lista de items aqui -->
  </ul>

  <button id="sort-btn">Sort Alphabetically</button>

  <script>
    // Initial array of elements
    let items = ["Banana", "Apple", "Orange", "Mango", "Grapes"];

    // Crear una function para mostrar los items

    // Crear una function para ordenar los items

    // Agregar un listener o una funcion para ejecutar la funcion de ordenar y mostrarlos de nuevo.
 <script>


AVANZADO 2: Solo cambiar el Item 2 y Item 4 al color azul
PISTA Convertir HTMLCollection a un array, para acceder al método filter
let itemsArray = Array.from(items);

*/


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






let items = document.getElementsByClassName('item');

// Loop through all the elements
for (let i = 0; i < items.length; i++) {
    // Perform an action on each element
    items[i].style.color = 'blue';  // Change the text color of each element to blue
    console.log(`Item ${i + 1} has text: ${items[i].innerText}`);
}


numbers.forEach(num =>{
    sum += num;
});


/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Text Color with Filter</title>
  <style>
    .item {
      font-size: 20px;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>

  <button id="changeColorBtn">Change Some Items to Blue</button>

  <script>
    // Get all elements with the class 'item'
    let items = document.getElementsByClassName('item');

    // Convert HTMLCollection to an array
    let itemsArray = Array.from(items);

    // Button click event to change color of specific items
    document.getElementById('changeColorBtn').addEventListener('click', function() {
      // Use filter to find items containing 'Item 1' or 'Item 3'
      let filteredItems = itemsArray.filter(item => item.innerText.includes('Item 1') || item.innerText.includes('Item 3'));

      // Change the color of the filtered items
      filteredItems.forEach(item => {
        item.style.color = 'blue';
      });
    });
  </script>
</body>
</html>
*/


/*
<script>
    // Initial array of elements
    let items = ["Banana", "Apple", "Orange", "Mango", "Grapes"];

    // Function to display the items in the list
    function displayItems() {
      const itemList = document.getElementById("item-list");
      itemList.innerHTML = '';  // Clear the list

      items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
      });
    }

    // Display items initially
    displayItems();

    // Function to sort the items and update the list
    function sortItems() {
      items.sort();  // Sort the array alphabetically
      displayItems();  // Update the list on the page
    }

    // Attach the event listener to the button
    document.getElementById("sort-btn").addEventListener("click", sortItems);
  </script>
*/