"use client";
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';

// Define the interface for the contact data
interface ContactData {
  title: string;
  paragraph: string;
  textb: string;
  text1: string;
  text2: string;
  text3: string;
  box1: string;
  box2: string;
  box3: string;
  box4: string;
}

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Fetch contact data from the API when the component mounts
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await fetch('http://localhost:1338/api/contacts'); // Adjust the URL as necessary
        const result = await res.json();
        const data = result.data[0]; // Assuming the first object in the array contains the contact data
        setContactData(data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  // Display a loading message while fetching data
  if (!contactData) {
    return <div>Loading...</div>;
  }

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormErrors((prev) => ({ ...prev, [id]: false })); // Reset error state on change
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };

    setFormErrors(errors);

    // If there are no errors, you can proceed with form submission
    if (!errors.name && !errors.email && !errors.message) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted:', formData);
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section - Connect with me */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">{contactData.title}</h2>
          <p className="text-lg text-gray-400 mb-6">{contactData.paragraph}</p>
          <div className="flex space-x-4 text-purple-500 text-4xl">
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
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">{contactData.textb}</h2>
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-400 mb-2">{contactData.text1}</label>
              <input
                type="text"
                id="name"
                className={`w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 ${formErrors.name ? 'ring-red-500' : 'focus:ring-purple-600'}`}
                placeholder={contactData.box1}
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-400 mb-2">{contactData.text2}</label>
              <input
                type="email"
                id="email"
                className={`w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 ${formErrors.email ? 'ring-red-500' : 'focus:ring-purple-600'}`}
                placeholder={contactData.box2}
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">{contactData.text3}</label>
              <textarea
                id="message"
                rows={4}
                className={`w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 ${formErrors.message ? 'ring-red-500' : 'focus:ring-purple-600'}`}
                placeholder={contactData.box3}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm mt-1">Message is required.</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300"
            >
              {contactData.box4}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
