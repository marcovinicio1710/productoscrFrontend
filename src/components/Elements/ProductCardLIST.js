import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const ProductCardLIST = ({ product }) => {
    const {
        id,
        nombre,
        precio,
        precio_oferta,
        imagen_1_url,
        imagen_2_url,
        rating,
        marca
    } = product;

    // Formatear precio con decimales y separadores de miles
    const formatPrice = (price) => {
        const numericPrice = Number(price);
        if (isNaN(numericPrice)) {
            return "Precio no disponible";
        }
        const [whole, decimals] = numericPrice.toFixed(2).split(".");
        return (
            <>
                ₡{parseInt(whole).toLocaleString('es-CR')}.<sup className="text-xs">{decimals}</sup>
            </>
        );
    };

    return (
        <div className="relative w-full max-w-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-white transition-shadow duration-300">
            
            {/* Etiqueta "Oferta" en la esquina superior derecha */}
            {precio_oferta && precio_oferta < precio && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded z-10">
                    OFERTA
                </div>
            )}


            <Link to={`/products/${id}`}>
                <div className="relative w-full  min-h-48 lg:min-h-56 mb-1">
                    <img
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out"
                        src={imagen_1_url}
                        alt={nombre}
                        loading="lazy"
                        style={{ opacity: 1 }}
                    />
                    <img
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                        src={imagen_2_url}
                        alt={nombre}
                        loading="lazy"
                    />
                </div>
            </Link>

            <div className="px-5 pb-5 flex flex-col flex-grow">
                <div>
                    <Link to={`/products/${id}`}>
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-amber-600">
                            {marca}
                        </h5>
                        <h5 className="text-sm tracking-tight text-gray-900 dark:text-white min-h-[3rem]">
                            {nombre}
                        </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-2">
                        <Rating rating={rating} />
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold  px-0.5 py-0.5 lg:px-2.5 lg:py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                            {rating}
                        </span>
                    </div>
                </div>

                {/* Precio */}
                <div className="mt-auto flex items-center justify-between">
                    {/* Mostrar precios cuando hay una oferta */}
                    {precio_oferta && precio_oferta < precio ? (
                        <div className="flex items-center">
                            {/* Precio de oferta en rojo */}
                            <span className="text-base font-bold text-red-500 dark:text-red-500 mr-1 lg:mr-2">
                                {formatPrice(precio_oferta)}
                            </span>
                            {/* Precio regular tachado */}
                            <span className="text-xs lg:text-sm font-bold text-gray-500 dark:text-gray-400 line-through">
                                {formatPrice(precio)}
                            </span>
                        </div>
                    ) : (
                        // Si no hay oferta o los precios son iguales, mostrar solo el precio regular
                        <span className="text-base font-bold text-gray-900 dark:text-white">
                            {formatPrice(precio)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
