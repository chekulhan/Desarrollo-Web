import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const VisitTracker = () => {
  const [visitCount, setVisitCount] = useState(0);


  const updateVisitCount = () => {
    // conseguir el cookie
    const currentCount = Cookies.get("visitCount");
    
    // Si existe, incrementa
    if (currentCount) {
      const newCount = parseInt(currentCount) + 1;
      Cookies.set("visitCount", newCount, { expires: 365 }); // Set cookie for 1 year
      setVisitCount(newCount);
    } else {
      // Si es la primera vez, asignarlo un valor de 1 por defecto
      Cookies.set("visitCount", 1, { expires: 365 });
      setVisitCount(1);
    }
  };

  useEffect(() => {
    updateVisitCount();
  }, []);

  return (
    <div>
      <h2>Bienvenidos!</h2>
      <p>Has visitado: {visitCount}</p>
    </div>
  );
};

export default VisitTracker;
