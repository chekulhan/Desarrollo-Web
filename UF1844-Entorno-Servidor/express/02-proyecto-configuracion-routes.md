# Configuración de un proyecto REACT

```bash
npm install react-router-dom
```


**Estructura del sistema de Routes **

| Ruta                      | Descripción                           |
|---------------------------|---------------------------------------|
| `/`                       | Home page                 |
| `/users`                  | Mostrar la lista de todos los usuarios |
| `/users/new`              | Insertar un nuevo usuario             |
| `/users/:id/edit`         | Editar un usuario existente. Se puede usar para /profile también          |


**Estructura de Páginas y Componentes**
```cpp
src/
├── App.jsx
├── pages/
│   ├── UserListPage.jsx         // mostrar todos los usuarios
│   └── UserFormInsertPage.jsx         // podriamos usarlo para insertar y modificar
├── components/
│   └── UserForm.jsx             // reusable form component

```

Definimos las rutas en el App.js

```jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import UserListPage from './pages/UserListPage';
import UserFormInsertPage from './pages/UserFormInsertPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:id/edit" element={<UserFormInsertPage />} />  {/* No implementado */}
        <Route path="/users/new" element={<UserFormInsertPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


```

Ejemplo de páginas:
```jsx
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import UsersAll from '../components/UsersAll';

function UsersListPage() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

  return (
    <div>
      <h2>Welcome to users page</h2>

      <UsersAll />

      <Button variant="contained" color="primary" onClick={goToHome}>
        Home
      </Button>
    </div>
  );
}
export default UsersListPage;

```

Ejemplo de componentes:
```jsx
import React, { useEffect, useState } from 'react';
import {Button, Box, CircularProgress} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UsersAll = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    console.log("using effect");
    // Fetch the message from the Express API
    fetch('http://localhost:5000/api/v1/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // Set the message to state
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      })
      .finally(() => {
        setIsLoading(false);  // Set loading to false once data is fetched or error occurs
      });
  }, []); // Empty dependency array, so it runs once when the component mounts

  const deleteUser = async (userId) => {
    setIsLoading(true); // Set loading to true when starting the deletion process
    console.log(userId);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // Include if the server expects JSON
        },
      });
      
      if (response.ok) {
        // Remove the user from the list if deletion is successful
        setUsers(users.filter(user => user._id !== userId));
      } else {
        console.error('Error deleting user');
      }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setIsLoading(false);  // Set loading to false once deletion is completed

    }
  };

    const goToInsertUsers = () => {
        navigate("/users/new");
    }

  return (
    <>
      <h1>Users from Express:</h1>


          <Button variant="contained" onClick={goToInsertUsers} >
            Insertar nuevo usuario
          </Button>


      {isLoading ? (  // Check if data is still loading
         <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <h2>{user.nombre}</h2>
            <p>Edad: {user.edad}</p>
            <p>Type: {user.type}</p>
            <Button variant="contained"
              onClick={() => deleteUser(user._id)}
            >
            DELETE
            </Button>
            

          </div>
        ))
      )}
    </>

  );
};

export default UsersAll;
```





# Form submission
Puedes envolver los componentes de entrada (como TextField) dentro de un componente Box de MUI, que en este caso se comporta como un form de HTML.

```jsx
<Box
  component="form"  // Hace que Box actúe como un formulario HTML
  onSubmit={handleSubmit}  // Se ejecuta cuando el formulario se envía
  sx={{
    maxWidth: 400,
    mx: 'auto',
    mt: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}
>
  <TextField
    label="Nombre"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
  />
  <TextField
    label="Edad"
    type="number"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    required
    inputProps={{ min: 0 }}
  />
  <Button type="submit" variant="contained" color="primary">
    Guardar usuario
  </Button>
</Box>
```

y el código para submir el formulario:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevents the default form submission behavior (refreshing the page)

  // Client-side validation
  if (!userData.name || !userData.age || userData.age <= 0) {
    console.error('Invalid input: Name and Age are required. Age must be greater than 0.');
    return;
  }

  // Handle the form data here (e.g., send it to an API con FETCH)
  console.log("Form Submitted!");
};
```