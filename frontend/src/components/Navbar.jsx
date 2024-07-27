import React, { useEffect, useState } from "react";
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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] py-3 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global Navigation"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold"
            href="#home"
            aria-label="Home"
          >
            <img
              src={navLogo}
              alt="Logo"
              className="w-12 h-12 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            />
          </a>
          <button
            type="button"
            className="sm:hidden flex items-center justify-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-white bg-black hover:bg-gray-800 transition-all duration-300"
            aria-expanded={isOpen}
            aria-controls="navbar-collapse-with-animation"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.293 5.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:justify-end transition-all duration-300`}
        >
          {[
            { id: "about-me", label: "About Me" },
            { id: "myportfolio", label: "Portfolio" },
            { id: "contact-me", label: "Contact Me" },
          ].map(({ id, label }) => (
            <a
              key={id}
              className={`py-3 px-4 font-semibold relative text-white ${
                activeSection === id ? "text-yellow-300" : "text-gray-200"
              } group transition-colors duration-300 hover:text-yellow-300`}
              href={`#${id}`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeSection === id
                    ? "bg-yellow-300"
                    : "group-hover:bg-yellow-300"
                } transition-all duration-300`}
              />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
