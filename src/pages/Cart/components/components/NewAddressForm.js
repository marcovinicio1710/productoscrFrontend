import React from 'react';

export const NewAddressForm = ({ newAddress, setNewAddress, handleNewAddressSubmit }) => {
  return (
    <form onSubmit={handleNewAddressSubmit} className="space-y-4 mb-6">
      {/* Campo para nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={newAddress.nombre}
        onChange={(e) => setNewAddress({ ...newAddress, nombre: e.target.value })}
        required
        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      />
      
      {/* Campo para teléfono */}
      <input
        type="text"
        placeholder="Whatsapp"
        value={newAddress.telefono}
        onChange={(e) => setNewAddress({ ...newAddress, telefono: e.target.value })}
        required
        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      />

      {/* Campos existentes */}
      <input
        type="text"
        placeholder="Calle"
        value={newAddress.calle}
        onChange={(e) => setNewAddress({ ...newAddress, calle: e.target.value })}
        required
        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={newAddress.ciudad}
        onChange={(e) => setNewAddress({ ...newAddress, ciudad: e.target.value })}
        required
        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      />
      <select
        value={newAddress.provincia}
        onChange={(e) => setNewAddress({ ...newAddress, provincia: e.target.value })}
        required
        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      >
        <option value="">Seleccionar Provincia</option>
        <option value="San José">San José</option>
        <option value="Alajuela">Alajuela</option>
        <option value="Cartago">Cartago</option>
        <option value="Heredia">Heredia</option>
        <option value="Guanacaste">Guanacaste</option>
        <option value="Puntarenas">Puntarenas</option>
        <option value="Limón">Limón</option>
      </select>
      <textarea
        placeholder="Nota del pedido (opcional)"
        value={newAddress.nota_pedido}
        onChange={(e) => setNewAddress({ ...newAddress, nota_pedido: e.target.value })}
        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      />

      {/* Botón para guardar la dirección */}
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 
                  dark:focus:ring-green-800 font-medium rounded-lg"
      >
        Guardar Dirección
      </button>

    </form>
  );
};
