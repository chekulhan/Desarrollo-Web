// Mostrar la imagen transporte.actoividad.png de UML

class CalculadorCostosTransporte {
    #tarifa

    constructor(distancia, peso, tipoVehiculo) {
        if (distancia <= 0 || peso <= 0) {
            throw new Error("La distancia y el peso deben ser mayores a cero.");
        }

        this.distancia = distancia;
        this.peso = peso;
        this.tipoVehiculo = tipoVehiculo.toLowerCase();
    }

    calcularCosto() {
        
        // Determinar la tarifa según el tipo de vehículo
        switch (this.tipoVehiculo) {
            case 'bicicleta':
                this.#tarifa = 0.10;  // USD por km y kg
                break;
            case 'patineta':
                this.#tarifa = 0.15;  // USD por km y kg
                break;
            default:
                throw new Error("Tipo de vehículo inválido.");
        }

        const costo = this.distancia * this.peso * this.#tarifa;
        return costo.toFixed(2);
    }
}

module.exports = CalculadorCostosTransporte;
