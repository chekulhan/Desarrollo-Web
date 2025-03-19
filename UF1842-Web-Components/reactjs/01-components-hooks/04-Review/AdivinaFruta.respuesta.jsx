import React, { useState } from 'react';

function AdivinaFruta() {
  const frutaSecreta = "manzana"; // Fruta fija para simplificar el juego
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [intento, setIntento] = useState(0);

  const handleGuessChange = (e) => {
    setGuess(e.target.value.toLowerCase());
  };


  const handleSubmit = () => {

    const nuevoIntento = intento + 1;  
    console.log(nuevoIntento);
    setIntento(nuevoIntento); // useState are asynchronous

    if (guess === frutaSecreta) {
      setFeedback(`¡Correcto! La fruta era "${frutaSecreta}". Lo lograste en ${nuevoIntento} intentos.`);
    } else {
      setFeedback('Incorrecto. Intenta de nuevo.');
    }

    if (nuevoIntento >= 3) {
      setFeedback('Buena suerte la prozima vez!');
      return;
    }
   

    
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>🍎🍌🍓🍊 Adivina la Fruta</h1>
      <p>¿Cuál es la fruta secreta?</p>
      <input 
        type="text" 
        value={guess} 
        onChange={handleGuessChange} 
        placeholder="Escribe el nombre de una fruta"
        style={{ padding: '5px' }}
      />
      <button onClick={handleSubmit} style={{ padding: '5px 10px', marginLeft: '10px' }}
      disabled={intento>=3}
      >
        Adivinar
      </button>
      <button onClick={()=> setIntento(0)} style={{ padding: '5px 10px', marginLeft: '10px' }}>
        Resetear
      </button>
      <p>{feedback}</p>
      <p>Intentos: {intento}</p>
    </div>
  );
}

export default AdivinaFruta;
