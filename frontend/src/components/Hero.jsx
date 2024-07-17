import React from "react";
import navbarLogo from "../../public/image/favicon.png"; // Adjust the path as needed
import homeImg from "../../public/image/profile.png"; // Adjust the path as needed
import ThemeController from "./elements/ThemeController";

const Hero = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-40">
          <img src={navbarLogo} className="w-10 h-10 rounded-full" alt="Logo" />
          <button className="bg-primary text-white px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
            Download CV
          </button>
          <ThemeController />
        </nav>
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <img
              src={homeImg}
              className=" w-40 h-40 rounded-full"
              alt="Image"
            />
          </div>
          <h6 className="font-medium text-lg md:text-2xl uppercase mb-8">
            Momodou Jammeh
          </h6>
          <h1 className="font-normal text-4xl md:text-7xl leading-none mb-8">
            Full Stack Web and Mobile App Developer
          </h1>
          <p className="font-normal text-md md:text-xl mb-16">
            I have a passion for software. I enjoy creating tools that make life
            easier for people.
          </p>
          <a
            href="#"
            className="bg-primary text-white px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
