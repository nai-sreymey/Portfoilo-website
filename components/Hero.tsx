import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <header className="bg-gray-900 p-4 fixed w-full top-0 z-10 animate-fade-down">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
  Nai SreyMey
</h1>

          <nav>
            <ul className="flex space-x-6 text-white text-2xl">
              <li><a href="#home" className="hover:text-purple-400 transition-all duration-300 ease-in-out">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-all duration-300 ease-in-out">About me</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-all duration-300 ease-in-out">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-all duration-300 ease-in-out">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="animate-fade-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-green-400 to-pink-500 text-transparent bg-clip-text">
  Hello, I'm
</h2>
           <h1 className="text-5xl font-bold my-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
  Nai SreyMey
</h1>
            <p className="text-lg text-gray-300 mb-6 text-justify">
              Fullstack developer with a passion for building scalable, <br />
              high-performance web applications. I specialize in <br />
              creating seamless experiences from frontend to backend.
            </p>

            <div className="space-x-4">
 <nav>
            <ul className="flex space-x-6 text-white text-2xl">
            <li>
  <a 
    href="#about" 
    className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white py-2 px-6 rounded hover:bg-gradient-to-l"
  >
    About Me
  </a>
</li>
              <li><a href="#projects" className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white py-2 px-6 rounded hover:bg-gradient-to-l">
              Projects</a></li>
            </ul>
          </nav>

            </div>
          </div>
          <div className="flex justify-center mt-[100px] animate-fade-right">
            <img
              src="/profile.png"
              alt="Nai SreyMey"
              className="rounded-full w-[444px] h-[444px] object-cover shadow-lg transition-transform transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
