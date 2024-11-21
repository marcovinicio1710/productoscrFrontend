import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiftWrapOption } from './GiftWrapOption';

const formatPrice = (price) => {
  const numericPrice = Number(price);
  return isNaN(numericPrice)
    ? "Precio no disponible"
    : numericPrice.toLocaleString('es-CR', {
        style: 'currency',
        currency: 'CRC',
        minimumFractionDigits: 2,
      });
};

export const CartItem = ({ item, updateCartItem, updateCartGiftOptions, removeFromCart }) => {
  const [giftPrice, setGiftPrice] = useState(0);

  // Manejo de opciones de envoltura
  const handleGiftOptionsChange = (productId, options) => {
    const { es_regalo, Tamano_Regalo, Motivo_Regalo, precio_regalo } = options;
    const wrapPrices = { XS: 1000, SM: 1500, MD: 1800, LG: 2200, XL: 2600, XXL: 3000 };
    const newGiftPrice = es_regalo ? wrapPrices[Tamano_Regalo] || 0 : 0;
    setGiftPrice(newGiftPrice);

    // Llamar a updateCartGiftOptions para enviar al backend
    updateCartGiftOptions(productId, { es_regalo, Tamano_Regalo, Motivo_Regalo, precio_regalo });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 mt-1 bg-gray-50 dark:bg-gray-700 rounded-lg drop-shadow-lg">
      {/* Imagen del producto con link */}
      <Link to={`/products/${item.producto}`} className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
        <img src={item.imagen_url} alt={item.producto_nombre} className="w-full h-full object-cover rounded-md" />
      </Link>

      {/* Detalles del producto */}
      <div className="flex flex-col flex-grow ml-0 sm:ml-4 mt-2 sm:mt-0">
        <h2 className="text-xs sm:text-sm font-semibold text-teal-400 dark:text-white">
          {item.marca}
        </h2>
        <Link to={`/products/${item.producto}`}>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
            {item.producto_nombre}
          </h2>
        </Link>
        {/* Mostrar la talla si aplica */}
        {item.talla !== "NO_APLICA" && (
          <p className="mt-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            Talla: <span className="font-semibold">{item.talla}</span>
          </p>
        )}
        <div className="flex items-center mt-2 space-x-2">

          {/* Botón para disminuir la cantidad */}
          <button
            onClick={() => updateCartItem(item.producto, item.cantidad - 1, item.talla)}
            disabled={item.cantidad === 1}
            className={`px-3 h-6 sm:px-4 ${item.cantidad === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'} 
                        dark:bg-gray-600 dark:hover:bg-gray-500 rounded-lg dark:text-white text-xs sm:text-sm`}
          >
            -
          </button>

          {/* Input para mostrar la cantidad */}
          <input
            type="number"
            value={item.cantidad}
            readOnly
            className="mx-2 w-12 h-6 text-center text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
          />

          {/* Botón para aumentar la cantidad */}
          <button
            onClick={() => updateCartItem(item.producto, item.cantidad + 1, item.talla)}
            className="px-3 h-6 sm:px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-lg dark:text-white text-xs sm:text-sm"
          >
            +
          </button>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          Precio unitario: {formatPrice(item.precio_unitario)}
        </p>

        {/* Mostrar opciones de envoltura si regalo_apply está en true */}
        {item.regalo_apply && (
          <GiftWrapOption 
            item={item} 
            onGiftOptionsChange={handleGiftOptionsChange} 
          />
        )}
      </div>

      {/* Acciones y subtotal */}
      <div className="flex flex-row items-center space-x-2 mt-2 sm:mt-0 sm:ml-auto">
        <p className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
          Subtotal: {formatPrice(item.subtotal + giftPrice)}
        </p>
        {/* Botón para eliminar el producto del carrito */}
        <button
          onClick={() => removeFromCart(item.producto)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br 
                      focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 
                      font-medium rounded-lg text-lg lg:text-xl px-2 py-1 text-center bi bi-trash3-fill ml-2"
        >
          
        </button>
      </div>
    </div>
  );
};
