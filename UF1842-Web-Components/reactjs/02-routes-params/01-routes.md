
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
- Agregar una página de admin si el autenticacion es falso (isLoggedIn == false):

```jsx
  <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
```



## Routes dinámicas
Las rutas dinámicas en React Router permiten definir parámetros variables dentro de la URL, los cuales pueden ser utilizados para mostrar contenido específico en una página. Esto se logra usando dos puntos (:) seguidos del nombre del parámetro, como :id, en el path de la ruta. Por ejemplo, una ruta como /user/:id permitirá acceder a cualquier URL como /user/1, /user/abc, etc., y pasar el valor del parámetro id a un componente para que lo utilice, como mostrar los detalles de un usuario según su id. Esta característica es útil para crear aplicaciones con contenido dinámico, como perfiles de usuario o detalles de productos.

```jsx

<Route path="/user/:id" element={<UserPage />} />
```

y acceder a la variable dinámica en la página:
```jsx
  import { useParams } from 'react-router-dom';



  const { id } = useParams();
  
```

**useNavigate**

Onclick event for buttons

```jsx
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/new-route");
  };

  return (
    <button onClick={handleNavigation}>
      Go to New Route
    </button>
  );
};


```




**Respuestas**
Protected Route (middleware)

```jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = true;  // Cambiar para simular autenticacion

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

```