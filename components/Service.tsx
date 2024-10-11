"use client";
import React, { useEffect, useState } from 'react';

interface ServicesData {
  title: string;
  box1: string;
  box2: string;
  box3: string;
  box4: string;
  box5: string;
  box6: string;
  boxp1: string;
  boxp2: string;
  boxp3: string;
  boxp4: string;
  boxp5: string;
  boxp6: string;
}

const Services: React.FC = () => {
  const [servicesData, setServicesData] = useState<ServicesData | null>(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const res = await fetch('http://localhost:1338/api/services');
        const result = await res.json();
        const data = result.data[0]; // Accessing the first object from the array
        console.log('Fetched services data:', data);
        setServicesData(data); // Setting the fetched data to state
      } catch (error) {
        console.error('Error fetching services data:', error);
      }
    };

    fetchServicesData();
  }, []);

  if (!servicesData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 hover:text-purple-400 transition-all duration-300 ease-in-out">{servicesData.title}</h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-600 p-4 rounded-lg hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{servicesData.box1}</h3>
            <p className="text-gray-300">{servicesData.boxp1}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{servicesData.box2}</h3>
            <p className="text-gray-300">{servicesData.boxp2}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{servicesData.box3}</h3>
            <p className="text-gray-300">{servicesData.boxp3}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{servicesData.box4}</h3>
            <p className="text-gray-300">{servicesData.boxp4}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{servicesData.box5}</h3>
            <p className="text-gray-300">{servicesData.boxp5}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{servicesData.box6}</h3>
            <p className="text-gray-300">{servicesData.boxp6}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
