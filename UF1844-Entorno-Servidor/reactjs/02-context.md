# ¿Qué problema resuelve Context API?
En aplicaciones React más grandes, a menudo necesitas compartir datos entre varios componentes. Cuando pasas props manualmente a través de muchos niveles de componentes, este proceso se conoce como *prop drilling*.

**Prop drilling** ocurre cuando tienes que pasar datos de un componente de nivel superior a un componente más profundo, pasando estos datos a través de varios componentes intermedios que no necesitan esos datos. Esto puede hacer que tu código sea más difícil de mantener y escalar.

Context API resuelve este problema al permitirte compartir datos globales entre componentes sin necesidad de pasar props manualmente en cada nivel de la jerarquía de componentes.

# 🚀 ¿Qué es Context API?
Context API es una característica de React que proporciona una forma de compartir datos entre componentes sin tener que pasar props de un componente a otro, a través de toda la jerarquía. Es útil cuando tienes información global que varios componentes de diferentes niveles necesitan acceder, como el tema, la autenticación de usuario o el idioma de la aplicación.

# 🧩 ¿Cómo funciona Context API?
Context API se basa en tres elementos fundamentales:

1. createContext(): Crea el contexto que se compartirá entre los componentes.

2. Provider: El componente que provee los valores del contexto a los componentes hijos.

3. useContext(): Un hook que permite a los componentes hijos acceder a los valores del contexto.

# Alternativas a Context API:
Redux, Recoil, Zustand, MobX

# ¿Cuándo usar cada opción?
- Context API: Ideal para aplicaciones pequeñas o medianas, donde el estado no cambia con frecuencia y no necesitas un manejo complejo del estado. Perfecto para compartir datos globales como el tema, el idioma o la autenticación.

- Redux: Mejor para aplicaciones grandes y complejas, donde el estado es muy dinámico y necesitas una estructura más robusta y predecible.

- Recoil / MobX / Zustand: Alternativas más ligeras a Redux, recomendadas si necesitas algo más sencillo pero eficiente para aplicaciones medianas a grandes, sin la complejidad de Redux.



## Ejemplo con el profesor

Vamos a simular un ejemplo para mostrar el problema de **"prop drilling"**.


```jsx

const ChildComponent = ({message}) => {
  return (
    <div>
      <h1> Soy un hijo componente </h1>
      <h2>{message}</h2>  
    </div>
  )
};

const ParentComponent = ({message}) => {

  return (
    <div>
      <h1> Soy el padre componente </h1>
      <h2>{message}</h2>
      <ChildComponent message={message} />
    </div>
  );
}

function PropDrillingHomePage() {

    const message = "Hello everyone!";
    
    return (
        <div>

        <ParentComponent message={message} />
        </div>
    );
}
export default PropDrillingHomePage;


```


# Solución con Context API

```jsx
import React, {createContext, useContext} from 'react';

const MessageContext = createContext();

const ChildComponent = () => {
  // Acceder la variable con UseContext
  const message = useContext(MessageContext);
  return (
    <div>
      <h1> Soy un hijo componente </h1>
      <h2>{message}</h2>  
    </div>
  )
};

const ParentComponent = () => {
   // Acceder la variable con UseContext
  const message = useContext(MessageContext);
  return (
    <div>
      <h1> Soy el padre componente </h1>
      <h2>{message}</h2>
      <ChildComponent />
    </div>
  );
}

function HomePage() {

  const message = "Hello everyone!";

  return (
    // Envolver los componentes con MessageContext
    <MessageContext.Provider value={message} >
        <div>
        <h2>Welcome</h2>


        <ParentComponent />
        </div>
    </MessageContext.Provider>
  );
}
export default HomePage;

```


# Actividad
El siguiente código utiliza *prop drilling*, es decir, pasa los props manualmente a través de múltiples componentes.
Tu tarea es refactorizar este código para usar React *Context API*, de modo que los componentes Navbar y Dashboard puedan acceder directamente al theme y a la función toggleTheme sin necesidad de recibirlos como props.


```jsx

import React, { useState} from 'react';


// Navbar toggles the theme
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{ padding: "1rem", background: theme === "dark" ? "#222" : "#eee" }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
};

const Dashboard = ({ theme }) => {
  return (
    <div
      style={{
        padding: "2rem",
        background: theme === "dark" ? "#333" : "#fafafa",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h2>Dashboard</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
};



const Layout = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Dashboard theme={theme} />
    </>
  );
};



const DashboardPage = () => { 

  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (

   
    <div>
      <Layout theme={theme} toggleTheme={toggleTheme} />
   
    </div>
   
  );
}
export default DashboardPage;

```


## Respuesta
```jsx
import React, {useContext, createContext, useState} from 'react';


// Navbar toggles the theme
const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <nav style={{ padding: "1rem", background: theme === "dark" ? "#222" : "#eee" }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
};

const Dashboard = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "2rem",
        background: theme === "dark" ? "#333" : "#fafafa",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h2>Dashboard</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
};



const Layout = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
};


const ThemeContext = createContext();

const DashboardPage = () => { 

  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (

    <ThemeContext.Provider value={{theme, toggleTheme}} >
      <div>
        <Layout />
    
      </div>
    </ThemeContext.Provider>
   
  );
}
export default DashboardPage;
```

OJO: Cuando usamos diferentes páginas, se separa el contexto API asi:

```makefile
src/
│
├── context/
│   └── ThemeContext.js  👈 define and export context here
│
├── components/
│   ├── Navbar.js
│   ├── Dashboard.js
│   └── Layout.js
│
├── pages/
│   └── DashboardPage.js
│
└── App.js
```

ThemeContext.js

```jsx
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
```

Dashboard,js
```jsx
import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Layout from "../components/Layout";

const DashboardPage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
};

export default DashboardPage;
```


y donde se usa, en los componentes:
```jsx
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // ...
};

```
