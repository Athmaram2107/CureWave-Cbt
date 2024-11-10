// Dropdown.js
import React from "react";

const Dropdown = () => {
  return (
    <div className="absolute top-full left-0 w-64 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold">Services</h2>
      <p className="text-gray-600">
        Get access to therapy, medication management, and personalized treatment
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-medium">Therapy</h3>
        <ul className="text-gray-600">
          <li>Individual therapy</li>
          <li>Couples therapy</li>
          <li>LGBTQIA+ therapy</li>
          <li>Therapy for veterans</li>
          <li>Unlimited messaging therapy</li>
          <li>Teen therapy</li>
          <li>NYC Teenspace</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">Medications</h3>
        <p>Psychiatry and medication management</p>
        <ul className="text-gray-600">
          <li>Abilify (Aripiprazole)</li>
          <li>Buspar (Buspirone)</li>
          <li>Cymbalta (Duloxetine)</li>
          <li>Lexapro (Escitalopram)</li>
          <li>Lithium</li>
          <li>Propranolol</li>
          <li>Prozac (Fluoxetine)</li>
          <li>Trazodone</li>
          <li>Zoloft (Sertraline)</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">Get treatment for:</h3>
        <ul className="text-gray-600">
          <li>Depression</li>
          <li>Anxiety</li>
          <li>Bipolar disorder</li>
          <li>OCD</li>
          <li>PTSD</li>
          <li>Post-partum depression</li>
          <li>Panic disorder</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
