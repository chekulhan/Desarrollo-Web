import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
  // Qué más variables de estado hace falta ...?

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Comprobar usuario y contraseña

    // Se es correcto, cambiar el estado de loggedIn a true

  };

  return (
    <div className={styles.loginForm}>
      {/* 
        Si el estado es loggedIn == true,
        mostrar un mensaje diciendo que esta correctamente loggedIn
      
      */}

       {/* 
        Si el estado NO es loggedIn (false),
        mostrar un un formulario  para que introduzca sus datos

        <form onSubmit={handleSubmit}>

          ....

          <button type="submit" className={styles.button}>
            Login
          </button>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        
          </form>

      */}

  
    </div>
  );
};

export default Login;
