import React, { useState, useEffect } from 'react';
import './MovingObjectGame.css'; // Import the CSS for animations and positioning

const MovingObjectGame = () => {
  // TO DO: useState para gestionar la puntuacion (score)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Generar una posicion aleatoria - devuelve un objeto con x/y
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 80) + '%'; // Random x position (0-80%)
    const y = Math.floor(Math.random() * 80) + '%'; // Random y position (0-80%)
    return { x, y };
  };

  
  const moveObject = () => {
      // TO DO: Crear una funcion para mover el objeto, asignando un valor aleatorio a la posicion
  };


  const handleClick = () => {
    // TO DO: Incrementar la puntuacion (score) y mover el objeto a otra posicion aleatoria
  };

  
  // TO DO: Al comenzar, asignar una posicion al objeto aleatoria


  return (
    <div className="game-container">
      <h1>Click the Moving Object!</h1>
      <p>Score: {score}</p>
      <div className="game-area">
       
        <div
          className="moving-object"
          style={{ top: position.y, left: position.x }}
          onClick={handleClick}
        >
          
        </div>
       
      </div>
    </div>
  );
};

export default MovingObjectGame;
