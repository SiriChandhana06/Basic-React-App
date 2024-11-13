import React, { useState } from 'react';

function QuizApp() {
  const questions = [
    {
      question: 'What is 2 + 2?',
      answer: '4',
      options: ['3', '4', '5', '6'],
    },
    {
      question: 'What is the capital of France?',
      answer: 'Paris',
      options: ['London', 'Berlin', 'Paris', 'Rome'],
    },
    {
      question: 'What color is the sky on a clear day?',
      answer: 'Blue',
      options: ['Green', 'Red', 'Blue', 'Yellow'],
    },
    {
      question: 'How many continents are there?',
      answer: '7',
      options: ['5', '6', '7', '8'],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (userAnswer) => {
    if (userAnswer === questions[current].answer) setScore(score + 1);
    setCurrent(current + 1);
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {current < questions.length ? (
        <div>
          <p>{questions[current].question}</p>
          {questions[current].options.map((option, index) => (
            <button key={index} onClick={() => checkAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p>Score: {score}/{questions.length}</p>
      )}
    </div>
  );
}

export default QuizApp;
