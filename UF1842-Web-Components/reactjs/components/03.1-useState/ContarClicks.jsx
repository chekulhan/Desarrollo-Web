import React, {useState} from 'react';

const ContarClicks = () => {
    const [clicks, setClicks] = useState(0);

    const handleClicks = () => {

        setClicks(clicks + 1); // Se deberia mejorar con el uso de callback() - prevCount => prevCount + 1
        console.log('Clicking');
    }

    return (
        <>
            <div>Clicks: {clicks}</div>
            <button onClick={handleClicks}>Contar Clicks</button>
        </>
    )
};

export default ContarClicks;