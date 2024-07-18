import React from "react";
import navbarLogo from "../../public/image/profile.png"; // Adjust the path as needed

const Hero = () => {
  return (
    <div>
      <header id="home" className="header-area">
        <div className="header-content relative flex items-center justify-center h-screen bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h4 className="text-lg text-gray-700">Hello, I’m</h4>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                 Momodou Jammeh
                </h1>
                <p className="text-gray-700 mt-4">
                  A Web and Mobile App Developer
                </p>
                <a
                  href="#work"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 transition duration-300 ease-in-out hover:bg-blue-600"
                >
                  Hire me
                </a>
              </div>
              <div className="hidden lg:block">
                <img
                  src={navbarLogo}
                  alt="hero"
                  className="rounded-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
