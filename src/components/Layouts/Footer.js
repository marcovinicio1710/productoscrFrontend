import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre ProductosCR.com</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="quienes-somos" className="hover:underline">¿Quiénes Somos?</Link>
              </li>
              <li className="mb-4">
                <Link to="Preguntas-Frecuentes" className="hover:underline">Preguntas Frecuentes</Link>
              </li>
              <li className="mb-4">
                <Link to="Formas-De-Pago" className="hover:underline">Formas de Pago</Link>
              </li>
              <li className="mb-4">
                <Link to="Envios-Tarifas" className="hover:underline">Envíos y Tarifas</Link>
              </li>
              <li className="mb-4">
                <Link to="Como-Comprar" className="hover:underline">¿Cómo Comprar?</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="Terminos-Y-Condiciones" className="hover:underline">Términos de Uso</Link>
              </li>
              <li className="mb-4">
                <Link to="Politica-De-Privacidad" className="hover:underline">Privacidad</Link>
              </li>
              <li className="mb-4">
                <Link to="Devoluciones-Y-Garantias" className="hover:underline">Devoluciones & Garantías</Link>
              </li>
            </ul>
          </div>

          {/* 
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Vender con ProductosCR.com</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Información</Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Crece tu negocio</Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">¿Por qué vender con nosotros?</Link>
                </li>
              </ul>
            </div>
            */}


          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contáctanos</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="/" className="hover:underline">Lunes a Viernes de 9am a 7pm y Sábado de 9am a 4pm.</Link>
              </li>
              <li className="mb-4">
                <a href="https://wa.me/50660671710" className="hover:underline">
                  <span className="font-semibold">Whatsapp:</span> 6067-1710
                </a>
              </li>
              <li className="mb-4">
                <a href="mailto:info-sells@productoscr.com" className="hover:underline">
                  <span className="font-semibold">Correo:</span> info-sells@productoscr.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <Link to="/">ProductosCR™</Link>. Todos los Derechos Reservados.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse justify-center">
            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://wa.me/50660671710" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
