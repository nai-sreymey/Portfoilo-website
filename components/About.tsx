import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">About me:</h2>
        <p className="text-lg text-gray-400 text-center mb-8">
          Hi, my name is Nai SreyMey, I am a Fullstack web developer specializing in modern web technologies. I have a strong foundation in back-end and front-end development and create seamless, scalable solutions for clients.
        </p>
        <p className="text-lg text-gray-400 text-center mb-6">
          2+ Years of experience. Specialized in building full-stack applications with a focus on both client-side and server-side programming, ensuring optimized performance and security.
        </p>
        
        {/* Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-purple-600 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold">FRONT-END DEVELOPMENT</h3>
            <p className="text-gray-300">Building responsive and interactive user interfaces using React.js, Next.js, and Angular.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold">BACK-END DEVELOPMENT</h3>
            <p className="text-gray-300">Server-side development with Node.js, Express, and databases like MongoDB and MySQL.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold">API DEVELOPMENT</h3>
            <p className="text-gray-300">Creating RESTful and GraphQL APIs to handle business logic and data management.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold">CLOUD & DEPLOYMENT</h3>
            <p className="text-gray-300">Deploying scalable applications using platforms like AWS, Heroku, and Vercel.</p>
          </div>
        </div>

      

      </div>
    </section>
  );
};

export default About;
