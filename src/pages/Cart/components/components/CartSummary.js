import React from 'react';
import { formatPrice } from "../../../../utils/formatPrice";

export const CartSummary = ({ cartList }) => {
  // Calcular el total sumando los subtotales de cada producto en el carrito
  const calculatedTotal = cartList.reduce((acc, item) => acc + parseFloat(item.subtotal), 0);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Resumen del pedido:</h2>
      {cartList.map((item) => (
        <div key={item.producto} className="flex justify-between mb-2">
          <span className="text-sm dark:text-white">{item.cantidad} x {item.producto_nombre}</span>
          <span className="text-sm dark:text-white">{formatPrice(item.subtotal)}</span>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <span className="text-lg font-semibold dark:text-white">Total:</span>
        <span className="text-lg font-semibold dark:text-white">{formatPrice(calculatedTotal)}</span>
      </div>
    </div>
  );
};
 