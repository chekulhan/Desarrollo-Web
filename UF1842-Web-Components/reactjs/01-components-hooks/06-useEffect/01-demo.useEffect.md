# useEffect

**Historia de useEffect en React**

useEffect fue introducido en React 16.8, junto con los Hooks. Antes de los Hooks, las aplicaciones React utilizaban clases y métodos del ciclo de vida como componentDidMount, componentDidUpdate y componentWillUnmount para gestionar efectos secundarios, como peticiones a APIs, cambios en el DOM o suscripciones a eventos. Sin embargo, los componentes de clase eran más complejos y difíciles de manejar, especialmente en aplicaciones grandes.

Con la llegada de los Hooks, React simplificó este proceso al ofrecer una API más intuitiva. useEffect reemplazó a los métodos de ciclo de vida en componentes funcionales, permitiendo realizar efectos secundarios de manera declarativa y sin necesidad de escribir clases.

**Uso Común de useEffect**

El Hook useEffect se utiliza para manejar efectos secundarios en React, como las peticiones a APIs, la suscripción a eventos, la manipulación del DOM y la actualización de títulos en la página. Además, se ejecuta después de que el componente se haya renderizado, lo que lo convierte en la herramienta ideal para gestionar estos efectos.

El comportamiento básico de useEffect es que se ejecuta después de cada renderizado, pero puedes controlar cuándo debe ejecutarse pasando un array de dependencias. Si dejas el array vacío ([]), useEffect solo se ejecutará una vez, como componentDidMount en componentes de clase. Si pasas una lista de dependencias, useEffect solo se ejecutará cuando esas dependencias cambien.

```jsx
import React, { useEffect } from 'react';

function Componente() {
  useEffect(() => {
    console.log('El componente se ha montado');
  }, []); // Se ejecuta una sola vez al montar el componente

  return <h1>Hola, Mundo!</h1>;
}

export default Componente;

```

```jsx

import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('El contador ha cambiado a: ', contador);
  }, [contador]); // Se ejecuta cuando `contador` cambia

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;

```

```jsx
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []); // Se ejecuta una sola vez al montar el componente

  return (
    <div>
      <h1>Datos obtenidos</h1>
      <ul>
        {data ? data.map(item => <li key={item.id}>{item.title}</li>) : <p>Cargando...</p>}
      </ul>
    </div>
  );
}

export default FetchData;

```

**StrictMode en React y Producción**

StrictMode es una herramienta de React que ayuda a detectar problemas en el código durante el desarrollo. Cuando la aplicación se ejecuta en modo desarrollo (npm start o npm run dev), React puede llamar algunas funciones dos veces, como useEffect, para encontrar errores ocultos. Sin embargo, cuando se crea una versión para producción con npm run build, StrictMode se elimina automáticamente y la aplicación funciona sin estas verificaciones adicionales. Esto asegura que el código en producción sea más eficiente y se ejecute solo una vez sin comportamientos duplicados.


**Demo 1: (del Profesor)**

```jsx
import React, { useEffect } from 'react';

function SimpleEffect() {
  useEffect(() => {
    console.log('El componente se ha montado');
  }, []); // Se ejecuta una sola vez al montar el componente

  return <h1>Hola, Mundo!</h1>;
}

export default SimpleEffect;
```

**Demo 2: (del Profesor)**
```jsx

import React, { useState, useEffect } from 'react';

function SimpleEffect() {

  const [contador, setContador] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Cada vez que cambiamos el contador, hay efectos secundarios!
    setMessage(`Button clicked ${contador}`);
  }, [contador]); 

  return (
    <>
        <h1>Hello, useEffect!</h1>
       <div>{contador}</div>
       <div>{message}</div>
       <button onClick={()=> setContador(prevContador => prevContador+1)}>Sumar</button>
    </>
  );
}

export default SimpleEffect;



```