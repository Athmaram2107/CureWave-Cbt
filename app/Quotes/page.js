import React from "react";
import QuotesSlider from "@/Components/QuotesSlider";
import QuotesSection from "@/Components/QuotesSection";

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

function App() {
  return (
    <div className="min-h-screen bg-[#F2E9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#4A6650] mb-4">
            CBT Wisdom & Inspiration
          </h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Discover transformative quotes that can help reshape your thoughts
            and improve your well-being.
          </p>
        </div>

        <div className="mb-16">
          <QuotesSlider />
        </div>

        <div className="space-y-16">
          <QuotesSection
            title="Mindfulness & Present Moment"
            quotes={quotes.mindfulness}
          />

          <QuotesSection
            title="Cognitive Restructuring"
            quotes={quotes.cognition}
          />

          <QuotesSection
            title="Behavioral Activation"
            quotes={quotes.behavior}
          />

          <QuotesSection title="Healing & Growth" quotes={quotes.healing} />
        </div>
      </div>
    </div>
  );
}

export default App;
