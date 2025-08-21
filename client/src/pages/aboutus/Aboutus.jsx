import React from "react";
import Navbar from "../../components/Navbar";
import aboutus from "../../assets/Images/abou_us3.png";
import vision from "../../assets/Images/about_us.png";
import mission from "../../assets/Images/about_us2.png";
import Footer from "../../components/Footer"

const Aboutus = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#EFF7FD] py-16 px-6 md:px-20 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C398E] mb-4">
              About Us
            </h2>
            <p className="text-gray-700">
              We are the Trusted Provider of 24/7 telehealth services with
              access to board-certified & Licenced Physicians through Phone
              Calls, SMS, Web Apps of Computer and Available on Both Android &
              IOs. Founded in 2025, our team of designers and developers are
              passionate about pushing the boundaries of Telehealth Services
              while maintaining accessibility and performance standards.
            </p>
          </div>

          <div className="flex justify-center">
            <img src={aboutus} alt="About Us" className="max-w-xs w-full" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-center">
          <div className="flex justify-center">
            <img src={mission} alt="Mission" className="max-w-xs w-full" />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C398E] mb-4">
              Mission
            </h2>
            <p className="text-gray-700">
              Our core purpose is to make quality healthcare accessible to
              everyone, anywhere, at any time through innovative digital health
              solutions. We bridge the gap between patients and healthcare
              providers by offering seamless online appointments, secure remote
              consultations, and comprehensive patient history management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7FD] py-16 px-6 md:px-20 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto  text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C398E] mb-4">
              Vision
            </h2>
            <p className="text-gray-700">
              Our vision is to become the leading platform that transforms
              healthcare delivery by making it more accessible, efficient, and
              patient-centered. We envision a world where geographical barriers
              no longer limit access to quality healthcare, and where patient
              data seamlessly follows individuals throughout their healthcare
              journey.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={vision} alt="Vision" className="max-w-xs w-full" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Aboutus;
