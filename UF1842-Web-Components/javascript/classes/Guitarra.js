class Guitarra {
    #precioDeFabrica = 0;

    constructor(marca, modelo, cuerdas, precioDeFabrica) {
        this.marca = marca;
        this.modelo= modelo;
        this.cuerdas = cuerdas;
        this.#precioDeFabrica = precioDeFabrica;
    }

    tocar() {
        console.log(`${this.brand} esta tocando la guitarra!`);
    }

    getCuerdas() {
        return this.cuerdas;
    }

    // uso de atributos privados
    precioDeVenta() {
        return this.#precioDeFabrica * 1.5;
    }
}


class GuitarraElectrica extends Guitarra {

    constructor(marca, modelo, cuerdas, precioDeFabrica, distorsion) {
        super(marca, modelo, cuerdas, precioDeFabrica);
        this.distorsion = distorsion; 
        this.amplificador = true;  
    }

    conectarAmplificador() {
        console.log(`${this.marca} ${this.modelo} está conectada a un amplificador ${this.amplificador}.`);
    }

    usarEfecto() {
        if (this.distorsion) {
            console.log(`Activando distorsión`);
        } else {
            console.log(`La distorsión no está disponible en esta guitarra.`);
        }
    }
}

//export default Guitarra; // In ES6 (ES2015)
module.exports = Guitarra;  // In Node.js (CommonJS)


//export { Guitarra, GuitarraElectrica }; // In ES6 (ES2015)
module.exports = { Guitarra, GuitarraElectrica};  // In Node.js (CommonJS)