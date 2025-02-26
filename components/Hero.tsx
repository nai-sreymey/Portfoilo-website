'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To control the mobile menu visibility

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadClick = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000); 
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="bg-gradient-to-r from-indigo-800 via-purple-900 to-black p-4 w-full fixed top-0 z-50 shadow-xl border-b-4 border-indigo-700">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
              <img
                src="/logo.png"
                alt="Nai SreyMey"
                className="rounded-full w-16 h-16 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
            </a>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
             
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="block lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                src="/main-menu.png"
                alt="Menu"
                className="w-10 h-10 object-cover shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-3 text-white"
              />
            </button>
          </div>

          {/* Navigation menu for large screens */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 text-white text-lg md:text-2xl font-semibold">
              {[
                { label: 'Overview', id: 'home' },
                { label: 'Who I Am', id: 'about' },
                { label: 'My Project', id: 'projects' },
                { label: 'Technologies', id: 't' },
                { label: 'Get in Touch', id: 'contact' },
              ].map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="relative transition-all duration-300 ease-in-out hover:text-white hover:scale-105 transform hover:bg-gradient-to-r from-indigo-600 to-indigo-800 px-4 py-2 rounded-lg"
                  >
                    <span className="relative z-10 transform group-hover:scale-110 group-hover:text-yellow-300 transition-all duration-300 ease-in-out">
                      {item.label}
                    </span>
                    <span className="absolute inset-0 w-full h-full border-4 border-transparent group-hover:border-purple-500 rounded-lg transform group-hover:scale-110 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute inset-0 w-full h-full border-2 border-indigo-700 rounded-lg opacity-30 group-hover:opacity-50 transition-all duration-300 ease-in-out animate-pulse"></span>
                  </a>

                  {/* Dropdown */}
                  {item.id === 'projects' && (
                    <ul className="absolute left-0 mt-2 w-80 bg-gradient-to-r from-indigo-600 to-indigo-700 bg-opacity-30 text-white font-semibold rounded-lg py-2 px-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition-all duration-300 ease-in-out">
                      {[
                        { label: 'Blog Web Application', link: 'https://minimal-blog-beryl.vercel.app/' },
                        { label: 'Weather Forecast App', link: 'https://pp-weather-azure.vercel.app/' },
                        { label: 'Blog Post', link: 'https://blogpost-one-rho.vercel.app/' },
                        { label: 'Bicycle Rental System', link: 'https://limsopheak16.github.io/Selling-Bicycle/' },
                        { label: 'Basic Calculator', link: 'https://hackathon-n2fu.vercel.app/' },
                      ].map((project) => (
                        <li key={project.label} className="relative group">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 px-4 rounded-lg transition-all duration-300 ease-in-out 
                                       hover:bg-indigo-500 hover:text-yellow-300 hover:scale-105"
                          >
                            {project.label}
                          </a>
                          {/* Hover underline effect */}
                          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                
              ))}
            </ul>
          </nav>
          <img
                src="/buildings.png"
                alt="Nai SreyMey"
                className="rounded-full w-16 h-16 object-cover shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
        </div>
      </header>

      {/* Mobile menu links */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-800 to-indigo-700 p-4 z-50 shadow-lg rounded-lg">
          <ul className="space-y-4 text-white text-lg font-semibold">
            {[
              { label: 'Overview', id: 'home' },
              { label: 'Who I Am', id: 'about' },
              { label: 'My Project', id: 'projects' },
              { label: 'Get in Touch', id: 'contact' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    handleSmoothScroll(e, item.id);
                    setIsMenuOpen(false); // Close menu after clicking
                  }}
                  className="block py-2 px-4 text-xl transform transition-all duration-300 ease-in-out hover:text-yellow-300 hover:bg-indigo-600 rounded-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      )}

      {/* Main content */}
      <main className="pt-16">
        <section id="home" className="relative text-white py-32 md:py-48">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 relative z-10">
            <div className="space-y-8 md:space-y-12 max-w-xl">
              <h1 className="animated-text1">Sreymey</h1>
              <h1 className="animated-text">Fullstack Developer</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 text-justify leading-relaxed">
                I'm a Fullstack developer focused on building fast, responsive, and reliable websites. I work on both the front-end and back-end to create seamless web applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/Nai Sreymey C3-WMAD CV 2025.docx.pdf"
                  download
                  onClick={handleDownloadClick}
                  className={`text-white py-3 px-8 rounded-lg text-base md:text-lg font-semibold transform transition-all duration-300 ease-in-out shadow-md
                    ${isDownloaded ? 'bg-gradient-to-r from-green-600 to-green-400 font-bold' : 'bg-gradient-to-r from-indigo-600 to-indigo-700 font-bold'} 
                    hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 hover:text-yellow-300 hover:font-bold
                    border-4 border-transparent hover:border-purple-500 flex items-center justify-center`}
                >
                  <span className={`${isDownloaded ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300 ease-in-out`}>
                    {isDownloaded ? 'Downloading...' : 'Download CV'}
                  </span>
                </a>
                
                {/* Additional Button 1 */}
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, 'projects')}
                  className="text-white py-3 px-8 rounded-lg text-base md:text-lg font-semibold transform transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-purple-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-yellow-300 hover:font-bold border-4 border-transparent hover:border-purple-500 flex items-center justify-center"
                >
                  View Projects
                </a>
              </div>

            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, borderColor: "#000" }}
              animate={{
                opacity: 1,
                scale: [1, 1.1, 1],
                borderColor: "#3498db", // Blue border color
                backgroundColor: "#3498db", // Keep blue background
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="rounded-full w-[400px] h-[400px] p-2 border-4 shadow-2xl transform transition-transform duration-500 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 hover:bg-blue-500"
            >
              <motion.img
                src="/meymey1410.jpg"
                alt="Nai SreyMey"
                className="rounded-full w-full h-full object-cover transition duration-300 ease-in-out"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
