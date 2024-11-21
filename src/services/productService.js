import {fetchWithAuth} from "./authService";


export async function getProductList(category, subcategory, query, marcas,talla, ordering, priceRange, page = null) {
    try {
      let url = `${process.env.REACT_APP_HOST}/api/productos-filtrados/?`;
  
      const params = [];
      if (category) params.push(`category=${category}`);
      if (subcategory) params.push(`subcategory=${subcategory}`);
      if (marcas) params.push(`marca=${marcas}`);
      if (talla) params.push(`talla=${talla}`);
      if (query) params.push(`q=${query}`);
      if (ordering) params.push(`ordering=${ordering}`);
      if (priceRange) params.push(`priceRange=${priceRange}`);
      if (page && page > 1) params.push(`page=${page}`); // Añade `page` solo si es mayor a 1
  
      url += params.join('&');
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Error al obtener la lista de productos");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en getProductList:", error);
      throw error;
    }
  }

export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/productos/${id}/`);
    if(!response.ok){
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json()
    
    return data;
}

export async function getFeaturedList() {
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/productos/ofertas-dia/`);
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    
    return data;
}

export async function getBestSellersList () {
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/productos/best-sellers/`);
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    
    return data;
}

export async function RecienLlegadosList () {
  const response = await fetch(`${process.env.REACT_APP_HOST}/api/productos/recien-llegado/`);
  if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  
  return data;
}




// services/index.js

export async function addToCartAPI(productId, quantity , talla) {
    try {
        const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/carrito/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Enviar el token de autenticación
            },
            body: JSON.stringify({
                producto_id: productId,
                cantidad: quantity,
                talla: talla
            })
        });

        // Manejar el error si la respuesta no es exitosa
        if (!response.ok) {
            const errorData = await response.json();
            // Lanzar un error con el mensaje del backend o un mensaje genérico
            throw new Error(errorData.error || 'Error al agregar al carrito');
        }

        // Si la respuesta es exitosa, devolver el JSON
        const data = await response.json();
        return data;

    } catch (error) {
        // Re-lanzar el error para manejarlo en el componente
        throw error;
    }
}


export async function getCartAPI() {
    try {
        const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/carrito/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error("Error al obtener el carrito");
        }

        const data = await response.json();
        //console.log("Datos del carrito list desde el backend:", data); // Agregar console.log para depurar
        return data; // Devuelve el carrito completo con items y total
    } catch (error) {
        console.error("Error en getCartAPI list :", error);
        throw error;
    }
}


export async function addQuestionAPI(productId, question) {
    try {
        const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/preguntas-respuestas/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                producto: productId,
                pregunta: question
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al enviar la pregunta');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en addQuestionAPI:", error);
        throw error;
    }
}

// Agregar una nueva calificación
export async function addRatingAPI(productId, rating, comment) {
    try {
        const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/ratings/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                product: productId,
                rating: rating,
                comment: comment
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al enviar la calificación');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en addRatingAPI:", error);
        throw error;
    }
}


export async function updateCartItemAPI(productId, quantity , talla = null) {
    try {
      const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/carrito/${productId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(
          talla && talla !== "NO_APLICA"
            ? { cantidad: quantity, talla: talla }
            : { cantidad: quantity }
        )
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar la cantidad');
      }
  
      const data = await response.json();
      return data; // Devuelve el carrito actualizado
    } catch (error) {
      console.error("Error en updateCartItemAPI:", error);
      throw error;
    }
  }
  

export async function updateGiftOptionsAPI(productId, giftOptions) {
    try {
      const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/carrito/${productId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(giftOptions)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar las opciones de regalo');
      }
  
      const data = await response.json();
      
      return data; // Asegúrate de retornar los datos para que el frontend los procese
    } catch (error) {
      
      throw error;
    }
  }
  // Eliminar un producto del carrito
  export async function removeFromCartAPI(productId) {
    try {
      const response = await fetchWithAuth(`${process.env.REACT_APP_HOST}/api/carrito/${productId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar del carrito');
      }
  
      return { success: true }; // Devuelve un éxito si se elimina correctamente
    } catch (error) {
      console.error("Error en removeFromCartAPI:", error);
      throw error;
    }
  }




// Obtener productos filtrados solo por categoría


