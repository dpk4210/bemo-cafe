import React from 'react';
import { OPENING_HOURS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="BeMo Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bemo-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-bemo-primary font-medium tracking-widest text-sm md:text-base mb-4 uppercase animate-fade-in-up">
          EST. 2020 &bull; Depok, ID
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Find Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bemo-primary to-yellow-200">
            Comfort Zone.
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          More than just coffee. It's about the connection, the flavor, and the moment.
          Come for the brew, stay for the vibe.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="px-8 py-4 bg-bemo-primary text-bemo-dark font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            View Menu
          </a>
          <a 
            href="#location" 
            className="px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Find Us
          </a>
        </div>

        <div className="mt-12 text-gray-400 text-sm flex items-center justify-center gap-2">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           {OPENING_HOURS}
        </div>
      </div>
    </div>
  );
};

export default Hero;