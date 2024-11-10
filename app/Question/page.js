// pages/index.js
"use client";
import React, { useState } from "react";
import Questions from "@/Components/Questions";

export default function page() {
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const handleCompletion = (finalScore) => {
    setShowResult(true);

    // Customize the recommendation logic based on the score threshold
    if (finalScore <= 3) {
      setRecommendation("You may benefit from our self-help resources.");
    } else {
      setRecommendation("We recommend scheduling a session with a therapist.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightBeige">
      {!showResult ? (
        <Questions onCompletion={handleCompletion} />
      ) : (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Recommendation</h2>
          <p className="text-gray-700 mb-4">{recommendation}</p>
          {recommendation.includes("scheduling") ? (
            <button
              href="/appointment"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
            >
              Book Appointment
            </button>
          ) : (
            <button
              href="/resources"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
            >
              View Self-Help Resources
            </button>
          )}
        </div>
      )}
    </div>
  );
}
