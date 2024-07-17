import React from "react";

const Education = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-3xl md:text-4xl mb-5">Education</h1>
        <p className="font-normal text-xs md:text-base mb-20">
          A summary of my education history.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2016 – 2019
            </h4>
            <p className="font-normal text-gray-500 text-md mb-4">
              High school where I did commerce as a major.
              <br /> <br /> Bakau Mile 7,
              <br /> The Gambia.
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                Gambia Methodist Academy{" "}
              </h6>
            </div>
          </div>
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2021 – 2025
            </h4>
            <p className="font-normal text-gray-500 text-md mb-4">
              University where I am pursuing a BSc in Information Systems <br />
              Faraba, <br /> The Gambia.
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                University of The Gambia
              </h6>
            </div>
          </div>
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              2022 – 2024
            </h4>
            <p className="font-normal text-gray-500 text-md mb-4">
              A platform for learning various courses from which I learned from
              the best of instructors <br />
              <br />
              Online
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                Udemy{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
