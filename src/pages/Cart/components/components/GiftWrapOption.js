import React, { useState } from 'react';

export const GiftWrapOption = ({ item, onGiftOptionsChange }) => {
  const [isGift, setIsGift] = useState(item.es_regalo);
  const [size] = useState(item.Tamano_Regalo || 'NO_APLICA');  
  const [selectedMotivo, setSelectedMotivo] = useState(item.Motivo_Regalo || 'NO_APLICA');

  const wrapPrices = {
    XS: 1000,
    SM: 1500,
    MD: 1800,
    LG: 2200,
    XL: 2600,
    XXL: 3000,
  };
  const giftWrapPrice = wrapPrices[size] || 0;

  const motivoOptions = [
    { value: 'Navideño', label: 'Navideño' },
    { value: 'Regalo Niña', label: 'Regalo Niña' },
    { value: 'Regalo Niño', label: 'Regalo Niño' },
    { value: 'Amor', label: 'Amor' },
    { value: 'Graduacion', label: 'Graduación' },
    { value: 'Madre', label: 'Madre' },
    { value: 'Cumpleaños Mujer', label: 'Cumpleaños Mujer' },
    { value: 'Cumpleaños Hombre', label: 'Cumpleaños Hombre' },
  ];

  const handleConfirmGiftOptions = () => {
    if (isGift && selectedMotivo !== 'NO_APLICA') {
      onGiftOptionsChange(item.producto, { es_regalo: true, Tamano_Regalo: size, Motivo_Regalo: selectedMotivo , precio_regalo: giftWrapPrice });
    }
  };

  const handleRemoveGiftWrap = () => {
    setIsGift(false); 
    onGiftOptionsChange(item.producto, { es_regalo: false, Tamano_Regalo: size, Motivo_Regalo: 'NO_APLICA' , precio_regalo:0});
  };

  return (
    <div className="flex flex-col mt-2 space-y-2">
      <label className="flex items-center text-xs text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          checked={isGift}
          onChange={() => setIsGift(!isGift)}
          className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
        />
        Envolver para regalo
      </label>

      {isGift && (
        <>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
            Tamaño de envoltura: <strong>{size}</strong> - Costo adicional: <strong>₡{giftWrapPrice.toLocaleString('es-CR')}</strong>
          </p>

          <label htmlFor="giftMotivo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Selecciona el motivo de la envoltura
          </label>
          <select
            id="giftMotivo"
            value={selectedMotivo}
            onChange={(e) => setSelectedMotivo(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="NO_APLICA">Seleccionar motivo de envoltura</option>
            {motivoOptions.map((motivo) => (
              <option key={motivo.value} value={motivo.value}>
                {motivo.label}
              </option>
            ))}
          </select>

          <div className="flex space-x-6">
            <button
              onClick={handleConfirmGiftOptions}
              className="w-44 md:w-60 lg:w-72 h-12 mt-2 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
              disabled={selectedMotivo === 'NO_APLICA'}
            >
              Confirmar Envoltura
            </button>

            <button
              onClick={handleRemoveGiftWrap}
              className="mt-2 px-2 h-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br 
                          focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 
                          font-medium rounded-lg text-lg text-center bi bi-trash3-fill"
            >
              <span className="px-1 bi bi-gift-fill"></span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};


