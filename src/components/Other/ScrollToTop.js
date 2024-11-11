import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, search } = useLocation(); // Incluir `search` para detectar cambios en los parámetros

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio cada vez que cambia la URL o los parámetros
  }, [pathname, search]); // Escucha tanto `pathname` como `search`

  return null;
};
