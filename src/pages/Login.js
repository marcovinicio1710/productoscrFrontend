import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useTitle } from "../hooks/useTitle";
import { login } from "../services";
import { registerWithGoogle } from '../services';
import { PasswordResetModal } from './PasswordResetModal';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Importa Google OAuth

const clientId = '187577654808-697mct20dg4pov24f33vhjh34hh6a6b2.apps.googleusercontent.com'; // Reemplaza con tu Client ID de Google

export const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const authDetail = {
        username: email.current.value,
        password: password.current.value,
      };
      const data = await login(authDetail);
      
      if (data.access) {
        navigate("/");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
  }

  // Manejo del login exitoso con Google
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
  

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <section className="bg-gray-50 dark:bg-gray-900 py-8 md:py-20">
        <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 my-2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Bienvenido de nuevo
              </h1>

              {/* Botones de Google y Apple */}
              <div className="flex justify-between space-x-4 text-xs md:text-lg">
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

              {/* Formulario de login */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={email}
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
                    ref={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span 
                    onClick={openModal} 
                    className="text-sm font-semibold text-blue-600 hover:underline dark:text-amber-300 cursor-pointer"
                  >
                    ¿Olvidaste contraseña?
                  </span>
                </div>

                {/* Botón de login */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full md:w-48 lg:w-72 mt-4 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center 
                            dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
                  >
                    Iniciar Sesion
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 pb-5">
                  Aun no tienes cuenta?{" "}
                  <Link to="/register" className="font-semibold text-blue-600 hover:underline dark:text-amber-300">
                    Regístrese aquí.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Modal de restablecimiento de contraseña - renderizado fuera del formulario */}
        {isModalOpen && <PasswordResetModal setShowModal={setIsModalOpen} />}
      </section>
    </GoogleOAuthProvider>
  );
};
