import { useState } from "react";
import { resetpassword } from "../services";  // Importa la función de resetpassword
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const PasswordResetModal = ({ setShowModal }) => {
  const [email, setEmail] = useState("");  // Estado para manejar el email
  const navigate = useNavigate();          // Para redirigir a la página de login

  // Función para manejar el envío del formulario de restablecimiento de contraseña
  async function handleResetPassword(event) {
    event.preventDefault();

    try {
      const emailDetail = { email };
      console.log(email)  // Construimos el cuerpo de la solicitud con el email
      const data = await resetpassword(emailDetail);  // Llamamos a la función de resetpassword

      if (data) {
        // Mostrar mensaje de éxito si la solicitud fue exitosa
        toast.success("Correo de restablecimiento enviado, revisa tu bandeja.");
        
        // Redirigir al usuario a la página de login
        navigate("/login");
      } else {
        toast.error("Error en el envío, intenta de nuevo.");
      }
    } catch (error) {
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }

    // Cerrar el modal
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Restablecer Contraseña
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowModal(false)}  // Cierra el modal al hacer clic
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6-6M7 7l6 6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Cerrar</span>
            </button>
          </div>

          {/* Modal body */}
          <form className="p-4 md:p-5" onSubmit={handleResetPassword}>  {/* Cambiar handleSubmit por handleResetPassword */}
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tu correo electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}  // Manejamos el valor del email
                onChange={(e) => setEmail(e.target.value)}  // Actualizamos el estado
                className="block w-full p-2.5 border rounded"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            {/* Botones */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
              >
                Enviar Correo
              </button>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                onClick={() => setShowModal(false)}  // Cerrar el modal sin enviar
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
