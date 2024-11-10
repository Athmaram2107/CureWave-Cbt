"use client";
import React from "react";
import {
  Play,
  Brain,
  Heart,
  Sparkles,
  Focus,
  Puzzle,
  Users,
  Activity,
} from "lucide-react";

function GameCard({ title, description, icon, difficulty, timeMinutes }) {
  const getIcon = () => {
    switch (icon) {
      case "mindfulness":
        return <Sparkles className="w-6 h-6" />;
      case "emotional":
        return <Heart className="w-6 h-6" />;
      case "cognitive":
        return <Brain className="w-6 h-6" />;
      case "focus":
        return <Focus className="w-6 h-6" />;
      case "puzzle":
        return <Puzzle className="w-6 h-6" />;
      case "social":
        return <Users className="w-6 h-6" />;
      case "behavioral":
        return <Activity className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-[#A3B18A] rounded-lg text-[#4A6650]">
            {getIcon()}
          </div>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${getDifficultyColor()}`}
          >
            {difficulty}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#4A6650] mb-2">{title}</h3>
        <p className="text-[#333333] mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#333333]">{timeMinutes} minutes</span>
          <button className="flex items-center gap-2 bg-[#E07A5F] text-white px-4 py-2 rounded-lg hover:bg-[#A3B18A] transition-colors">
            <Play className="w-4 h-4" />
            Start Game
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A6650]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}

export default GameCard;
