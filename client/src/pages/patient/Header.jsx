import React from "react";
import { FaUserMinus, FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const Header = () => {
  const navigate = useNavigate(); 

  const user = {
    name: "Amina Yassin",
  };

  const initial = user.name.charAt(0).toUpperCase();
  const handleBookAppointment = () => {
    navigate("/appointment"); 
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-end items-center">
      <div className="flex items-center space-x-3">
       
        <button 
                  onClick={handleBookAppointment} 
className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md transition hover:bg-green-700">
          <FaCalendarCheck className="mr-2" />
          Book Appointment
        </button>

       
        <div className="h-10 w-10 rounded-full bg-[#EFF7FD] flex items-center justify-center text-gray-500 font-bold">
          {initial}
        </div>
        <button className="flex items-center bg-[#155DFC] text-white px-4 py-2 rounded-md transition hover:bg-blue-700">
          <FaUserMinus className="mr-2" />
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
