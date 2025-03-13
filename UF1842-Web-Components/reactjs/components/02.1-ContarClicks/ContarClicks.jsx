import React, {useState} from 'react';

const ContarClicks = () => {
    const [clicks, setClicks] = useState(0);

    const handleClicks = () => {

        setClicks(clicks + 1); // Se puede mejorar con callback() en futuro
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