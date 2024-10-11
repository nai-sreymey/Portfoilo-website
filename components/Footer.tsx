"use client";
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';

// Define the interface for the footer data
interface FooterData {
  name: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  // Fetch footer data from the API when the component mounts
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await fetch('http://localhost:1338/api/footers'); // Adjust the URL as necessary
        const result = await res.json();
        const data = result.data[0]; // Assuming the first object in the array contains the footer data
        setFooterData(data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchFooterData();
  }, []);

  // Display a loading message while fetching data
  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex space-x-4 text-purple-500 text-2xl ">
          <a href="https://www.facebook.com/eiimey.tah?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/hzhhddjdjeifjsjdjjj/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://t.me/Naisreymey001" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="mailto:sreymey.nai@institute.pse.ngo" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
        <div className="text-center text-sm space-y-2">
          <p>©2024 {footerData.name}</p>
          <div className="flex justify-center space-x-4">
            <span>{footerData.text1}</span>
            <span>|</span>
            <span>{footerData.text2}</span>
            <span>|</span>
            <span>{footerData.text3}</span>
          </div>
          <p>Designed by <a href="#" className="text-purple-500 hover:underline">{footerData.text4}</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
