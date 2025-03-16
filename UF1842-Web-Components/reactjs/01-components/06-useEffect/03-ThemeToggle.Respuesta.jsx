import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  // Get the theme from localStorage, defaulting to 'light' if none is found
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Update localStorage whenever the theme changes
    localStorage.setItem('theme', theme);
    
    // Apply the theme to the document's body
    document.body.className = theme;
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
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
