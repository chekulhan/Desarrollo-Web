import {Perro} from './Animal.js';  

// Create a Dog instance
const miPerro = new Perro('Rex', 'German Shepherd');


// Get buttons from the DOM
const perroButton = document.getElementById('perroButton');


// Add event listeners for button clicks
perroButton.addEventListener('click', () => {
    miPerro.hablar();  // Llamar al método de la clase Perro
});
