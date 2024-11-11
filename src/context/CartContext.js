// context/CartContext.js
import { toast } from "react-toastify";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getCartAPI, addToCartAPI, updateCartItemAPI, removeFromCartAPI , updateGiftOptionsAPI} from "../services";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true); // Nuevo estado

  // Obtener los productos del carrito
  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await getCartAPI();
      setCartList(response.carrito.items);
      setTotal(response.total);
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Agregar un producto al carrito
  const addToCart = async (productId, quantity) => {
    try {
      const updatedCart = await addToCartAPI(productId, quantity);
      setCartList(updatedCart.items);
      setTotal(updatedCart.total);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateCartItem = async (productId, quantity) => {
    try {
      const updatedCart = await updateCartItemAPI(productId, quantity);
      
      setCartList(updatedCart.carrito.items);
      setTotal(updatedCart.total);
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };


const updateCartGiftOptions = async (productId, giftOptions) => {
  try {
    const updatedCart = await updateGiftOptionsAPI(productId, {
      es_regalo: giftOptions.es_regalo,
      Tamano_Regalo: giftOptions.Tamano_Regalo,
      Motivo_Regalo: giftOptions.Motivo_Regalo,
      Precio_Regalo: giftOptions.precio_regalo
    });

    // Actualizar el estado del carrito y total
    setCartList(updatedCart.carrito.items);
    setTotal(updatedCart.total);

    // Mostrar toast message si se actualiza correctamente
    toast.success('Opciones de regalo actualizadas con éxito');

    return updatedCart;
  } catch (error) {
    console.error("Error al actualizar las opciones de regalo:", error);
    // Mostrar mensaje de error si algo sale mal
    toast.error('Error al actualizar opciones de regalo');
  }
};


  // Eliminar un producto del carrito
  const removeFromCart = async (productId) => {
    try {
      await removeFromCartAPI(productId);
  
      // Filtrar el producto eliminado del estado del carrito localmente
      setCartList((prevCartList) => prevCartList.filter(item => item.producto !== productId));
  
      // Actualizar el total localmente
      setTotal((prevTotal) => {
        const itemToRemove = cartList.find(item => item.producto === productId);
        return itemToRemove ? prevTotal - itemToRemove.subtotal : prevTotal;
      });
  
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartList, total, addToCart, updateCartItem, updateCartGiftOptions, removeFromCart, fetchCart, loading }}>
  {children}
</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

// Actualizar las opciones de regalo de un producto en el carrito
// Actualizar las opciones de regalo de un producto en el carrito

