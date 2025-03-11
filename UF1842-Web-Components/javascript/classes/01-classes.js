// https://blockly.games/puzzle?lang=es
// https://www.youtube.com/watch?v=SI7O81GMG2A
/*
4 pilares de POO:
Abstracción
Encapsulación
Herencia
Polimorfismo

UML: https://mermaid.js.org/syntax/classDiagram.html
*/

//import Animal from './Guitarra';
const Guitarra = require('./Guitarra');  

const guitarra = new Guitarra('Fender', 'Strat', 6, 1000);

guitarra.tocar();

console.log(guitarra.marca);
console.log(guitarra.precioDeVenta());