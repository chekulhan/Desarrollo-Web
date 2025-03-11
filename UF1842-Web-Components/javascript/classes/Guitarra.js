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
    
    constructor(marca, modelo, cuerdas, precioDeFabrica, tipoAmplificacion, efectos) {
        super(marca, modelo, cuerdas, precioDeFabrica);
        this.tipoAmplificacion = tipoAmplificacion;  // Ej: "transistores" o "válvulas"
        this.efectos = efectos; // Lista de efectos como ["Distorsión", "Reverb"]
    }

    conectarAmplificador() {
        console.log(`${this.marca} ${this.modelo} está conectada a un amplificador de tipo ${this.tipoAmplificacion}.`);
    }

    usarEfecto(efecto) {
        if (this.efectos.includes(efecto)) {
            console.log(`Activando el efecto ${efecto} en la ${this.marca} ${this.modelo}.`);
        } else {
            console.log(`El efecto ${efecto} no está disponible en esta guitarra.`);
        }
    }
}

//export default Guitarra; // In ES6 (ES2015)
module.exports = Guitarra;  // In Node.js (CommonJS)


//export { Guitarra, GuitarraElectrica }; // In ES6 (ES2015)
module.exports = { Guitarra, GuitarraElectrica};  // In Node.js (CommonJS)