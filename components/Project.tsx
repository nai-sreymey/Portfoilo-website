'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projectImages = [
  '/minimalblog.png',
  '/weather.png',
  '/blogpost.png',
  '/bike.png',
  '/math1.png',
  '/buildonlinesurveyanddashboarddisplay.png',
  '/certificate-generation.png',
  '/portfolio.png',
];

const projectDetails = [
  'Blog Web Application',
  'Weather Forecast App',
  'Blog Post',
  'Bicycle Rental System',
  'Basic Calculator',
  'Online Survey and Dashboard',
  'Certificate Generation Platform',
  'Personal Portfolio Website',
];

const projectDescriptions = [
  'A full-fledged blog web application to post, comment, and share articles.',
  'A weather forecast app displaying current weather and forecasts.',
  'A simple blog post page with article content and comments.',
  'A bike rental system with user registration, bike availability, and rental management.',
  'A basic calculator for simple arithmetic calculations.',
  'An online survey platform with a dashboard for data visualization.',
  'A certificate generation platform for automating the creation of certificates.',
  'A responsive portfolio website showcasing my skills, projects, and experience.',
];

const projectLinks = [
  'https://minimal-blog-beryl.vercel.app/',
  'https://pp-weather-azure.vercel.app/',
  'https://blogpost-one-rho.vercel.app/',
  'https://limsopheak16.github.io/Selling-Bicycle/',
  'https://hackathon-n2fu.vercel.app/',
  'https://buildonlinesurveyanddashboarddisplay.vercel.app/',
  'https://certificate-generation.vercel.app/',
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: 'next' | 'prev') => {
    if (containerRef.current) {
      const scrollAmount = 500;
      containerRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-6xl font-bold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <p className="text-lg mb-12">
          Explore my real-world projects. Each one showcases skills, technologies, and experience in web development.
        </p>
        <div className="relative flex items-center w-full max-w-[90vw] mx-auto">
          <div ref={containerRef} className="flex space-x-8 py-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory w-full">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg w-[420px] flex-shrink-0 snap-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <a href={projectLinks[index] || '#'} target={projectLinks[index] ? "_blank" : undefined} rel="noopener noreferrer">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={image}
                      alt={projectDetails[index]}
                      width={420}
                      height={250}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-3">{projectDetails[index]}</h3>
                  <p className="text-gray-300 text-lg">{projectDescriptions[index]}</p>
                </a>
              </motion.div>
            ))}
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 m-2">
            <button onClick={() => scroll('prev')} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
              &#10094;
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 m-2">
            <button onClick={() => scroll('next')} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
              &#10095;
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged Project"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
