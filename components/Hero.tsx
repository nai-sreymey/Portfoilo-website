'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Image
                src="/logo.png"
                alt="Nai SreyMey"
                width={64}
                height={64}
                className="rounded-full object-cover shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="block lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Image
                src="/main-menu.png"
                alt="Menu"
                width={40}
                height={40}
                className="object-cover shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
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
                { label: 'Technologies', id: 'technologies' },
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
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
                    setIsMenuOpen(false);
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
                I&apos;m a Fullstack developer focused on building fast, responsive, and reliable websites. I work on both the front-end and back-end to create seamless web applications.
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
  initial={{ opacity: 9, scale: 0.9, boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
  animate={{
    opacity: 1,
    scale: [1, 1.04, 1],
    boxShadow: [
      "0px 0px 20px rgba(255, 255, 255, 0.3)", // subtle glow at first
      "0px 0px 30px rgba(255, 255, 255, 0.5)", // stronger glow
      "0px 0px 20px rgba(255, 255, 255, 0.3)", // back to subtle
    ],
    background: [
      "rgba(255, 255, 255, 0)", // transparent background at first
      "rgba(0, 0, 0, 0.1)",     // slight dark background to pop the image
      "rgba(255, 255, 255, 0)", // back to transparent
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
  className="relative rounded-lg"
>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-lg" />
  <Image
    src="/meymey1410.jpg"
    alt="Nai SreyMey"
    width={400}
    height={400}
    className="object-cover transition duration-300 ease-in-out"
  />
</motion.div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
