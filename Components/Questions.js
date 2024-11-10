// components/Questionnaire.js
"use client";
import React, { useState } from "react";
const questions = [
  {
    id: 1,
    question: "Do you feel anxious frequently?",
    options: [
      { text: "Yes", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "No", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Do you have trouble sleeping?",
    options: [
      { text: "Yes", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "No", score: 0 },
    ],
  },
];

const Questions = ({ onCompletion }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionClick = (scoreValue) => {
    setScore((prevScore) => prevScore + scoreValue);
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setProgress(((nextIndex + 1) / questions.length) * 100);
    } else {
      onCompletion(score);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">
        Question {currentQuestionIndex + 1}
      </h2>
      <p className="text-gray-700 mb-4">
        {questions[currentQuestionIndex].question}
      </p>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.score)}
            className="w-full bg-primary text-black px-4 py-2 rounded mb-2 hover:bg-primary-dark transition duration-300"
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-400">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-black justify-center bg-primary"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
