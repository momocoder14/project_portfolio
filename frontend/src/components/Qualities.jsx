import React from "react";

const Qualities = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-6 lg:pl-16">
        <div className="flex justify-center items-center space-x-4">
          <div className="flex w-1/3 relative transition-all hover:even:border-transparent even:z-10 even:bg-white/50 backdrop-blur-sm duration-300 ease-out even:rotate-6 even:hover:rotate-0 even:border-2 hover:bg-slate-100 odd:bg-slate-100 even:border-primary p-6 rounded-lg">
            <div className="flex-grow relative z-10">
              <h2 className="text-xl font-bold capitalize mb-3 items-center flex space-x-4">
                <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-gradient shadow-lg shadow-rose-500/50">
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
                <span className="dark:text-slate-100">UI/UX Design</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-300 ml-7">
                A good design keeps a user interested in your website and not
                click away as soon it loads
              </p>
            </div>
          </div>

          <div className="flex w-1/3 relative transition-all hover:even:border-transparent even:z-10 even:bg-white/50 backdrop-blur-sm duration-300 ease-out even:rotate-6 even:hover:rotate-0 even:border-2 hover:bg-slate-100 odd:bg-slate-100 even:border-primary p-6 rounded-lg">
            <div className="flex-grow relative z-10">
              <h2 className="text-xl font-bold capitalize mb-3 items-center flex space-x-4">
                <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-gradient shadow-lg shadow-rose-500/50">
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
                <span className="dark:text-slate-100">
                  Responsive & Mobile Designs
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-300 ml-7">
                This is really important and I take into account, since almost
                half of the web's traffic online are mobile devices
              </p>
            </div>
          </div>

          <div className="flex w-1/3 relative transition-all hover:even:border-transparent even:z-10 even:bg-white/50 backdrop-blur-sm duration-300 ease-out even:rotate-6 even:hover:rotate-0 even:border-2 hover:bg-slate-100 odd:bg-slate-100 even:border-primary p-6 rounded-lg">
            <div className="flex-grow relative z-10">
              <h2 className="text-xl font-bold capitalize mb-3 items-center flex space-x-4">
                <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-gradient shadow-lg shadow-rose-500/50">
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
                <span className="dark:text-slate-100">
                  Content Management Systems
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-300 ml-7">
                Connect clients websites to famous content management systems
                like Strapi, WordPress, and Contentful etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
