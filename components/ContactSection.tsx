import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
    return (
      <section id="contact" className="py-16">
        <div className="max-w-6x1 mx-auto px-4">
          <h1 className="my-10 text-center font-bold text-4xl">
            Kontakt
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-500 border-0 rounded"></hr>
          </h1>
          <div className="grid grid-cold-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <a
                href="https://github.com/mariaathoang"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-2xl font-semibold text-gray-800 hover:text-cyan-500"
              >
                <FaGithub size={60} className="mx-auto text-gray-800 mb-4 hover:text-cyan-500 transition" />
              </a>
              <p className="mt-4 text-center text-gray-600">github.com/mariaathoang</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <a
                href="https://www.linkedin.com/in/maria-anh-thu-hoang-170530306/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <FaLinkedin size={60} className="mx-auto text-gray-800 mb-4 hover:text-cyan-500 transition" />
              </a>
              <p className="mt-4 text-center text-gray-600">Maria Anh Thu Hoang</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <a
                href="mailto:mariaanhthu.hoang@gmail.com"
                className="block text-center"
              >
                <FaEnvelope size={60} className="mx-auto text-gray-800 mb-4 hover:text-cyan-500 transition" />
              </a>
              <p className="mt-4 text-center text-gray-600">mariaanhthu.hoang@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
)}


export default ContactSection