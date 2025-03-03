import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';  // __dirname no es disponible con ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.get('/', (req, res) => {
    res.send("Página principal");
});

app.get('/about', (req, res) => {
    console.log(req.url);
    console.log(req.query);
    //{ nombre: 'John', edad: '30' }

    const {nombre, edad} = req.query; // Desestructurar los parámetros de la consulta

    if (nombre && edad) {
        console.log(`Usuario ${nombre} tiene ${edad} años`);
    }
        
    res.send("página About");
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});