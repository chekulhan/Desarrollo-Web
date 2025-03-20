import React, { useState } from 'react';
import LibroDetalles from './LibroDetalles';

function App() {
  const libros = [
    { id: 1, titulo: 'La carretera de Bill Gates', autor: 'Bill Gates', año: 1995, descripcion: 'Un vistazo a la vida y el pensamiento de Bill Gates en los años 90.' },
    { id: 2, titulo: 'I, Robot', autor: 'Isaac Asimov', año: 1950, descripcion: 'Una serie de relatos que exploran la interacción de la humanidad con robots inteligentes, basados en sus Tres Leyes de la Robótica.' },
    { id: 3, titulo: 'Steve Jobs', autor: 'Walter Isaacson', año: 2011, descripcion: 'Biografía completa de Steve Jobs, el fundador de Apple.' }
  ];

  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  const manejarClickLibro = (libro) => {
    setLibroSeleccionado(libro);
  };

  return (
    <div>
      <h1>Lista de Libros de Tecnología</h1>
      <ul>
        {libros.map(libro => (
          <li key={libro.id} onClick={() => manejarClickLibro(libro)} style={{ cursor: 'pointer', color: 'blue' }}>
            {libro.titulo}
          </li>
        ))}
      </ul>

      {libroSeleccionado && <LibroDetalles libro={libroSeleccionado} />}
    </div>
  );
}

export default App;
