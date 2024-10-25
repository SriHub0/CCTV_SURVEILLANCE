import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Smart Campus Surveillance & Guidance System
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Enhance campus security with AI-powered surveillance and real-time guidance capabilities.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            Learn More <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}