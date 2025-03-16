import React, { useState, useEffect } from 'react';

function CambiarFondo() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default white

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // Effect runs when bgColor changes

  return (
    <div
      style={{
        backgroundColor: bgColor, // Set background color dynamically
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>El fondo de este componente cambia!</h1>
      <button onClick={() => setBgColor('#f0f8ff')}>Cambiar color</button>
      <button onClick={() => setBgColor('#ffffff')}>Restaurar color</button>
    </div>
  );
}

export default CambiarFondo;