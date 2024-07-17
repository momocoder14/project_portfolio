import React, { useEffect } from "react";
import feather from "feather-icons";

const Footer = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <footer className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <p className="font-normal text-gray-400 text-md md:text-lg mb-10">
            Feel free to contact me on one of the following platforms
          </p>
          <div className="flex items-center justify-center space-x-8">
            <a
              href="#"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
            >
              <i
                data-feather="twitter"
                className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"
              ></i>
            </a>
            <a
              href="#"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
            >
              <i
                data-feather="linkedin"
                className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
              ></i>
            </a>
            <a
              href="#"
              className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
            >
              <i
                data-feather="instagram"
                className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
              ></i>
            </a>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full transition ease-in-out duration-500"
              >
                <i
                  data-feather="at-sign"
                  className="text-gray-500 transition ease-in-out duration-500"
                ></i>
              </a>
              <a
                href="#"
                className="text-gray-500 transition ease-in-out duration-500"
              >
                Momocoder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
