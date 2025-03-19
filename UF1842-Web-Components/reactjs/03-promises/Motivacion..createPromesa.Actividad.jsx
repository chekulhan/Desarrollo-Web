import React, {useState} from 'react';

const Motivacion = () => {
  const [mensaje, setMensaje] = useState(null);

  // TO DO Crear una funcion con una promesa con un mensaje de motivación - getMotivacion

  const handleClick = () => {
    // Ejecutar la promesa para conseguir un mensaje de motivación positivo
    getMotivacion()
      .then(data=> {
        setMensaje(data);
      })
      .catch(err => console.error(`Ha habido un error ${err}`))
  };

  return (
    <div>
      <h1>Mensaje de motivación </h1>
     
        {/* TO DO Mostrar el mensaje de motivación */}

      <button onClick={handleClick}>Conseguir motivación</button>
    </div>
  );
};

export default Motivacion;
