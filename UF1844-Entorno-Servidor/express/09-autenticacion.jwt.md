# Login 
Antes de hacer login, confirmar que has hecho lo de bcrypt en 07-bcrypt. Hecho con Node.js. 

```bash
npm install jsonwebtoken bcryptjs
```


Login API y ruta protegida:
```jsx

import { Router } from 'express';
import db from '../db.js';  // importar PouchDB
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../middleware/login.js';

// Dummy user (normally from a DB)
const users = [
   // { id: 1, username: 'admin', password: bcrypt.hashSync('password', 10) }
   { id: 1, username: 'admin', password: 'password' },
   { id: 2, username: 'mary', password: 'password2' }
  ];

const router = Router();

const JWT_SECRET = '12345'; 

//login route 
//curl -X POST http://localhost:5000/api/v1/login  -H "Content-Type: application/json"  -d '{"username":"admin", "password":"password"}'
//{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3NDQ5MTEyMTIsImV4cCI6MTc0NDkxNDgxMn0.gSgpWcF9O43rZJVDWf9xjbRsuALGBcJH6jjfvLvmNos"}

router.post('/', async (req, res) => {

    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user || (password != user.password)) {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log({userId: user.id, username: user.username});

    const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: '1h' },
        { algorithm: 'HS256' } 
    )
        
    res.json({ token });

  });
  

// curl http://localhost:5000/api/v1/login/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3NDQ5MTEyMTIsImV4cCI6MTc0NDkxNDgxMn0.gSgpWcF9O43rZJVDWf9xjbRsuALGBcJH6jjfvLvmNos"
router.get('/profile', authenticateToken, (req, res) => {
  // req.user is now available
  res.json({
      message: 'Welcome to the protected route!',
      user: req.user
  });
});

  
export default router;

```



Login Middleware
```jsx

import jwt from 'jsonwebtoken';

const JWT_SECRET = '12345';

export function authenticateToken(req, res, next) {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // attach user to request
    next();
  });
}

```

## ReactJS Ejemplo 

```jsx
export async function login(username, password) {
  const res = await fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) throw new Error('Login failed');
  
  const data = await res.json();
  localStorage.setItem('token', data.token);  // store token
  return data;
}
```

```jsx
export async function getProfile() {
  const token = localStorage.getItem('token'); // guardar token en local storage

  const res = await fetch('http://localhost:3000/api/v1/login/profile', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error('Unauthorized');
  
  return res.json();
}

```

Ejemplo componente:

```jsx
import React, { useState } from 'react';
import { login, getProfile } from './api';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);

  const handleLogin = async () => {
    try {
      await login(username, password);
      const data = await getProfile();
      setProfile(data);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      {profile && (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}
    </div>
  );
}

export default LoginForm;

```

