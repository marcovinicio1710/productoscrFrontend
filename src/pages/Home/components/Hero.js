import { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    
    {
      title: '¡Envolvemos tus compras para toda ocasion!',
      description: 'Verifica los detalles del producto si aplican a enviar como regalo.',
      buttonText: 'Ver Terminos',
      buttonLink: 'info-regalos',
      secondaryButtonText: 'Ver Condiciones',
      secondaryButtonLink: '#',
      image: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/fondo+3++main.webp',
    },
    {
      title: 'Feria de SmartHome este mes hasta 40% descuento ',
      description: 'Ofertas en todos los productos de inteligentes para su hogar.',
      buttonText: 'Ver productos',
      buttonLink: 'products?category=Tecnología&subcategory=SmartHouse',
      secondaryButtonText: 'Ver Productos',
      secondaryButtonLink: '#',
      image: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/fondo+1+main.jpg',
    },
    {
      title: 'Descuento en Amazon Echo buds este mes de inaguracion',
      description: 'Aprovecha todos los productos de Echo buds a un excelente precio de inaguracion.',
      buttonText: 'Ver Productos',
      buttonLink: 'products?category=Tecnología&subcategory=SmartHouse',
      secondaryButtonText: 'Ver Condiciones',
      secondaryButtonLink: '#',
      image: 'https://heron3.s3.us-east-2.amazonaws.com/productos_cr/HOME/fondo+2++main+(1).webp',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-auto overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            {/* Hero section for each slide */}
            <section className="bg-white dark:bg-gray-700">
              <div className="grid max-w-screen-xl px-4 pb-10 mx-auto lg:gap-8 xl:gap-0 lg:py-5 lg:grid-cols-12">
                
                {/* Imágenes que se muestran primero solo en pantallas pequeñas */}
                <div className="flex mt-6 lg:mt-0 lg:col-span-5 sm:order-1 lg:order-2">
                  {/* Imagen */}
                  <div className="flex justify-center items-center overflow-hidden rounded-lg">
                    <img
                      className="w-full h-auto object-cover"
                      src={slide.image}
                      alt="mockup"
                    />
                  </div>


                </div>

                {/* Texto y botones */}
                <div className="mr-auto place-self-center lg:col-span-7 sm:order-2 lg:order-1">
                  <span className="max-w-2xl mb-4 text-lg sm:text-3xl md:text-4xl xl:text-5xl font-normal sm:font-extrabold tracking-tight leading-none dark:text-white">
                    {slide.title}
                  </span>
                  <p className="max-w-2xl mb-3 font-light text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl lg:mb-8 dark:text-gray-400">
                    {slide.description}
                  </p>

                  {/* Botones */}
                  <a
                    href={slide.buttonLink}
                    className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    {slide.buttonText}
                  </a>
                  
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 dark:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 dark:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
