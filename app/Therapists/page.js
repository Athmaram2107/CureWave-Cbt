// Therapists.js
import React from "react";
import TherapistCard from "../../Components/TherapistCard";

const therapistsData = [
  {
    photo: "/Images/therapists/john.jpg",
    name: "Dr John",
    type: "Family Therapy",
    cost: "20",
    link: "https://www.freedomgpt.com/wiki/personal-history#education-and-training",
  },
  {
    photo: "/Images/therapists/beck.jpg",
    name: "Dr. Judith S. Beck",
    type: "CBT (also known for work in cognitive therapy development)",

    cost: "25",
    link: "https://beckinstitute.org/",
  },
  {
    photo: "/Images/therapists/hofman.jpeg",
    name: "Dr. Stefan Hofmann ",
    type: "CBT, Acceptance and Commitment Therapy (ACT)",
    cost: "30",
    link: "https://www.bu.edu/",
  },
  {
    photo: "/Images/therapists/biren.jpeg",
    name: "Dr. Aaron Brinen ",
    type: " CBT, Dialectical Behavioral Therapy (DBT)",
    cost: "15",
    link: "https://www.vanderbilt.edu/",
  },
  {
    photo: "/Images/therapists/biltren.jpeg",
    name: "Lia Beltrame, MPH, LICSW",
    type: "CBT, Holistic Therapy",
    cost: "15",
    link: "https://www.psychologytoday.com/intl",
  },
  {
    photo: "/Images/therapists/leahy.jpeg",
    name: "Dr. Robert Leahy ",
    type: "CBT, Integrative Therapy",
    cost: "20",
    link: "https://www.cognitivetherapynyc.com/",
  },
  {
    photo: "/Images/therapists/leslie.jpeg",
    name: "Dr. Leslie Sokol ",
    type: " CBT, Rational Emotive Behavior Therapy (REBT)",
    cost: "20",
    link: "https://www.academyofcbt.org/",
  },
  {
    photo: "/Images/therapists/padesky.jpeg",
    name: "Dr. Christine Padesky",
    type: "CBT,Depression",
    cost: "10",
    link: "https://www.mindovermood.com/",
  },
  {
    photo: "/Images/therapists/anna.jpeg",
    name: "Anna Evans, LPC",
    type: "CBT, Motivational Interviewing",
    cost: "40",
    link: "https://www.psychologytoday.com/intl",
  },
  {
    photo: "/Images/therapists/david.jpeg",
    name: "Dr. David Burns ",
    type: "Psychologist(CBT)",
    cost: "14",
    link: "https://feelinggoodinstitute.com/",
  },
];

const page = () => {
  return (
    <div className="container mx-auto bg-[#F2E9E4] p-4 ">
      <h1 className="text-3xl  text-[#4A6650] font-bold  mt-16 mb-20 text-center">
        Meet Our Therapists
      </h1>

      {/* Row 1: 4 Columns on large screens, responsive on smaller screens */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {therapistsData.slice(0, 4).map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>

      {/* Row 2: 3 Columns on large screens, responsive on smaller screens */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 justify-center">
        {therapistsData.slice(4, 7).map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>

      {/* Row 3: 2 Columns on large screens, responsive on smaller screens */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 justify-center">
        {therapistsData.slice(7, 9).map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>
    </div>
  );
};

export default page;
