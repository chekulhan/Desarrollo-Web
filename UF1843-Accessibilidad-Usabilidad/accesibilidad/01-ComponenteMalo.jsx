import React from "react";

/*
- Permite navegación con TAB (uso correcto de <button> y <a>).
- Texto de enlace más claro ("Ir al panel de usuario").
- Imágenes con alt descriptivo.
- Campos de formulario con label asociado.
- Soporte para teclado (onKeyDown en elementos interactivos).
- Uso de role y ARIA para mejorar accesibilidad.
*/

const ComponenteMalo = () => {
  return (
    <div>

      <div onClick={() => alert("Botón clicado")}>Haz clic aquí</div>

      <input type="text" placeholder="Introduce tu nombre" />

      
      <img src="logo.png" />

  
      <div onClick={() => console.log("Ir al panel")}>Haz clic aquí</div>
    </div>
  );
};

export default ComponenteMalo;
