import { addToCartAPI } from "../../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";

export const AddToCartButton = ({ product, quantity }) => {
    const navigate = useNavigate();
    const { fetchCart } = useCart(); 

    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            toast.info("Por favor, inicia sesión para agregar productos al carrito.");
            return navigate("/login");
        }

        try {
            // Llama al servicio para agregar al carrito
            const response = await addToCartAPI(product.id, quantity);
            await fetchCart(); 

            toast.success(response.message);
        } catch (error) {
            console.error("Error al agregar al carrito:", error);
            toast.error(error.message || "Error al agregar al carrito.");
        }
    };

    return (
        <div className="my-4">
            {product.stock === 0 ? (
                <button
                    disabled
                    className="w-44 md:w-60 lg:w-96 h-12 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100 cursor-not-allowed"
                >
                    <span className="bi bi-x-circle-fill text-xl"></span>
                    <span> SIN STOCK</span>
                </button>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className="w-44 md:w-60 lg:w-96 h-12 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
                >
                    <span className="bi bi-cart-plus-fill text-xl"></span>
                    <span> AGREGAR</span>
                </button>
            )}
        </div>
    );
};
