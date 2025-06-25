import React, { useState, useEffect } from 'react';

export default function ErrorDemo1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // cuando pasas 10, volver a 0. Máximo 10
  useEffect(() => {
    if (count > 10) {
      setCount(0);
    }
  }, [count]); 

  // incrementar el valor por 2
  const incrementCorrect = () => {
    setCount(prev => prev + 2);
  };

  return (
    <div>
      <h2>React sin errores comunes</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCorrect}>Incrementar dos veces</button>

      <p>Texto ingresado: {text}</p>
      <input
        type="text"
        placeholder="Escribe aquí"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

    </div>
  );
}
