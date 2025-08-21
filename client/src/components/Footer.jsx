import React from "react";
import logo from "../assets/Images/logo1.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#1C398E] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-400 pb-4 mb-4">
          {/* Logo + Text */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Wanaw Tena</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Contacts
            </a>
            <a href="#" className="hover:underline">
              Terms of service
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-xs text-gray-200">
          © 2025 Wanaw Tena. All rights reserved. Crafted with modern Telehealth
          technologies.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
