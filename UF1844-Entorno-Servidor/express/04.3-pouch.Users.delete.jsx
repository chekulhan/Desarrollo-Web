import React, { useEffect, useState } from 'react';

const UsersAll = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("using effect");
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

  const deleteUser = async (userId) => {
    setIsLoading(true); // Set loading to true when starting the deletion process

    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
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
            <button
              onClick={() => deleteUser(user._id)}
            >
            DELETE
            </button>
          </div>
        ))
      )}
    </>

  );
};

export default UsersAll;