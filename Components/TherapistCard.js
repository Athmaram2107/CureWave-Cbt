"use client";
import { React, useState } from "react";

const TherapistCard = ({ therapist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative p-4 bg-[#D4E2D4] border rounded-lg shadow-lg shadow-[#A3B18A]  transform transition-transform duration-300 ${
        isExpanded ? "scale-105 z-10" : "hover:scale-105"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Front */}
      <div className="flex flex-col items-center j text-[#2F4F4F]">
        <a href={therapist.link}>
          <img
            src={therapist.photo}
            alt={therapist.name}
            className="w-24 h-24 rounded-full mb-4"
          />
        </a>
        <h2 className="text-3xl font-heading font-bold">{therapist.name}</h2>
        <p className="text-lg  text-center font-body ">{therapist.type}</p>
        <p className=" mt-2 text-center font-button">Cost:{therapist.cost} $</p>
      </div>

      {/* Expanded Content */}
      {isExpanded && <a href={therapist.link}></a>}
    </div>
  );
};

export default TherapistCard;
