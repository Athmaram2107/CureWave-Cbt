"use client";
import { React, useState } from "react";
import Tilt from "react-parallax-tilt";

import {
  FaUser,
  FaFileAlt,
  FaPencilAlt,
  FaComments,
  FaEnvelope,
  FaCloud,
  FaCalendarAlt,
  FaChild,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const icons = [
  {
    id: 1,
    icon: <FaUser size={40} className="text-[#2F4F4F] mb-2" />,
    label: "THERAPIST",
  },
  {
    id: 2,
    icon: <FaFileAlt size={40} className="text-[#2F4F4F] mb-2" />,
    label: "SECTIONS",
  },
  {
    id: 3,
    icon: <FaPencilAlt size={40} className="text-[#2F4F4F] mb-2" />,
    label: "WORKSHEETS",
  },
  {
    id: 4,
    icon: <FaComments size={40} className="text-[#2F4F4F] mb-2" />,
    label: "LIVE SESSIONS",
  },
  {
    id: 5,
    icon: <FaEnvelope size={40} className="text-[#2F4F4F] mb-2" />,
    label: "MESSAGES",
  },
  {
    id: 6,
    icon: <FaCloud size={40} className="text-[#2F4F4F] mb-2" />,
    label: "JOURNAL",
  },
  {
    id: 7,
    icon: <FaCalendarAlt size={40} className="text-[#2F4F4F] mb-2" />,
    label: "ACTIVITY PLAN",
  },
  {
    id: 8,
    icon: <FaChild size={40} className="text-[#2F4F4F] mb-2" />,
    label: "YOGA",
  },
];

const Works = () => {
  const router = useRouter();
  return (
    <div className="text-center pb-14 pt-6 h-96 mt-0 border-[#A3B18A] shadow-xl bg-[#F2E9E4]">
      <h2 className="text-3xl md:text-3xl font-bold font-heading  text-[#4A6650] mb-24">
        The most complete online therapy toolbox there is:
      </h2>

      <div className="flex flex-wrap justify-center font-body gap-14 mb-16">
        {/* Service icons with labels */}
        {icons.map((item) => (
          <Tilt
            key={item.id}
            className="w-28 h-24 flex items-center justify-center  bg-slate-100 rounded-lg shadow-lg animate-pulse transition-transform duration-300"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={250}
          >
            <div className="flex flex-col items-center">
              {item.icon}
              <p className="text-sm font-body mt-2 font-semibold">
                {item.label}
              </p>
            </div>
          </Tilt>
        ))}{" "}
      </div>

      {/* Learn More Button */}
      <button
        className="inline-block bg-[#E07A5F] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#008080]  shadow-lg shadow-[#E6E6FA] transition duration-300"
        type="button"
        onClick={() => router.push("/HowItWorks")}
      >
        Learn More
      </button>
    </div>
  );
};

export default Works;
