import React, { useState, useEffect } from 'react';

function UsersList() {
  // State to store the fetched users, loading status, and error message
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch data from JSONPlaceholder when the component mounts
  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })
      .then((data) => {
        setUsers(data); // Update the state with fetched users
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message); // Handle errors (e.g., network issues)
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array ensures this runs once after the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while the data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if there's an issue
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
