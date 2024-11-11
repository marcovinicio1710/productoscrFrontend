import {fetchWithAuth} from "./authService";
  
  function getSession(){
      const token = localStorage.getItem("token");  // No necesitamos JSON.parse para el token, ya que es un string
      const cbid = JSON.parse(localStorage.getItem("cbid"));  // Solo aplicar JSON.parse al cbid si es un objeto/numero
      return { token, cbid };
  }

export async function getUser() {
      const browserData = getSession();  // Obtener el token y el ID del usuario desde localStorage
      
      if (!browserData.token) {
        throw new Error("Usuario no autenticado, no hay token disponible");
      }
    
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${browserData.token}`  // Enviar el token JWT en el header
        }
      };
      
      const response = await fetch(`${process.env.REACT_APP_HOST}/api/user/`, requestOptions);
      
      if (!response.ok) {
        throw { message: response.statusText, status: response.status };  // Manejar errores si la respuesta no es OK
      }
      
      const data = await response.json();  // Obtener los datos del usuario
      return data;
    }
    

export async function getUserOrders(url) {
      const browserData = getSession();
    
      if (!browserData.token) {
        throw new Error("Usuario no autenticado, no hay token disponible");
      }
    
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${browserData.token}`,
        },
      };
    
      try {
        const response = await fetch(url, requestOptions);
    
        if (!response.ok) {
          throw { message: response.statusText, status: response.status };
        }
    
        const data = await response.json();
        return data;  // Devuelve el objeto completo para tener acceso a `count`, `next`, `previous`, `results`
      } catch (error) {
        console.error("Error al obtener el historial de pedidos:", error);
        throw error;
      }
    }
   
export async function getOrderDetail(asin) {
      const browserData = getSession();
    
      if (!browserData.token) {
        throw new Error("Usuario no autenticado, no hay token disponible");
      }
    
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${browserData.token}`,
        },
      };
    
      // Llamada al endpoint de detalles de la orden, pasando el `asin`
      const response = await fetch(`${process.env.REACT_APP_HOST}/api/ordenes-detalle/${asin}/`, requestOptions);
    
      if (!response.ok) {
        throw { message: response.statusText, status: response.status };
      }
    
      return await response.json();
    }
 
export async function createOrder(orderData) {
  const browserData = getSession();

  if (!browserData.token) {
    throw new Error("Usuario no autenticado, no hay token disponible");
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(orderData),
  };

  try {
    const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/ordenes/`, requestOptions);

    if (!response.ok) {
      throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;  // Retornar la respuesta del pedido para mostrar la confirmación
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;  // Volver a lanzar el error para que se maneje en el componente de `Checkout`
  }
}

export async function getUserAddresses() {
  const browserData = getSession();

  if (!browserData.token) {
    throw new Error("Usuario no autenticado, no hay token disponible");
  }

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${browserData.token}`
    }
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/api/direcciones/`, requestOptions);

  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();
  return data;
}

// Crear una nueva dirección para el usuario
export async function createAddress(address) {
  const browserData = getSession();
  
  if (!browserData.token) {
    throw new Error("Usuario no autenticado, no hay token disponible");
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${browserData.token}`
    },
    body: JSON.stringify(address)
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/api/direcciones/`, requestOptions);
  
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  
  return await response.json();
}












