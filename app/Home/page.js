import Navbar from "@/Components/Navbar";
import CognitiveTherapyInfo from "@/Components/CognitiveTherapyInfo";

import React from "react";

import Welcome from "@/Components/Welcome";

import Footer from "@/Components/Footer";
import Works from "@/Components/Works";
import TherapistPreview from "@/Components/TherapistPreview";
import Services from "@/Components/Services";
import Testonomials from "@/Components/Testonomials";
import Customers from "@/Components/Customers";
import Why from "@/Components/Why";
import Quiz from "@/Components/Quiz";

const page = () => {
  return (
    <>
      <Welcome />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <CognitiveTherapyInfo />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <Customers />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <Why />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <Services />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <Works />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />

      <Testonomials />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <Quiz />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
      <TherapistPreview />
      <hr className="bg-[#F2E9E4] shadow-lg  rounded-lg" />
    </>
  );
};

export default page;
