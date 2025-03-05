import express from 'express';
import path from 'path';

const app = express();

// Middleware to parse JSON body of requests
app.use(express.json());

// Ruta para procesar el pedido
app.post('/place-order', (req, res) => {
  const { orderValue } = req.body;  // Obtenemos el valor del pedido del cuerpo de la petición

  // Lógica de negocio: Verificar que el valor del pedido sea mayor que 100
  if (orderValue <= 100) {
    return res.status(400).send(generateHTML('El valor del pedido debe ser mayor a 100 para ser procesado.'));
  }

  // Lógica de negocio: Si el valor del pedido es mayor a 500, rechazar el pedido
  if (orderValue > 500) {
    return res.status(400).send(generateHTML('El valor máximo del pedido es 500.'));
  }

  // Si pasa ambas validaciones, el pedido es procesado
  res.status(200).send(generateHTML(`Pedido realizado con éxito! El valor del pedido es: $${orderValue}`));
});

// Función que genera el contenido HTML con el mensaje
function generateHTML(message) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultado del Pedido</title>
      </head>
      <body>
        <h1>Resultado del Pedido</h1>
        <p>${message}</p>
        <a href="/">Volver al inicio</a>
      </body>
    </html>
  `;
}

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
