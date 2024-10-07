import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-purple-400 text-2xl font-bold">Nai sreymey</h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#home" className="hover:text-purple-400">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400">About me</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
