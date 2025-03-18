// Modificar el componente para que tenga un botón que permita incrementar el contador en 1, 
// otro botón que permita decrementar el contador en 1 
// y un tercer botón que permita resetear el contador a 0. 
// El contador no puede ser menor a 0.

import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);  // Initial state is 0

  // Increment the counter
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    console.log('Incremented:', count + 1);
  };

  // Decrement the counter
  const handleDecrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);  // Prevent going below 0
    console.log('Decremented:', count - 1);
  };

  // Reset the counter to 0
  const handleReset = () => {
    setCount(0);
    console.log('Counter reset');
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterApp;
