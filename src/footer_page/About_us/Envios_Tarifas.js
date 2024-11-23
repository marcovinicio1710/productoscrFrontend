import React from "react";
import { Truck, Globe, Clock } from "lucide-react";

export const Envios_Tarifas = () => {
  const shippingDetails = [
    {
      title: "Tarifas de Envío",
      icon: <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400 " />,
      content: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Pedidos mayores a ₡35,000:{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                Envío gratis
              </span>{" "}
              a todo el país
            </li>
            <li>
              Pedidos menores a ₡35,000:
              <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                <li>Dentro del GAM: ₡2,800</li>
                <li>Fuera del GAM: ₡3,500</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4 text-sm italic">
            *GAM no cubre: Atenas, Grecia, Poás, Palmares, San Carlos, Naranjo,
            Pérez Zeledón
          </p>
        </>
      ),
    },
    {
      title: "Tiempos de Entrega",
      icon: <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Productos en stock: 1-3 días hábiles</li>
          <li>Envíos internacionales: 14-21 días</li>
        </ul>
      ),
    },
    {
      title: "Cobertura",
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      content: (
        <>
          <p>
            Realizamos envíos a todo Costa Rica y también ofrecemos envíos
            internacionales.
          </p>
          <p className="mt-4">
            Para más información sobre envíos internacionales, por favor
            contáctenos directamente.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white my-8 ">
          Envíos y Tarifas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shippingDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {detail.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                  {detail.title}
                </h3>
              </div>
              <div className="text-gray-700 dark:text-gray-300 flex-grow">
                {detail.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
