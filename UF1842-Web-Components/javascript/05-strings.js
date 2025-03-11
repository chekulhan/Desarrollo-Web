// emplear: replace(), toUpperCase(), trim(), concat(), split(), toLowerCase(), repeat()



let str = "   Hello, World!   ";
// resultado esperado; 'Hello, World!


let str = "Hello, Javascript!";
// resultado esperado; 'Hola, Javascript!

let str = "Hello, World!";
// resultado esperado; 'HELLO, WORLD!'
// resultado esperado; 'hello, world!'


let str = "Hello";
// resultado esperado; ['H', 'e', 'l', 'l', 'o']

let str = "apple,banana,orange";
// resultado esperado; ['apple', 'banana', 'orange']


let str1 = "Hello";
let str2 = "World";

// resultado esperado; 'Hello, World!'

let str = "Hi! ";
// resultado esperado; 'Hi! Hi! Hi! '


// -------------------------

// Qué resultado esperas?
let str = "Hello, World!";
console.log(str.startsWith("Hello"));  
console.log(str.endsWith("World!"));  
console.log(str.startsWith("World"));  

// Qué resultado esperas?
let str = "Hello, World!";
console.log(str.includes("World"));  
console.log(str.includes("JavaScript")); 