import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import mock from "/image/mock.png"; // Ensure this path is correct
import mockweb from "/image/mockweb.png"; // Ensure this path is correct
import profile from "/image/profile.png"; // Ensure this path is correct
import nodeLogo from "/image/programing.png"; // Ensure this path is correct
import reactLogo from "/image/structure.png"; // Ensure this path is correct
import laravelLogo from "/image/laravel.png"; // Ensure this path is correct
import flutterLogo from "/image/flutter.png"; // Ensure this path is correct
import linkedinLogo from "/image/linkedin.jpg"; // Adjust the path as needed
import gomindzLogo from "/image/gomindz_logo.jpeg"; // Adjust the path as needed
import utgLogo from "/image/utg.png"; // Adjust the path as needed

import { FaAppStore,FaGooglePlay } from "react-icons/fa";



// Sample project data
const projects = [
  {
    title: "Codewithmo",
    description: "Momocoders Web",
    imageUrl: mockweb,
    technologies: ["React.js", "Strapi", "Tailwind CSS"],
    link: "https://codewithmo.com",
  },
  {
    title: "Codewithmo",
    description: "Momocoders Web",
    imageUrl: mockweb,
    technologies: ["React.js", "Strapi", "Tailwind CSS"],
    link: "https://codewithmo.com",
  },
  {
    title: "Codewithmo",
    description: "Momocoders Web",
    imageUrl: mockweb,
    technologies: ["React.js", "Strapi", "Tailwind CSS"],
    link: "https://codewithmo.com",
  },
  // Add more projects as needed
];

const testimonials = [
  {
    id: 1,
    text: "Momocoder is one of the best developers I have ever met. I highly recommend him to everyone out there.",
    image:linkedinLogo,
    name: "Ngagne Bah",
    role: "Backeend Engineer | Linkedin",
  },
  {
    id: 2,
    text: "Exceptional work! Their attention to detail and commitment to the project were impressive.",
    image: gomindzLogo,
    name: "Modou Lamin Jagne",
    role: "CTO | Gomindz",
  },
  {
    id: 3,
    text: "Exceptional work! Their attention to detail and commitment to the project were impressive.",
    image: utgLogo,
    name: "Muhammed Marong",
    role: "Lecturer | University of The Gambia",
  },
  // Add more testimonials here
];

const Technologies = () => {
  const technologies = [
    { src: reactLogo, alt: "React and React Native" },
    { src: nodeLogo, alt: "Node Js" },
    { src: laravelLogo, alt: "Laravel" },
    { src: flutterLogo, alt: "Flutter" },
    // Add more technologies as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8 p-4">
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
  );
};

const MobileAppsSection = () => {
  const mobileApps = [
    {
      title: "Mobile App 1",
      description: "Description of Mobile App 1",
      src: mock,
      technologies: ["React Native", "Firebase", "Tailwind CSS"],
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.example.app1",
      appStoreLink: "https://apps.apple.com/app/id123456789",
    },
    {
      title: "Mobile App 2",
      description: "Description of Mobile App 2",
      src: mock,
      technologies: ["React Native", "GraphQL", "Styled Components"],
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.example.app2",
      appStoreLink: "https://apps.apple.com/app/id987654321",
    },
    {
      title: "Mobile App 3",
      description: "Description of Mobile App 3",
      src: mock,
      technologies: ["Flutter", "GraphQL", "Taillwind CSS"],
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.example.app2",
      appStoreLink: "https://apps.apple.com/app/id987654321",
    },
    // Add more mockups as needed
  ];

  return (
    <div className="py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Mobile App Mockups
          </h1>
          <p className="text-lg text-gray-600">
            Explore some of the mobile applications I have developed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileApps.map((app, index) => (
            <div
              key={index}
              className="relative block overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              <img
                src={app.src}
                alt={app.title}
                className="w-full h-56 object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6 py-4">
                    <h3 className="text-2xl font-semibold mb-2">{app.title}</h3>
                    <p className="text-sm">{app.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 p-4 bg-gray-200 rounded-b-lg">
                {app.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 p-4 bg-white">
                <a
                  href={app.googlePlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600"
                >
                  <FaGooglePlay size={24} />
                </a>
                <a
                  href={app.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600"
                >
                  <FaAppStore size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="myportfolio">
      <div className="max-w-7xl px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Proficient in Various Technologies
          </h2>
          <p className="text-gray-600 mt-4">
            Leveraging a wide range of tools and technologies to build robust
            and scalable applications.
          </p>
        </div>
        <Technologies />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
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

      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Projects
            </h1>
            <p className="text-lg text-gray-600">
              Explore some of my recent work and projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                className="relative block overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.title}
                role="link"
                tabIndex="0"
              >
                <div className="group relative">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Thumbnail`}
                    className="w-full h-48 object-contain transition-opacity duration-500 group-hover:opacity-70"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text-center text-white px-6 py-4">
                      <h5 className="text-2xl font-semibold mb-2">
                        {project.title}
                      </h5>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 p-4 bg-gray-200 rounded-b-lg">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <MobileAppsSection />

      <div className="relative max-w-7xl px-4 py-4 sm:px-6 lg:px-4 lg:py-4 mx-auto">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-3xl mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map(({ id, text, image, name, role }) => (
              <SwiperSlide key={id}>
                <blockquote className="bg-gray-50 p-6 rounded-xl shadow-lg text-center">
                  <div className="relative flex justify-center mb-6">
                    <img
                      src={image}
                      alt={`${name}'s testimonial`}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gray-200"
                    />
                  </div>

                  <div className="relative mb-6">
                    <p className="relative text-lg sm:text-xl font-semibold text-gray-800">
                      <span className="relative z-10 italic text-gray-700">
                        "{text}"
                      </span>
                    </p>
                  </div>

                  <footer className="text-center">
                    <img
                      src={profile}
                      alt={name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-gray-300 shadow-md mx-auto"
                    />
                    <div className="mt-2 text-gray-800 font-semibold text-lg">
                      {name}
                    </div>
                    <div className="text-sm text-gray-500">{role}</div>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
