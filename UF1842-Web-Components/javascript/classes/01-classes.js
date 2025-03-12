// https://blockly.games/puzzle?lang=es
// https://www.youtube.com/watch?v=SI7O81GMG2A
/*
4 pilares de POO:
Abstracción
Encapsulación
Herencia
Polimorfismo

UML: https://mermaid.js.org/syntax/classDiagram.html

Antes de ES6 (2015) ECMAScript (ES) standard

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person('Alice', 25);
person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.


*/

//import Animal from './Guitarra';
const Guitarra = require('./Guitarra');  

const guitarra = new Guitarra('Fender', 'Strat', 6, 1000);

guitarra.tocar();

console.log(guitarra.marca);
console.log(guitarra.precioDeVenta());