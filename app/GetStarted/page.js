// pages/therapy.js
"use client";
import { React, useState } from "react";
import { motion } from "framer-motion"; // for subtle animations
import Questionnaire from "@/Components/Questionnaire";

function TherapyPage() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  return (
    <section className="bg-[#F2E9E4]">
      <div className="bg-[#F2E9E4] text-[#333333] max-w-6xl mx-auto px-6 py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#4A6650] mb-10"
        >
          Welcome to CBT Therapy
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-[#A3B18A]"
          >
            <h2 className="text-2xl font-semibold text-[#4A6650] mb-5">
              What is CBT?
            </h2>
            <p className="text-[#333333] text-xl">
              Cognitive Behavioral Therapy (CBT) is a proven approach that helps
              you identify and change negative thought patterns and behaviors.
              It’s effective for various mental health conditions including
              anxiety, depression, and stress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-[#A3B18A]"
          >
            <h2 className="text-2xl font-semibold text-[#4A6650] mb-5">
              How Can We Help?
            </h2>
            <p className="text-[#333333] text-xl">
              Our platform offers personalized support through professional
              therapy sessions, self-help resources, and interactive tools to
              help you on your journey to better mental health.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuestionnaire(true)}
            className="inline-block bg-[#E07A5F] text-white px-10 py-4 rounded-full shadow-md hover:bg-[#d4694d] transition-all"
          >
            Take Our Assessment
          </motion.button>
        </div>

        {showQuestionnaire && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <Questionnaire />
          </motion.div>
        )}

        <div className="mt-16 grid md:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-[#A3B18A] text-center"
          >
            <div className="text-[#4A6650] mb-5">
              {/* Icon can be added here */}
              <h3 className="text-xl font-semibold">Professional Support</h3>
            </div>
            <p className="text-[#333333] text-md">
              Connect with licensed therapists specialized in CBT
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-[#A3B18A] text-center"
          >
            <div className="text-[#4A6650] mb-5">
              {/* Icon can be added here */}
              <h3 className="text-xl font-semibold">Self-Help Resources</h3>
            </div>
            <p className="text-[#333333] text-md">
              Access our library of tools, podcasts, and exercises
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-[#A3B18A] text-center"
          >
            <div className="text-[#4A6650] mb-5">
              {/* Icon can be added here */}
              <h3 className="text-xl font-semibold">Community</h3>
            </div>
            <p className="text-[#333333] text-md">
              Join our supportive community on your journey
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TherapyPage;
