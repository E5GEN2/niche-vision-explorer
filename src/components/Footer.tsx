
import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  return (
    <footer className="bg-gray-100 border-t border-gray-300 h-8 flex items-center justify-between px-6">
      <div className="text-xs text-gray-600">
        © 2025 Your Company
      </div>
      <div className="text-xs text-gray-600">
        Last updated: {currentDate}
      </div>
    </footer>
  );
};

export default Footer;
