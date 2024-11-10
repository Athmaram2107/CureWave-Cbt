"use client"; // This line tells Next.js that this is a client-side component

import React, { useState, useMemo } from "react";
import GameCard from "@/Components/GameCard";
import CategoryFilter from "@/Components/CategoryFilter";
import { Search, SlidersHorizontal } from "lucide-react";

const games = [
  {
    title: "Mindful Breathing Journey",
    description:
      "Guide your character through a peaceful landscape while practicing mindful breathing exercises.",
    icon: "mindfulness",
    difficulty: "Easy",
    timeMinutes: 5,
    category: "Mindfulness",
  },
  {
    title: "Emotion Explorer",
    description:
      "Match and identify emotions in various scenarios to improve emotional intelligence.",
    icon: "emotional",
    difficulty: "Medium",
    timeMinutes: 10,
    category: "Emotional Intelligence",
  },
  {
    title: "Memory Matrix",
    description:
      "Challenge your cognitive abilities with this pattern recognition and memory game.",
    icon: "cognitive",
    difficulty: "Hard",
    timeMinutes: 15,
    category: "Cognitive Training",
  },
  {
    title: "Focus Flow",
    description:
      "Train your concentration by guiding objects through increasingly complex mazes.",
    icon: "focus",
    difficulty: "Medium",
    timeMinutes: 8,
    category: "Cognitive Training",
  },
  {
    title: "Thought Puzzler",
    description:
      "Solve therapeutic puzzles that challenge negative thought patterns.",
    icon: "puzzle",
    difficulty: "Hard",
    timeMinutes: 12,
    category: "Cognitive Training",
  },
  {
    title: "Calm Canvas",
    description:
      "Express emotions through guided digital art therapy exercises.",
    icon: "mindfulness",
    difficulty: "Easy",
    timeMinutes: 10,
    category: "Emotional Intelligence",
  },
  {
    title: "Social Scenarios",
    description:
      "Practice social interactions in safe, virtual environments with guided feedback.",
    icon: "social",
    difficulty: "Medium",
    timeMinutes: 15,
    category: "Social Skills",
  },
  {
    title: "Anxiety Navigator",
    description:
      "Learn to manage anxiety through interactive exposure therapy scenarios.",
    icon: "behavioral",
    difficulty: "Medium",
    timeMinutes: 20,
    category: "Behavioral Therapy",
  },
  {
    title: "Gratitude Garden",
    description:
      "Cultivate positive thinking by growing a virtual garden through gratitude practices.",
    icon: "mindfulness",
    difficulty: "Easy",
    timeMinutes: 8,
    category: "Mindfulness",
  },
  {
    title: "Habit Hero",
    description:
      "Build positive habits through gamified daily challenges and tracking.",
    icon: "behavioral",
    difficulty: "Easy",
    timeMinutes: 10,
    category: "Behavioral Therapy",
  },
  {
    title: "Empathy Explorer",
    description:
      "Develop empathy through perspective-taking scenarios and storytelling.",
    icon: "emotional",
    difficulty: "Medium",
    timeMinutes: 12,
    category: "Social Skills",
  },
  {
    title: "Mind Palace",
    description:
      "Build and explore a personalized safe space while learning relaxation techniques.",
    icon: "mindfulness",
    difficulty: "Easy",
    timeMinutes: 15,
    category: "Mindfulness",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => Array.from(new Set(games.map((game) => game.category))),
    []
  );

  const filteredGames = useMemo(
    () =>
      games.filter((game) => {
        const matchesSearch =
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" || game.category === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [searchTerm, selectedCategory]
  );

  return (
    <div className="min-h-screen bg-[#F2E9E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#4A6650] mb-4">
            Therapeutic Games
          </h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Explore our collection of interactive games designed to support your
            mental well-being and personal growth.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search games..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A6650] focus:border-[#4A6650]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#A3B18A] transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#333333] text-lg">
              No games found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
