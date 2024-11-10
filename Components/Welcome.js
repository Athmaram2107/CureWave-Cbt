"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/Images/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#A3B18A] opacity-5"></div>{" "}
      {/* Overlay to make text stand out */}
      <div className="container mx-auto  px-4 h-full flex flex-col justify-center items-center text-center text-[#262c27]  ">
        {/* Tagline */}
        <div className="transform scale-85 hover:scale-75  h ">
          <h1 className="text-4xl md:text-6xl font-bold  font-heading mb-4">
            "Heal Your Mind, One Wave at a Time with CureWave"
          </h1>

          {/* Short Description */}
          <p className="text-lg md:text-3xl font-body mb-8">
            Discover personalized Cognitive Behavioral Therapy designed to bring
            peace to your mind.
          </p>
        </div>

        {/* Book a Session Button */}

        <button
          type="button"
          onClick={() => router.push("/GetStarted")}
          className="z-10 inline-block  bg-[#E07A5F] hover:bg-[#F28B70] shadow-[#A3B18A] shadow-md  text-white  font-bold font-button my-14 py-3 px-6 rounded-full text-lg border-[1px] border-[#FFFFF4] cursor-pointer "
        >
          Book Session
        </button>
      </div>
    </section>
  );
};
export default Welcome;
