'use client';
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaEnvelope, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
        {/* Left Section - Connect with Me */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h2
            className="text-5xl font-bold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>

          <p className="text-lg text-gray-300 mb-6">
            I'm open to freelance projects and collaborations. If you need a developer, let's work together to make something great!
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Contact Information</h3>
            <p className="text-gray-400 text-lg">📍 Location: Phnom Penh, Cambodia</p>
            <p className="text-gray-400 text-lg">🏠 Address:Trea Village, Stueng Meanchey, Meanchey, Phnom Penh</p>
            <p className="text-gray-400 text-lg">📞 Phone: 0967211849</p>
            <p className="text-gray-400 text-lg mt-4">
              I work on full-stack development, creating websites and apps. If you're looking for a developer, let's talk!
            </p>
            <div className="mt-8">
              <p className="text-gray-400 text-sm">You can reach me through the form or follow me on social media!</p>
            </div>
          </div>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-extrabold text-blue-500 mb-6">Follow Me</h3>
          <div className="flex space-x-6 text-4xl mb-8">
            <a href="https://discord.com/users/1192638802246762577" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-indigo-500 hover:text-indigo-700 transition duration-300" />
            </a>
            <a href="https://www.facebook.com/eiimey.tah?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-500 hover:text-blue-700 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/hzhhddjdjeifjsjdjjj/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-700 transition duration-300" />
            </a>
            <a href="https://t.me/Naisreymey001" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-blue-500 hover:text-blue-700 transition duration-300" />
            </a>
            <a href="mailto:sreymey.nai@institute.pse.ngo" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-gray-400 hover:text-gray-600 transition duration-300" />
            </a>
          </div>

          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg w-full text-center mt-8">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Why Choose Me?</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>🌟 Full-stack development skills (Node.js, React, Next.js, TypeScript)</li>
              <li>🔧 I create scalable and good websites.</li>
              <li>💻 Focus on easy-to-use and beautiful designs</li>
              <li>🤝 Available for both short and long-term projects</li>
              <li>💡 Always learning new technologies</li>
            </ul>
            <p className="text-gray-400 mt-4 text-lg">Let's build something great together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
