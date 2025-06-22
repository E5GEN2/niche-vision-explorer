
import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 h-12 flex items-center justify-between px-8 mt-12">
      <div className="text-xs text-gray-500 font-medium">
        © 2025 Your Company
      </div>
      <div className="text-xs text-gray-500">
        Last updated: <span className="font-medium">{currentDate}</span>
      </div>
    </footer>
  );
};

export default Footer;
