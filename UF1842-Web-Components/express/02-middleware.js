import express from 'express';
const app = express();

app.use((req, res, next) => {
    console.log(`middleware ${req.url} and ${req.method}`);
    next(); // continuar
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is the About page!');
  });

// middleware next no hace falta
app.use((req, res) => {
    res.status(404).send('Middleware. Route not found');
  });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
