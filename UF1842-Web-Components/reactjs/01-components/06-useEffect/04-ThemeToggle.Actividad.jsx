import React, { useState, useEffect } from 'react';

// Recordar, el localStorage tiene un getter y un setter
// localStorage.getItem('clave');
// localStorage.setItem('clave', 'valor');


function ThemeToggle() {

  const [theme, setTheme] = useState(
      // TO DO: Conseguir el valor de la clave 'theme' en localStorage
  );

  useEffect(() => {
    // TO DO: Actualizar el valor del key 'theme' en localStorage
    

    
    // Aplicar el theme a todo
    document.body.className = theme; 
    
    // TO DO: Opcional: incluir los themes body.light y body.dark en el Index.css
    
  }, [theme]); // Runs every time the theme changes

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Definir estilos para los themes
  const lightStyle = {
    backgroundColor: '#ffffff',
    color: '#333333',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const darkStyle = {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div style={theme === 'light' ? lightStyle : darkStyle}>
      <h1>{`Current theme: ${theme}`}</h1>

      {/*  TO DO: Incluir un boton para ejecutar la funcion toggle */}
     
    </div>
  );
}

export default ThemeToggle;
