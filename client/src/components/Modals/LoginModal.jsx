import React, { useState } from "react";
import { XMarkIcon, HomeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/Images/logo1.png";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose,onSwitchToSignup  }) => {
  const [faydaId, setFaydaId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const predefinedCredentials = {
    id: "1234567890123456", 
    password: "password123",
  };

  if (!isOpen) return null;

  const handleHomeClick = () => {
    navigate('/');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!faydaId.trim()) {
      newErrors.faydaId = "Fayda ID is required";
    } else if (faydaId.length !== 16) {
      newErrors.faydaId = "Fayda ID must be exactly 16 digits";
    } else if (!/^\d+$/.test(faydaId)) {
      newErrors.faydaId = "Fayda ID must contain only numbers";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    if (field === 'faydaId') {
      const numericValue = value.replace(/\D/g, '').slice(0, 16);
      setFaydaId(numericValue);
    } else {
      setPassword(value);
    }
    
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (faydaId === predefinedCredentials.id && password === predefinedCredentials.password) {
        alert("Login Successful!");
        onClose();
        setFaydaId("");
        setPassword("");
        setErrors({});
      } else {
        setErrors({ general: "Invalid Fayda ID or Password" });
      }
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFaydaId("");
    setPassword("");
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50
                 bg-white/20 backdrop-blur-md p-2 sm:p-6"
      onClick={handleClose}
    >
      <div
        className="bg-white/70 w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl 
                   flex flex-col md:flex-row relative p-2 sm:p-4 md:p-6 lg:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-50/50 flex-1 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 relative order-1">
          <HomeIcon  
            onClick={handleHomeClick} 
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-500 absolute top-4 left-4 sm:top-6 sm:left-6 cursor-pointer hover:text-pink-600 transition-colors" 
          />
          <img 
            src={logo} 
            alt="Logo" 
            className="w-24 h-24 sm:w-20 sm:h-20 md:w-40 md:h-40 mb-4 sm:mb-6" 
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 text-center">Wanaw Tena</h1>
          
          <div className="mt-4 md:mt-8 text-center text-gray-500 text-sm md:text-base">
            <p>Secure login for your healthcare services</p>
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-2 md:p-12 relative order-2">
          <XMarkIcon
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500 absolute top-4 right-4 sm:top-6 sm:right-6 cursor-pointer hover:text-gray-700 transition-colors"
            onClick={handleClose}
          />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">LOGIN</h2>
          
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {errors.general}
            </div>
          )}
          
          <form className="flex flex-col space-y-4 sm:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="fayda-id"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-1 sm:mb-2"
              >
                Fayda ID
              </label>
              <input
                id="fayda-id"
                type="text"
                value={faydaId}
                onChange={(e) => handleInputChange('faydaId', e.target.value)}
                placeholder="Enter 16-digit Fayda ID"
                className={`w-full border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg ${
                  errors.faydaId ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength={16}
              />
              {errors.faydaId && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.faydaId}
                </p>
              )}
              {faydaId.length > 0 && !errors.faydaId && (
                <p className="text-green-600 text-sm mt-1">
                  {16 - faydaId.length} digits remaining
                </p>
              )}
            </div>
            
            <div>
              <label
                htmlFor="password"
                className="block text-base sm:text-lg font-medium text-gray-700 mb-1 sm:mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg pr-10 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.password}
                </p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold transition flex items-center justify-center ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-800'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
          
          <div className="mt-4 text-sm text-gray-600">
            <p className="text-center">Demo credentials:</p>
            <p className="text-center">Fayda ID: <span className="font-mono">1234567890123456</span></p>
            <p className="text-center">Password: <span className="font-mono">password123</span></p>
          </div>
          
          <p className="text-sm sm:text-base mt-4 sm:mt-6 text-center">
            Don't have an account?{" "}
            <button 
             type="button"
    onClick={onSwitchToSignup}
    className="text-blue-600 underline cursor-pointer hover:text-blue-800">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;