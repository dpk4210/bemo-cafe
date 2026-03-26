import React from 'react';
import { MAP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bemo-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tighter mb-4 text-bemo-primary">BeMo.</h2>
        <div className="flex justify-center space-x-6 mb-8">
           <a href="https://www.instagram.com/cafe.bemo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
           <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Maps</a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BeMo Cafe. All rights reserved. <br/>
          <span className="text-xs opacity-50">Designed with Gemini AI.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;