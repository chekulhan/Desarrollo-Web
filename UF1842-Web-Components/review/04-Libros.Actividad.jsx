import React, { useState } from 'react';
// TO DO Importar el componente LibroDetalles

function App() {

  // TO DO Crear un Array de objetos 'libros' {id, titulo, autor, año, descripcion}
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  const manejarClickLibro = (libro) => {
    setLibroSeleccionado(libro);
  };

  return (
    <div>
      <h1>Lista de Libros de Tecnología</h1>
      {/*
       TO DO: Implementar un bucle (map) para listar todos los libros.
       Cuando el usuario pincha el <li>, actualizar la variable 'libroSeleccionado' 
      */}

      <ul>

      </ul>

      {/*
       TO DO: Crear otro componente, LibroDetalles, para mostrar el libro seleccionado
       Pasar como prop el libro={libroSeleccionado}
       No te olvides en importar este componente
      
      {libroSeleccionado && <LibroDetalles libro={libroSeleccionado} />}
      
      */}

    </div>
  );
}

export default App;
