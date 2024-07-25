import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import profile from "../../public/image/profile.png"; // Adjust the path as needed

const testimonials = [
  {
    id: 1,
    text: "Momocoder is one of the best developers I have ever met. I highly recommend him to everyone out there.",
    image:
      "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713806/3500/2330/m1/fpnw/wm0/logos-21-77-.jpg?1563702063&s=c25446499054f94d550e28c39b63e932",
    name: "Kawsu",
    role: "CEO | Kit",
  },
  {
    id: 2,
    text: "Exceptional work! Their attention to detail and commitment to the project were impressive.",
    image: "https://placekitten.com/200/200",
    name: "Alex",
    role: "CTO | TechCorp",
  },
  // Add more testimonials here
];

export default function App() {
  return (
    <>
     <section className="relative max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      < div className="max-w-3xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map(({ id, text, image, name, role }) => (
          <SwiperSlide key={id}>
            <blockquote className="bg-gray-50 p-6 rounded-xl shadow-lg text-center">
              <div className="relative flex justify-center mb-6">
                <img
                  src={image}
                  alt={`${name}'s testimonial`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gray-200"
                />
              </div>

              <div className="relative mb-6">
                <p className="relative text-lg sm:text-xl font-semibold text-gray-800">
                  <span className="relative z-10 italic text-gray-700">
                    "{text}"
                  </span>
                </p>
              </div>

              <footer className="text-center">
                <img
                  src={profile}
                  alt={name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-gray-300 shadow-md mx-auto"
                />
                <div className="mt-2 text-gray-800 font-semibold text-lg">
                  {name}
                </div>
                <div className="text-sm text-gray-500">{role}</div>
              </footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
            </div>
    </section>

    </>
  );
}
