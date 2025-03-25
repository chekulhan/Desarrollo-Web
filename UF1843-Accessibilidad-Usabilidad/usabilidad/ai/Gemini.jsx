import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";


const Gemini = () => {
  const [modelResponse, setModelResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pregunta, setPregunta] = useState("");

  const handlePregunta = async () => {
    try {

        setIsLoading(true);
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent(pregunta);
        console.log(result);

        setModelResponse([...modelResponse, result.response.text()]);

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

        <li>
        {modelResponse.map((data, index) => (
            <ul key={index}>{data}</ul>
        ))}
        </li>
      
    </div>
  );
};

export default Gemini;
