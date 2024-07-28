import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navLogo from "../../public/image/favicon.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleMenuToggle = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-sm py-3 sm:py-0 shadow-lg transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="#home" aria-label="Home">
            <img
              src={navLogo}
              alt="Logo"
              className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110"
            />
          </a>
          <button
            type="button"
            className="sm:hidden ml-4 p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="navbar-collapse-with-animation"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6 transition-all duration-300`}
        >
          {[
            { id: "about-me", label: "About Me" },
            { id: "myportfolio", label: "Portfolio" },
            { id: "contact-me", label: "Contact Me" },
          ].map(({ id, label }) => (
            <a
              key={id}
              className={`block py-2 px-4 font-medium text-white hover:text-yellow-300 transition-colors duration-300 ${
                activeSection === id ? "text-yellow-300" : ""
              }`}
              href={`#${id}`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
              {activeSection === id && (
                <span className="block mt-1 w-full h-0.5 bg-yellow-300 transition-all duration-300" />
              )}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
