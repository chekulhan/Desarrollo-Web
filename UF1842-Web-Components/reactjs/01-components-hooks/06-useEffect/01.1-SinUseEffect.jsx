import React, { useState, useEffect } from 'react';

const SinUseEffect = () => {
  const [usuario, setUsuario] = useState({});

  console.log('renderizando');

  useEffect(() => {

    console.log('use effect');

    fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(response=>{
            if (!response.ok) {
                throw new Error('User not found'); 
            } 
            return response.json();
        })
        .then(data =>{
            
            console.log('Actualizado estado de usuario');
            setUsuario(data);  // OJO! - renderizar el componente de nuevo
        })
        .catch(error => {
            console.log(error);
        })
                
  }, []);
  

  return (
    <>
      <h1>Sin useEffect</h1>
      <p>Tarea: !Quitar el uso de useEffect y ver lo que ocurre!</p>
    
    {usuario.name && 
      <div>
        USUARIO:
          {usuario.email}<br/>
          {usuario.name}<br/>
          {usuario.website}<br/>
      </div>
    }
    
  </>
  );
};

export default SinUseEffect;
