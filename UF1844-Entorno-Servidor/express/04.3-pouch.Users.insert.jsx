import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function UserFormInsertComponent() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { nombre, edad: parseInt(edad) };

    console.log(newUser);
    try {
      const res = await fetch('http://localhost:5000/api/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

     console.log(res);
      if (res.ok) {
        alert('User added!');
        setNombre('');
        setEdad('');
      } else {
        alert('Failed to add user');
      }
    } catch (error) {
        console.error(error);
        alert('Server error');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: 'auto', mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <TextField
        label="Edad"
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Guardar usuario
      </Button>
    </Box>
  );
}

export default UserFormInsertComponent;