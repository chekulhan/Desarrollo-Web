import React, { useEffect, useState } from 'react';


const Polling = () => {
  const [productos, setProductos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);


  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/productos');

      if (!response.ok) throw new Error('Error en la respuesta');
      const data = await response.json();
      setProductos(data);
      

    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    /* const interval = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
        fetchProductos();
      }, 1000); // wait 1 second before fetch
    }, 5000);
    */

    fetchProductos(); // initial load

    // return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{ padding: '2rem' }}>

    {isRefreshing && (
        <div style={{ color: 'orange', marginBottom: '1rem' }}>
        Actualizando productos...
        </div>
    )}

      <h2>📦 Productos (con polling)</h2>
      {productos.map((prod) => (
        <div key={prod._id} style={{ marginBottom: '1rem' }}>
          <strong>{prod.nombreProducto}</strong> — {prod.cantidad} unidades
          
        </div>
      ))}
    </div>
  );
}

export default Polling;
