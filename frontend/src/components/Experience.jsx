import React from "react";
import Timeline from "./elements/Timeline";

const Experience = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-3xl md:text-4xl mb-5">Experience</h1>
        <p className="font-normal text-xs md:text-base mb-20">
          A summary of the places I gained valuable work experience
        </p>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              Company
            </h6>
            <p className="font-semibold text-gray-600 text-base">
              Gomindz Inc.
              <span className="font-normal text-gray-500">/ Gambia</span>
            </p>
          </div>
          <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              Position
            </h6>
            <p className="font-normal text-gray-400 text-base">
              Junior Full Stack Developer
            </p>
          </div>
          <div className="space-y-8 md:space-y-16">
            <h6 className="font-medium text-gray-400 text-base uppercase">
              Year
            </h6>
            <p className="font-normal text-gray-400 text-base">
              Aug, 2023 - Jan, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
