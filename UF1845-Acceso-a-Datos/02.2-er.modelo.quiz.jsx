import React, { useState } from 'react';

// Mejoras:
// Más preguntas
// Preguntas aleatorias
// Añadir un temporizador al quiz
// Mensajes de retroalimentación más detallados o mensaje de animación
// Añadir un botón para reiniciar el quiz
// Añadir un botón para ver las respuestas correctas


// Componente para la pregunta del quiz
function Question({ question, options, correctAnswer, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(answer === correctAnswer);
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              backgroundColor: selectedAnswer === option ? 'lightblue' : 'white',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <p>
          {selectedAnswer === correctAnswer
            ? '¡Correcto!'
            : 'Incorrecto, intenta nuevamente.'}
        </p>
      )}
    </div>
  );
}

// Componente principal del quiz
function Quiz() {
  const questions = [
    {
      question: '¿Qué significa la relación "1:N" en un diagrama ER?',
      options: ['Uno a muchos', 'Muchos a muchos', 'Uno a uno'],
      correctAnswer: 'Uno a muchos',
    },
    {
      question: '¿Qué tipo de atributo es "Edad" en un diagrama ER?',
      options: ['Atributo compuesto', 'Atributo simple', 'Atributo multivaluado'],
      correctAnswer: 'Atributo simple',
    }
  ];

  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz de Modelado Entidad-Relación</h1>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          correctAnswer={question.correctAnswer}
          onAnswer={handleAnswer}
        />
      ))}
      <div className="score">
        <h2>Tu puntuación: {score}/{questions.length}</h2>
      </div>
    </div>
  );
}

export default Quiz;
