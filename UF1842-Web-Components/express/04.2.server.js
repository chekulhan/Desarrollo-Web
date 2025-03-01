import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';  // __dirname no es disponible con ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // definir el directory de views (donde estan las plantillas)


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to the Home Page!' });
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});


app.get('/contactar', (req, res) => {
  // definimos un objecto
  const contactarInfo = { nombre: 'Juan', email: 'contact@example.com'};
  res.render('contactar', { title: 'Contactar con nosotros', contactarInfo: contactarInfo });
});

/*
<p><%= contactarInfo.email %></p>
<p><%= contactarInfo.nombre %></p>
*/

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
