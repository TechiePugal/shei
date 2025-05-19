import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = '9942909631';
  const whatsappURL = `https://wa.me/91${whatsappNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-10 right-7 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 sm:p-3 shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
