import React from "react";

import "../main.css";
import Hero from "../components/Hero.jsx";
import Qualities from "../components/Qualities.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Technologies from "../components/Technologies.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Contact from "../components/Contact.jsx";
import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Qualities />
      <Education />
      <Experience />
      <Technologies />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
