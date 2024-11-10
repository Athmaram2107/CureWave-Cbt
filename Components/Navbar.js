"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-deep-sage-green transition-shadow transform duration-300 ${
        hasShadow ? "shadow-2xl object-scale-down" : "scale-100"
      }`}
    >
      <nav
        className="bg-[#4A7C59] transform-
    font-navbar shadow-md h-16"
      >
        <div className="container mx-auto px-4 py-2 pb-3 flex justify-between items-center">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/Images/logo2.png"
              alt="Logo"
              className="w-11 h-11 rounded-3xl"
            />
            <span className="text-xl font-bold text-[#F2E9E4]">CureWave</span>
          </div>

          {/* Hamburger Menu Button (for mobile) */}
          <button
            className="text-[#F3EDE1] lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              href="/Home"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              Home
            </Link>
            <Link
              href="/Therapists"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              Therapists
            </Link>

            <Link
              href="/Podcasts-music"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              Podcasts
            </Link>
            <Link
              href="/Quotes"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              Quotes
            </Link>
            <Link
              href="/Games"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              Games
            </Link>
            <Link
              href="/FAQ"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              FAQs
            </Link>
            <Link
              href="/Contacts"
              className="block py-2 lg:py-0 hover:text-[#E07A5F] text-[#F2E9E4]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
