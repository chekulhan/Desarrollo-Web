import React, { useEffect, useState } from 'react';

const UsersAll = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the message from the Express API
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // Set the message to state
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      })
      .finally(() => {
        setIsLoading(false);  // Set loading to false once data is fetched or error occurs
      });
  }, []); // Empty dependency array, so it runs once when the component mounts

  return (
    <>
      <h1>Users from Express:</h1>
      {isLoading ? (  // Check if data is still loading
        <p>Loading...</p>  // Show loading message while fetching data
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Type: {user.type}</p>
          </div>
        ))
      )}
    </>

  );
};

export default UsersAll;