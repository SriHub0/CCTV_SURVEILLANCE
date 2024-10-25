import React from 'react';
import { Shield } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Shield className="h-8 w-8" />
        <span className="text-xl font-bold">SmartCampus</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#features" className="hover:text-blue-200 transition-colors">Features</a>
        <a href="#technology" className="hover:text-blue-200 transition-colors">Technology</a>
        <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}