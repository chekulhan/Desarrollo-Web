

```bash

npm install react-router-dom

```

En App.js, configurar el sistema de Routes:

`<BrowserRouter>`: Este componente envuelve toda la aplicación y habilita el enrutamiento utilizando la API de historial de HTML5.

`<Route>`: Este componente se usa para definir una ruta en una URL específica. Cuando la URL coincide con el path de la ruta, se renderiza el componente correspondiente.
path="/": Esto coincide con la URL raíz (/).
exact: Asegura que la ruta coincida exactamente con la URL.

`<Switch>`: Garantiza que solo se renderice una ruta a la vez. Cuando se encuentra una coincidencia, deja de buscar otras rutas.

`<Link>`: Se usa para crear enlaces de navegación. Cuando haces clic en un enlace, cambia la URL y renderiza el componente correspondiente a esa ruta.

```javascript

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;

```


Redirect y routas dinámicas:

```javascript

import { Redirect } from 'react-router-dom';

// To redirect a user programmatically
if (!userLoggedIn) {
  return <Redirect to="/login" />;
}

```