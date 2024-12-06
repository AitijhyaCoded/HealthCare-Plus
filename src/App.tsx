import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingPage } from './components/BookingPage';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onBooking={handleBooking} />
      <main>
        <Hero onBooking={handleBooking} />
        <Services />
        <Doctors onBooking={handleBooking} />
        <Contact />
      </main>
      <Footer />
      {isBookingOpen && <BookingPage onClose={() => setIsBookingOpen(false)} />}
    </div>
  );
}

export default App;