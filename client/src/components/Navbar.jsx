import React from "react";
import logo from "../assets/Images/logo1.png";
import { FaUser, FaUserPlus } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <img 
            src={logo} 
            alt="Wanaw Tena Logo" 
            className="h-12 w-auto" 
          />
          <span className="text-2xl font-bold text-[#155DFC]">Wanaw Tena</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#155DFC] transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#155DFC] transition">AboutUs</a>
          <a href="#" className="text-gray-700 hover:text-[#155DFC] transition">Services</a>
          <a href="#" className="text-gray-700 hover:text-[#155DFC] transition">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-[#D9D9D9] text-black px-4 py-2 rounded-md transition hover:bg-gray-300">
            <FaUser className="mr-2" />
            Login
          </button>
          <button className="flex items-center bg-[#155DFC] text-white px-4 py-2 rounded-md transition hover:bg-blue-700">
            <FaUserPlus className="mr-2" />
            Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;