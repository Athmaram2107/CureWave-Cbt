"use client";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const questions = [
  "I don't feel satisfied with my life.",
  "I feel sad or low, without really knowing why.",
  "I don't feel that I'm in control of my body and mind.",
  "I feel stressed and tense.",
  "I experience mood swings. My mood and behavior are inconsistent.",
  "I have feelings of hopelessness. I don’t think that my situation will ever change.",
  "I feel overwhelmed.",
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const generateResult = () => {
    const score = answers.reduce((acc, val) => acc + (val || 0), 0);
    let feedback = "";

    if (score <= 5) {
      feedback =
        "You seem to be in a good mental state. Keep up the good work!";
    } else if (score <= 10) {
      feedback =
        "You might be facing some challenges. Consider talking to someone or exploring ways to manage your stress.";
    } else {
      feedback =
        "You may benefit from seeking professional help to improve your mental well-being.";
    }

    setResult(feedback);

    // Prepare chart data based on selected options
    const trueCount = answers.filter((a) => a === 2).length;
    const partlyTrueCount = answers.filter((a) => a === 1).length;
    const notTrueCount = answers.filter((a) => a === 0).length;

    setChartData({
      labels: ["True", "Partly True", "Not True"],
      datasets: [
        {
          data: [trueCount, partlyTrueCount, notTrueCount],
          backgroundColor: ["#4A6650", "#A3B18A", "#E07A5F"],
          hoverBackgroundColor: ["#366348", "#8EA077", "#C8684F"],
        },
      ],
    });
  };

  return (
    <div className="bg-[#F2E9E4] min-h-screen flex items-center justify-center p-6">
      <div
        className={`flex items-start transition-all duration-500 ${
          result ? "justify-start" : "justify-center"
        } w-full max-w-4xl`}
      >
        {/* Form Section */}
        <div
          className={`bg-white shadow-md rounded-lg overflow-hidden w-full ${
            result ? "lg:w-1/2" : "lg:w-2/3"
          } transition-all duration-500`}
        >
          <div className="bg-[#E07A5F] text-white py-2 px-4 font-bold text-lg">
            How do you feel?
          </div>
          <div className="p-4 space-y-4">
            {questions.map((question, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-[#333333] mb-2">
                  {index + 1}. {question}
                </p>
                <div className="flex justify-around">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={2}
                      onChange={() => handleAnswerChange(index, 2)}
                      className="mr-1"
                    />
                    True
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={1}
                      onChange={() => handleAnswerChange(index, 1)}
                      className="mr-1"
                    />
                    Partly true
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={0}
                      onChange={() => handleAnswerChange(index, 0)}
                      className="mr-1"
                    />
                    Not true
                  </label>
                </div>
              </div>
            ))}
            <button
              onClick={generateResult}
              className="bg-[#E07A5F] text-white py-2 px-4 w-full mt-4 font-bold rounded-md hover:bg-[#c8684f] transition"
            >
              GENERATE RESULT
            </button>
          </div>
        </div>

        {/* Result Section */}
        {result && chartData && (
          <div className="w-full lg:w-1/2 flex flex-col items-center bg-white shadow-md rounded-lg p-4 ml-4 transition-all duration-500">
            <h2 className="text-[#4A6650] text-xl font-bold mb-4">
              Your Result
            </h2>
            <Pie data={chartData} />
            <p className="text-[#333333] mt-4 text-center">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
