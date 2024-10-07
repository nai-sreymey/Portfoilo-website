import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-center text-gray-400 py-6">
      <p>&copy; {new Date().getFullYear()} Jayjay Dinero. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
