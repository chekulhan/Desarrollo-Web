import React, { useEffect } from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

/*

- SpeechRecognition API (for recognizing speech) 
- SpeechSynthesis API (for converting text into speech)

Mostrar en navegador:
const utterance = new SpeechSynthesisUtterance('Hello, how can I assist you today?');
window.speechSynthesis.speak(utterance);


const utterance = new SpeechSynthesisUtterance('Hola, ¿cómo puedo ayudarte hoy?');
utterance.lang = 'es-ES'; // Set language to Spanish (Spain)
window.speechSynthesis.speak(utterance);


Voices:
const voices = window.speechSynthesis.getVoices();
const spanishVoices = voices.filter(voice => voice.lang === 'es-ES');

spanishVoices.forEach((voice, index) => {
    console.log(`Voice ${index + 1}:`);
    console.log(`Name: ${voice.name}`);
    console.log(`Lang: ${voice.lang}`);
    console.log(`Local Service: ${voice.localService}`);
    console.log(`Default: ${voice.default}`);
    console.log('------------------------');

    // Create a SpeechSynthesisUtterance and set the voice to the current one
    const utterance = new SpeechSynthesisUtterance('Hola, estoy probando una voz.');
    utterance.voice = voice;  // Set the voice for this iteration
    utterance.lang = voice.lang; // Ensure the language matches

    // Speak the utterance (this will speak out the voice)
    window.speechSynthesis.speak(utterance);
});



// Seleccionar una voz
const selectedVoice = spanishVoices[5]; 

const utterance = new SpeechSynthesisUtterance('Hola, he seleccionado esta voz.');
utterance.voice = selectedVoice;  // Set the selected voice
window.speechSynthesis.speak(utterance);

*/

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
