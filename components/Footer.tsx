import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram , FaEnvelope, } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex space-x-4 text-purple-500 text-2xl ">
          <FaFacebook className="w-6 h-6 cursor-pointer" />
          <FaInstagram className="w-6 h-6 cursor-pointer" />
          <FaTelegram className="w-6 h-6 cursor-pointer" />
          <FaEnvelope className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="text-center text-sm space-y-2">
          <p>©2024 Nai SreyMey</p>
          <div className="flex justify-center space-x-4">
            <span>Fullstack Developer</span>
            <span>|</span>
            <span>UI Designer</span>
            <span>|</span>
            <span>Mobile Developer</span>
          </div>
          <p>Designed by <a href="#" className="text-purple-500 hover:underline">@nai_sreymey</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
