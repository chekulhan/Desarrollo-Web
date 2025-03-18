import React from "react";

const ComponenteAccesible = () => {
    return (
      <div>
        {/* Botón accesible con soporte para teclado */}
        <button onClick={() => alert("Botón clicado")}>Enviar formulario</button>
  
        {/* Input con label asociado */}
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" type="text" aria-required="true" />
  
        {/* Imagen con descripción en alt */}
        <img src="logo.png" alt="Logotipo de la empresa" />
  
        {/* Enlace accesible con texto claro */}
        <a href="/panel-usuario">Ir al panel de usuario</a>
      </div>
    );
  };
  
  export default ComponenteAccesible;
  