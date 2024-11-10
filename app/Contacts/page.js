// ContactUs.js
"use client";
import React from "react";
import "../App.css";

const page = () => {
  const handleSubmit = (e) => {
    alert("Your message is sent. We will contact you soon!");
  };

  return (
    <>
      {/* Heading Section #74c088*/}
      <section className="bg-svgM">
        <div className="bg-svg h-96 py-16  text-[#F5F5DC] ">
          <h1 className="text-4xl text-center font-semibold">Contact Us</h1>
        </div>

        {/* Main Content Section */}

        <div className="bg-[#D4E2D4] -mt-24  text-[#4A6650] py-4 px-8 rounded-lg mx-auto w-full max-w-4xl shadow-lg">
          {/* Introduction Text */}
          <h2 className="text-center text-3xl font-bold font-heading mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-center font-heading text-2xl text-[#4A6650] font-semibold mb-12">
            We're here to support you on your journey. Let us know how we can
            help:
          </p>

          {/* Therapy Options Section */}
          <div className="mb-10 space-y-4">
            <div>
              <strong>Book a Therapy Session</strong>
              <p className="text-[#333333]">
                Request an appointment with our therapists for personalized
                support.
              </p>
            </div>
            <div>
              <strong>Learn about Cognitive Behavioral Therapy (CBT)</strong>
              <p className="text-[#333333]">
                Get insights and resources on CBT to improve mental well-being.
              </p>
            </div>
            <div>
              <strong>Explore Therapy Programs</strong>
              <p className="text-[#333333]">
                Discover our range of therapy services and wellness programs.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 w-full rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border p-2 w-full rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 w-full rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="border p-2 w-full rounded" required>
                <option value="">Preferred Contact Method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
              <textarea
                placeholder="Your Message"
                className="border p-2 w-full rounded"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-[#333333]">
                I'd like to receive updates and wellness tips.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#D2691E] text-white py-2 px-6 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-10 text-[#1C2833]">
            <h3 className="text-xl font-semibold mb-2">Reach Out to Us</h3>
            <p>
              <strong>Appointments:</strong> appointments@curewave.com
            </p>
            <p>
              <strong>Support:</strong> support@curewave.com
            </p>
            <p>
              <strong>General Inquiries:</strong> info@curewave.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
