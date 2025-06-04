import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function WaitingRoom() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    
    socket.on("currentNumber", (num) => {
      setNumber(num);
    });

    return () => {
      socket.off("currentNumber");
    };
  }, []);

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "2rem" }}>
      <h1>📢 Turno actual</h1>
      <p style={{ fontSize: "4rem", fontWeight: "bold" }}>{number}</p>
    </div>
  );
}

export default WaitingRoom;