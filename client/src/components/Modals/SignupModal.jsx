import React, { useState } from "react";
import { XMarkIcon, HomeIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/Images/logo1.png";
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ isOpen, onClose,onSwitchToLogin  }) => {
  const [formData, setFormData] = useState({
    faydaId: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing in the field
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check required fields
    if (!formData.faydaId) newErrors.faydaId = "Fayda ID is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";

    // If any required field is empty, show errors and stop further validation
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Validate Fayda ID
    if (formData.faydaId.length !== 16 || !/^\d+$/.test(formData.faydaId)) {
      newErrors.faydaId = "Fayda ID must be exactly 16 digits";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate Phone Number
    const phoneRegex = /^(?:\+2519\d{8}|\+2517\d{8}|09\d{8}|07\d{8})$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must start with +2519, +2517, 09, or 07 followed by 8 digits";
    }

    // Validate Password Match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    alert("Sign up successful!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="bg-white/70 w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl 
                   flex flex-col md:flex-row relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Section - Branding */}
        <div className="bg-gray-50/50 md:w-2/5 flex flex-col items-center justify-center p-6 md:p-12 relative">
          <HomeIcon onClick={handleHomeClick} className="w-6 h-6 md:w-8 md:h-8 text-pink-500 absolute top-4 left-4 md:top-6 md:left-6 cursor-pointer" />
          <img src={logo} alt="Logo" className="w-24 h-24 md:w-40 md:h-40 mb-4 md:mb-6" />
          <h1 className="text-xl md:text-3xl font-bold text-gray-600 text-center">Wanaw Tena</h1>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-3/5 p-6 md:p-8">
          <XMarkIcon
            className="w-6 h-6 md:w-8 md:h-8 text-gray-500 absolute top-4 right-4 md:top-6 md:right-6 cursor-pointer"
            onClick={onClose}
          />
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Sign up</h2>
          
          <form className="space-y-3 md:space-y-4" onSubmit={validateForm}>
            <div>
              <label
                htmlFor="faydaId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Fayda ID
              </label>
              <input
                id="faydaId"
                type="text"
                value={formData.faydaId}
                onChange={handleChange}
                placeholder="Fayda ID"
                className={`w-full border ${errors.faydaId ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.faydaId && <p className="text-red-500 text-xs mt-1">{errors.faydaId}</p>}
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone no
              </label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone no"
                className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm md:text-base"
            >
              Create account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-500 text-sm md:text-base">
            Have an account?{" "}
           <button 
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Login
          </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;