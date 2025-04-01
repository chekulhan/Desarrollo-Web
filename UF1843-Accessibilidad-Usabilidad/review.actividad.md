
Python



from transformers import pipeline

generator = pipeline('text-generation', model='gpt2')

generator = pipeline('text-generation', model='facebook/mbart-large-50-many-to-many-mmt')



def generate_joke(prompt="Tell me a joke!"):
    joke = generator(prompt, max_length=50)
    return joke[0]['generated_text']

joke = generate_joke()
print("Here's a joke for you:")
print(joke)


# Opcion de generar texto:
# Frase inicial para la generación de texto
result = generator("Había una vez en un lugar muy lejano", max_length=100)
print(result)

# Opcion de chatbot
# Usamos DialoGPT para chat
chatbot = pipeline('conversational', model='microsoft/DialoGPT-medium')

result = chatbot("Hola, ¿cómo estás?")
print(result)
````

# React JS

```jsx
import React, { useState } from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';

const Motivacion = () => {
  const [mensaje, setMensaje] = useState(null);

  // Array of motivational messages
  const motivationalQuotes = [
    "¡Sigue adelante, estás haciendo un gran trabajo!",
    "El esfuerzo de hoy es el éxito de mañana.",
    "¡Cree en ti mismo y todo será posible!",
    "No pares hasta sentirte orgulloso.",
    "La única forma de hacer un gran trabajo es amar lo que haces."
  ];

  // Function to get a random motivational message
  const getMotivacion = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  };

  const handleClick = () => {
    // Get a random motivational message and set it
    const randomMessage = getMotivacion();
    setMensaje(randomMessage);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Mensaje de motivación
      </Typography>

      {/* Display motivational message if it exists */}
      {mensaje ? (
        <Card sx={{ maxWidth: 400, marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6">{mensaje}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1" sx={{ marginTop: 2, fontStyle: 'italic' }}>
          ¡Haz clic en el botón para obtener motivación!
        </Typography>
      )}

      {/* Button to fetch motivational message */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={handleClick}
      >
        Conseguir motivación
      </Button>
    </div>
  );
};

export default Motivacion;
´´´