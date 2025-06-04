import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect once

const ROOM_NAME = 'myRoom';


function ChatRoom() {
  const [connected, setConnected] = useState(true);
  const [input, setInput]= useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to socket');
      setConnected(true);
      socket.emit('joinRoom', ROOM_NAME);
    });

    socket.on('chatRoomMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    })


    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
      setConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('joinRoom');
      socket.off('chatRoomMessage');
      
    };
  }, []);

  const handleDisconnect = () => {
    socket.disconnect();
    setConnected(false);
  };



  const sendChatRoom = () => {
    socket.emit('chatRoomMessage', {room: ROOM_NAME, message: input}); // can pass in more data here
    setInput('');
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
        placeholder="Type a message"
      />


      <button onClick={sendChatRoom} style={{ width: 60 }}>
        Send to Chat Room
      </button>

    </div>
  );
}

export default ChatRoom;
