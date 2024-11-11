import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getProduct } from "../../services";

import { ProductImages } from "./components/ProductImages";//
import { ProductInfo } from "./components/ProductInfo";//
import { AddToCartButton } from "./components/AddToCartButton";//
import { QuantitySelector } from "./components/QuantitySelector";//
import { LowStockWarning } from "./components/LowStockWarning";//
import { MotioFees } from "./components/MotioFees";//
import { MetodoPago } from "./components/MetodoPago";//
import { ProductFeatures } from "./components/ProductFeatures";//
import { PreguntasyRespuesta } from "./components/PreguntasyRespuesta";//


export const ProductDetail = () => {
    const { id } = useParams();
   
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
  

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                toast.error("Error loading product", { closeButton: true, position: "bottom-center" });
            }
        }
        fetchProduct();
    }, [id]);



    return (
        <main className="container mx-auto p-4">
            {/* Mostrar Marca y Nombre en Pantallas Pequeñas */}
            <div className="block md:hidden mb-1 md:mb-4 " >
                <h1 className="text-base font-semibold mb-1 text-gray-500 dark:text-amber-600">{product.marca}</h1>
                <h1 className="text-lg font-semibold mb-1 text-gray-900 dark:text-slate-200">{product.nombre}</h1>
                
                
            </div>

            <section className="flex flex-col md:flex-row ">
                <ProductImages product={product} />
                <div className="block md:hidden ">
                <MotioFees precio={product.precio} />
                </div>
                <div className="md:w-3/5 p-1 "> {/* Cambia el ancho a la mitad de la pantalla en pantallas medianas */}
                    <ProductInfo product={product} />
                    
                    {/* Agrupar el selector de cantidad y el botón de agregar al carrito */}
                    <div className="flex items-center space-x-4 "> {/* Flex para alinear en fila, espacio entre elementos */}
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} stock={product.stock} />
                        <AddToCartButton 
                          
                            product={product} 
                            quantity={quantity} 
                           
                        />
                    </div>

                    <LowStockWarning stock={product.stock} />
                    <div className="hidden md:block"> {/* Mostrar en pantallas >= 768px */}
                        <MotioFees precio={product.precio} />
                    </div>
                    <MetodoPago />
                    

                </div>
                
            </section>
            
            <section>
                <div  className="md:w-5/5 p-1 ">
                    <ProductFeatures  product={product} />
                    

                </div>
            </section>
            <section>
                <div  className="md:w-5/5 p-1  mt-4">
                    <PreguntasyRespuesta  product={product} />
                    

                </div>
            </section>
        </main>
    );
};
