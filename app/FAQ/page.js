"use client";
import React, { useEffect, useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left transition-transform duration-200"
      >
        <span className="text-lg font-semibold text-[#333333]">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 text-base">{answer}</p>
      </div>
    </div>
  );
};

const page = () => {
  const heading = " CCBT & CureWave: FAQs";
  const paragraph =
    "Below you will find answers to the most common questions you may have on CureWave and CBT";
  const [displayedText, setDisplayedText] = useState("");
  const [isHeadingComplete, setIsHeadingComplete] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);

  useEffect(() => {
    let timeoutId1, timeoutId2;
    const typeHeading = () => {
      setDisplayedText("");
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < heading.length) {
          setDisplayedText((prev) => prev + heading.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsHeadingComplete(true);
          timeoutId1 = setTimeout(() => {
            setIsParagraphVisible(true); // Show paragraph after heading is complete
          }, 1000); //Wait 1 second before showing the paragraph

          timeoutId2 = setTimeout(() => {
            setIsQuestionVisible(true);
          }, 1500);
        }
      }, 50); // Typing speed for heading
    };

    typeHeading();

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, []);

  const faqData = [
    {
      question: "What is CureWave?",
      answer:
        "CureWave is an online platform dedicated to making mental health support accessible and personalized. We specialize in providing resources, tools, and information related to Cognitive Behavioral Therapy (CBT) to help individuals manage their mental health challenges.",
    },
    {
      question: "Who will be helping me?",
      answer:
        "After you sign up, we match you with a therapist who aligns with your goals and preferences. Our therapists have different areas of expertise, ensuring you connect with the right professional for your needs. If the fit isn’t right, you can request a new therapist at any time.",
    },
    {
      question: "What is Cognitive Behavioral Therapy (CBT)?",
      answer:
        "CBT is a type of psychotherapy focused on identifying and challenging unhelpful thought patterns and behaviors to bring about positive change. It’s widely used for managing a range of mental health issues, including anxiety, depression, and stress.",
    },
    {
      question: "How effective is CBT? ",
      answer:
        "Studies have shown CBT to be highly effective for many mental health conditions. It is often recommended as a first-line treatment for issues like depression, anxiety disorders, and PTSD due to its structured and evidence-based approach.",
    },
    {
      question: "Can I practice CBT techniques on my own?",
      answer:
        "Yes, while working with a trained therapist is beneficial, many CBT techniques can be practiced independently. CureWave provides self-help tools, exercises, and worksheets to help users practice CBT in a guided manner.",
    },
    {
      question: "Who can benefit from CBT?",
      answer:
        "CBT can be beneficial for individuals experiencing a range of issues, including anxiety, depression, stress, relationship issues, and even conditions like OCD and PTSD. CureWave is here to help anyone interested in learning and applying CBT techniques to improve their mental well-being.",
    },
    {
      question: "What are some key techniques used in CBT? ",
      answer:
        "Key techniques in CBT include cognitive restructuring (challenging negative thought patterns), exposure therapy, journaling, and behavioral activation (engaging in activities that improve mood).",
    },
    {
      question: "How long does it typically take to see results from CBT?",
      answer:
        "The duration varies depending on individual needs and goals. Some people notice improvements within a few weeks, while others may need several months of consistent effort. CureWave offers resources to help track progress over time.",
    },
    {
      question: "Is CBT suitable for children and teenagers?",
      answer:
        "Yes, CBT is often adapted for younger audiences and has shown success with children and teens. Techniques are modified to suit different age groups, making them more accessible and engaging for younger individuals.",
    },
    {
      question: "Can CBT be used alongside other forms of therapy?",
      answer:
        "Absolutely. Many people find that combining CBT with other forms of therapy, like medication or alternative therapies, enhances the effectiveness of their treatment plan. CureWave includes information on complementary methods that can be discussed with a mental health professional.",
    },
    {
      question: "How can I book an appointment with a therapist on CureWave?",
      answer:
        "CureWave features profiles of licensed therapists specializing in CBT. You can view their credentials, areas of expertise, and available times to book an appointment directly through their platform.",
    },
    {
      question: "Are there different types of CBT available on CureWave?",
      answer:
        "Yes, CureWave features therapists skilled in various types of CBT, such as Dialectical Behavior Therapy (DBT) for emotional regulation, Cognitive Processing Therapy (CPT) for trauma, and Acceptance and Commitment Therapy (ACT) for managing thoughts and emotions.",
    },
    {
      question:
        "Can I find CBT resources on CureWave even if I don’t book a therapist? ",
      answer:
        "Yes, CureWave offers free resources like articles, videos, and worksheets to help you understand and practice CBT techniques independently. You don’t need an appointment to access these materials.",
    },
    {
      question: "How much do the therapy sessions cost? ",
      answer:
        " Therapy costs vary depending on the therapist and session duration. CureWave allows users to view prices upfront on therapist profiles. Additionally, some therapists may offer sliding scale fees or accept insurance, which will be indicated on their profiles.",
    },
    {
      question:
        "What additional resources does CureWave offer for mental well-being? ",
      answer:
        "CureWave provides a variety of resources, including guided worksheets, feedback forms, podcasts, educational videos, and lists of therapeutic games. There is also a dedicated section with stress-relief music, mindful relaxation tools, and activities to support mental wellness outside of formal therapy sessions.",
    },
  ];

  return (
    <div className="bg-[#F2E9E4] py-12">
      <section className="max-w-3xl mx-auto p-6 bg-[#D4E2D4] rounded-lg shadow-xl shadow-[#A3B18A] relative">
        {/* Heading Section */}
        <div className="head bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl my-6 w-full">
          <h1 className="text-center font-heading font-bold pb-6 text-3xl text-[#1C2833]">
            {displayedText}
          </h1>
          {isHeadingComplete && (
            <p
              className={`text-center mb-4 font-body font-semibold text-[#2F4F4F] text-xl transition-opacity duration-100 ${
                isParagraphVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {paragraph}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        {isParagraphVisible && (
          <div
            className={`questions font-body font-bold text-xl text-[#2F4F4F] transition:2s ease-in-out transform hover:scale-105 bg-[#D4E2D4] p-6 rounded-lg transition-opacity duration-500 ${
              isQuestionVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        )}

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 bg-[#E07A5F] text-white py-2 px-4 rounded-full shadow-md transition transform hover:scale-110"
        >
          ↑ Top
        </button>
      </section>
    </div>
  );
};

export default page;
