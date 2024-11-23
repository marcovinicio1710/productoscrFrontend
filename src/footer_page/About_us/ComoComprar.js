import React from "react";
import { ShoppingCart, MapPin, CreditCard, Mail, MessageCircle } from "lucide-react";

export const ComoComprar = () => {
  const steps = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Agrega productos al carrito",
      description: "Explora nuestra tienda y selecciona los productos que deseas comprar. Haz clic en el botón 'Agregar al carrito' para incluirlos.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Selecciona dirección y tipo de envío",
      description: "Introduce tu dirección de entrega y elige el tipo de envío que prefieras, ya sea nacional o internacional.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-600" />,
      title: "Elige tu método de pago",
      description: "Aceptamos tarjetas de crédito, débito, SINPE Móvil y transferencias bancarias para tu comodidad.",
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      title: "Confirma tu orden",
      description: "Completa el proceso de compra. Recibirás un correo de confirmación con los detalles de tu pedido.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "Compra por WhatsApp",
      description: "También puedes realizar tu compra escribiéndonos al WhatsApp 6067-1710. Nuestro equipo te asistirá con el proceso.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          ¿Cómo realizo mi compra?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
