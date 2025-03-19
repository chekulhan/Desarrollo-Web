import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieTheme = () => {
  // Get the theme from cookies, default to 'light' if not set
  const storedTheme = Cookies.get('theme') || 'light';

  // Set initial theme based on cookie
  const [theme, setTheme] = useState(storedTheme);

  // Use effect to update the theme class on the body tag when the theme state changes
  useEffect(() => {
    document.body.className = theme; // Apply theme to the body class
    Cookies.set('theme', theme, { expires: 7 }); // Set cookie to remember the theme for 7 days
  }, [theme]);

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
    </div>
  );
};

export default CookieTheme;


{/*
  
Incluir en index.css

body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: #333;
  color: white;
}

*/}
