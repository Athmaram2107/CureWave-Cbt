"use client";
import React from "react";
import { FaRegLightbulb, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";

const Why = () => {
  const features = [
    {
      icon: <FaRegLightbulb className="text-[#E07A5F] text-3xl mb-4" />,
      title: "Comprehensive Therapy Resources",
      description:
        "CureWave offers a holistic approach to online therapy by providing a variety of resources, including podcasts, games, and detailed FAQs, to support your cognitive behavior therapy journey. Our platform ensures you have all the tools you need to understand and engage with your mental health.",
    },
    {
      icon: <FaCalendarAlt className="text-[#E07A5F] text-3xl mb-4" />,
      title: "Seamless Appointment Booking",
      description:
        "With CureWave’s user-friendly appointment booking system, scheduling a session with your therapist is quick and hassle-free. Our platform is designed to make connecting with professionals easy, allowing you to focus on your mental well-being without the stress of complicated booking processes.",
    },
    {
      icon: <FaHandsHelping className="text-[#E07A5F] text-3xl mb-4" />,
      title: "Expert Guidance and Support",
      description:
        "CureWave connects you with experienced therapists who are dedicated to guiding you through your mental health journey. Our platform’s 'How It Works' page clearly outlines the therapy process, ensuring you feel supported and informed every step of the way.",
    },
  ];

  return (
    <section className="py-16 bg-[#F2E9E4] border-[#A3B18A] shadow-2xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-heading text-[#4A6650] mt-4 mb-16">
          Why We Stand Out
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="max-w-xs bg-[#D4E2D4] rounded-lg shadow-lg p-10 text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-[#F2E9E4] rounded-3xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#333333] text-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
