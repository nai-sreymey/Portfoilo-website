"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectData {
  id: number;
  documentId: string;
  title: string;
  text: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:1338/api/projects');
        const result = await res.json();
        const data = result.data; // Accessing the array of projects
        console.log('Fetched projects:', data);
        setProjects(data); // Setting the fetched data to state
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-4">Projects:</h2>
        <p className="mb-10">
          I have worked on many projects over the course of being a Web Developer,
          here are a few of my live, real-world projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {projects.map((project) => (
           <motion.div 
             key={project.id} 
             className="bg-gray-800 rounded-lg p-6 shadow-lg"
             initial={{ opacity: 0, y: 20 }} // Start off-screen
             animate={{ opacity: 1, y: 0 }} // Animate to on-screen
             transition={{ duration: 0.5 }} // Animation duration
             whileHover={{ scale: 1.05 }} // Scale up on hover
           >
             <div className="flex justify-center mb-4">
               <img src={`/${project.title.toLowerCase().replace(/\s+/g, '')}.png`} alt={project.title} className="" />
             </div>
             <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
             <p className="mb-4">{project.text}</p>
           </motion.div>
         ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
