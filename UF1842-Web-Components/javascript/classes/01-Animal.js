// Define the base Animal class
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} hace un ruido.`);
    }
}

// Define the Dog subclass
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Call the parent class constructor
        this.raza = raza;
    }

    hablar() {
        console.log(`${this.nombre}, de ${this.raza}, ladra.`);
    }
}



// In client-side JavaScript (i.e., running in the browser), you must use the ES6 module format (import / export) instead of CommonJS (require / module.exports).

export { Perro };