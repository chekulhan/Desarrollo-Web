import React, { useState } from 'react';
/*

DEMO: 
1 - agregar un nuevo elemento manualmente
2 - usar un input para agregar automáticamente
*/
const SpreadDemo = () => {
    const [elementos, setElementos] = useState([1, 2, 3, 4]);
    //const [num, setNum] = useState();

    const agregarElementos = () => {
        console.log('agregar');

        // nuevoArray es una referencia al mismo sitio en la memoria que elementos
        // React no detecta ningun cambio en el estado => no hace un re-renderizar
        const nuevoArray = elementos;
        nuevoArray.push(10);
        console.log(nuevoArray);
        setElementos(nuevoArray);

        // ... usando spread => React crea un nuevo Array
        // React si detecta la nueva referencia de la memoria

        //setElementos(prevElementos => [...prevElementos, 5]);
        //setElementos(prevElementos => [...prevElementos, num]);
    }

  return (
    <>
      <h1>Spread Demo</h1>
      {/*<input id="num" name="num" value={num} onChange={(e)=> setNum(Number(e.target.value))} /> */}
      <button onClick={agregarElementos}>Agregar</button>
       
        {elementos.map((elem, index) => (
            <p key={index}>{elem}</p>
        ))}
        

  </>
  );
};

export default SpreadDemo;
