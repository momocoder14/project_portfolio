import React from "react";

const Technologies = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-3xl md:text-4xl mb-5">Technologies</h1>
        <p className="font-normal  text-xs md:text-base mb-10 md:mb-20">
          Some programming Languages/Frameworks I'm good at
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img src="../public/image/laravel.png" alt="Image" />
          <img src="../public/image/programing.png" alt="Image" />
          <img src="../public/image/structure.png" alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
