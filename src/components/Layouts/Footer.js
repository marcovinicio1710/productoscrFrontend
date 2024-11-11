import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre ProductosCR.com</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">¿Quiénes Somos?</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Preguntas Frecuentes</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Formas de Pago</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Envíos y Tarifas</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">¿Cómo Comprar?</a>
              </li>
              
            </ul>
          </div>
          
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
                <a href="#" className="hover:underline">Términos de Uso</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacidad</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Devoluciones & Garantías</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Vender con ProductosCR.com</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Informacion</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Crece tu negocio</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">¿Porque vender con nosotros?</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contactanos</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Lunes a Viernes de 7am a 7pm y Sábado de 7am a 3pm.</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline"><span className="font-semibold">Whatsapp:</span> xxxx-xxxx </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline"><span className="font-semibold">Correo:</span> hola@productoscr.com </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://flowbite.com/">ProductosCR™</a>. Todos los Derechos Reservados.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse justify-center">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white bi bi-facebook">
              
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white bi bi-instagram">
              
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white bi bi-whatsapp">
              
              <span className="sr-only">Whatsapp</span>
            </a>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};
