import React from 'react';
import { useTitle } from "../../hooks/useTitle";
import { Facebook } from 'lucide-react';

export const About_us = () => {
  useTitle("Quienes Somos?");

  return (
    <main className="bg-white dark:bg-gray-800 min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Sobre Nosotros</h1>
        <div className="bg-white dark:bg-gray-700 shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              En <span className="font-bold">Productos CR</span>, iniciamos nuestra tienda online en 2024 con el firme compromiso de brindar una experiencia de compra confiable, segura y satisfactoria para todos nuestros clientes. Aunque somos una empresa nueva, contamos con la visión, el equipo y los valores necesarios para ganarnos tu confianza desde el primer momento.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Nos aseguramos de trabajar con proveedores de calidad, ofrecer productos seleccionados y brindar un excelente servicio al cliente. Estamos enfocados en construir relaciones sólidas a largo plazo con cada uno de nuestros clientes, porque para nosotros, tu satisfacción es nuestra prioridad.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Los pedidos se despachan desde Alajuela y San José hacia todo el país. Contamos con mensajero propio, el cual le entregará su pedido y de paso tendrá la posibilidad de cancelarle, así podrá revisar el mismo para su mayor comodidad y seguridad.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Durante todos estos años la mejor carta de recomendación son nuestros clientes, le invitamos a conocer qué opinan en nuestro perfil de Facebook: Opinión de Productos CR
            </p>
            <div className="text-center">
              <a 
                href="https://www.facebook.com/profile.php?id=100091953000718&sk=reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Ver opiniones en Facebook
              </a>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-600 px-8 py-4">
            <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold text-center">
              ¡Te invitamos a comprobar el servicio de Productos CR!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

