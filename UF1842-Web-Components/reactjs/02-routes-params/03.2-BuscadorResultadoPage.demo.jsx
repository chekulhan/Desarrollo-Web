import React from "react";
import { useSearchParams } from "react-router-dom";

function BuscadorResultadoPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // Leer el querystring

  const coches = ['BMW', 'Ferrari', 'Toyota'];
  const filteredCoches = coches.filter(coche => coche.toLowerCase().includes(query.toLowerCase())) 

  return (
    <div>
      <h1>Resultados de tu buscada</h1>
      {query ? <p>Showing results for: <strong>{query}</strong></p> : <p>No ha habido una busqueda.</p>}

       {/* Mostrar coches filtrados */}
       <ul>
        {filteredCoches.length > 0 ? (
          filteredCoches.map((coch, index) => <li key={index}>{coch}</li>)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </ul>

    </div>
  );
}

export default BuscadorResultadoPage;
