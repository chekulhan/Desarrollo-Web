import React, {useState} from 'react';

{/* 
  Demo de clase
  Mostrar el componente en una página  <MiPromesa num={-1} />
*/}

const MiPromesa = ({num}) => {
  const [resultado, setResultado] = useState(null);

  const calcularTotal = (n) => {
    
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            if (n<0) {
              reject('Numero es negativo');
            }
            else {
              resolve(n*2); // Aplicar calculo
            }
        }, 2000)


    })

   

  }

  const handleClick = () => {
    // Ejecutar como Promesa
    // calcularTotal(num);

    calcularTotal(num)
      .then(data=> {
        setResultado(data);
      })
      .catch(err => console.error(`Ha habido un error ${err}`))

  };

  return (
    <div>
      <h1>Creación de una promese</h1>
      {resultado && <p>Resultado es {resultado}</p>}
      <button onClick={handleClick}>Promesa</button>
    </div>
  );
};

export default MiPromesa;
