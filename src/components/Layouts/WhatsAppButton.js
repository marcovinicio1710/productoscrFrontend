import React from 'react';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50660671710', '_blank'); // Cambia el número a tu WhatsApp
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 bg-green-400 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      aria-label="WhatsApp"
    >
      {/* Ícono de WhatsApp usando Bootstrap Icons */}
      <span className="bi bi-whatsapp text-3xl"></span>
    </button>
  );
};
