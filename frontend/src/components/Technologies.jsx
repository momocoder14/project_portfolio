import React from "react";

import laravel from "../../public/image/laravel.png"; // Adjust the path as needed
import react from "../../public/image/structure.png"; // Adjust the path as needed
import nodejs from "../../public/image/programing.png"; // Adjust the path as needed

const Technologies = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-neutral-200">
          I am able to work with various technologies
        </h2>
      </div>

      <div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
        <a className="flex-shrink-0 transition hover:-translate-y-1" href="#">
          <img
            src={laravel}
            alt="Laravel"
            className="size-6 md:size-10 mx-auto sm:mx-0"
            width="48"
            height="55"
          />
        </a>

        <a className="flex-shrink-0 transition hover:-translate-y-1" href="#">
          <img
            src={react}
            alt="React"
            className="size-6 md:size-10 mx-auto sm:mx-0"
            width="48"
            height="42"
          />
        </a>

        <a className="flex-shrink-0 transition hover:-translate-y-1" href="#">
          <img
            src={nodejs}
            alt="Node.js"
            className="size-6 md:size-10 mx-auto sm:mx-0"
            width="48"
            height="51"
          />
        </a>

        {/* Add more <a> tags for other technologies as needed */}
      </div>

      <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
        <div className="col-span-6 text-center">
          <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
            25+
          </h4>
          <h4 className="text-sm text-gray-600 dark:text-neutral-400">
            Projects
          </h4>
        </div>

        <div className="col-span-6 text-center">
          <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
            8
          </h4>
          <h4 className="text-sm text-gray-600 dark:text-neutral-400">
           Companies
          </h4>
        </div>

        <div className="col-start-4 col-span-6 text-center">
          <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
            12
          </h4>
          <h4 className="text-sm text-gray-600 dark:text-neutral-400">
            Mobile Apps
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
