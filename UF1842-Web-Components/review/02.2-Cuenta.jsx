import React, { useState, useRef } from 'react';
import CuentaBancaria from '../services/CuentaBancaria';

// Definimos la cuenta FUERA del componente
// Opcion 1
const cuenta = new CuentaBancaria(0); // Solo se crea una vez - se podria usar useRef tambien!

const Cuenta = () => {
  const cuentaRef = useRef(new CuentaBancaria(0)); // ✅ // Opcion 2: Persistir a lo largo de los renders
  
  const [saldo, setSaldo] = useState(cuentaRef.current.saldo);  //opcion 1: cuenta.saldo
  const [valor, setValor] = useState(0);
  const [error, setError] = useState("");

  const handleDeposito = () => {
    setError("");
    setSaldo(cuenta.depositar(Number(valor)));
  }

  const handleRetiro = () => {
    setError("");
    try {
        setSaldo(cuenta.retirar(Number(valor)));
    } catch (error) {
        setError(error.message);
    }
    
  }

  return (
    <div>
      <h2>Cuenta Bancaria</h2>
      <p>Saldo: ${saldo}</p>
      <input type="number" onChange={(e) => setValor(e.target.value)} value={valor} />
      <br />
      <button onClick={handleDeposito}> + (depositar)</button>
      <button onClick={handleRetiro}> - (retirar) </button>

      {error && <p >{error}</p>}
    </div>
  );

};

export default Cuenta;
