import React from "react";

export const DevolucionesYGarantias = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Devoluciones y Garantías
        </h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            En ProductosCR.com, queremos asegurarnos de que nuestros clientes tengan una experiencia positiva. A continuación, detallamos nuestras políticas de devoluciones y garantías para brindarte claridad y confianza en tus compras.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Proceso de Devoluciones</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Aceptamos devoluciones únicamente en casos de productos defectuosos de fábrica o dañados durante el envío. Para iniciar el proceso:
          </p>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Envíanos tu solicitud a través de:
              <ul className="list-disc list-inside ml-4">
                <li>Correo electrónico: <a href="mailto:info-sells@productoscr.com" className="text-blue-600 dark:text-blue-400 underline">info-sells@productoscr.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/50660671710" className="text-blue-600 dark:text-blue-400 underline">+506 6067-1710</a></li>
              </ul>
            </li>
            <li>Incluye en tu solicitud:
              <ul className="list-disc list-inside ml-4">
                <li>El número de pedido.</li>
                <li>El correo electrónico utilizado en la compra.</li>
                <li>Fotos claras del producto mostrando el daño o defecto.</li>
              </ul>
            </li>
            <li>Realiza la solicitud dentro de los 30 días posteriores a la recepción del producto.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. Exclusiones</h2>
          <p className="text-gray-700 dark:text-gray-300">
            No aceptamos devoluciones o garantías en los siguientes casos:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Ropa interior y trajes de baño.</li>
            <li>Productos que muestren señales de uso o daño causado por mal manejo del cliente.</li>
            <li>Productos de higiene personal, alimentos o cosméticos abiertos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Costos de Envío</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Para devoluciones o garantías:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Dentro del GAM: Ofrecemos recolección gratuita del producto en la dirección del cliente.</li>
            <li>Fuera del GAM: El cliente deberá enviar el producto por Correos de Costa Rica o un servicio similar. ProductosCR cubrirá los costos de envío una vez que se apruebe la solicitud.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. Resolución</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Tras recibir el producto devuelto o en garantía, lo inspeccionaremos y procesaremos tu solicitud en un plazo de hasta 21 días hábiles. Las opciones de resolución incluyen:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Cambio por un producto nuevo: Emitiremos una orden de reemplazo en un plazo de 24 horas hábiles tras la aprobación.</li>
            <li>Crédito en tienda (tarjeta de regalo): Será cargado a tu cuenta inmediatamente tras la aprobación.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Si el producto devuelto no coincide con la solicitud inicial o tiene daños adicionales no reportados, nos reservamos el derecho de:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Devolver el producto al cliente.</li>
            <li>Ofrecer una resolución alternativa si aplica.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Garantías</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Ofrecemos una garantía de 30 días para productos defectuosos de fábrica. Las solicitudes de garantía deben cumplir con los mismos pasos y requisitos que las devoluciones.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">6. Recomendaciones</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Para evitar inconvenientes, revisa los productos al recibirlos. En caso de algún problema, contáctanos de inmediato para garantizar una resolución rápida.
          </p>
        </div>
      </div>
    </section>
  );
};
