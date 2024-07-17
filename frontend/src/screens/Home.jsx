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
import Stats from "../components/elements/Stats.jsx";
import Code from "../components/elements/Code.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Qualities />
      <Education />
      <Experience />
      <Code />
      <Technologies />
      <Projects />
      <Stats />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
