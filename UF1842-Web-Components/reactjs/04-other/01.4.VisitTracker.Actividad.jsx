import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const VisitTracker = () => {

  {/* TO DO: usar un counter de useState para gestionar las veces que visita la página */}
  


  const updateVisitCount = () => {
    // TO DO: 
    // get el Cookie (get)
    
    // Si ya existe el Cookie, incrementar el contador
    // Guardar el nuevo valor en el Cookie (set) 
    
    // Si no existe, crear un Cookie (set) y asignar un valor de 1 = primera vez

  };

  // Ejecutar la funcion updateVisitCount cada rederizado
  useEffect(() => {
    
    updateVisitCount();
  }, []);

  return (
    <div>
      <h2>Bienvenidos!</h2>
     
      {/* TO DO: Mostrar las veces que ha visitado */}
    </div>
  );
};

export default VisitTracker;
