import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import BaristaBot from './components/BaristaBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-bemo-light min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Footer />
      <BaristaBot />
    </div>
  );
};

export default App;