import { useState } from "react";

export default function Equipo() {
  const [jugadores, setJugadores] = useState(["Messi", "Ronaldo", "Neymar"]);
  const [nuevoJugador, setNuevoJugador] = useState("");

  // TO DO: Crear una funcion para agregarJugador usando spreading

  const eliminarJugador = (nombre) => {
    setJugadores(jugadores.filter(jugador => jugador !== nombre)); 
  };

  return (
    <div>
      <h2>🏆 Equipo de Fútbol</h2>
      <ul>

        {/* TO DO: 
        Usando jugadores.map, mostrar todos los elementos del array.
        Incluir dentro del bucle, para eliminar un jugador: 
            <button onClick={() => eliminarJugador(jugador)}>❌</button>
        */}
       
      </ul>

      <input 
        type="text" 
        placeholder="Nombre del jugador" 
        value={nuevoJugador} 
        onChange={(e) => setNuevoJugador(e.target.value)} 
      />

       {/* 
       TO DO: 
          Agregar un boton para ejecutar la funcion agregarJugador
      */}
      
    </div>
  );
}
