import { Rating } from "../../../components";


export const ProductInfo = ({ product }) => {
    // Dividimos la descripción en puntos usando el salto de línea "\r\n" como delimitador.
    
    const descriptionPoints = product.descripcion ? product.descripcion.split("\r\n") : [];
    
    // Función para formatear el precio con separadores de miles y decimales elevados
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
        <div className="p-1 md:p-4">
           <h1 className="hidden md:block text-xs md:text-lg font-semibold mb-2 text-gray-500 dark:text-amber-600">{product.marca}</h1>
           <h1 className="hidden md:block text-base md:text-2xl font-semibold mb-2 text-gray-900 dark:text-slate-200">{product.nombre}</h1>
            <div className="flex items-center">
                {/* Formatear precios usando formatPrice */}
                <p className="text-xl md:text-2xl font-extrabold text-red-500 dark:text-white mb-2">
                    {formatPrice(product.precio_oferta < product.precio ? product.precio_oferta : product.precio)}
                </p>
                {product.precio_oferta < product.precio && (
                    <p className="text-sm md:text-lg font-bold text-gray-400 dark:text-slate-400 mx-4 mb-4 line-through">
                        {formatPrice(product.precio)}
                    </p>
                )}
            </div>

            <div className="flex items-center mb-4">
                <Rating rating={product.rating} />
                <span className="text-gray-600 ml-2 dark:text-white">({product.cantidad_reviews} reviews)</span>
            </div>
            {product.envio_internacional ? (
                <div className="flex items-center mb-4 text-gray-600 dark:text-slate-200 ">
                     <span className="bi bi-globe text-base ">  </span>
                     <span className="ml-2 mr-8 text-sm">  Envio Internacional ( 15 - 21 dias)  </span>
                    
                
                </div>

                ): (
                    <div className="flex items-center mb-4 dark:text-slate-200 ">
                        <span className="bi bi-box2-fill text-base">  </span>
                        <span className="ml-2 mr-8 text-sm">  Envios de 2 - 3 dias  </span>
                    </div>

                )}
            
            {product.regalo_apply && (
                <div className="flex items-center mb-4 text-red-500 dark:text-amber-400 ">
                     <span className="bi bi-gift-fill text-base ">  </span>
                     <span className="ml-2 mr-4 text-sm font-bold">  Aplica para Regalo  </span>
                     <a href="/info-regalos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs font-medium underline" >
                        Ver términos
                    </a>
                    
                
                </div>

            )}

            {/* Mostrar la descripción en bullet points */}
            <ul className="list-disc list-inside text-sm md:text-lg text-gray-900 dark:text-slate-200 mt-4">
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};
