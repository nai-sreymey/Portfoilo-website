import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <header className="bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-purple-400 text-3xl font-bold">Nai sreymey</h1>
          <nav>
            <ul className="flex space-x-6 text-white text-2xl">
              <li><a href="#home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400">About me</a></li>
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-lg text-gray-400">Hello, I'm</h2>
            <h1 className="text-5xl font-bold my-4">Nai sreymey</h1>
            <p className="text-lg text-gray-300 mb-6">
              Fullstack developer with a passion for building scalable, 
               high-performance <br /> web applications. I specialize in creating
                seamless experiences from frontend <br />
                to backend.
            </p>
            <div className="space-x-4">
              <button className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-500">
                About me
              </button>
              <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700">
                Projects
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center ">
          <img
            src="/profile.png"
            alt="Nai SreyMey"
            className="rounded-full w-[444px] h-[444px] object-cover shadow-lg"
          />
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
