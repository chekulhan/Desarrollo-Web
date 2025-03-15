
# Routes
Para más informacion: https://blog.webdevsimplified.com/2022-07/react-router/

```bash
npm install react-router-dom

```

*Usando version 6*

En Index.js, configurar el sistema de Routes:

`<BrowserRouter>`: Este componente envuelve toda la aplicación y habilita el enrutamiento utilizando la API de historial de HTML5. Aplicar a index.js

En App.js
`<Routes>` y `<Route>`: Este componente se usa para definir una ruta en una URL específica. Cuando la URL coincide con el path de la ruta, se renderiza el componente correspondiente.
path="/": Esto coincide con la URL raíz (/).
exact: Asegura que la ruta coincida exactamente con la URL.

`<Link>`: Se usa para crear enlaces de navegación. Cuando haces clic en un enlace, cambia la URL y renderiza el componente correspondiente a esa ruta.

**Ejemplo de index.js**

```jsx
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </React.StrictMode>
);
```

**Ejemplo de App.js:**

```jsx
import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
 
  return (
    <>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
    </>
  );
}

export default App;

```

**Navbar y Links:**

```jsx
<Link to="/about">About Us</Link>
```


**Redirect y routas dinámicas:**

```javascript

import { Redirect } from 'react-router-dom';

// To redirect a user programmatically
if (!userLoggedIn) {
  return <Redirect to="/login" />;
}

```

Estructura de proyecto React con pages:
```bash
my-react-app/
└── src/
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Dashboard.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Button.jsx
    ├── layouts/
    │   ├── MainLayout.jsx
    │   ├── AuthLayout.jsx
    ├── assets/
    ├── hooks/
    │   ├── useAuth.js
    │   ├── useFetch.js
    ├── context/
    │   ├── AuthContext.jsx
    │   ├── ThemeContext.jsx
    ├── services/
    │   ├── api.js
    │   ├── authService.js
    ├── store/
    │   ├── store.js
    ├── utils/
    │   ├── helpers.js
    │   ├── formatDate.js
    ├── App.jsx
    ├── main.jsx
```


**Images**
Optimizado por webpack

```
my-react-app/
│── src/
│   ├── assets/
│   │   ├── logo.png  ✅ Place the image here
│   ├── components/
│   │   ├── Navbar.jsx
│   ├── pages/
│   ├── App.jsx
│── public/
│   ├── index.html
```

✅ Webpack processes and optimizes images in src/assets/.
✅ When imported, Webpack includes the image in the build output.
✅ Better for performance and modularity (tree-shaking).
But if you want to use public/, reference the image like this:

```jsx
<img src="/logo.png" alt="Logo" />
```
(No need to import when using public/).

**Routes Protegidas**

Ejemplo de componente protegido:

```jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = false;  // Change this to your actual auth state

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;


```

```jsx
    <Route
      path="/dashboard"
      element={<ProtectedRoute element={<Dashboard />} />}
    />
```



## Actividad
- Agregar las páginas (pages) al menu.