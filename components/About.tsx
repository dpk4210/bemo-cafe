import React from 'react';
import { ADDRESS, MAP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bemo-light text-bemo-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop" 
              alt="Coffee Brewing" 
              className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
              alt="Cafe Seating" 
              className="rounded-2xl w-full h-64 object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-bemo-primary font-medium tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-4xl font-bold mb-6">A Place to Be(Mo)re.</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Nestled in the heart of Depok, BeMo Cafe was born from a simple idea: to create a space that feels like an extension of your own living room. Whether you're chasing deadlines, catching up with old friends, or simply seeking a quiet corner with a book, we've brewed the perfect atmosphere for you.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We take pride in our locally sourced beans and our kitchen's hearty comfort food. Every cup is poured with passion, and every plate is served with a smile.
            </p>

            <div id="location" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-bemo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Visit Us
              </h4>
              <p className="text-gray-600 mb-6">{ADDRESS}</p>
              <a 
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-bemo-primary font-bold hover:underline"
              >
                Open in Google Maps
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;