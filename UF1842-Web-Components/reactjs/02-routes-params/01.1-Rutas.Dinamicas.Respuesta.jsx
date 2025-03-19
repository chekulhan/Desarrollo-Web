import React from 'react';
import { useParams } from 'react-router-dom';

// Lista de usuarios simulada
const usuarios = [
  { id: 1, nombre: 'Juan Pérez', edad: 28 },
  { id: 2, nombre: 'Ana García', edad: 34 },
  { id: 3, nombre: 'Carlos López', edad: 22 },
];

function UserDetail() {
  // Obtener el parámetro 'id' de la URL
  const { id } = useParams();
  
  // Buscar el usuario correspondiente al id
  const usuario = usuarios.find(u => u.id === parseInt(id));

  if (!usuario) {
    return <h2>Usuario no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Edad:</strong> {usuario.edad}</p>
    </div>
  );
}

export default UserDetail;
