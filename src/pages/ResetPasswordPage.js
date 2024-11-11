import { useState } from "react";
import { useNavigate, useParams , Link} from "react-router-dom";
import { toast } from 'react-toastify';
import { confirmResetPassword } from "../services";

export const ResetPasswordPage = () => {
  const { uidb64, token } = useParams();  // Captura uid y token de la URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    try {
      await confirmResetPassword(uidb64, token, password);
      toast.success("Contraseña restablecida con éxito.");
      navigate("/login");
    } catch (error) {
      toast.error("Error al restablecer la contraseña. Intenta de nuevo.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-8 md:py-20">
      <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 my-2">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Restablecer Contraseña
            </h1>

            {/* Formulario de restablecimiento */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/* Botón de restablecer */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-48 lg:w-72 mt-4 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center 
                            dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
                >
                  Restablecer Contraseña
                </button>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 pb-5">
                Recuerda tu contraseña?{" "}
                <Link to="/login" className="font-semibold text-blue-600 hover:underline dark:text-amber-300">
                  Iniciar sesión aquí.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
