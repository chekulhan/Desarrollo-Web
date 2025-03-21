import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(null);

  // Funcion para sumar
  const sumar = (a, b) => {
    return a + b;
  };

  // Funcion para restar

  // Funcion para multiplicar

  // Funcion para dividir
  
  // Funcion - clasificar numero como 'positivo', 'negativo' o 'zero'


  // Funcion para calcular la media de un Array - avanzado
  const calcularMedia = () => {
    let notas = [1, 10, 20];
    // usar notas.length para conseguir la cantidad de elementos
    // Iterar por el array de notas, para calcular la media (average) al final
  }

  // Funcion para clasificar una nota - usar switch
  // Si la nota >= 90 => 'A'
  // Si la nota >= 80 => 'B'
  // Si la nota >= 50 => 'C'
  // Si la nota <= 49 => 'Suspenso'



  // Manejo de los clicks de botones
  const agregarNumeros = () => {
    setResultado(sumar(num1, num2)); // Usar la funcion para sumar
  };


  return (
    <div>
      <h2>Basic Math Operations</h2>

      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Introducir el primer numero"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Introducir el segundo numero"
        />
      </div>

      <button onClick={agregarNumeros}>Agregar Numeros</button>
    

      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
};

export default Calculadora;
