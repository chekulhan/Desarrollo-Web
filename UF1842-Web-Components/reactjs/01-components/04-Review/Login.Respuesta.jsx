import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'Jon' && password === 'password') {
      setLoggedIn(true);
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className={styles.loginForm}>
      {loggedIn ? (
        <div className={styles.loggedInMessage}>
          <h2>Welcome, {username}!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            required
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

export default Login;
