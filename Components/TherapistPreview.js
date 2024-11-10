"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/navigation";

// Sample therapist data
const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    image: "/Images/therapists/sarah.jpg", // Replace with actual image URL
    description: "Specialist in cognitive behavioral therapy .",
    link: "https://hiaautism.com/team/dr-sarah-johnson/",
  },
  {
    id: 2,
    name: "Mr. Michael Green",
    image: "Images/therapists/green.webp", // Replace with actual image URL
    description: "Expert in stress management and relaxation techniques.",
    link: "https://depthcounsellingtoronto.com/",
  },
  {
    id: 3,
    name: "Dr. Emily White",
    image: "Images/therapists/Emily-White.png", // Replace with actual image URL
    description: "Certified therapist focusing on anxiety and depression.",
    link: "https://emilywhitepsychotherapy.com/",
  },
  {
    id: 4,
    name: "Ms. Olivia Brown",
    image: "Images/therapists/brown.jpg", // Replace with actual image URL
    description: "Specializes in mindfulness and emotional resilience.",
    link: "https://apns.ca/private-practice-directory/psychologist/olivia-brown/",
  },
  {
    id: 5,
    name: "Mr. John Doe",
    image: "Images/therapists/john.jpg", // Replace with actual image URL
    description: "Experienced in family therapy and conflict resolution.",
    link: "https://therapist-webpage.vercel.app/",
  },
  {
    id: 6,
    name: "Dr. Amanda Smith",
    image: "Images/therapists/Smith.png", // Replace with actual image URL
    description: "Focuses on teenage counseling and mental wellness.",
    link: "https://www.adspsychservices.com/",
  },
];

const TherapistPreview = () => {
  const router = useRouter();

  return (
    <section className="py-10 bg-[#F2E9E4]">
      <h2 className="text-3xl text-[#4A6650] font-heading font-bold text-center mb-8">
        Our Therapists
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        {therapists.map((therapist) => (
          <Tilt
            key={therapist.id}
            className="tilt-card"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <a
              href={therapist.link}
              className="block bg-[#D4E2D4] rounded-lg shadow-lg shadow-[#A3B18A] overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-full h-48 object-fill"
              />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-heading font-bold text-[#1C2833]">
                  {therapist.name}
                </h3>
                <p className="text- sm font-body font-semibold text-[#333333] mt-2">
                  {therapist.description}
                </p>
              </div>
            </a>
          </Tilt>
        ))}
      </div>
      <button
        type="button"
        onClick={() => router.push("/Therapists")}
        className=" mx-95vh  bg-[#E07A5F] hover:bg-[#008080] text-white  font-bold font-button my-8 mb-2   px-4 rounded-full text-lg w-40 h-10 text-center shadow-lg shadow-slate-500/50 border-[1px] border-[#FFFFF4]  cursor-pointer "
      >
        View all
      </button>
    </section>
  );
};

export default TherapistPreview;
