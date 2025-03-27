import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";


/*
Mostrar el use de array objetos para guardar la respuesta en .role y .text
Usar el pattern singleton

*/

// Singleton pattern to create and reuse the GoogleGenerativeAI instance
let genAIInstance = null;

const getGenAIInstance = () => {
  if (!genAIInstance) {
    genAIInstance = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  }
  return genAIInstance;
};

const Gemini2 = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pregunta, setPregunta] = useState("");

  const handlePregunta = async () => {
    try {
      setIsLoading(true);

      const userMessage = { role: 'user', text: pregunta };

      // Using the functional form of setMessages to ensure we always have the latest state
      setMessages(prevMessages => [...prevMessages, userMessage]);

      const genAI = getGenAIInstance(); // Get the singleton instance
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


      const result = await model.generateContent(pregunta);
      console.log(result);

      const botMessage = { role: 'model', text: result.response.text() };

      // Add bot response to the state after the user message
      setMessages(prevMessages => [...prevMessages, botMessage]);

    } catch (error) {
        console.error('Error:', error); // Handle any errors here
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Gemini Nano Integration Example</h1>
      <input
        type="text"
        value={pregunta}
        onChange={(e) => setPregunta(e.target.value)}
        placeholder="Introducir tu pregunta"
      />
      <button onClick={handlePregunta}>Pregunta</button>

      {/* List of messages - .role and .text */}
      <ul>
        {messages.map((data, index) => (
          <li
            key={index}
            style={{
              color: data.role === "user" ? "blue" : "black", // Apply blue if role is 'user', else black
            }}
          >
            {data.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gemini2;