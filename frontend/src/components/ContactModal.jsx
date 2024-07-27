import React from "react";
import { FaLinkedin } from "react-icons/fa";
import profileLogo  from '../../public/image/profile.png'

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>

        {/* LinkedIn Mini Profile */}
        <div className="flex items-center mb-6">
          <img
            src={profileLogo} // Replace with your LinkedIn profile image URL
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
          />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Momodou Jammeh</h3>
            <p className="text-gray-600">Web and Mobile App Developer</p>
            <a
              href="https://www.linkedin.com/in/momocoder" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 text-lg font-medium"
            >
              View LinkedIn Profile
              <FaLinkedin className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
