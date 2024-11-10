"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/Images/one.webp", "/Images/two.webp", "/Images/three.webp"];

const CognitiveTherapyInfo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to handle the image slider transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F2E9E4] py-10 ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Image Slider */}
        <div className="w-full lg:w-1/2 relative h-auto lg:h-108 overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Cognitive Therapy ${index + 1}`}
              className={`absolute inset-0 w-220 h-auto border-2 border-[#A3B18A] rounded-xl  object-cover shadow:20px shadow-[#A3B18A] transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Content Section */}
        <AnimatePresence>
          {isInView && (
            <motion.div
              className=" w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold font-heading text-[#4A6650] mb-4">
                Cognitive Behavior Therapy
              </h2>
              <p className="text-[#333333] font-body font-semibold text-lg">
                Therapy is a collaborative, supportive process where individuals
                work with trained professionals to manage emotional and mental
                health challenges. Through structured conversations and
                evidence-based techniques, therapy helps clients explore their
                thoughts, feelings, and behaviors to gain insight and make
                positive changes. Online therapy brings the benefits of
                counseling directly to clients’ preferred environments, creating
                a comfortable, flexible setting for self-growth and healing.
              </p>
              <p className="text-[#333333] font-body font-semibold text-lg  mt-4">
                Therapy is a collaborative, supportive process where individuals
                work with trained professionals to manage emotional and mental
                health challenges. Through structured conversations and
                evidence-based techniques, therapy helps clients explore their
                thoughts, feelings, and behaviors to gain insight and make
                positive changes. Online therapy brings the benefits of
                counseling directly to clients’ preferred environments, creating
                a comfortable, flexible setting for self-growth and healing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CognitiveTherapyInfo;
