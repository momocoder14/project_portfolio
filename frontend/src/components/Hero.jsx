import React, { useState } from "react";
import navbarLogo from "../../public/image/profile.png"; // Adjust the path as needed
import { FaArrowRight, FaLinkedin } from "react-icons/fa"; // Importing an icon for the button
import ContactModal from "./ContactModal"; // Import the modal component
import Typewriter from "react-typewriter-effect";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden text-white bg-cover bg-center"
      style={{ backgroundImage: 'url("/path/to/your/background-image.jpg")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-teal-700 opacity-60 animate-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-gray-200 mb-2">
              Hello, I’m
            </h4>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-100 mb-4 leading-tight tracking-tight shadow-lg">
              <Typewriter
                text="Momodou Jammeh"
                cursorColor="#ffffff"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
                wrapperClassName="inline"
              />
            </h1>
            <p className="text-gray-300 mb-6 text-lg lg:text-xl leading-relaxed">
              A Web and Mobile App Developer
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-teal-600 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 relative overflow-hidden"
              aria-label="Connect with me on LinkedIn"
            >
              Connect on LinkedIn
              <FaLinkedin className="ml-2 text-lg" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 opacity-20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </div>
          <div className="hidden lg:block">
            <img
              src={navbarLogo}
              alt="Momodou Jammeh"
              className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-110 hover:brightness-85 filter brightness-90"
            />
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Hero;
