# Login y State Management


JWT or Passport ???? TO DO???
## Backend
```bash
npm install passport passport-local bcryptjs express-session
```

- passport: Middleware for authentication.

- passport-local: Strategy for username/password authentication.

- bcryptjs: Library to hash passwords.

- express-session: To manage user sessions.

Backend API: TO DO

```js

const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const port = 5000;

// Dummy user database (use a real database in production)
const users = [
  { id: 1, username: 'user1', password: '$2a$10$zj9FwQ2XqVYr8Q0InU2fVe0Dgy5qz5ZwfmPSyk9P0cu7K6VeKn4sq' }, // Password is 'password123'
];

passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(u => u.username === username);
  if (!user) return done(null, false, { message: 'Incorrect username' });

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) return done(err);
    if (!isMatch) return done(null, false, { message: 'Incorrect password' });
    return done(null, user);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Login route
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: false,
}));

// Protected route
app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Please log in' });
  }
  res.json({ message: 'Welcome to the dashboard!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

```

ReactJS Login Componeont:

```jsx

import React, { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request using fetch
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // To include cookies (session ID)
      });

      if (response.ok) {
        // If login is successful, set authentication state
        setIsAuthenticated(true);
      } else {
        // If login fails, display error message
        const result = await response.json();
        setError(result.message || 'Invalid username or password');
      }
    } catch (err) {
      // Handle error if request fails
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;



```

Componente padre:

```jsx
import React, { useState } from 'react';
import Login from './Login'; // Assuming Login is in a different file
import Dashboard from './Dashboard'; // Protected content for authenticated users

const App = () => {
  // Create state to track whether the user is authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        // Show Dashboard or protected content when authenticated
        <Dashboard />
      ) : (
        // Show Login form when not authenticated
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
};

export default App;
```