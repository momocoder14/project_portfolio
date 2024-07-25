import React from "react";
import laravel from "../../public/image/laravel.png";
import react from "../../public/image/structure.png";
import nodejs from "../../public/image/programing.png";

const technologies = [
  { src: laravel, alt: "Laravel" },
  { src: react, alt: "React" },
  { src: nodejs, alt: "Node.js" },
];

const Technologies = () => {
  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Proficient in Various Technologies
        </h2>
        <p className="text-gray-600 mt-2">
          Leveraging a wide range of tools and technologies to build robust and
          scalable applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {technologies.map((tech, index) => (
          <a
            key={index}
            className="transition-transform transform hover:scale-110"
            href="#"
            aria-label={tech.alt}
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-16 h-16 object-contain"
              width="64"
              height="64"
            />
          </a>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <h4 className="text-3xl font-semibold text-gray-800">25+</h4>
          <p className="text-sm text-gray-600">Projects</p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-3xl font-semibold text-gray-800">8</h4>
          <p className="text-sm text-gray-600">Companies</p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-3xl font-semibold text-gray-800">12</h4>
          <p className="text-sm text-gray-600">Mobile Apps</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
