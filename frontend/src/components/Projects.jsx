import React from "react";
import ProjectItem from "./elements/ProjectItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px", // Adjusted center padding to add space between slides
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "projects-slider", // Custom class to style the slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="webprojects" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <p className="text-center text-lg">Browse through some of my recent</p>
        <h1 className="text-center text-3xl md:text-4xl font-medium mb-10">
          Web Apps
        </h1>
        <Slider {...settings}>
          <div className="slide-item">
            <ProjectItem
              imageSrc="https://placehold.co/600x400"
              projectTitle="Bnb Gambia"
              githubLink="https://github.com/momocoder14/bnbGambia.git"
              demoLink="https://bnbgambia.netlify.app"
            />
          </div>
          <div className="slide-item">
            <ProjectItem
              imageSrc="https://placehold.co/600x400"
              projectTitle="KaniSpice"
              githubLink="https://github.com/momocoder14/KaniSpice-new.git"
              demoLink="https://kanispice.netlify.app"
            />
          </div>
          <div className="slide-item">
            <ProjectItem
              imageSrc="https://placehold.co/600x400"
              projectTitle="Charter"
              githubLink="https://github.com/username/project-3.git"
              demoLink="https://project-3-demo.netlify.app"
            />
          </div>
          <div className="slide-item">
            <ProjectItem
              imageSrc="https://placehold.co/600x400"
              projectTitle="Bloodbank"
              githubLink="https://github.com/username/project-3.git"
              demoLink="https://project-3-demo.netlify.app"
            />
          </div>
          <div className="slide-item">
            <ProjectItem
              imageSrc="https://placehold.co/600x400"
              projectTitle="Mochat Web"
              githubLink="https://github.com/username/project-3.git"
              demoLink="https://project-3-demo.netlify.app"
            />
          </div>

          {/* Add more ProjectItem components here */}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    ></div>
  );
};

export default Projects;
