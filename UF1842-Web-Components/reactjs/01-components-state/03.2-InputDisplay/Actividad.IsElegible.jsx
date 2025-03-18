import React, {useState} from 'react';

const IsElegibleParaDiscoteca = () => {


    const handleEdadChange = (event) => {
        
    }

    const verificarEdad = () =>{
        
    }

    return (
        <>
            <div>Elegible</div>

            <input
                type="number"
                value={edad}
                onChange={handleEdadChange}
                placeholder="Introducir tu edad"
            />

            <button>Verificar Edad</button>
            
            <div>{mensaje}</div>
        </>
    )
};

export default IsElegibleParaDiscoteca;