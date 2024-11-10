"use client";
import { React, useState } from "react";

const servicesData = [
  {
    id: 1,
    title: "Virtual Therapy Resources",
    description:
      "CureWave offers personalized virtual therapy sessions that connect you with licensed therapists from the comfort of your home. Our platform is designed to accommodate your schedule, allowing for flexible appointment booking so you can focus on your mental well-being without stress. Each session is tailored to address your specific needs, whether it's anxiety, depression, or other mental health challenges. We ensure a secure and private environment for all interactions, prioritizing your confidentiality. Join us to explore a wide range of therapeutic techniques including Cognitive Behavioral Therapy (CBT) to aid in your mental health journey.",
    image: "Images/resources1.webp",
  },
  {
    id: 2,
    title: "Interactive Mental Health Games",
    description:
      "Our website features a unique collection of interactive games designed to support your mental health. These games are created with therapeutic principles in mind, offering engaging ways to develop coping strategies and enhance cognitive skills. By participating in these activities, you can learn more about yourself and find new ways to manage stress and anxiety. The games are suitable for all ages and are a fun way to reinforce therapy concepts outside of traditional sessions. Discover a new path to mental wellness through our playful yet purposeful content.",
    image: "Images/appointment.jpg",
  },
  {
    id: 3,
    title: "Educational Podcasts and Resources",
    description:
      "CureWave provides a rich library of podcasts and educational resources to help demystify mental health topics and therapies. Our podcasts feature conversations with experts across various fields of mental health, offering insights and advice to help you better understand your mind. Additionally, our resources page is filled with articles, FAQs, and guides that cover everything from basic mental health tips to in-depth explorations of Cognitive Behavioral Therapy. Whether you’re just starting your mental health journey or looking to deepen your understanding, our content is designed to inform and inspire.",
    image: "Images/support.jpg",
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-[#F2E9E4] text-[#4A6650] border-[#A3B18A] shadow-xl py-10  px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold pt-2 pb-6  font-heading text-center ">
            Our Services
          </h2>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center my-10`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110 "
                />
              </div>
              <div className="w-full transition-transform duration-300 ease-in-out transform hover:-translate-y-1 md:w-1/2 px-4 mt-6 md:mt-0 ">
                <h3 className="text-3xl font-heading -mt-2 mb-4">
                  {service.title}
                </h3>
                <p className="text-[#333333] text-md font-body">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
