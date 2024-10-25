import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-blue-900 text-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <a href="mailto:hello@innovateintern.com" className="flex items-center space-x-3 hover:text-blue-200 transition-colors">
            <Mail className="h-6 w-6" />
            <span>hello@innovateintern.com</span>
          </a>
          <a href="tel:+919709703085" className="flex items-center space-x-3 hover:text-blue-200 transition-colors">
            <Phone className="h-6 w-6" />
            <span>(+91) 970-970-3085</span>
          </a>
          <a href="https://github.com" className="flex items-center space-x-3 hover:text-blue-200 transition-colors">
            <Github className="h-6 w-6" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}