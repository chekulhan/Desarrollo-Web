import React from 'react';

function LibroDetalles({ libro }) {
  return (
    <div>
      <h2>Detalles del Libro</h2>
      <p><strong>Título:</strong> {libro.titulo}</p>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Año:</strong> {libro.año}</p>
      <p><strong>Descripción:</strong> {libro.descripcion}</p>
    </div>
  );
}

export default LibroDetalles;
