import React from 'react';

export function TechStack() {
  const technologies = [
    'Computer Vision: OpenCV, TensorFlow',
    'Machine Learning: Scikit-learn, Keras',
    'IoT Devices: IP cameras, sensors',
    'Cloud Computing: AWS, Azure',
    'Networking: Wi-Fi, LoRaWAN',
    'Development: Python, JavaScript',
    'Data Analysis: Matplotlib, Plotly',
    'Security: End-to-end encryption'
  ];

  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
              <p className="text-gray-800">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}