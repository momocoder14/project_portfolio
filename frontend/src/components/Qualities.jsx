import React from "react";

const Qualities = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
        {/* Each item now takes full width on mobile and evenly divides space on larger screens */}
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
              <span>UI/UX Design</span>
            </h2>
            <p className="text-slate-500">
              A good design keeps a user interested in your website and not
              click away as soon as it loads.
            </p>
          </div>
        </div>

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
              <span>Responsive & Mobile Designs</span>
            </h2>
            <p className="text-slate-500">
              This is really important as almost half of the web's traffic is
              from mobile devices.
            </p>
          </div>
        </div>

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
              <span>Content Management Systems</span>
            </h2>
            <p className="text-slate-500">
              Connect clients' websites to popular content management systems
              like Strapi, WordPress, and Contentful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
