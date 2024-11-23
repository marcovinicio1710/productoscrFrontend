import React from 'react';
import { CurrencyIcon as Cash, CreditCard, Smartphone, Building } from 'lucide-react';

export const FormasDePago= () => {
  const paymentMethods = [
    { name: 'Efectivo', icon: Cash },
    { name: 'SINPE Móvil', icon: Smartphone },
    { name: 'Transferencia Bancaria', icon: Building, banks: ['Banco Promerica', 'BAC San José'] },
    { name: 'Tarjeta de Crédito y Débito', icon: CreditCard, coming: true },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-12   ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Formas de Pago
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center">
              <method.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {method.name}
                {method.coming && <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">(Próximamente)</span>}
              </h3>
              {method.banks && (
                <ul className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {method.banks.map((bank, bankIndex) => (
                    <li key={bankIndex}>{bank}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-8 mb-24">
          Los pagos saldrán a nombre de <strong>Marco Jiménez Castro</strong>
        </p>
      </div>
    </section>
  );
};

