import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 11 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
 

export const MetodoPago = ({ precio }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-gray-200  dark:border-gray-700 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ">
        <div className="w-full  ">
          
            
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" w-64 inline-flex items-center justify-center p-0.5 mb-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                
                <span className="w-64 flex  font-bold items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <span className="bi bi-wallet2 text-xl">  </span>
                    <span className="ml-2 mr-8">  METODOS DE PAGO</span>
                    
                    <motion.svg
                        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-2.5 h-2.5 ml-2.5"
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
                </span>
                
                
              </button>

              {/* Dropdown Menu */}
              <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 1, height: "auto", display: "block", 
                     transition: {
                                staggerChildren: 0.1, // Controla el retraso entre cada hijo
                                delayChildren: 0.2    // Añade un retraso inicial antes de mostrar el primer hijo
                                }},
                  closed: { opacity: 0, height: 0,
                    transition: {
                                    staggerChildren: 0.05, // Puede ser diferente en el cierre
                                    staggerDirection: -1   // Invertir la dirección del escalonado (cierran en orden inverso)
                                },
                   transitionEnd: { display: "none" } }
                }}
                transition={{ duration: 0.3 }}
                className="w-64 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 border"
              >
                <motion.ul className="py-2 text-sm text-gray-700 dark:text-gray-400 dark:bg-gray-900">
                  <motion.li variants={itemVariants}> {/* Usando itemVariants */}
                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <span className="bi bi-handbag-fill text-xl">  </span>
                        <span className="ml-2 mr-8">  ContraPedido </span>
                        
                    </span>
                  </motion.li>
                  
                  <motion.li variants={itemVariants}> {/* Usando itemVariants */}
                    <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        <span className="bi bi-cash-stack text-xl">  </span>
                        <span className="ml-2 mr-8">  Efectivo & Sinpe Movil </span>
                        
                    </span>
                  </motion.li>
                  <motion.li variants={itemVariants}> {/* Usando itemVariants */}
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <span className="bi bi-bank text-xl">  </span>
                            <span className="ml-2 mr-8">  Transferecias Bancarias</span>
                        </span>
                  </motion.li>
                  <motion.li variants={itemVariants}> {/* Usando itemVariants */}
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            
                            <span className="bi bi-credit-card-fill text-xl">  </span>
                            <span className="ml-2 mr-8">  Tarjetas de Credito </span>
                        </span>
                  </motion.li>
                  <motion.li variants={itemVariants}> {/* Usando itemVariants */}
                        <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            
                            <span className="bi bi-paypal text-xl">  </span>
                            <span className="ml-2 mr-8">  Paypal </span>
                        </span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            
        </div>
      </div>
    </nav>
  );
};
