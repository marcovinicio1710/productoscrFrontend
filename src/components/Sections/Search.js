import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({ setSearchSection }) => {
  const navigate = useNavigate();
  const searchRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const SCROLL_UP_THRESHOLD = 25; // Umbral para mostrar la barra al subir
  const SCROLL_DOWN_THRESHOLD = 5; // Umbral para ocultar la barra al bajar

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = lastScrollY - currentScrollY;

      // Mostrar la barra si el desplazamiento hacia arriba supera el umbral
      if (scrollDifference > SCROLL_UP_THRESHOLD) {
        setIsVisible(true);
      } 
      // Ocultar la barra si el desplazamiento hacia abajo supera el umbral mínimo
      else if (scrollDifference < -SCROLL_DOWN_THRESHOLD) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  

  const handleSearch = (event) => {
    event.preventDefault();
    setIsVisible(false);

    if (typeof setSearchSectionPC === "function") {
      setSearchSection(false);
    }

    const searchQuery = searchRef.current.value;
    if (searchQuery) {
      // Usar replace: true para forzar la actualización de la URL
      navigate(`/products?q=${searchQuery}`, { replace: true });
    }
  };

  return (
    <div
      className={`mx-auto max-w-screen-xl p-2 my-1 transition-opacity duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 hidden'
      }`}
    >
      <form onSubmit={handleSearch} className="flex items-center">   
        <div className="relative w-full">
          <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
          <input 
            ref={searchRef} 
            name="search" 
            type="text" 
            id="simple-search" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search" 
            autoComplete="off" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        </button>
      </form>
    </div>
  );
};
