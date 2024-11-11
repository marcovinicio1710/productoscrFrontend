import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import categories from "../../data/categories";

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

const categoryVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const subcategoryVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

export const HamburgerMenu = ({ setSearchSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchSection(!menuOpen);
  };

  const toggleDropdown = (category) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdowns({});
  };

  return (
    <>
      <span 
        onClick={toggleMenu} 
        className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-list"
      ></span>

      {menuOpen && (
        <motion.div
          className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 p-4 md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
        >
          <div className="space-y-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="list-none"
                variants={categoryVariants}
              >
                <button
                  onClick={() => toggleDropdown(category.name)}
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-300 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                >
                  {category.name}
                  <motion.svg
                    animate={dropdowns[category.name] ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-2.5 h-2.5 ms-3"
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
                
                {dropdowns[category.name] && (
                  <motion.div
                    className="bg-white dark:bg-gray-700 p-4 border border-gray-100 dark:border-gray-700 rounded-lg shadow-md dark:text-white"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={containerVariants}
                  >
                    <div className="space-y-4">
                      {category.subcategories.map((subcategory, idx) => (
                        <motion.div
                          key={idx}
                          variants={subcategoryVariants}
                        >
                          <Link
                            to={
                              subcategory === "Todo"
                                ? `/products?category=${category.name}`
                                : `/products?category=${category.name}&subcategory=${subcategory}`
                            }
                            onClick={closeMenu} // Cerrar el menú al hacer clic
                            className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                          >
                            <div className="font-semibold">{subcategory}</div>
                            {subcategory === "Todo" ? (
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Ver todos los productos en {category.name}
                              </span>
                            ) : (
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Productos relacionados con {subcategory}
                              </span>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};
