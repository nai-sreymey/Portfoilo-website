import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="relative text-white py-16 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-6xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 animate-pulse">
          About Me
        </h2>
       
        <p className="text-lg text-gray-300 text-center mb-6">
          I am Nai Sreymey, a Full-Stack Developer from Phnom Penh. I have completed a 1-month internship at Sala Tech, where I focused on frontend development. Although I'm not yet a full-stack developer, I am currently studying to expand my skills and aim to work full-stack in the future.
        </p>
        <p className="text-lg text-gray-300 text-center mb-12">
          I specialize in building responsive, dynamic, and scalable applications using modern technologies, ensuring a seamless user experience and robust functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Frontend Development</h3>
            <p className="text-gray-300">
              I build dynamic user interfaces using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Backend Development</h3>
            <p className="text-gray-300">
              I work with Node.js, Express, and databases like MongoDB and MySQL to build robust server-side applications.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Database Management</h3>
            <p className="text-gray-300">
              I am skilled in managing and optimizing databases like MySQL, PostgreSQL, and MongoDB.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Deployment</h3>
            <p className="text-gray-300">
              I deploy applications using platforms like Vercel, Docker, and AWS for scalable, production-ready solutions.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-4xl font-semibold text-white mb-6 transform hover:translate-y-1 transition duration-300">
            Passionate About Building Scalable Solutions
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            My goal is to create applications that are not only scalable and easy to maintain but also provide a seamless experience for users.
          </p>
          <p className="text-lg text-gray-300">
            I believe in continuous learning and aim to stay up-to-date with the latest technologies and best practices to deliver the best results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
