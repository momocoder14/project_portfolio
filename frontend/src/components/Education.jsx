import React from "react";

const Timeline = () => {
  return (
    <section className="education" id="education">
      <div className="mb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          Education{" "}
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed text-center">
          Schools that I learned from{" "}
        </p>
      </div>
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-start timeline-box">
            Bachelor's Degree in Computer Science
            <br />
            <span className="text-sm text-gray-500">2010 - 2014</span>
            <br />
            <span className="text-sm text-gray-500">
              Major: Computer Science
            </span>
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
          <hr className="bg-primary " />
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
          <div className="timeline-end timeline-box">
            Bachelor's Degree in Computer Science
            <br />
            <span className="text-sm text-gray-500">2010 - 2014</span>
            <br />
            <span className="text-sm text-gray-500">
              Major: Computer Science
            </span>
          </div>
          <hr className="bg-primary" />
        </li>
        <li>
          <hr className="bg-primary" />
          <div className="timeline-start timeline-box">
            Bachelor's Degree in Computer Science
            <br />
            <span className="text-sm text-gray-500">2010 - 2014</span>
            <br />
            <span className="text-sm text-gray-500">
              Major: Computer Science
            </span>
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
          <hr />
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
