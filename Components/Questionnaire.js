"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Appointment from "./Appointment"; // Import Appointment component

const questions = [
  {
    id: 1,
    text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 },
    ],
  },
  {
    id: 2,
    text: "How often do you have trouble falling or staying asleep?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 },
    ],
  },
  {
    id: 3,
    text: "How often do you feel tired or have little energy?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 },
    ],
  },
];

function Questionnaire() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false); // State for Appointment display

  const handleAnswer = (selectedScore) => {
    const newScore = score + selectedScore;
    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showAppointment) {
    return <Appointment />; // Render Appointment component
  }

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
          {score >= 6 ? (
            <>
              <p className="text-gray-600 mb-6">
                Based on your responses, we recommend scheduling an appointment
                with one of our therapists.
              </p>
              <button
                onClick={() => setShowAppointment(true)} // Show Appointment component
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg mb-4 hover:bg-blue-700"
              >
                Schedule Appointment
              </button>
            </>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Based on your responses, we recommend exploring our self-help
                resources first.
              </p>
              <button
                onClick={() => router.push("/Quotes")}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg mb-4 hover:bg-green-700"
              >
                Explore Resources
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">
          {questions[currentQuestion].text}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
