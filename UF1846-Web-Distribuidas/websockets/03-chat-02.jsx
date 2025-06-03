import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect once

function Chat2() {
  const [connected, setConnected] = useState(true);
  const [input, setInput]= useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket');
      setConnected(true);
    });

    socket.on('chatMessage', (msg) => {
      console.log("recieivng", msg);
        setMessages(prev => [...prev, msg])
    });

    

    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
      setConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('chatMessage');
      
    };
  }, []);

  const handleDisconnect = () => {
    socket.disconnect();
    setConnected(false);
  };

  const sendMessage = () => {
    socket.emit('chatMessage', input);
    setInput('');
  }

  const sendDifferentMessage = () => {
    socket.emit('differentMessage', 'here is a differnet message');
  }

  return (
    <div>
      <h2>💬 Chat Socket</h2>
      <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>

      {connected && (
        <button onClick={handleDisconnect}>Disconnect</button>
      )}

      {messages.map((message) => (
          <div>{message}</div>
      ))}

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type a message"
        style={{ width: 'calc(100% - 70px)', marginRight: 8 }}
      />
      <button onClick={sendMessage} style={{ width: 60 }}>
        Send
      </button>

       <button onClick={sendDifferentMessage} style={{ width: 60 }}>
        different message
      </button>

    </div>
  );
}

export default Chat2;
