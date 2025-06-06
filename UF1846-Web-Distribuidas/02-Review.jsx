import React, { useState } from 'react';

export default function Review() {
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const handleAddPersona = () => {
    
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add a Person</h2>
      <input
        placeholder="Name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Edad"
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <button onClick={handleAddPersona}>Add</button>

      <h3>People List:</h3>
     
    </div>
  );
}



{/*
    
    - Agregar una propiedad de email.
    
    - Al añadir una persona:
        - validar que la edad sea mayor que 0 y not null.
        - validar que el nombre no es nulo y empieza por la letra P.

    - Mostrar una lista de personas.

    - Agregar un botón para mostrar/ocultar la lista de personas. 
        - Recordar que hay que cambiar el texto del boton según el estado de la lista (mostrar/ocultar).
        - Utilizar un booleano (mostrarPersonas true/false) para controlar el estado de la lista.
    
    - Agregar un select list (drop down) con generos, 
        por ejemplo: const generos = ['hombre', 'mujer', 'binario', 'otro'];
   
    - Modificar la lista de generos con:
        const generos = [
            { key: 'h', label: 'Hombre' },
            { key: 'm', label: 'Mujer' },
            { key: 'b', label: 'Binario' },
            { key: 'o', label: 'Otro' }
            ];

    */}