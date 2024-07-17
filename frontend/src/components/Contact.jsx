import React from "react";

export default function Contact() {
  return (
    <section id="contact" className=" py-16">
      <div className="container mx-auto">
        <div className="rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
              Let's get in touch
            </h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
              We promise to respond within 24 hours.
            </p>
            <form className="mt-8 mx-auto max-w-lg">
              <label
                htmlFor="fname"
                className="block text-sm font-semibold mb-1"
              >
                First name:
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="block w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition duration-300"
              />
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="block w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition duration-300"
              />
              <label
                htmlFor="subject"
                className="block text-sm font-semibold mb-1"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition duration-300"
              />
              <textarea
                rows="4"
                id="message"
                name="message"
                className="block w-full py-2 px-4 mb-6 bg-gray-200 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-purple-600 transition duration-300"
              ></textarea>
              <div className="text-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold cursor-pointer hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
