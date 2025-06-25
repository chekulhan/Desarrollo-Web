import React from 'react';

export default function ErrorDemo1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // cuando pasas 10, volver a 0. Máximo 10
  useEffect(() => {
      setCount(0);
  }); 

  // incrementar el valor por 2
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1); 
  };

  return (
    <div>
      <h2>React con errores comunes</h2>
      <p>Count: {count}</p>
      <button onClick=increment();>Incrementar dos veces</button>

      <p>Texto ingresado: {text}</p>

      <input
        type="text"
        placeholder="Escribe aquí"
        value={text}
      />

    </div>
  );
}
