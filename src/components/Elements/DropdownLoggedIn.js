import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, logout } from "../../services";

export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // Función para manejar el logout con useCallback
  const handleLogout = useCallback(() => {
    logout();
    setDropdown(false);
    navigate("/login");
  }, [setDropdown, navigate]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        console.log(data);
        data.email ? setUser(data) : handleLogout();
      } catch (error) {
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }
    }
    fetchData();
  }, [handleLogout]);

  return (
    <div id="dropdownAvatar" className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul className="py-1 text-xs text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link onClick={() => setDropdown(false)} to="/change-password" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <span className="bi bi-shield-lock-fill text-lg"></span> {" "} Cambiar Contraseña
          </Link>
        </li>
        <li>
          <Link onClick={() => setDropdown(false)} to="/orders" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <span className="bi bi-handbag-fill text-lg"></span> {" "} Mis Pedidos
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white bi bi-person-fill-down">
          {" "} Cerrar Sesión
        </span>
      </div>
    </div>
  );
};
