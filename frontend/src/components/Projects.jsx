import React from "react";
import Technologies from "./Technologies"
import Testimonials from "./Testimonial";

const ProjectDeets = ()=>{
  return (
    <section className="scrollspy bg-white dark:bg-slate-900" id="portfolio">
      <div className="max-w-[1335px] mx-auto px-4 sm:px-6 py-28">
        <div className="mb-14 flex lg:items-center justify-between flex-col lg:flex-row">
          <div className="w-full ">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
              Projects
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed text-center">
              See some of my recent works
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            className="block"
            href="https://codewithmo.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full bg-white z-10 h-0 group-hover:h-full transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient z-10 h-0 group-hover:h-full transition-all opacity-0 group-hover:opacity-100 duration-500 ease-in-out flex items-center justify-center delay-150">
                <img
                  alt=""
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images"
                  className="object-cover opacity-20"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  decoding="async"
                  data-nimg="fill"
                />
                <div className="text-center relative z-10 px-4">
                  <h5 className="font-bold text-lg text-center heading-font">
Codewithmo                  </h5>
                  <p className="text-slate-100 text-sm mt-2">
                  Momocoders Web
                  </p>
                </div>
              </div>
              <div className="w-full h-48 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-2xl relative">
                <img
                  alt="Gammusic"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images"
                  className="object-fill"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  decoding="async"
                  data-nimg="fill"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4 text-white">
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                React.js
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Laravel
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Tailwind CSS
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Redux
              </span>
            </div>
          </a>
          <a
            className="block"
            href="https://codewithmo.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full bg-white z-10 h-0 group-hover:h-full transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient z-10 h-0 group-hover:h-full transition-all opacity-0 group-hover:opacity-100 duration-500 ease-in-out flex items-center justify-center delay-150">
                <img
                  alt=""
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images"
                  className="object-cover opacity-20"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  decoding="async"
                  data-nimg="fill"
                />
                <div className="text-center relative z-10 px-4">
                  <h5 className="font-bold text-lg text-center heading-font">
Codewithmo                  </h5>
                  <p className="text-slate-100 text-sm mt-2">
                  Momocoders Web
                  </p>
                </div>
              </div>
              <div className="w-full h-48 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-2xl relative">
                <img
                  alt="Gammusic"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images"
                  className="object-fill"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  decoding="async"
                  data-nimg="fill"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4 text-white">
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                React.js
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Laravel
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Tailwind CSS
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Redux
              </span>
            </div>
          </a>
          <a
            className="block"
            href="https://codewithmo.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="group relative overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full bg-white z-10 h-0 group-hover:h-full transition-all opacity-0 group-hover:opacity-100 duration-300 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient z-10 h-0 group-hover:h-full transition-all opacity-0 group-hover:opacity-100 duration-500 ease-in-out flex items-center justify-center delay-150">
                <img
                  alt=""
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images"
                  className="object-cover opacity-20"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  decoding="async"
                  data-nimg="fill"
                />
                <div className="text-center relative z-10 px-4">
                  <h5 className="font-bold text-lg text-center heading-font">
Codewithmo                  </h5>
                  <p className="text-slate-100 text-sm mt-2">
                  Momocoders Web
                  </p>
                </div>
              </div>
              <div className="w-full h-48 transition-all duration-300 ease-in-out shadow-lg group-hover:shadow-2xl relative">
                <img
                  alt="Gammusic"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hSU9KxpBNdJoRvicvNZLwQHaDj%26pid%3DApi&f=1&ipt=7e6cae4b86c341d49d8e63d4781993424a2086def4706ac895adbb0fabdc7c0f&ipo=images"
                  className="object-fill"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                  decoding="async"
                  data-nimg="fill"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4 text-white">
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                React.js
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Laravel
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Tailwind CSS
              </span>
              <span className="heading-font font-medium text-[11px] uppercase shadow-sm tracking-wide bg-primary/10 backdrop-blur-md text-primary py-1 px-2 rounded-md">
                Redux
              </span>
            </div>
          </a>
         
        </div>
      </div>
    </section>
  )
}


const Projects = () => {
  return (
    <>
      <Technologies />
      <ProjectDeets />
      <Testimonials />
    </>
  );
};

export default Projects;
