import React from "react";
import Welcome from "@/Components/Welcome";
import CognitiveTherapyInfo from "@/Components/CognitiveTherapyInfo";

import Footer from "@/Components/Footer";
import Works from "@/Components/Works";
import TherapistPreview from "@/Components/TherapistPreview";

const page = () => {
  return (
    <>
      <Welcome />
      <CognitiveTherapyInfo />
      <Works />
      <TherapistPreview />
    </>
  );
};

export default page;
