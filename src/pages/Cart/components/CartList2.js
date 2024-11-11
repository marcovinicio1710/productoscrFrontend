import { useCart } from "../../../context";
import { CartItem } from "./components/CartItem";
import { useTitle } from "../../../hooks/useTitle";
import { useNavigate } from "react-router-dom";

export const CartList2 = () => {
  const { cartList, total, updateCartItem, removeFromCart , updateCartGiftOptions} = useCart();
 
  const totalItemsInCart = cartList.reduce((acc, item) => acc + item.cantidad, 0);
  useTitle("Tu Carrito- ProductosCR");
  const navigate = useNavigate();

  const handleCheckout = () => {
  navigate("/buy");
      };

  // Función para formatear el precio
  const formatPrice = (price) => {
    const numericPrice = Number(price);
    if (isNaN(numericPrice)) return "Precio no disponible";
    const [whole, decimals] = numericPrice.toFixed(2).split(".");
    return (
      <>
        ₡{parseInt(whole).toLocaleString('es-CR')}.<sup className="text-xs">{decimals}</sup>
      </>
    );
  };

  // Componente de total y botón de pedido
  const TotalSection = () => (
    <div className="flex justify-between items-center mt-6 mb-6">
      <p className="text-base sm:text-lg font-semibold dark:text-white">
        Total: {formatPrice(total)}
      </p>
      <button 
         onClick={handleCheckout}
        className="w-40 md:w-40 font-semibold text-base lg:text-lg lg:w-64 h-12 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
      >
        Realizar Pedido
      </button>
    </div>
  );

  return (
    <div className="w-full mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6 dark:text-white">
        Mi Carrito ({totalItemsInCart}) productos
      </h1>

      {/* Mostrar el total en la parte superior */}
      <TotalSection />

      {/* Lista de productos como tarjetas */}
      <div className="space-y-4">
        {cartList.map((item) => (
          <CartItem 
            key={item.producto}
            item={item}
            updateCartItem={updateCartItem}
            removeFromCart={removeFromCart}
            updateCartGiftOptions={updateCartGiftOptions}
          />
        ))}
      </div>

      {/* Mostrar el total en la parte inferior solo si hay 3 o más productos */}
      {cartList.length >= 3 && <TotalSection />}

    </div>
  );
};
