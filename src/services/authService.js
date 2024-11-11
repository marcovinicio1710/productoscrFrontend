
async function refreshAccessToken() {
    const refreshToken = localStorage.getItem("refresh_token");
  
    if (!refreshToken) {
      throw new Error("No hay refresh token disponible");
    }
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ refresh: refreshToken })
    });
  
    if (!response.ok) {
      logout();  // Cierra la sesión si el refresh token es inválido
      throw new Error("No se pudo refrescar el token de acceso");
    }
  
    const data = await response.json();
    localStorage.setItem("token", data.access);  // Actualizar el `access token` en el almacenamiento
    return data.access;
  }
  
  // src/services/index.js
  
  export async function fetchWithAuth(url, options = {}) {
    let token = localStorage.getItem("token");
  
    // Asegurar que Authorization esté presente
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  
    // Hacer la solicitud con el token actual
    let response = await fetch(url, options);
  
    // Si el token expiró (error 401), intenta renovarlo
    if (response.status === 401) {
      try {
        // Intentar obtener un nuevo access token
        token = await refreshAccessToken();
  
        // Actualizar el header con el nuevo token
        options.headers.Authorization = `Bearer ${token}`;
  
        // Reintentar la solicitud original con el nuevo token
        response = await fetch(url, options);
      } catch (error) {
        console.error("Error al refrescar el token o hacer logout:", error);
        throw error;
      }
    }
  
    if (!response.ok) {
      throw new Error(response.statusText, response );
    }
  
    return await response;
  }
  
  
  
  export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    };
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/login/`, requestOptions);
    
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
  
    const data = await response.json();
    
    if (data.access && data.refresh) {
        localStorage.setItem("token", data.access);           // Guardar el access token en localStorage
        localStorage.setItem("refresh_token", data.refresh);  // Guardar el refresh token en localStorage
        localStorage.setItem("cbid", data.user.id);           // Guardar el ID del usuario en localStorage
    }
  
    return data;
  }
  export async function register(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    };
  
    // Enviar la solicitud al backend
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/register/`, requestOptions);
  
    // Si la respuesta no es "ok", arrojar error
    if (!response.ok) {
        const errorData = await response.json();  // Obtener detalles del error
        throw { message: errorData.message || response.statusText, status: response.status };
    }
  
    // Obtener el cuerpo de la respuesta si todo salió bien
    const data = await response.json();
    console.log("aqui datos")
    console.log(data)
    console.log("aqui fin datos")
  
    // Si hay un accessToken y refresh token, almacenarlos en localStorage
    if (data.access && data.refreshToken) {
      localStorage.setItem("token", data.access);           // Guardar el access token en localStorage
      localStorage.setItem("refresh_token", data.refresh);  // Guardar el refresh token en localStorage
      localStorage.setItem("cbid", data.user.id);           // Guardar el ID del usuario en localStorage
  }
  
    return data;  // Devolver los datos del servidor
  }
  export function logout() {
    localStorage.removeItem("token");           // Eliminar el access token de localStorage
    localStorage.removeItem("refresh_token");   // Eliminar el refresh token de localStorage
    localStorage.removeItem("cbid");            // Eliminar el ID del usuario de localStorage
  }
  
  export async function resetpassword(email) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),  // Enviar el email en el cuerpo de la solicitud
    };
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/reset-password/`, requestOptions);
  
    if (!response.ok) {
      const errorData = await response.json();  // Obtener detalles del error si ocurre
      throw { message: errorData.message || response.statusText, status: response.status };
    }
  
    const data = await response.json();  // Obtener respuesta exitosa
  
    return data;  // Devolver los datos del servidor
  }
  
  export async function confirmResetPassword(uidb64, token, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    };
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/reset-password/${uidb64}/${token}/`, requestOptions);
  
    if (!response.ok) {
      const errorData = await response.json();
      throw { message: errorData.error || response.statusText, status: response.status };
    }
  
    return await response.json();
  }
  
  
  
  export async function changePassword(currentPassword, newPassword) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Agrega el token JWT para usuarios autenticados
      },
      body: JSON.stringify({
        currentPassword: currentPassword,
        newPassword: newPassword
      }),
    };
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/change-password/`, requestOptions);
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al cambiar la contraseña.');
    }
  
    return await response.json();
  }
  
  export async function registerWithGoogle(token) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),  // Enviar el token de Google al backend
    };
    console.log(token)
  
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/google-register/`, requestOptions);
    console.log(response)
    if (!response.ok) {
      const errorData = await response.json();
      throw { message: errorData.message || response.statusText, status: response.status };
    }
  
    const data = await response.json();
  
    // Almacenar tokens si la respuesta es exitosa
    if (data.access && data.refresh && data.user && data.user.id) {
      localStorage.setItem("token", data.access);           // Guardar el access token en localStorage
      localStorage.setItem("refresh_token", data.refresh);  // Guardar el refresh token en localStorage
      localStorage.setItem("cbid", data.user.id);           // Guardar el ID del usuario en localStorage
      
  } else {
      // Si no se obtienen los tokens o el ID del usuario, mostrar un error
      console.error('Datos recibidos incompletos:', data);
  }
  
    return data;  // Devolver los datos del servidor
  }
  
  export async function registerWithFacebook(token) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),  // Enviar el token de Facebook al backend
    };
  
    // Imprimir el token recibido para verificar que se está pasando correctamente
    console.log('Token de Facebook:', token);
  
    // Llamar a la API del backend para autenticar el usuario con Facebook
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/facebook-register/`, requestOptions);
  
    // Manejar el error si la respuesta no es "ok"
    if (!response.ok) {
      const errorData = await response.json();
      throw { message: errorData.message || response.statusText, status: response.status };
    }
  
    // Procesar los datos de la respuesta si la autenticación fue exitosa
    const data = await response.json();
  
    // Almacenar tokens si la respuesta es exitosa
    if (data.access && data.refresh && data.user && data.user.id) {
      localStorage.setItem("token", data.access);           // Guardar el access token en localStorage
      localStorage.setItem("refresh_token", data.refresh);  // Guardar el refresh token en localStorage
      localStorage.setItem("cbid", data.user.id);           // Guardar el ID del usuario en localStorage
    } else {
      // Si no se obtienen los tokens o el ID del usuario, mostrar un error
      console.error('Datos recibidos incompletos:', data);
    }
  
    // Devolver los datos del servidor
    return data;
  }
  
  
  