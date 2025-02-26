'use client';
import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Projects from '../../components/Project';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Technology from '../../components/technology';
import Background from '../../components/background';

const Home: React.FC = () => {
  return (
    <div> <Background />
    <div className="min-h-screen">
     
      <Hero />
      <About />
      <Technology></Technology>
      <Projects />
      <Contact />
      <Footer />
    </div></div>
  );
};

export default Home;
