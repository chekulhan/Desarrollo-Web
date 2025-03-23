import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';



/*
TO DO - Incluir en index.css:

body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: #333;
  color: white;
}

*/

const CookieTheme = () => {
  // TO DO: Conseguir el valor de 'theme' del Cookie i.e. Cookies.get
  const storedTheme = ...


  // Asignar el valor inicial
  const [theme, setTheme] = useState(storedTheme);

  // Actualizar el tema cuando haya cambios en el estado de theme
  useEffect(() => {

    document.body.className = theme; // Apply theme to the body class

    // TO DO: Actualizar el valor del Cookie según el 'theme'
    

  }, [theme]);

  // 

  // TO DO: Incluir una funcion para quitar el Cookie

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark'
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      {/*  TO DO: Incluir un boton para quitar el Cookie */}
      
    </div>
  );
};

export default CookieTheme;


