import React from 'react';
import { Stethoscope, Heart, Brain, Eye, Syringe, Activity } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'General Medicine',
      description: 'Comprehensive medical care for all your health needs'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Cardiology',
      description: 'Expert care for heart and cardiovascular conditions'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Neurology',
      description: 'Specialized treatment for neurological disorders'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision services'
    },
    {
      icon: <Syringe className="h-8 w-8" />,
      title: 'Dental Care',
      description: 'Professional dental services for a healthy smile'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive healthcare services tailored to your needs
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}