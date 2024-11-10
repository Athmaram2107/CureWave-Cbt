"use client";
import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelectCategory("All")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === "All"
            ? "bg-[#E07A5F] text-white"
            : "bg-[#A3B18A] text-[#333333] hover:bg-[#F2E9E4]"
        }`}
      >
        All Games
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-[#E07A5F] text-white"
              : "bg-[#A3B18A] text-[#333333] hover:bg-[#F2E9E4]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
