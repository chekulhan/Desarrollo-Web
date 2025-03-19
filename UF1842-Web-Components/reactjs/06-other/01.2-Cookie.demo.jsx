import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CookieExample() {
  const [cookieValue, setCookieValue] = useState('');

  // Este efecto se ejecuta cuando el componente se monta, para leer la cookie.
  useEffect(() => {
    const savedCookie = Cookies.get('userName');  // Leer cookie
    if (savedCookie) {
      setCookieValue(savedCookie);
    }
  }, []);

  const handleSaveCookie = () => {
    const userName = 'Juan';  // El valor que quieres guardar en la cookie
    Cookies.set('userName', userName, { expires: 7 });  // Guarda la cookie por 7 días
    setCookieValue(userName);
  };

  const handleDeleteCookie = () => {
    Cookies.remove('userName');  // Elimina la cookie
    setCookieValue('');
  };

  return (
    <div>
      <h1>Ejemplo de uso de Cookies</h1>
      <p>Valor de la cookie: {cookieValue ? cookieValue : 'No hay cookie almacenada'}</p>
      
      <button onClick={handleSaveCookie}>Guardar cookie</button>
      <button onClick={handleDeleteCookie}>Eliminar cookie</button>
    </div>
  );
}

export default CookieExample;
