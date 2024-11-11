import React from 'react';

export const PlaceOrderButton = ({ handlePlaceOrder }) => {
  return (
    <button
      onClick={handlePlaceOrder}
      className="w-full px-4 py-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg focus:outline-none"
    >
      Confirmar Pedido
    </button>
  );
};