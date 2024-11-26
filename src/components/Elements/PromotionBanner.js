import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PromotionBanner = () => {
    const promotions = [
        "🇨🇷 Más de 70 productos en stock disponibles ahora", // Primera promoción con la bandera de Costa Rica
        "🚚 Envío gratis en órdenes mayores a ₡35.000", // Segunda promoción con el símbolo de colones
        "🎁 Envolvemos tus pedidos en regalos", // Tercera promoción
        "📞 Atención al cliente vía WhatsApp +506 6067-1710",
        "🚚 ContraEntrega en pedidos >= ₡17.000" // Atención al cliente WhatsApp
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia el texto de la promoción cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 6000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [promotions.length]);

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 dark:text-white text-sm py-2 px-4 flex justify-between items-center">
      {/* Lado Izquierdo: Información Estática (oculto en pantallas pequeñas) */}
      <div className="hidden md:flex items-center space-x-2">
        <span className="bi bi-telephone-fill"></span>
        <span>(+506) 6067-1710</span>
      </div>

      {/* Centro: Carousel de Texto que cambia cada 3 segundos */}
      <div className="w-full max-w-lg text-center">
        <span>{promotions[currentIndex]}</span>
      </div>

      {/* Lado Derecho: Enlace o Iconos (oculto en pantallas pequeñas) */}
      <div className="hidden md:flex items-center space-x-2">
        <Link to="/support" className="hover:underline">Atención al Cliente</Link>
        <span className="bi bi-whatsapp"></span>
      </div>
    </div>
  );
};
