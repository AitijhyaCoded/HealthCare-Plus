import React from 'react';
import { Calendar, Phone, Clock } from 'lucide-react';

export function Hero({ onBooking }: { onBooking: () => void }) {
  return (
    <div id='home' className="relative bg-gradient-to-r from-blue-50 to-blue-100 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Health Is Our
              <span className="text-blue-600"> Top Priority</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Providing exceptional healthcare services with cutting-edge technology
              and compassionate care. Your wellness journey starts here.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBooking}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href='#contact'>Contact Us</a>
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2791&ixlib=rb-4.0.3"
              alt="Healthcare Professional"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16">
        <div className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">24/7 Service</h3>
              <p className="text-gray-600">Round the clock support</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Easy Booking</h3>
              <p className="text-gray-600">Book appointments online</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">Emergency Care</h3>
              <p className="text-gray-600">Immediate assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}