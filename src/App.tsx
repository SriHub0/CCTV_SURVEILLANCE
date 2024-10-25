import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-blue-900 text-white">
        <Navbar />
        <Hero />
      </header>
      <Features />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;