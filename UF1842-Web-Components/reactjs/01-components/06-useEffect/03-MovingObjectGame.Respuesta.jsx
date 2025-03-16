import React, { useState, useEffect } from 'react';
import './MovingObjectGame.css'; // Import the CSS for animations and positioning

const MovingObjectGame = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Generate random position for the object within the container
  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * 80) + '%'; // Random x position (0-80%)
    const y = Math.floor(Math.random() * 80) + '%'; // Random y position (0-80%)
    return { x, y };
  };

  // Move the object to a random position on every score update
  const moveObject = () => {
    setPosition(getRandomPosition());
  };

  // Handle object click: increase score and move the object
  const handleClick = () => {
    setScore(prevScore => prevScore + 1);
    moveObject();
  };

 useEffect(() => {
    moveObject(); // Start with a random position when the game loads
  }, []);

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
