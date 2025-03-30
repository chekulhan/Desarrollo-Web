import React, { useEffect, useState } from 'react';

const UsersComponent = () => {
  const [users, setUsers] = useState([]); // Set initial state to an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Fetch the users from the Express API
    fetch('http://localhost:5000/api/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data); // Set the users to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError(error.message); // Handle errors
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Empty dependency array, so it runs once when the component mounts

  // Render loading, error, or the list of users
  return (
    <div>
      <h1>Users from Express:</h1>
      {loading && <p>Loading...</p>} {/* Show loading if data is being fetched */}
      {error && <p>Error: {error}</p>} {/* Show error message if there was an error */}
      {!loading && !error && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersComponent;
