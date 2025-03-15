import React, {useState} from 'react';

const IsElegibleParaDiscoteca = () => {
    const [edad, setEdad] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const handleEdadChange = (event) => {
        setEdad(event.target.value);
    }

    const verificarEdad = () =>{
        if (edad >= 18) {
            setMensaje("Puedes entrar");
        }
        else {
            setMensaje("Prohibido");
        }
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

            <button onClick={verificarEdad}>Verificar Edad</button>
            
            <div>{mensaje}</div>
        </>
    )
};

export default IsElegibleParaDiscoteca;