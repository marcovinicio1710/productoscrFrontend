import React, { useEffect, useState } from "react";
import { useCart } from "../../../context";
import { getUserAddresses, createAddress, createOrder } from "../../../services";
import { useLoadScript } from "@react-google-maps/api";//
import { AddressList } from "./components/AddressList";//
import { NewAddressForm } from "./components/NewAddressForm";//
import { CartSummary } from "./components/CartSummary";//
import { MapSelector } from "./components/MapSelector";//
import { PlaceOrderButton } from "./components/PlaceOrderButton";//
import { ShippingOptions } from "./components/ShippingOptions";
import { PaymentMethod } from './components/PaymentMethod';//
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";

export const Checkout = () => {
  const { cartList, total, fetchCart } = useCart();
  console.log('cartlist context')
  console.log(cartList)
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [newAddress, setNewAddress] = useState({
    nombre: "",
    telefono: "",
    calle: "",
    ciudad: "",
    provincia: "",
    nota_pedido: "",
    coordenadas: null,
  });
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const userAddresses = await getUserAddresses();
        setAddresses(userAddresses);
        if (userAddresses.length > 0) {
          setSelectedAddress(userAddresses[0].id);
        }
      } catch (error) {
        console.error("Error al obtener direcciones:", error);
        toast.error("Error al cargar direcciones.");
      }
    };
    fetchAddresses();
  }, []);

  const handleNewAddressSubmit = async (e) => {
    e.preventDefault();

    if (!newAddress.nombre || !newAddress.telefono || !newAddress.calle || !newAddress.ciudad || !newAddress.provincia) {
      toast.error("Por favor completa todos los campos obligatorios.");
      return;
    }

    try {
      const addedAddress = await createAddress(newAddress);
      setAddresses([...addresses, addedAddress]);
      setShowNewAddressForm(false);
      setSelectedAddress(addedAddress.id);
      setNewAddress({
        nombre: "",
        telefono: "",
        calle: "",
        ciudad: "",
        provincia: "",
        nota_pedido: "",
        coordenadas: null,
      });
      toast.success("Dirección guardada exitosamente.");
    } catch (error) {
      console.error("Error al crear dirección:", error);
      toast.error("Error al guardar la dirección.");
    }
  };

  // Manejar la confirmación del pedido
  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Por favor selecciona una dirección.");
      return;
    }
    if (!shippingMethod) {
      toast.error("Por favor selecciona un tipo de envío.");
      return;
    }
    if (!selectedPayment) {
      toast.error("Por favor selecciona un método de pago.");
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      setIsSubmitting(true);
      setShowSpinner(true);

      // Crear el objeto de la orden
      const orderData = {
        direccion_envio: selectedAddress,
        tipo_envio: shippingMethod, // Debe ser un valor como "GAM_ContraEntrega"
        tipo_pago: selectedPayment,
        productos: cartList.map(item => ({
          producto: item.producto,
          cantidad: item.cantidad,
          precio_unitario: item.precio_unitario,
          es_regalo: item.regalo_apply,
          precio_regalo: item.regalo_apply ? item.precio_regalo : 0,
          tamano_regalo: item.regalo_apply ? item.Tamano_Regalo : 'NO_APLICA',
          motivo_regalo: item.regalo_apply ? item.Motivo_Regalo : 'NO_APLICA', 

        })),
        precio_total: total + shippingCost,
        precio_envio: shippingCost,
      };

      // Esperar 3 segundos para simular un proceso de carga
      await new Promise(resolve => setTimeout(resolve, 10));

      // Llamar a la función para crear la orden
      const orderResponse = await createOrder(orderData);

      // Confirmación de pedido
      setOrderConfirmed(true);
      setOrderDetails(orderResponse);

      // Limpiar el carrito después de confirmar la orden
      fetchCart(); 
    } catch (error) {
      console.error("Error al confirmar pedido:", error);
      toast.error("Error al confirmar pedido.");
    } finally {
      setShowSpinner(false);
      setIsSubmitting(false);
    }
  };

  if (loadError) return <p>Error al cargar Google Maps</p>;
  if (!isLoaded) return <p>Cargando...</p>;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md my-6">
      <Toaster position="top-center" reverseOrder={false} />

      {showSpinner && (
        <div className="flex items-center justify-center h-48">
          <div role="status">
            <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Preparando orden...</span>
          </div>
        </div>
      )}

      {!showSpinner && (
        <>
          {orderConfirmed ? (
            <div className="text-center p-6 bg-gradient-to-b from-green-500 dark:bg-green-800 rounded-lg h-100">
              <h2 className="text-9xl font-bold text-white dark:text-white mb-4 "><i className="bi bi-bag-check"> </i></h2>
              <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-4">¡Pedido Confirmado!</h2>
              <p className="text-lg dark:text-white">Número de Orden: <Link to={`/orders/${orderDetails?.numero_orden}`} className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"> {orderDetails?.numero_orden}</Link> </p>
              
              <p className="text-lg dark:text-white">Total: {formatPrice(orderDetails?.precio_total)}</p>
              <p className="text-lg dark:text-white my-4">Pronto te estaremos contactando por Whatsapp <span className='text-2xl bi bi-whatsapp text-lime-300' ></span></p>

              <p className="text-sm dark:text-white">Gracias por Realizar un Pedido con nosotros!</p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-semibold text-center mb-6 dark:text-white">Checkout</h1>

              <AddressList 
                addresses={addresses}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
                setShowNewAddressForm={setShowNewAddressForm}
              />

              {showNewAddressForm && (
                <>
                  <NewAddressForm 
                    newAddress={newAddress}
                    setNewAddress={setNewAddress}
                    handleNewAddressSubmit={handleNewAddressSubmit}
                  />
                  <MapSelector newAddress={newAddress} setNewAddress={setNewAddress} />
                </>
              )}

              <ShippingOptions
                subtotal={total}
                setShippingCost={setShippingCost}
                setShippingMethod={setShippingMethod}
              />

              <PaymentMethod 
                selectedPayment={selectedPayment} 
                setSelectedPayment={setSelectedPayment} 
              />

              <CartSummary 
                cartList={cartList} 
                total={total + shippingCost} 
                formatPrice={(price) => price.toLocaleString('es-CR')} 
              />

              <PlaceOrderButton 
                handlePlaceOrder={handlePlaceOrder}
                isSubmitting={isSubmitting}
                disabled={!selectedAddress || !shippingMethod || !selectedPayment}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
