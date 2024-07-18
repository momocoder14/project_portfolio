import React from "react";
import "../main.css";
import Hero from "../components/Hero.jsx";
import Contact from "../components/Contact.jsx";
import Projects from "../components/Projects.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
