# Rutas dinámicas
¿Qué son las rutas dinámicas?
Las rutas dinámicas en Express permiten capturar valores variables de la URL. Usando parámetros de ruta (por ejemplo, :id), puedes hacer que la misma ruta funcione para diferentes valores, sin necesidad de definir rutas específicas para cada valor.

**Ejemplo:**
Supón que quieres hacer una aplicación de libros, y quieres crear una ruta para mostrar un libro según su ID (por ejemplo, /libros/1 para el libro con ID 1, o /libros/2 para el libro con ID 2).

**Paso 1: Definir la Ruta Dinámica**
En Express, la ruta se define utilizando el parámetro de ruta en la URL. Vamos a crear una ruta que acepte un ID dinámico.

```jsx
const libros = [
  { id: 1, titulo: "El Quijote", autor: "Miguel de Cervantes" },
  { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { id: 3, titulo: "Don Juan Tenorio", autor: "Tirso de Molina" }
];

// Ruta dinámica para obtener un libro por su ID
app.get('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);  // Obtenemos el ID de la URL
  const libro = libros.find(libro => libro.id === id);  // Buscamos el libro con ese ID

  if (libro) {
    res.json(libro);  // Si el libro se encuentra, lo devolvemos en formato JSON
  } else {
    res.status(404).send('Libro no encontrado');  // Si no lo encontramos, devolvemos un error 404
  }
});

```



TO DO:
Understanding req.query vs req.params
It's important to differentiate between query parameters (req.query) and route parameters (req.params). Query parameters are appended to the URL, while route parameters are part of the URL path.
Example:

javascript
Copiar
Editar
// Query: /about?nombre=John
// Route parameter: /about/:id

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);  // Accessing the ID from the route
});




## Respuesta a coches


```jsx
// Endpoint to get a specific coche by its ID
app.get('/api/coches/:id', (req, res) => {
  const cocheId = parseInt(req.params.id);  // Get the coche ID from the URL parameter
  const coche = coches.find(c => c.id === cocheId);  // Find the coche by ID

  if (coche) {
    res.json(coche);  // If found, send the coche data as a response
  } else {
    res.status(404).json({ message: 'Coche no encontrado' });  // If not found, send 404
  }
});
```

Reactjs
```jsx
import React, { useState, useEffect } from 'react';

const ListaCoches = () => {
  const [coches, setCoches] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [cocheIndividual, setCocheIndividual] = useState(null); // State to store the individual coche

  useEffect(() => {
    // Fetch all coches on component mount (or list page)
    fetch('http://localhost:5000/api/coches')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos de los coches');
        }
        return respuesta.json();
      })
      .then((data) => {
        setCoches(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  // Function to fetch a single coche by ID
  const fetchCoche = (id) => {
    fetch(`http://localhost:5000/api/coches/${id}`)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Coche no encontrado');
        }
        return respuesta.json();
      })
      .then((data) => {
        setCocheIndividual(data); // Store the individual coche
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de Coches</h1>

      {/* Display individual coche if it's fetched */}
      {cocheIndividual ? (
        <div>
          <h2>{cocheIndividual.marca} {cocheIndividual.modelo} ({cocheIndividual.año})</h2>
        </div>
      ) : (
        <div>
          <h2>Selecciona un coche para ver más detalles</h2>
        </div>
      )}

      <ul>
        {coches.map((coche) => (
          <li key={coche.id}>
            {coche.marca} {coche.modelo} ({coche.año})
            <button onClick={() => fetchCoche(coche.id)}>Ver Detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCoches;
```