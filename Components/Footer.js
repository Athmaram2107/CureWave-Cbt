import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2F4F4F]  text-[#F2E9E4] py-10">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mx-28">
          {/* Pages Links */}
          <div>
            <h3 className=" font-semibold font-heading mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/Home" className="hover:text-[#A3B18A]">
                  Home
                </a>
              </li>
              <li>
                <a href="/Therapists" className="hover:text-[#A3B18A]">
                  Therapists
                </a>
              </li>
              <li>
                <a href="/Ratings" className="hover:text-[#A3B18A]">
                  Feedback
                </a>
              </li>

              <li>
                <a href="/Podcasts-music" className="hover:text-[#A3B18A]">
                  Music List
                </a>
              </li>

              <li>
                <a href="/Quotes" className="hover:text-[#A3B18A]">
                  Quotes
                </a>
              </li>
              <li>
                <a href="/Games" className="hover:text-[#A3B18A]">
                  Games
                </a>
              </li>
              <li>
                <a href="/FAQ" className="hover:text-[#A3B18A]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/Contacts" className="hover:text-[#A3B18A]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className=" font-semibold mb-4">Contact</h3>
            <p>Phone: +91 9966777888</p>
            <p>Email: help@curewave.com</p>
            <p>Hours: 24/7</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-[#F2E9E4] font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className=" font-semibold mb-4">Location</h3>
            <p>Sector 4,Sudergarh</p>
            <p>Rourkela, ODISHA, 534156</p>
            <p>India</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#A3B18A] pt-4 text-center text-sm text-[#F2E9F4]">
          © {new Date().getFullYear()} CureWave. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
