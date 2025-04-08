import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

function UserFormUpdateComponent() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [pouchId, setPouchId] = useState('');
  const [pouchRev, setPouchRev] = useState('');

  const {id} = useParams();


  useEffect(()=> {
    const fetchData = async () => {
      console.log("fired");
      const res = await fetch(`http://localhost:5000/api/v1/users/${id}`);
 
      const data = await res.json();
      if (data) {
        setNombre(data.nombre);
        setEdad(data.edad);
        setPouchId(data._id);
        setPouchRev(data._rev);
      } 
      

      console.log(data);
    }

    console.log("firing");
    fetchData();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = { 
      nombre, 
      edad: parseInt(edad), 
      _id: pouchId,    // The document ID
      _rev: pouchRev    // The document revision (to prevent conflicts)
    };

    try {
      const res = await fetch('http://localhost:5000/api/v1/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(existingUser),
      });

     console.log(res);
      if (res.ok) {
        alert('User added!');
        console.log(res);
        setNombre('');
        setEdad('');
        setPouchId(res._id); 
        setPouchRev(res._rev);
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

export default UserFormUpdateComponent;
