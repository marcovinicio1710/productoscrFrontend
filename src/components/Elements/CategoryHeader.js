import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import categories from '../../data/categories';

// Variantes para el contenedor de subcategorías con transición escalonada
const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Variantes para cada subcategoría
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 11 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const CategoryHeader = () => {
  const [openCategory, setOpenCategory] = useState(null);

  // Función para abrir/cerrar la categoría
  const toggleDropdown = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // NUEVO: Función para cerrar el menú al hacer clic en cualquier subcategoría
  const handleSubcategoryClick = () => {
    setOpenCategory(null);
  };

  return (
    <div className="hidden md:block">
      <nav className="bg-gray-50 border-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
          <div id="mega-menu-full" className="items-center justify-between font-semibold hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleDropdown(category.name)}
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {category.name}
                    <motion.svg
                      animate={openCategory === category.name ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </motion.svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mega menú desplegable dinámico con transición escalonada */}
        {categories.map((category, index) => (
          openCategory === category.name && (
            <motion.div
              key={index}
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                {category.subcategories.map((sub, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                  >
                    <ul className="space-y-4 list-none">
                      <li>
                        <Link
                          to={
                            sub === 'Todo'
                              ? `/products?category=${category.name}`
                              : `/products?category=${category.name}&subcategory=${sub}`
                          }
                          onClick={handleSubcategoryClick} // Cerrar el menú al hacer clic
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                        >
                          <div className="font-semibold">{sub}</div>
                          {sub === 'Todo' ? (
                            <span className="text-sm text-gray-500 dark:text-gray-400">Ver todos los productos en {category.name}</span>
                          ) : (
                            <span className="text-sm text-gray-500 dark:text-gray-400">Productos relacionados con {sub}</span>
                          )}
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        ))}
      </nav>
    </div>
  );
};

export default CategoryHeader;
