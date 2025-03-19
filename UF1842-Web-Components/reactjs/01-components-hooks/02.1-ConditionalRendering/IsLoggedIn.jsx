import React from 'react';

const IsLoggedIn = ({usuario, isLoggedIn}) => {

  return (
    <div>

      {isLoggedIn ? (
        <h1>Bienvenidos, {usuario}</h1> 
      ) : (
        <h1>Por favor, iniciar sesion</h1>  
      )}

    </div>
  );
};

export default IsLoggedIn;
