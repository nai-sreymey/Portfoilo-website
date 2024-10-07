import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-lg text-gray-400">Hello, I'm</h2>
          <h1 className="text-5xl font-bold my-4">Nai sreymey</h1>
          <p className="text-lg text-gray-300 mb-6">
            Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.
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
        <div className="mt-10 md:mt-0">
          <img
            src="/profile.png"
            alt="Jayjay D. Dinero"
            className="rounded-full w-48 h-48"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
