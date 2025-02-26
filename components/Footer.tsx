'use client';
import React from 'react';

const Footer: React.FC = () => {
  // Function to handle smooth scroll
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        {/* Left Section with Email */}
        <div className="flex items-center space-x-6">
          <p className="text-md font-semibold text-white">©2024 Nai Sreymey</p>
          <span className="text-gray-500">Fullstack Developer</span>
        </div>

        {/* Middle Section with Email */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-xs text-gray-500">
            Email: <a href="mailto:nai.sreymey@example.com" className="text-blue-500 hover:underline">nai.sreymey@institute.pse.ngo</a>
          </p>
        </div>

        {/* Right Section with Credits */}
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-500">
            Designed & Developed by{' '}
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              NAI SREYMEY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
