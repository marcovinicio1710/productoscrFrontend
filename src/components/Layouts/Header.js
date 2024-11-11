import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";
import { Search } from "../Sections/Search";//done
import { SearchPC } from "../Sections/SearchPC";//done
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";//done
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";//done
import { PromotionBanner } from '../Elements//PromotionBanner';//done
import { CategoryHeader } from '../Elements//CategoryHeader';//done
import { HamburgerMenu } from '../Elements/HamburgerMenu';//done
import { useCart } from "../../context";


export const Header = () => {
  const { cartList } = useCart();
  
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [searchSectionPC, setSearchSectionPC] = useState(false);
  
  const [dropdown, setDropdown] = useState(false);
  const token = localStorage.getItem("token");

  const totalItemsInCart = cartList && cartList.length > 0 
  ? cartList.reduce((acc, item) => acc + item.cantidad, 0) 
  : 0;

   // Detectar el tamaño de la pantalla para controlar cuándo mostrar la barra de búsqueda
   useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
      if (isSmallScreen) {
        setSearchSection(true); // En pantallas pequeñas, la barra de búsqueda siempre visible
      } else {
        setSearchSection(false); // En pantallas grandes, inicialmente oculta
      }
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize); // Detectar cuando la pantalla cambia de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-50">
      {/* Importamos el componente PromotionBanner */}
      <PromotionBanner />
  
      {/* Header Principal */}
      <header className="bg-white dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
            
            {/* Menú de hamburguesa y dark mode icon */}
            <div className="flex items-center md:hidden">
              <HamburgerMenu setSearchSection={setSearchSection} /> {/* Usamos el nuevo componente */}
              
              {/* Dark Mode Icon para pantallas pequeñas (≤ 640px) */}
              <span 
                onClick={() => setDarkMode(!darkMode)} 
                className={`ml-4 cursor-pointer text-lg sm:text-xl text-gray-700 dark:text-white bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}
              ></span>
            </div>
  
            {/* Logo solo en pantallas grandes */}
            <Link to="/" className="hidden sm:flex items-center">
              <img src={Logo} className="mr-3 h-10 lg:h-13 md:h-12" alt="Logo productosCR.com" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Productos CR</span>
            </Link>
  
            {/* Texto Productos CR centrado en móviles */}
            <Link to="/" className="sm:hidden flex-grow text-center">
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Productos CR</span>
            </Link>
  
            {/* Iconos en pantallas grandes y pequeñas */}
            <div className="flex items-center relative sm:justify-end justify-start">
              {/* Dark Mode Icon en pantallas grandes (> 640px) */}
              <span 
                onClick={() => setDarkMode(!darkMode)} 
                className={`hidden md:block cursor-pointer text-lg sm:text-xl text-gray-700 dark:text-white mr-5 bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}
              ></span>
  
              {/* Search Section en pantallas grandes */}
              <span onClick={() => setSearchSectionPC(!searchSectionPC)} className="hidden sm:inline cursor-pointer text-lg sm:text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
  
              {/* Cart */}
              <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                <span className="text-xl sm:text-2xl bi bi-cart-fill relative">
                  <span className="text-white text-xs sm:text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{totalItemsInCart}</span>

                </span>                    
              </Link>
  
              {/* User Dropdown */}
              <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-xl sm:text-2xl text-gray-700 dark:text-white"></span>
              {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
            </div>
          </div>
        </nav>
  
        {/* Search Section */}
        {searchSection && <Search setSearchSection={setSearchSection} />}
        {searchSectionPC && <SearchPC setSearchSectionPC={setSearchSectionPC} />}

      </header>

      <CategoryHeader />

    </div>
  );
  
};
