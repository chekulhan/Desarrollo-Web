Use .env Files (Environment Variables)
React supports environment variables out of the box via .env files. These files allow you to store sensitive data without hardcoding it into your components. You can create a .env file in the root of your project, where you can store your API keys securely.

Steps to store API keys:

Create a .env file at the root of your React project (same level as src).

Add your API keys in the .env file like so:

bash
Copiar
Editar
REACT_APP_API_KEY=your-api-key-here
Note: It's important that all environment variables used in React begin with REACT_APP_. React will only expose environment variables that start with REACT_APP_ to the app at build time.

Access the API key in your React components using process.env.REACT_APP_API_KEY:

javascript
Copiar
Editar
const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);  // This will print your API key to the console
Important: Make sure to never commit your .env file to a public Git repository. Add it to .gitignore to prevent accidental exposure.

2. Backend Server (For Sensitive Operations)
Since React is a client-side framework, anything stored in the frontend (including API keys) can be exposed to users via the browser's developer tools. Therefore, for critical operations like calling third-party APIs that require authentication (e.g., accessing user data), you should route requests through your backend server. This way, your API keys are never exposed in the frontend.

Steps:

Set up a backend (e.g., using Express.js, Flask, Django, etc.).
Store the API keys on the backend (e.g., in environment variables or a configuration file).
Create endpoints on the backend that make the necessary API requests using the API keys.
In your React app, make requests to your backend instead of directly to the third-party API.
Example:

Backend (Node.js/Express):

javascript
Copiar
Editar
// server.js
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  const apiKey = process.env.API_KEY; // API key is stored securely in the backend
  fetch(`https://exampleapi.com/data?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
});

app.listen(3000, () => console.log('Server running on port 3000'));
React frontend:

javascript
Copiar
Editar
const getData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
};

useEffect(() => {
  getData();
}, []);