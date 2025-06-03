import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect once

function Chat1() {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket');
      setConnected(true);
    });

    

    socket.on('disconnect', (reason) => {
      console.log('Disconnected from socket');
      setConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const handleDisconnect = () => {
    socket.disconnect();
    setConnected(false);
  };

  return (
    <div>
      <h2>💬 Chat Socket</h2>
      <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>

      {connected && (
        <button onClick={handleDisconnect}>Disconnect</button>
      )}
    </div>
  );
}

export default Chat1;
