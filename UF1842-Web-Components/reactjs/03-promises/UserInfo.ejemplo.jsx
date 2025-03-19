import React, { useState } from "react";

const UserInfo = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUserData = () => {
    if (!userId) {
      setError("Por favor, ingresa un ID de usuario.");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Usuario no encontrado.");
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        setError(""); // Limpiar cualquier error previo
      })
      .catch(error => {
        setError(error.message);
        setUserData(null); // Limpiar datos previos si ocurre un error
      });
  };

  return (
    <div>
      <h1>Obtener Información de Usuario</h1>
      <input
        type="number"
        placeholder="Ingrese el ID del usuario"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchUserData}>Obtener Usuario</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <h3>Información del Usuario:</h3>
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Correo:</strong> {userData.email}</p>
          <p><strong>Teléfono:</strong> {userData.phone}</p>
          <p><strong>Dirección:</strong> {userData.address.street}, {userData.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
