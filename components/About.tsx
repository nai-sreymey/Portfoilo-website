"use client";
import React, { useEffect, useState } from 'react';

interface AboutData {
  title: string;
  p1: string;
  p2: string;
  box1: string;
  box2: string;
  box3: string;
  box4: string;
  boxtext1: string;
  boxtext2: string;
  boxtext3: string;
  boxtext4: string;
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch('http://localhost:1338/api/portfolios');
        const result = await res.json();
        const data = result.data[0];  // Access the first item in the array
        console.log('Fetched data:', data);
        setAboutData(data);  // Set the first object of the array as aboutData
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 hover:text-purple-400 transition-all duration-300 ease-in-out">{aboutData.title}</h2>
        <p className="text-lg text-gray-400 text-center mb-8 ">{aboutData.p1}</p>
        <p className="text-lg text-gray-400 text-center mb-6">{aboutData.p2}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-purple-600 p-4 rounded-lg flex flex-col items-center hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{aboutData.box1}</h3>
            <p className="text-gray-300 text-center">{aboutData.boxtext1}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{aboutData.box2}</h3>
            <p className="text-gray-300 text-center">{aboutData.boxtext2}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{aboutData.box3}</h3>
            <p className="text-gray-300 text-center">{aboutData.boxtext3}</p>
          </div>
          <div className="bg-gray-600 p-4 rounded-lg flex flex-col items-center hover:bg-black transition duration-300">
            <h3 className="text-xl font-bold">{aboutData.box4}</h3>
            <p className="text-gray-300 text-center">{aboutData.boxtext4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
