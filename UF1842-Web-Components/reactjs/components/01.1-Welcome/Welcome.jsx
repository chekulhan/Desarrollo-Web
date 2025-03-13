import React from 'react';
import styles from './Welcome.module.css'


const Welcome = ({age}) => {
    const name = 'Mike';

    const numbers = [1, 2, 3, 4, 5];

    const handleClickEvent = () => {
        console.log('CLick event');
    };

    return (
        <>
            <p className={styles.welcomeText}>Welcome {name} - {age} </p>
        
            <ul>
                {numbers.map((number, index) => (
                    <p key={index} className={styles.numberText}>{number}</p>
                ))}
            </ul>

            <button onClick={() => console.log('Clicking') }>Click Me</button>
            <button onClick={handleClickEvent}>Click Me event</button>
        </>

    );

}

export default Welcome;