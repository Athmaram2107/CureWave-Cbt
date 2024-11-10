"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = {
  mindfulness: [
    {
      text: "Your thoughts are not facts. They are mental events that pass through your mind.",
      author: "Dr. John Teasdale",
      category: "Mindfulness",
    },
    {
      text: "Between stimulus and response, there is a space. In that space lies our freedom to choose.",
      author: "Viktor Frankl",
      category: "Mindfulness",
    },
  ],
  cognition: [
    {
      text: "The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind.",
      author: "William James",
      category: "Cognitive Restructuring",
    },
    {
      text: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
      category: "Cognitive Restructuring",
    },
  ],
  behavior: [
    {
      text: "Action may not always bring happiness, but there is no happiness without action.",
      author: "Benjamin Disraeli",
      category: "Behavioral Activation",
    },
    {
      text: "Don't wait for motivation. Take action first, and the motivation will follow.",
      author: "Dr. David Burns",
      category: "Behavioral Activation",
    },
  ],
  healing: [
    {
      text: "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
      author: "Hippocrates",
      category: "Healing",
    },
    {
      text: "The wound is the place where the light enters you.",
      author: "Rumi",
      category: "Healing",
    },
  ],
  featured: [
    {
      text: "The way we see the problem is the problem.",
      author: "Stephen Covey",
      category: "Featured",
    },
    {
      text: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
      author: "Buddha",
      category: "Featured",
    },
    {
      text: "The greatest weapon against stress is our ability to choose one thought over another.",
      author: "William James",
      category: "Featured",
    },
  ],
};

const QuotesSlider = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const featuredQuotes = quotes.featured;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) =>
        prev === featuredQuotes.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredQuotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) =>
      prev === featuredQuotes.length - 1 ? 0 : prev + 1
    );
  };

  const prevQuote = () => {
    setCurrentQuote((prev) =>
      prev === 0 ? featuredQuotes.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-[400px] bg-[#4A6650] rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="relative h-full flex items-center justify-center px-12">
        <button
          onClick={prevQuote}
          className="absolute left-4 p-2 rounded-full bg-[#A3B18A]/40 hover:bg-[#A3B18A]/60 text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="text-center max-w-3xl mx-auto p-8">
          <p className="text-3xl font-serif text-[#F2E9E4] mb-6 italic">
            "{featuredQuotes[currentQuote].text}"
          </p>
          <div className="text-[#F2E9E4]/80">
            <p className="text-lg font-semibold">
              — {featuredQuotes[currentQuote].author}
            </p>
          </div>
        </div>

        <button
          onClick={nextQuote}
          className="absolute right-4 p-2 rounded-full bg-[#A3B18A]/40 hover:bg-[#A3B18A]/60 text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featuredQuotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentQuote === index ? "bg-[#F2E9F4]" : "bg-[#F2E9F4]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuotesSlider;
