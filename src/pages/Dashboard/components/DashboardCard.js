import { Link } from "react-router-dom";

export const DashboardCard = ({ order }) => {
  // Calcula la cantidad total de productos en la orden
  const totalProductos = order.productos.reduce((total, product) => total + product.cantidad, 0);

  // Establece clases de color según el estado de la orden
  const estadoColor = {
    Pendiente: "text-yellow-300",
    Completado: "text-green-500",
    Cancelado: "text-red-500"
  }[order.estado] || "text-gray-500"; // Default a gris si el estado no coincide

  return (
    <div className="max-w-4xl m-auto p-4 mb-6 border rounded-lg dark:border-slate-700 shadow-md text-sm">
      <div className="flex justify-between text-lg font-semibold mb-4">
        <span className="dark:text-slate-200">Número de Orden: {order.numero_orden}</span>
        <span className={`${estadoColor}`}>{order.estado}</span>
      </div>
      
      <div className="text-gray-600 dark:text-gray-400 mb-2">
        <span>Fecha del Pedido: {new Date(order.fecha_creacion).toLocaleDateString()}</span>
      </div>

      <div className="text-lg font-semibold mb-2 dark:text-slate-200">
        Total: ₡{parseFloat(order.precio_total).toLocaleString('es-CR')}
      </div>

      <div className="text-gray-600 dark:text-gray-400 mb-2">
        <span>Cantidad de Productos: {totalProductos}</span>
      </div>

      <div className="text-gray-600 dark:text-gray-400 mb-2">
        <span>Tipo de Envío: {order.tipo_envio}</span>
      </div>

      <div className="text-gray-600 dark:text-gray-400 mb-2">
        <span>Tipo de Pago: {order.tipo_pago}</span>
      </div>

      {/* Enlace para ver detalles de la orden */}
      <Link to={`/orders/${order.numero_orden}`} className="text-blue-500 hover:underline">
        Ver detalles
      </Link>

      {/* Nuevo bloque para mostrar las imágenes de los productos comprados */}
      <div className="flex -space-x-4 mt-4 rtl:space-x-reverse">
          {order.productos.slice(0, 10).map((producto, index) => (
            <img
              key={index}
              className="w-10 h-10 lg:w-16 lg:h-16 border-2 border-white rounded-full dark:border-gray-800"
              src={producto.imagen_1_url}
              alt={`Producto ${index + 1}`}
            />
          ))}
          {order.productos.length > 10 && (
            <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
              +{order.productos.length - 10}
            </div>
          )}
      </div>
    </div>
  );
};
