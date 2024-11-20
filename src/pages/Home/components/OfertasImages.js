import { useState, useEffect } from "react";

export const OfertasImages = () => {
  // Estado para detectar si la pantalla es pequeña
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Datos de las imágenes
  const ofertas = [
    {
      title: 'Aprovecha las ofertas de productoscr en lavadoras',
      image: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/2000x700+hoime.jpg',
      imagesm: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/home+700x630.jpg',
    },
    {
      title: 'Aprovecha las ofertas de productoscr en Regalia de Bombilla TP-Link',
      image: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/home+pequenas+screen+laptop.jpg',
      imagesm: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/home+pequenas+smartphone.jpg',
    },
    {
      title: 'Aprovecha las ofertas de productoscr en Altavoces de Kareoke Costa Rica',
      image: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/home+pequenas+screen+lapto_1.jpg',
      imagesm: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/home+pequenas+smartphone_1.jpg',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-1">
      {/* Imagen grande en la fila superior */}
      <div className="mb-6">
        <img
          src={isSmallScreen ? ofertas[0].imagesm : ofertas[0].image}
          alt={ofertas[0].title}
          className="w-full h-auto max-h-96  rounded-lg shadow-lg"
        />
      </div>

      {/* Dos imágenes más pequeñas en una fila de dos columnas */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <img
            src={isSmallScreen ? ofertas[1].imagesm : ofertas[1].image}
            alt={ofertas[1].title}
            className="w-full h-auto  rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src={isSmallScreen ? ofertas[2].imagesm : ofertas[2].image}
            alt={ofertas[2].title}
            className="w-full h-auto  rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
