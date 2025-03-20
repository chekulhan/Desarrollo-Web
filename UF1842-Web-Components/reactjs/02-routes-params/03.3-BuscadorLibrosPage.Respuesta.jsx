import React from "react";
import { useSearchParams } from "react-router-dom";

// Actividad: Dado el siguiente array de libros implementar un buscador
// Avanzado: Implementar un queryString para titulo && autor
/*
const libros = [
  { titulo: "El código limpio", autor: "Robert C. Martin" },
  { titulo: "Introducción a la programación", autor: "John Smith" },
  { titulo: "JavaScript para principiantes", autor: "Jane Doe" },
  { titulo: "Patrones de diseño", autor: "Erich Gamma" }
];

*/

function BuscadorLibrosPage() {
  const [searchParams] = useSearchParams();
  const tituloQuery = searchParams.get("titulo"); // Obtener el parámetro 'titulo'
  const autorQuery = searchParams.get("autor"); // Obtener el parámetro 'autor'

  // Lista de libros con título y autor
  const libros = [
    { titulo: "El código limpio", autor: "Robert C. Martin" },
    { titulo: "Introducción a la programación", autor: "John Smith" },
    { titulo: "JavaScript para principiantes", autor: "Jane Doe" },
    { titulo: "Patrones de diseño", autor: "Erich Gamma" }
  ];

  // Filtrar los libros por título y autor
  const filteredLibros = libros.filter(
    (libro) =>
      (tituloQuery ? libro.titulo.toLowerCase().includes(tituloQuery.toLowerCase()) : true) &&
      (autorQuery ? libro.autor.toLowerCase().includes(autorQuery.toLowerCase()) : true)
  );

  return (
    <div>
      <h1>Resultados de la búsqueda de libros</h1>
      {tituloQuery || autorQuery ? (
        <p>
          Mostrando resultados para:
          {tituloQuery && <strong> Título: {tituloQuery}</strong>}
          {autorQuery && <strong> Autor: {autorQuery}</strong>}
        </p>
      ) : (
        <p>No se ha realizado ninguna búsqueda.</p>
      )}

      {/* Mostrar libros filtrados */}
      <ul>
        {filteredLibros.length > 0 ? (
          filteredLibros.map((libro, index) => (
            <li key={index}>
              <strong>{libro.titulo}</strong> by {libro.autor}
            </li>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </ul>
    </div>
  );
}

export default BuscadorLibrosPage;
