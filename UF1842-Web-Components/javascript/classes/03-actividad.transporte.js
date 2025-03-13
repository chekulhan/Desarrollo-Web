const express = require("express");
const path = require("path");
const CalculadorCostosTransporte = require("./CalculadorCostosTransporte");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("formulario");
});

app.post("/calcular-costos", (req, res) => {
    const { distancia, peso, tipoVehiculo } = req.body;

    if (!distancia || !peso || !tipoVehiculo) {
        return res.render("formulario", { error: "Completa todos los campos." });
    }

    const calculador = new CalculadorCostosTransporte(
        parseFloat(distancia),
        parseFloat(peso),
        tipoVehiculo
    );

    const costoTotal = calculador.calcularCosto();
    res.render("resultado", { costoTotal, tipoVehiculo });


});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
