import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';  // __dirname no esta disponible con ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Incluir el middleware static
// Recordar que los htmls no estan dentro de /public/css y /public/images y /public/js
// Colgar los html en una carpeta views

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
