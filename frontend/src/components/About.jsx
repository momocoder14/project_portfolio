import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10 md:py-16 relative flex flex-col items-center">
      <div className="container max-w-screen-xl mx-auto px-4">
        <p className="text-center">Get To Know More</p>
        <h1 className="text-3xl md:text-4xl font-medium text-gray-700 mb-5 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex justify-center w-full md:w-auto md:flex-none md:h-auto">
            <img src="/assets/about-pic.png" alt="Profile picture" className="rounded-2xl w-[320px] h-[640px]" />
          </div>
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center w-[320px]">
              <img src="/assets/experience.png" alt="Experience icon" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Experience</h3>
              <p className="text-gray-500 text-center">3+ years<br />Web and Application Development</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center w-[320px]">
              <img src="/assets/education.png" alt="Education icon" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Education</h3>
              <p className="text-gray-500 text-center">B.Sc. Information Systems</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center max-w-prose mx-auto">
          <p className="text-gray-600 leading-relaxed">
            I'm an enthusiastic backend engineer with fluency in JavaScript, with a focus on Node.js.
            I try to create elegant solutions that are memorable, with a strong focus on clean code.
            Allow my experience to add value to your work and draw in viewers.
          </p>
        </div>
      </div>
      <img src="/image/home-img.png" alt="Arrow icon" className="absolute right-0 bottom-20 md:bottom-10 cursor-pointer" onClick={() => window.location.href = './#experience'} />
    </section>
  );
}

export default About;
