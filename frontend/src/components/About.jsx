import React from "react";
import experience from "../../public/image/experience.png"; // Adjust the path as needed
import education from "../../public/image/education.png"; // Adjust the path as needed
import profile from "../../public/image/about-pic.png"; // Adjust the path as needed

const About = () => {
  return (
    <section
      id="about"
      className="py-10 md:py-16 relative flex flex-col items-center"
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <p className="text-center">Get To Know More</p>
        <h1 className="text-3xl md:text-4xl font-medium mb-5 text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex justify-center w-full md:w-auto md:flex-none md:h-auto">
            <img
              src={profile}
              alt="Profile picture"
              className="rounded-2xl w-[320px] "
            />
          </div>
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center w-[320px]">
              <img
                src={experience}
                alt="Experience icon"
                className="w-10 h-10 mb-2"
              />
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Experience
              </h3>
              <p className="text-gray-500 text-center">
                3+ years
                <br />
                Web and Application Development
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center w-[320px]">
              <img
                src={education}
                alt="Education icon"
                className="w-10 h-10 mb-2"
              />
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Education
              </h3>
              <p className="text-gray-500 text-center">
                B.Sc. Information Systems
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center max-w-prose mx-auto">
          <p className=" leading-relaxed">
            I'm an enthusiastic backend engineer with fluency in JavaScript,
            with a focus on Node.js. I try to create elegant solutions that are
            memorable, with a strong focus on clean code. Allow my experience to
            add value to your work and draw in viewers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
