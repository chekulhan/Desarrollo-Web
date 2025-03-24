import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which of these is a programming language?",
    options: ["HTML", "CSS", "JavaScript", "Photoshop"],
    answer: "JavaScript",
  },
];

const SpeechQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      speak("Correct answer!");
    } else {
      speak("Incorrect answer, try again.");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setQuizFinished(true);
      speak(`Quiz finished! Your score is ${score} out of ${questions.length}.`);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Interactive Accessibility Quiz</h1>
      {quizFinished ? (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your final score: {score}</p>
          <button onClick={() => window.location.reload()}>Start New Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                aria-pressed={selectedAnswer === option ? "true" : "false"}
                tabIndex="0"
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            tabIndex="0"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeechQuiz;
