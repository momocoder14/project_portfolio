import React from "react";

const Testimonial = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="font-medium text-3xl md:text-4xl mb-5">Testimonial</h1>
        <p className="font-normal text-xs md:text-base mb-10 md:mb-20">
          Feedback about me
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              Momocoder is truly exceptional. He turned all my ideas into
              reality <br />
              All projects with him were a success and we definitely will be
              working with him again.
            </p>
            <h6 className="font-semibold text-gray-500 text-md">
              Aji Mai Jammeh
              <span className="font-medium text-gray-400 text-sm">
                - CEO at KaniSpice
              </span>
            </h6>
          </div>

          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              The kids love the website. You turned their worries into smiles, A
              respectful developer with the best of manners. <br />
              Looking forward to work with you again.
            </p>
            <h6 className="font-semibold text-gray-500 text-md">
              Kawsu Jabbie
              <span className="font-medium text-gray-400 text-sm">
                - CEO at Kids in Technology.
              </span>
            </h6>
          </div>
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              A great mentor and a great teacher!🫡A
              <br />
              Knows how to make your projects come alive.
              <br />I highly recommend Momocoder to anyone who needs a
              developer.
            </p>
            <h6 className="font-semibold text-gray-500 text-md">
              Ansumana Badjie
              <span className="font-medium text-gray-400 text-sm">
                - Frontend Engineer at Jasseh Codecamp
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
