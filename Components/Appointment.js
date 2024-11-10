"use client";
import React, { useState } from "react";

function Appointment() {
  const [isReturningCustomer, setIsReturningCustomer] = useState(false);
  const [discountMessage, setDiscountMessage] = useState("");

  const handleFileUpload = (event) => {
    setIsReturningCustomer(true);
    setDiscountMessage("Returning customer discount of 30% applied!");
  };

  const handleSubmit = (e) => {
    alert("Appointment has booked,See you in Session.");
  };

  return (
    <div className="bg-light-beige min-h-screen flex p-10 space-x-10">
      {/* Left Side - Form */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-primary-sage text-2xl font-semibold mb-6">
          Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-dark-slate">Full Name</label>
            <input type="text" className="w-full p-2 mt-1 border rounded-md" />
          </div>

          <div>
            <label className="text-dark-slate">Email</label>
            <input type="email" className="w-full p-2 mt-1 border rounded-md" />
          </div>

          <div>
            <label className="text-dark-slate">Phone Number</label>
            <input type="tel" className="w-full p-2 mt-1 border rounded-md" />
          </div>

          <div>
            <label className="text-dark-slate">Preferred Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          <div>
            <label className="text-dark-slate">Preferred Therapist</label>
            <select className="w-full p-2 mt-1 border rounded-md">
              <option>Select a therapist</option>
              <option>Therapist A</option>
              <option>Therapist B</option>
            </select>
          </div>

          <div>
            <label className="text-dark-slate">Session Type</label>
            <select className="w-full p-2 mt-1 border rounded-md">
              <option>Online</option>
              <option>In-Person</option>
            </select>
          </div>

          <div>
            <label className="text-dark-slate">
              Upload Previous Record (for discount)
            </label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="w-full p-2 mt-1 border rounded-md"
            />
            {isReturningCustomer && (
              <p className="text-burnt-sienna mt-2">{discountMessage}</p>
            )}
          </div>

          <div>
            <label className="text-dark-slate">Additional Notes</label>
            <textarea className="w-full p-2 mt-1 border rounded-md" rows="3" />
          </div>

          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-dark-slate">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#4A6650] text-white py-2 px-4 rounded w-full mt-6 hover:bg-[#008080]"
          >
            Confirm Appointment
          </button>
        </form>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-primary-sage text-2xl font-semibold">
          About Cognitive Behavioral Therapy
        </h2>
        <p className="text-dark-slate">
          Cognitive Behavioral Therapy (CBT) is a proven therapy technique that
          helps in dealing with various mental health challenges...
        </p>

        <h3 className="text-primary-sage text-xl font-semibold mt-6">
          Tools Used in Online Sessions
        </h3>
        <ul className="list-disc list-inside text-dark-slate space-y-2">
          <li>Guided Worksheets</li>
          <li>Relaxation Music</li>
          <li>Interactive Whiteboard for Live Exercises</li>
          <li>Progress Tracking and Feedback Tools</li>
        </ul>

        <h3 className="text-primary-sage text-xl font-semibold mt-6">
          Testimonials
        </h3>
        <blockquote className="text-soft-sage border-l-4 border-primary-sage pl-4 italic">
          "CureWave helped me regain my confidence..."
        </blockquote>

        <h3 className="text-primary-sage text-xl font-semibold mt-6">FAQs</h3>
        <div className="text-dark-slate space-y-4">
          <p>
            <strong>Q:</strong> How do I know if CBT is right for me?
          </p>
          <p>
            <strong>A:</strong> CBT is effective for a wide range of issues.
            Your therapist can guide you...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
