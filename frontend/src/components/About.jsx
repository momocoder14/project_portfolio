import React from "react";

const InfoSection = ({ title, description }) => (
  <div className="py-16 relative flex flex-col items-center">
    <div className="container max-w-screen-xl mx-auto px-4">
      <p className="text-center text-gray-500">Get To Know More</p>
      <h1 className="text-3xl md:text-4xl font-medium mb-5 text-center">
        {title}
      </h1>
      <div className="mt-8 md:mt-12 text-center max-w-prose mx-auto">
        <p className="leading-relaxed text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="relative transition-transform duration-300 ease-in-out hover:rotate-3 hover:border-primary hover:bg-white hover:shadow-lg border border-transparent p-6 rounded-lg bg-slate-100 lg:hover:rotate-6 lg:col-span-1">
    <div className="relative z-10">
      <h2 className="text-xl font-bold capitalize mb-3 flex items-center space-x-4">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient shadow-lg shadow-rose-500/50">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="2"
            viewBox="0 0 16 16"
            className="w-4 h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
          </svg>
        </div>
        <span>{title}</span>
      </h2>
      <p className="text-slate-500">{description}</p>
    </div>
  </div>
);

const EducationTimeline = () => (
  <div className="max-w-5xl mx-auto px-4 py-10">
    <div className="mb-20 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Education Timeline</h2>
    </div>
    <ul className="timeline timeline-vertical relative">
      <li className="relative">
        <div className="timeline-start timeline-box bg-gray-100 p-4 rounded-lg shadow-md">
          Bachelor's Degree in Computer Science
          <br />
          <span className="text-sm text-gray-500">2010 - 2014</span>
          <br />
          <span className="text-sm text-gray-500">Major: Computer Science</span>
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-primary h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr className="bg-primary" />
      </li>
      <li>
        <hr className="bg-primary" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-primary h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box bg-gray-100 p-4 rounded-lg shadow-md">
          Master's Degree in Software Engineering
          <br />
          <span className="text-sm text-gray-500">2015 - 2017</span>
          <br />
          <span className="text-sm text-gray-500">
            Major: Software Engineering
          </span>
        </div>
      </li>
    </ul>
  </div>
);
const About = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      years: "2010 - 2014",
      major: "Major: Computer Science",
    },
    {
      degree: "Master's Degree in Software Engineering",
      years: "2015 - 2017",
      major: "Major: Software Engineering",
    },
  ];

  return (
    <section id="about-me" className="py-16">
      <InfoSection
        title="About Me"
        description="I'm an enthusiastic backend engineer with fluency in JavaScript, with a focus on Node.js. I try to create elegant solutions that are memorable, with a strong focus on clean code. Allow my experience to add value to your work and draw in viewers."
      />
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          <FeatureCard
            title="UI/UX Design"
            description="A good design keeps a user interested in your website and not click away as soon as it loads."
          />
          <FeatureCard
            title="Responsive & Mobile Designs"
            description="This is really important as almost half of the web's traffic is from mobile devices."
          />
          <FeatureCard
            title="Content Management Systems"
            description="Connect clients' websites to popular content management systems like Strapi, WordPress, and Contentful."
          />
        </div>
      </div>
      <EducationTimeline />
    </section>
  );
};

export default About;
