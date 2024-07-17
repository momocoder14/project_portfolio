import React from "react";

import laravel from "../../public/image/laravel.png"; // Adjust the path as needed
import react from "../../public/image/structure.png"; // Adjust the path as needed
import nodejs from "../../public/image/programing.png"; // Adjust the path as needed

const Technologies = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="font-medium text-3xl md:text-4xl mb-5">Technologies</h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Some programming Languages/Frameworks I'm good at
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex justify-center items-center">
            <img src={laravel} alt="Laravel" className="w-40" />
          </div>
          <div className="flex justify-center items-center">
            <img src={nodejs} alt="Node.js" className="w-40" />
          </div>
          <div className="flex justify-center items-center">
            <img src={react} alt="React" className="w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
