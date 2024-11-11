// src/pages/OrderDetailPage.js
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrderDetail } from "../../services";
import { formatPrice } from "../../utils/formatPrice";
import {OrderProgress} from "./components/OrderProgress";

export const OrderDetailPage = () => {
  const { asin } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrderDetail() {
      try {
        const data = await getOrderDetail(asin);
        setOrder(data);
        console.log(data)
      } catch (error) {
        toast.error("Error al cargar los detalles de la orden.");
      }
    }
    fetchOrderDetail();
  }, [asin]);
  if (!order) return <p className="text-center text-gray-500">Cargando detalles de la orden...</p>;
  const { direccion_envio } = order;
  const googleMapsLink = direccion_envio.latitud && direccion_envio.longitud
    ? `https://www.google.com/maps?q=${direccion_envio.latitud},${direccion_envio.longitud}`
    : null;

  

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 my-5">
      {/* Encabezado de la orden */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Detalle del Pedido</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Chequea detalles Pedido para visualizar status, fecha y precios obtenido.</p>
      
      {/* Progreso de la orden */}
      <OrderProgress status={order.estado} /> {/* Integración del componente */}

      <p className="text-gray-600 dark:text-gray-400 mt-8 mb-8">Estado del Pedido: <span className="font-semibold">{order.estado}.</span></p> 
      
      {/* Información de la orden */}
      <div className="border p-6 rounded-lg mb-6 bg-gray-100 dark:bg-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Numero de Pedido:</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{order.numero_orden}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Pedido Realizado:</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{new Date(order.fecha_creacion).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Total:</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white"> {formatPrice(order.precio_total)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Dirección de Envío:</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{direccion_envio.nombre}</p>
            <p className="text-gray-900 dark:text-white">{direccion_envio.calle}</p>
            <p className="text-gray-900 dark:text-white">{direccion_envio.ciudad}, {direccion_envio.provincia}</p>
            <p className="text-gray-900 dark:text-white">Teléfono: {direccion_envio.telefono}</p>

            {/* Link a Google Maps si hay coordenadas */}
            {googleMapsLink && (
              <a 
                href={googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline mt-2 block"
              >
                Ver en Google Maps
              </a>
            )}
        </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Tipo Envío:</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{order.tipo_envio}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-300">Tipo Pago:</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{order.tipo_pago}</p>
          </div>
        </div>
      </div>

      {/* Productos en la orden */}
      {order.productos.map((product, index) => (
        <div key={index} className="border-b border-gray-200 dark:border-gray-600 py-4 flex items-start">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="w-24 h-24 rounded-lg mr-6"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{product.nombre}</h2>
            <p className="text-gray-500 dark:text-gray-300 mb-2">Marca: {product.marca}</p>
            <p className="text-gray-500 dark:text-gray-300 mb-2">Cantidad: {product.cantidad}</p>
            {product.es_regalo && parseFloat(product.precio_regalo) > 0 && (
              <>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">Este producto fue solicitado como regalo</p>
                <p className="text-gray-900 dark:text-white text-sm py-1 bi bi-gift-fill">Costo adicional: {formatPrice(product.precio_regalo)}</p>
              </>
            )}
            <div className="flex-initial items-center justify-between">
              <p className="text-gray-900 dark:text-white text-lg">{formatPrice(product.precio_unitario)}</p>
              <div className="flex-initial space-x-4 py-2">
                <Link to={`/products/${product.id}`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Ver producto / Comprar de nuevo</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

