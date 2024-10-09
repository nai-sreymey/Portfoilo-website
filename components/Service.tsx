import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
    
        <h2 className="text-3xl font-bold text-center mb-6">The services I offer:</h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-600 p-4 rounded-lg">
            <h3 className="text-xl font-bold">FULLSTACK DEVELOPMENT</h3>
            <p className="text-gray-300">I provide complete web solutions from the front-end to the back-end using modern frameworks and technologies.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-bold">API INTEGRATION</h3>
            <p className="text-gray-300">I integrate third-party APIs and services to enhance the functionality of web applications.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-bold">DATABASE MANAGEMENT</h3>
            <p className="text-gray-300">Expertise in managing and optimizing databases like MySQL, PostgreSQL, and MongoDB.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-bold">VERSION CONTROL</h3>
            <p className="text-gray-300">Efficient use of Git for collaboration and version control in web projects.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-bold">DEPLOYMENT</h3>
            <p className="text-gray-300">I deploy and manage web applications using Docker, CI/CD pipelines, and cloud services.</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-bold">PERFORMANCE OPTIMIZATION</h3>
            <p className="text-gray-300">I ensure that websites and applications are optimized for performance and scalability.</p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Services;
