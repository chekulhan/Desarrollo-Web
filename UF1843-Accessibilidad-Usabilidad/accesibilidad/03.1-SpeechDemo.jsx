import React, { useEffect } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

const SpeechDemo = () => {

    const hablar = () => {

        const texto = "Hola, buenos dias!";

        const speech = new SpeechSynthesisUtterance(texto);

        speech.lang = "es-ES";

        speech.onend = () => {
            console.log("Speech ended");
          };

        // Trigger the speech synthesis
        window.speechSynthesis.speak(speech);

    }
  

  return (
    <div>
      <h1>Speech Synthesis Ejemplo</h1>
      <button onClick={hablar}>Hablar</button>
    </div>
  );
};

export default SpeechDemo;
