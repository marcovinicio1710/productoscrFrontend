import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const MotioFees = ({ precio }) => {

  const [showMessage, setShowMessage] = useState(false);
  const [truckX, setTruckX] = useState("800%");
  const { ref, inView } = useInView({
    triggerOnce: true,  // Ejecutar la animación solo la primera vez que entra en vista
    threshold: 0.5,     // La animación se dispara cuando el 50% del componente es visible
  });


  // Verifica el tamaño de la ventana al cargar la página
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Si la pantalla es menor que 640px (SM)
        setTruckX("850%");
      } else {
        setTruckX("800%");
      }
    };

    // Ejecutar la verificación en la carga
    handleResize();

    // Re-ejecutar la verificación si la ventana cambia de tamaño
    window.addEventListener("resize", handleResize);

    // Limpieza para remover el listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div ref={ref} className={`relative w-full ${precio > 35000 ? 'h-10 md:h-12' : 'h-12 md:h-16 mb-1'} overflow-hidden`}>
      {/* Icono del camión en movimiento */}
      {inView && (
        <motion.div
          className="absolute left-0"
          initial={{ x: "-100%" }}  // Comienza fuera de la pantalla (a la izquierda)
           animate={{ x: truckX }}   // Cambia el valor `x` según el tamaño de pantalla
          transition={{
            duration: 2.5,            // Duración de 2 segundos
            ease: "easeInOut",       // Animación suave
            onStart: () => setShowMessage(false),  // Mostrar el mensaje cuando el camión comienza
            onComplete: () => setShowMessage(true) // Ocultar el mensaje cuando termina
          }}
        >
          <i className="bi bi-truck text-4xl dark:text-slate-200"></i> {/* Icono de camión */}
        </motion.div>
      )}

      {/* Mostrar mensaje cuando el camión pasa por el centro */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showMessage ? { opacity: 1 } : { opacity: 0 }}  // Mostrar el mensaje cuando el camión está en movimiento
        transition={{ duration: 0.5 }}  // Suavizar la transición de visibilidad del mensaje
        className=" top-0 left-0 w-full text-center text-sm md:text-lg font-semibold text-blue-500 pt-1 dark:text-amber-400"
      >
        {precio > 35000 ? (
          <p className="text-base md:text-lg font-semibold">
            ¡Envíos gratis dentro de GAM!
          </p>
        ) : (
          <div className="text-sm md:text-base font-semibold leading-tight">
            <p>+ ₡2800 Envío </p>
            <p className="pt-1 text-xs text-slate-500 dark:text-slate-200">o gratis en compras mayores de ₡35.000</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
