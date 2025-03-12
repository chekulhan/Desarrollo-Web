class Ropa {
    constructor(nombre, tomaño, color) {
        debugger;
        this.nombre = nombre;
        this.tomaño = tomaño;
        this.color = color;
    }

    describir() {
        return `${this.color} ${this.nombre} (Size: ${this.tomaño})`;
    }
}

class Camiseta extends Ropa {
    constructor(tomaño, color, longitudDeManga) {
        super("Camiseta", tomaño, color);
        this.longitudDeManga = longitudDeManga;
    }

    describir() {
        return `${super.describir()}, Longitud de Manga: ${this.longitudDeManga}`;
    }
}

class Pantalon extends Ropa {
    constructor(tomaño, color, estilo) {
        super("Pantalon", tomaño, color);
        this.estilo = estilo;
    }

    describir() {
        return `${super.describir()}, Style: ${this.estilo}`;
    }
}

export { Camiseta, Pantalon };