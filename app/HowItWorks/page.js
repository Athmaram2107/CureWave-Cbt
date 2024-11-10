"use client";
import React, { useState } from "react";
import Appointment from "@/Components/Appointment";

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true);
  };
  const sections = [
    {
      title: "Personalized Therapy Plan",
      description:
        "Our therapists will work with you to create a treatment plan tailored to your goals and needs.",
      image: "Images/persnalized.jpg",
    },
    {
      title: "Tools and Techniques",
      description:
        "Each session includes evidence-based tools and techniques from CBT to help you develop coping strategies.",
      image: "Images/tools.jpg",
    },
    {
      title: "Homework Assignments",
      description:
        "You may receive exercises to complete between sessions to reinforce what you've learned.",
      image: "Images/homework.jpg",
    },
    {
      title: "Continuous Support",
      description:
        "Track your progress, access session notes, and stay connected with your therapist through our platform.",
      image: "Images/continuos.jpg",
    },
  ];

  const featuresOfCureWave = [
    {
      title: "Secure Video Calls",
      description:
        "All online sessions are conducted over secure, encrypted video calls to ensure privacy.",
    },
    {
      title: "24/7 Access to Resources",
      description:
        "Get access to worksheets, guided exercises, and relaxation techniques anytime.",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your mental health journey through progress reports and reflections on your dashboard.",
    },
    {
      title: "Discounts for Returning Clients",
      description:
        "If you're a returning client, enjoy a 30% discount on your sessions by uploading your previous reports.",
    },
    {
      title: "File Uploads",
      description:
        "You can upload documents, such as previous treatment history or relevant reports, for a more comprehensive understanding.",
    },
  ];

  const whatToExpectDuringSession = [
    {
      title: "Initial Assessment",
      description:
        "During your first session, the therapist will gather background information and discuss your goals.",
      image: "Images/InitialAssessment.png",
    },
    {
      title: "Ongoing Feedback",
      description:
        "Each session provides an opportunity to review progress and make adjustments to your treatment plan.",
      image: "Images/feedback.jpg",
    },
    {
      title: "Actionable Takeaways",
      description:
        "You’ll leave each session with actionable steps to apply in your daily life until the next session.",
      image: "Images/takeaways.png",
    },
  ];

  return (
    <section className="bg-light-beige py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-green">Our Approach</h2>
          <p className="text-[#333333] text-2xl mt-2">
            How CureWave Works to Support Your Mental Health Journey
          </p>
        </div>

        {/* Zig-Zag Layout for Features */}
        {sections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center mb-16`}
          >
            <div className="md:w-1/2 p-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div className="md:w-1/2 p-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-sage-green mb-4">
                {item.title}
              </h3>
              <p className="text-[#333333] text-xl">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Additional Sections (Features and What to Expect) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-green">
            Features of CureWave
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuresOfCureWave.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-semibold text-sage-green mb-2">
                {feature.title}
              </h3>
              <p className="text-[#333333] text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-green">
            What to Expect During Your Session
          </h2>
        </div>
        {whatToExpectDuringSession.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center mb-16`}
          >
            <div className="md:w-1/2 p-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div className="md:w-1/2 p-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-sage-green mb-4">
                {item.title}
              </h3>
              <p className="text-[#333333] text-xl">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-[#A3B18A] p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-[#FFFFF4] mb-4">
            Ready to Begin?
          </h2>
          <p className="text-[#333333] text-lg mb-6">
            Take the first step towards better mental health today.
          </p>
          {open && (
            <div>
              <Appointment />
              <hr className="bg-[#F2E9E4] shadow-lg p-8 rounded-lg" />
            </div>
          )}
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 my-6 bg-burnt-sienna text-white font-semibold rounded-md hover:bg-sage-green transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
