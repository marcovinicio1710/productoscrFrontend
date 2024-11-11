import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTitle } from "../hooks/useTitle";
import { register } from '../services';
import { registerWithGoogle } from '../services';
import { registerWithFacebook } from '../services';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Importa Google OAuth

const clientId = '187577654808-697mct20dg4pov24f33vhjh34hh6a6b2.apps.googleusercontent.com'; // Tu Client ID de Google

export const Register = () => {
  useTitle("Registrar Cuenta");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    try {
      const authDetail = {
        email: event.target.email.value,    // Usamos el correo como 'username'
        name: event.target.name.value,      // Guardamos el nombre completo del usuario
        password: password,                 // Contraseña
        password2: confirmPassword          // Confirmación de la contraseña
      };
      const data = await register(authDetail);
      data.access ? navigate("/") : toast.error(data);
    } catch (error) {
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
  }

  const handleGoogleRegisterSuccess = async (credentialResponse) => {
    try {
      console.log('Google Login Success Response:', credentialResponse); // Verifica la respuesta
      if (credentialResponse.credential) {
        console.log('Token received:', credentialResponse.credential); // Verifica que el token esté presente
  
        const data = await registerWithGoogle(credentialResponse.credential); // Envía el token al backend
        console.log('Server Response:', data); // Verifica la respuesta del servidor
  
        toast.success('Registro exitoso con Google!');
        navigate("/");  // Redirigir al home o a donde prefieras
      } else {
        console.log('No token received');
        toast.error('Error: No se recibió un token válido.');
      }
    } catch (error) {
      console.error('Error al registrar con Google:', error); // Imprime el error detallado
      toast.error('Error al registrar con Google.');
    }
  };

  const handleFacebookResponse = async (response) => {
    try {
      console.log('Facebook Login Success Response:', response); // Muestra la respuesta
      if (response.accessToken) {
        // Envía el token de Facebook al backend
        // Aquí deberías implementar `registerWithFacebook` en tus servicios
        const data = await registerWithFacebook(response.accessToken);
        toast.success('Registro exitoso con Facebook!');
        navigate("/");  // Redirigir al home o a donde prefieras
      } else {
        toast.error('Error al registrar con Facebook.');
      }
    } catch (error) {
      toast.error('Error al registrar con Facebook.');
    }
  };
  
  

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <section className="bg-gray-50 dark:bg-gray-900 py-8 md:py-20">
        <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 my-2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Crear una cuenta
              </h1>

              {/* Botones de Google y Apple */}
              <div className="flex justify-between space-x-4">
              <GoogleLogin
                onSuccess={handleGoogleRegisterSuccess} // Usa la nueva función para manejar el registro
                onError={() => {
                  toast.error('Error al registrar con Google.');
                }}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg flex justify-center items-center text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              />
                
              </div>

              {/* Divider */}
              <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400">o</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tu nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ejemplo@mail.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required
                    minLength="7"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required
                    minLength="7"
                  />
                  {passwordError && <p className="text-sm text-red-600 mt-1">{passwordError}</p>}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full md:w-48 lg:w-72 mt-4 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center 
                              dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
                  >
                    Registrarse
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 pb-5">
                  ¿Ya tienes cuenta?{" "}
                  <Link to="/login" className="font-semibold text-blue-600 hover:underline dark:text-amber-300">
                    Inicia sesión aquí.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </GoogleOAuthProvider>
  );
};
