import React from "react";
import Technologies from "./Technologies";
import Testimonials from "./Testimonial";

// Sample project data
const projects = [
  {
    title: "Codewithmo",
    description: "Momocoders Web",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images",
    technologies: ["React.js", "Laravel", "Tailwind CSS", "Redux"],
    link: "https://codewithmo.com",
  },
  // Add more projects as needed
];

const ProjectDeets = () => {
  return (
    <div className=" py-16">
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
                  className="w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-70"
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
  );
};

const Projects = () => {
  return (
    <section id="portfolio" className="py-16">
      <Technologies />
      <ProjectDeets />
      <Testimonials />
    </section>
  );
};

export default Projects;
