import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ze4uw35",
        "template_rxs98ny",
        form.current,
        "0tQErGo8-_i0xJCZs"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"
      id="contact-me"
    >
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fadeIn">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 animate-fadeIn">
            We'd love to hear from you! Whether you have a question or just want
            to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="bg-white rounded-lg shadow-md p-6 w-full animate-slideInLeft">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <FaPhone className="text-blue-600 w-6 h-6 group-hover:scale-125 transition-transform" />
                  <a
                    href="tel:+2203427541"
                    className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    +220 3427541
                  </a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <FaEnvelope className="text-blue-600 w-6 h-6 group-hover:scale-125 transition-transform" />
                  <a
                    href="mailto:momocoder@codewithmo.com"
                    className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors overflow-hidden"
                  >
                    @codewithmo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 animate-slideInRight">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
                Send a Message
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Phone Number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    title="Phone number format: 123-456-7890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows="4"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg mt-4 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 relative overflow-hidden"
                  >
                    <RiSendPlaneFill className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                  {status && (
                    <p
                      className={`text-sm mt-4 sm:mt-0 ${
                        status.includes("Failed")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                      aria-live="polite"
                    >
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
