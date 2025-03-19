import React from 'react';
// TO DO: importar Params


// Lista de usuarios simulada
const usuarios = [
  { id: 1, nombre: 'Juan Pérez', edad: 28 },
  { id: 2, nombre: 'Ana García', edad: 34 },
  { id: 3, nombre: 'Carlos López', edad: 22 },
];

function UserDetail() {
  // TO DO: Obtener el parámetro 'id' de la URL

  
  // Buscar el usuario correspondiente al id
  const usuario = usuarios.find(u => u.id === parseInt(id));

  if (!usuario) {
    return <h2>Usuario no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalles del Usuario</h2>
        {/* TO DO: Mostrar los detalles del usuario seleccionado */}
    </div>
  );
}

export default UserDetail;
