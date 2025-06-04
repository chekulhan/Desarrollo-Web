```js
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect once


function Counter() {
  const [connected, setConnected] = useState(true);
  const [input, setInput]= useState('');
  const [counter, setCounter] = useState(0);
  const [userClicking, setUserClicking] = useState();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket');
      setConnected(true);
    });


    socket.on("isClicking", (data) => {
      console.log("user is clicking");
      setUserClicking(data);
    });

    

    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
      setConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('isClicking');

      
    };
  }, []);

  const handleDisconnect = () => {
    socket.disconnect();
    setConnected(false);
  };

  const handleChange = () => {
    setCounter(prev => prev + 1);
    socket.emit("clicking", counter);
  }


  

  return (
    <div>
      <h2>💬 Chat Socket</h2>
      <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>

      {connected && (
        <button onClick={handleDisconnect}>Disconnect</button>
      )}

      Counter is: {counter}
      <button onClick={handleChange}>Increment</button>

        User clicking: {userClicking}
    </div>
  );
}

export default Counter;

```


```js
import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { Server as SocketIOServer } from "socket.io";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


async function startServer() {

  try {
    
    // Create HTTP server from express app
    const httpServer = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    // Setup Socket.IO server on the same HTTP server
    const io = new SocketIOServer(httpServer, {
      cors: {
        origin: "*", // adjust for your frontend origin
      },
    });

    io.on("connection", (socket) => {
      
      socket.on("clicking", (data) =>{
        console.log("capturing clicking event", data);
          io.emit("isClicking", data);
      });




      socket.on("disconnect", (reason) => {
          console.log(`User disconnected ${socket.id} and ${socket.reason}`)
      })
    })

  

  
  }

  catch (error) {
      console.error("Failed to start server:", error);
      process.exit(1);
    }
}

startServer();

```


