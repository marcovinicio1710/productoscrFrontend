import React from 'react';

export const AddressList = ({ addresses, selectedAddress, setSelectedAddress, setShowNewAddressForm }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Selecciona una dirección de envío:</h2>
      {addresses.length > 0 ? (
        <div className="space-y-2">
          {addresses.map((address) => (
            <label 
              key={address.id} 
              className="flex flex-col p-2 bg-gray-100 dark:bg-gray-700 rounded-lg cursor-pointer"
            >
              <input
                type="radio"
                name="selectedAddress"
                value={address.id}
                checked={selectedAddress === address.id}
                onChange={() => setSelectedAddress(address.id)}
                className="w-4 h-4 mr-2"
              />
              <div className="ml-6">
                {/* Mostrar nombre y teléfono */}
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{address.nombre}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono: {address.telefono}</p>

                {/* Mostrar dirección completa */}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {address.calle}, {address.ciudad}, {address.provincia}
                </p>
                {address.nota_pedido && (
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">Nota: {address.nota_pedido}</p>
                )}
              </div>
            </label>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">No tienes direcciones guardadas.</p>
      )}

      {/* Botón para agregar una nueva dirección */}
      <button 
          type="button"
          onClick={() => setShowNewAddressForm(true)}
          className="mt-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <span className='bi bi-bookmark-plus-fill text-2xl'></span> Nueva Dirección
        </button>
    </div>
  );
};
