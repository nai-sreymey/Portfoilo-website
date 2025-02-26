"use client";

import React from "react";
import { motion } from "framer-motion";

const Technology: React.FC = () => {
  const technologies = [
    { title: "HTML", image: "/html2.png", description: "A markup language used for structuring content on the web." },
    { title: "CSS", image: "/css1.png", description: "Styles the layout and appearance of web pages." },
    { title: "JavaScript", image: "/JS.png", description: "A scripting language for creating interactive web pages." },
    { title: "Next.js", image: "/nextjs.png", description: "A React framework for building fast, optimized websites." },
    { title: "React", image: "/react.png", description: "A JavaScript library for building user interfaces, particularly single-page apps." },
    { title: "Tailwind", image: "/tailwind.png", description: "A utility-first CSS framework for creating custom designs quickly." },
    { title: "Node.js", image: "/node.png", description: "A JavaScript runtime for building server-side applications." },
    { title: "Express", image: "/express.png", description: "A minimal and flexible Node.js web application framework." },
    { title: "MongoDB", image: "/mongodb.png", description: "A NoSQL database for storing unstructured data." },
    { title: "MySQL", image: "/mysql1.png", description: "A relational database management system for structured data." },
    { title: "Docker", image: "/docker.png", description: "A tool for creating and managing containerized applications." },
    { title: "Postman", image: "/postman.png", description: "A tool for testing and documenting APIs." },
    { title: "Figma", image: "/figma.png", description: "A design tool for creating user interfaces and prototypes." },
    { title: "GitHub", image: "/github.png", description: "A platform for version control and collaboration on code." },
    { title: "TypeScript", image: "/typescript.png", description: "A superset of JavaScript that adds static types." },
    { title: "Vercel", image: "/vercel1.png", description: "A platform for deploying front-end projects and serverless functions." },
  ];

  return (
    <section id="tool" className="relative min-h-[70vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tools
        </motion.h2>
        <p className="text-xl text-gray-300 mb-16">I work with cutting-edge technologies.</p>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl shadow-lg bg-white text-center hover:scale-110 transform transition duration-300 ease-in-out hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-16 h-16 mx-auto mb-4 transition-all duration-300 transform hover:scale-125"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
              <p className="text-gray-600 mt-4 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
