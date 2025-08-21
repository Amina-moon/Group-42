import React from "react";
import home1 from "../assets/Images/home1.png";
import { FiClock } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 


const Hero = () => {
   const navigate = useNavigate(); 
  
    
    const handleBookAppointment = () => {
      navigate("/appointment"); 
    };
     const learnmore = () => {
      navigate("/about"); 
    };
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C398E] mb-6">
              Your Health, Our Priority
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Wanaw Tena provides comprehensive healthcare services with
              compassionate care. Our experienced medical professionals are
              dedicated to keeping you and your family healthy.
            </p>

            <div className="flex flex-wrap gap-4">
              <button  onClick={handleBookAppointment}  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Book Appointment
              </button>
              <button onClick={learnmore} className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                Learn More
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={home1}
              alt="Healthcare professionals"
              className="rounded-lg  w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center flex flex-col items-center">
            <div className="w-14 h-14  rounded-full flex items-center justify-center ">
              <FiClock className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              24/7 Support Available{" "}
            </h3>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center ">
              <FiMessageSquare className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">SMS</h3>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center ">
              <FiPhone className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Phone Calls
            </h3>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
            <p className="text-gray-600">
              Excellence in treatment and patient care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className="text-gray-600">
              Inquiries, visits, and treatments in a safe space.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Qualified and enthusiastic professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
