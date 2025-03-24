import React, { useState } from "react";

// Check if the browser supports SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);

  // Initialize the SpeechRecognition object
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US"; // Set the language (change as needed)
  recognition.interimResults = true; // Show partial results

  // Handle when speech recognition result is received
  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    setTranscript(result);
  };

  // Handle any errors that occur
  recognition.onerror = (event) => {
    setError(event.error);
    setIsListening(false);
  };

  // Start speech recognition
  const startListening = () => {
    setTranscript(""); // Clear previous transcript
    recognition.start();
    setIsListening(true);
  };

  // Stop speech recognition
  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };



  return (
    <div style={{ padding: "20px" }}>
      <h1>Speech-to-Text in React</h1>
      <div>
        <button onClick={startListening} disabled={isListening}>
          Start Listening
        </button>
        <button onClick={stopListening} disabled={!isListening}>
          Stop Listening
        </button>
      </div>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div>
        <h3>Transcribed Text:</h3>
        <p>{transcript}</p>
       
      </div>
    </div>
  );
};

export default SpeechToText;
