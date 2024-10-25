import React from 'react';
import { Camera, Brain, Bell, Users, Cloud, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: Camera,
      title: "Advanced Surveillance",
      description: "24/7 monitoring with AI-powered cameras and sensors for comprehensive coverage."
    },
    {
      icon: Brain,
      title: "Intelligent Analysis",
      description: "Machine learning algorithms to detect and analyze potential security threats."
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant notifications and guidance for security personnel when incidents occur."
    },
    {
      icon: Users,
      title: "Stakeholder Integration",
      description: "Seamless communication between security teams, faculty, and administrators."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud-based system for reliable operation and data storage."
    },
    {
      icon: Shield,
      title: "Proactive Security",
      description: "Preventive measures and early warning system to mitigate potential risks."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}