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
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8"
      id="contact-me"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="flex-1">
          <div className="max-w-md mx-auto text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-2 text-gray-600">
              We'd love to hear from you. Reach out to us through any of the
              following methods:
            </p>
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-600 w-6 h-6" />
                <a
                  href="mailto:momocoder@codewithmo.com"
                  className="text-gray-700"
                >
                  momocodeer@codewithmo.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-600 w-6 h-6" />
                <a href="tel:+2203344167" className="text-gray-700">
                  +220 3427541
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white border rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Contact Form
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
                type="text"
                name="phone-number"
                id="phone-number"
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Phone Number"
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
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 py-3 px-4 cursor-pointer"
              >
                <RiSendPlaneFill className="w-5 h-5" />
                Send Message
              </button>
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("Failed")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
