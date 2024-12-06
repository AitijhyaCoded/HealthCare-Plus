import React from 'react';
import { Heart, Menu } from 'lucide-react';

export function Navbar({ onBooking }: { onBooking: () => void }) {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">HealthCare+</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600">Doctors</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button 
              onClick={onBooking}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}