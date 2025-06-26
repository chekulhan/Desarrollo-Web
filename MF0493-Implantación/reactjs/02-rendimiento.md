# Rendimiento
Vamos a apredner algunas técnicas para mejorar el rendimiento de un proyecto front-end de ReactJs.

![ES7 Snippets](../../x-assets/MF0493/es7snippets.png)

![ES7 Snippets Example](../../x-assets/MF0493/es7snippets.example.png)

https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md



# UseMemo

useMemo es un hook de React que sirve para memorizar el resultado de una función y evitar que se vuelva a calcular si las dependencias no han cambiado.


**¿Por qué es útil?**
En React, cada vez que un componente se vuelve a renderizar, todo el código dentro de su función se ejecuta otra vez.
Si tienes una operación pesada (por ejemplo, filtrar una lista grande, hacer cálculos complejos, ordenar muchos datos), hacerlo en cada render puede hacer que la app vaya lenta.

Aquí entra useMemo: te permite que esa operación solo se ejecute cuando cambien ciertos datos de los que depende, y si no, reutiliza el resultado guardado (cacheado).



```jsx

import React, { useState} from 'react'


function sumarTo(x) {
  console.log("doing long compute");
    let total = 0;
    for (let index = 0; index < x; index++) {
      total = total + index;
    }
    return total;
}

export const  LongComput = () => {
  const [greeting, setGreeting] = useState('Hola');

  console.log("re-render");

  let longComput =  sumarTo(100);
 
  return (
    <>
      <h1>Long Comput</h1>
    
      Result is: {longComput}

      {greeting}
      <button onClick={(e)=> setGreeting('Adios')}>Greeting</button>
    </>
  )
}



```

## Solucion con UseMemo
```jsx
import React, { useEffect, useState, useMemo} from 'react'

let longComput = useMemo(() => sumarTo(100), []);
```
 

useMemo: memoriza el resultado de la función y devuelve el valor directamente dentro del render. No genera un estado adicional.

useEffect + estado: ejecuta un efecto que actualiza un estado (filteredUsers), provocando un render adicional cuando cambia.



# Lazy loading (carga perezosa)

Lazy loading (carga perezosa) es una técnica que consiste en no cargar o descargar ciertos recursos (como componentes o imágenes) hasta que realmente se necesitan.

En React, esto se usa con React.lazy y Suspense para cargar componentes bajo demanda y mejorar el rendimiento.

![Lazy Load](../../x-assets/MF0493/lazyload.png)

React.lazy(() => import('./LargeImage')) hace que el componente LargeImage se cargue solo cuando se necesite, es decir, cuando se renderice realmente.

Importar Suspense permite mostrar algo (un fallback) mientras el componente se está cargando.

React lazy + Suspense = “load this component only when you really need it” + “show fallback UI meanwhile.”

```jsx
import React, { useState, Suspense } from 'react';
const LargeImage = React.lazy(() => import('./LargeImage'));

<button onClick={() => setShowImage(true)}>Mostrar Imagen Grande</button>

<Suspense fallback={<div>Cargando imagen...</div>}>
    {showImage && <LargeImage />}
</Suspense>


```


# ¿Qué es React Query?
React Query es una biblioteca para manejar datos remotos (como APIs) en aplicaciones React. Su objetivo principal es facilitar la obtención, almacenamiento en caché, sincronización y actualización de datos que vienen de servidores o servicios externos.

¿Qué es *stale-while-revalidate*?

Es una estrategia para manejar datos en aplicaciones web que:

- Muestra datos almacenados en caché inmediatamente (aunque estén “viejos” o stale).

- Mientras tanto, hace una petición en segundo plano para obtener datos actualizados (revalidate).

- Cuando llegan los datos nuevos, actualiza la caché y la UI automáticamente.

ANTES de useQuery:

```jsx
import React, {useState, useEffect} from 'react'


const Query = () => {
    const [user, setUser] = useState({});
    const [fetched, setFetched] = useState(true);

    const fetchUser = async () => {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(result => {
            return result.json()
        })
        .then(result => {
            return result;
        });
    }

    useEffect(() => {

        const loadUser = async () => {
            const result = await fetchUser();
            setFetched(true);
            setUser(result);
        }
        
        loadUser();
    
    }, [])
    

  return (
    <>
        {fetched && (
            <div>{user.id} - {user.name}</div>
        )}
    </>
  )
}

export default Query

```

```bash
npm install @tanstack/react-query
npm install --save-dev @tanstack/react-query-devtools
```

QueryClientProvider es un componente React que provee el contexto necesario para que React Query funcione en tu aplicación.

**¿Dónde se coloca normalmente?**
En el nivel más alto posible, como en index.js o en el componente raíz (App), para que toda la app pueda usar React Query.

Cuando usas un hook como useQuery, React Query accede al contexto creado por QueryClientProvider.

El QueryClient es responsable de:

- Guardar los datos que trae cada consulta.

- Saber cuándo y cómo actualizar esos datos.

- Manejar estados como “cargando”, “error” o “éxito”.

- Coordinar refetch automático y cacheo.

```jsx
import './App.css'

import Query from './components/Query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {

  return (
    <>
       <QueryClientProvider client={queryClient}>
        <h1>Main</h1>
        <Query />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </>
  )
}

export default App
```


```js
import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(result => {
        return result.json()
    })
    .then(result => {
        return result;
    });
}


const Query = () => {

    const { data: user, isLoading, error } = useQuery({
        queryKey: ['user', 1],
        queryFn: fetchUser,
    });
    

    return (
        <>
            {isLoading && <div>Cargando...</div>}
            {error && <div>Error al cargar usuario</div>}
            {!isLoading && !error && (
            <div>{user.id} - {user.name}</div>
            )}
        </>
    )
}

export default Query
```


Version más dinámica

```jsx
import {useState} from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUser = async ({queryKey}) => {
    console.log(queryKey);
    const [, id] = queryKey;
    console.log("Fetching");
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result => {
        return result.json()
    })
    .then(result => {
        return result;
    });
}


const Query = () => {
    const [userId, setUserId] = useState(1);
    const [submittedId, setSubmittedId] = useState(1);

    const { data: user, isLoading, error } = useQuery({
        queryKey: ['user', Number(submittedId)],
        queryFn: fetchUser,
        staleTime: 10000, // 10 seconds
        //refetchInterval: 60000,
        onSuccess: () => console.log('Data fetched/refetched'),
        onError: (err) => console.error('Fetch error:', err),
    });
    

    return (
        <>
            User Id: <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
            <button onClick={() => setSubmittedId(userId)}>Get</button>

            {isLoading && <div>Cargando...</div>}
            {error && <div>Error al cargar usuario</div>}
            {!isLoading && !error && (
            <div>{user.id} - {user.name}</div>
            )}
        </>
    )
}

export default Query
```


## Actividad de Query

El API https://dog.ceo/api/breeds/image/random devuelve un mensaje en el siguiente formato:

```json
{"message":"https:\/\/images.dog.ceo\/breeds\/finnish-lapphund\/mochilamvan.jpg","status":"success"}
```
Aprovechar React Query para mostrar una nueva imagen cada 10 segundos. Usar la que esta en el cache mientras tanto.

```jsx
const fetchDog = async () => {
  console.log('Fetching dog data...');
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!res.ok) throw new Error('Network response was not ok');
  const data = await res.json();
  return data.message; // URL of a random dog image
};
```




 ## Respuestas

 ```jsx
   const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  ```