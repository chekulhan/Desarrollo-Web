import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

{/*

 Buscador con URL - Incluir en el App.js:
 <Route path="/buscar" element={<BuscadorResultadoPage />} />

  encodeURIComponent = caracteres especiales &, =, ?, #, /, ... se cambia a una representacion de URL. Por ejemplo:
  & → %26
  ? → %3F
  = → %3D
  # → %23
  / → %2F
*/}

function Buscador() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleBuscar = () => {
    if (query.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <h1>Buscar Coches</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribir un nombre de coche..."
      />
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
}

export default Buscador;
