import React, { useState } from "react";

export const ShippingOptions = ({ subtotal, setShippingCost, setShippingMethod }) => {
  const [selectedShipping, setSelectedShipping] = useState(null);

  // Opciones de envío
  const shippingOptions = [
    { id: 1, label: "Envío dentro del GAM - 𝐏𝐚𝐠𝐨 𝐂𝐨𝐧𝐭𝐫𝐚 𝐞𝐧𝐭𝐫𝐞𝐠𝐚", value: "GAM_ContraEntrega", price: 3000, note: "(No cubre Atenas, Grecia, Poás, Palmares, San Carlos, Naranjo, PZ)" },
    { id: 2, label: "Fuera del GAM - 𝐂𝐨𝐫𝐫𝐞𝐨𝐬 𝐝𝐞 𝐂𝐑", value: "FueraGAM_CorreosCR", price: 3500, note: "El pago debe ser por anticipado" },
  ];

  // Opciones de envío gratis si el subtotal es mayor a ₡35,000
  const freeShippingOptions = [
    { id: 3, label: "Envío Gratis dentro del GAM - 𝐏𝐚𝐠𝐨 𝐂𝐨𝐧𝐭𝐫𝐚 𝐞𝐧𝐭𝐫𝐞𝐠𝐚", value: "GAM_Gratis", price: 0, note: "(No cubre Atenas, Grecia, Poás, Palmares, San Carlos, Naranjo, PZ)" },
    { id: 4, label: "Envio Gratis Fuera del GAM - 𝐂𝐨𝐫𝐫𝐞𝐨𝐬 𝐝𝐞 𝐂𝐑", value: "FueraGAM_Gratis", price: 0, note: "El pago debe ser por anticipado" },
  ];

  const handleSelect = (option) => {
    setSelectedShipping(option.id);
    setShippingCost(option.price);
    setShippingMethod(option.value); // Usar el valor del backend
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Selecciona un tipo de envío:</h2>

      {/* Mostrar opciones de envío gratis si el subtotal es mayor a 35,000 */}
      {subtotal > 35000 ? (
        <div>
          {freeShippingOptions.map((option) => (
            <label key={option.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="shippingOption"
                  value={option.value}
                  checked={selectedShipping === option.id}
                  onChange={() => handleSelect(option)}
                  className="mr-2 w-4 h-4"
                />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{option.label}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{option.note}</p>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">₡{option.price.toLocaleString()}</span>
            </label>
          ))}
        </div>
      ) : (
        // Mostrar las opciones normales de envío
        <div>
          {shippingOptions.map((option) => (
            <label key={option.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg cursor-pointer">
              <div>
                <input
                  type="radio"
                  name="shippingOption"
                  value={option.value}
                  checked={selectedShipping === option.id}
                  onChange={() => handleSelect(option)}
                  className="mr-2 w-4 h-4"
                />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{option.label}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{option.note}</p>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">₡{option.price.toLocaleString()}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
