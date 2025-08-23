import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/aboutus/Aboutus';
import Dashboard from "./pages/patient/Dashboard"
import Appointment from "./pages/patient/Appointment";


function App() {

  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/patientdashboard" element={<Dashboard />} />
      <Route path="/appointment" element={<Appointment />} />






    </Routes>
    
  )
}

export default App
