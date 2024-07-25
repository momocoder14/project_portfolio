import React from "react";
import Qualities from "./Qualities";
import Education from "./Education";

const Info = ()=>{
  return <section
      className="py-10 md:py-16 relative flex flex-col items-center" 
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <p className="text-center text-gray-500">Get To Know More</p>
        <h1 className="text-3xl md:text-4xl font-medium mb-5 text-center">
          About Me
        </h1>
        <div className="mt-8 md:mt-12 text-center max-w-prose mx-auto">
          <p className=" leading-relaxed text-gray-500">
            I'm an enthusiastic backend engineer with fluency in JavaScript,
            with a focus on Node.js. I try to create elegant solutions that are
            memorable, with a strong focus on clean code. Allow my experience to
            add value to your work and draw in viewers.
          </p>
        </div>
      </div>
    </section>
}

const About = () => {
  return (
    <section id="about-me">
  <Info/>
  <Qualities />
  <Education />
    </section>
  );
};

export default About;
