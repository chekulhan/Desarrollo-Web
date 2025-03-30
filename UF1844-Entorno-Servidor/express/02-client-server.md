
Vamos a crear nuestra primera interacción entre el cliente y el servidor.

Recordar, que tenemos una ruta de API en el server.js:

```javascript
// API Route Example
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
```

Construimos un componente para acceder a este ruta:
```jsx
import React, { useEffect, useState } from 'react';

const MessageComponent = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Fetch the message from the Express API
    fetch('http://localhost:5000/api/message')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message); // Set the message to state
      })
      .catch(error => {
        console.error('Error fetching the message:', error);
      });
  }, []); // Empty dependency array, so it runs once when the component mounts

  return (
    <div>
      <h1>Message from Express:</h1>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MessageComponent;
```

Y al final, usamos este componente en el programa de ReactJS


```jsx
import './App.css';
import MessageComponent from './components/MessageComponent.jsx';

function App() {
  return (
    <div className="App">
        <MessageComponent />

    </div>
  );
}

export default App;


```