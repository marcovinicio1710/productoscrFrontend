import React from 'react';

// Componente para la selección del método de pago
export const PaymentMethod = ({ selectedPayment, setSelectedPayment }) => {
  // Opciones de pago estáticas
  const paymentOptions = [
    {
      id: 'Efectivo_ContraEntrega',
      label: 'Efectivo Contra entrega (Válido en el GAM)',
      icon: 'bi-cash',
    },
    {
      id: 'Tarjeta_ContraEntrega',
      label: 'Tarjeta Crédito/Débito Contra entrega (Válido en el GAM)',
      icon: 'bi-credit-card',
    },
    {
      id: 'Sinpe_Transferencia',
      label: 'Sinpe Móvil / Transferencia',
      icon: 'bi-phone',
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Selecciona el método de pago:</h2>
      <div className="space-y-2">
        {paymentOptions.map((option) => (
          <label 
            key={option.id} 
            className="flex items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg cursor-pointer"
          >
            <input
              type="radio"
              name="paymentMethod"
              value={option.id}
              checked={selectedPayment === option.id}
              onChange={() => setSelectedPayment(option.id)}
              className="w-4 h-4 mr-2"
            />
            <i className={`bi ${option.icon} text-xl text-teal-500 mr-3`}></i>
            <span className="text-sm dark:text-white">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
