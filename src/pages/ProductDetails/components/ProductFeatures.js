import { useState } from "react";
import { OpinionesModal } from './OpinionesModal'; 
import { Link, useNavigate } from "react-router-dom";

export  const ProductFeatures = ({ product }) => {
  const [activeTab, setActiveTab] = useState("Características");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOpinionClick = () => {
    if (token) {
      // Si está logueado, mostrar el modal de opiniones
      setshowOpinionesModal1(true);
    } else {
      // Si no está logueado, redirigir a la página de login
      navigate('/login');
    }
  };
  const [showOpinionesModal1, setshowOpinionesModal1] = useState(false);

  // Función para calcular la lista de porcentajes de rating
  const calcularPorcentajeRatings = (ratingCounts) => {
    // Si ratingCounts no está definido, retornamos una lista con todos los porcentajes en 0
    if (!ratingCounts) {
      return [
        { stars: "5 star", percentage: "0%", width: "0%" },
        { stars: "4 star", percentage: "0%", width: "0%" },
        { stars: "3 star", percentage: "0%", width: "0%" },
        { stars: "2 star", percentage: "0%", width: "0%" },
        { stars: "1 star", percentage: "0%", width: "0%" },
      ];
    }
  
    const totalRatings = Object.values(ratingCounts).reduce((acc, count) => acc + count, 0); // Suma todos los ratings
  
    if (totalRatings === 0) {
      // Si no hay ratings, devuelve todo con 0%
      return [
        { stars: "5 star", percentage: "0%", width: "0%" },
        { stars: "4 star", percentage: "0%", width: "0%" },
        { stars: "3 star", percentage: "0%", width: "0%" },
        { stars: "2 star", percentage: "0%", width: "0%" },
        { stars: "1 star", percentage: "0%", width: "0%" },
      ];
    }
  
    return [
      { stars: "5 star", percentage: `${((ratingCounts['5_star'] / totalRatings) * 100).toFixed(2)}%`, width: `${(ratingCounts['5_star'] / totalRatings) * 100}%` },
      { stars: "4 star", percentage: `${((ratingCounts['4_star'] / totalRatings) * 100).toFixed(2)}%`, width: `${(ratingCounts['4_star'] / totalRatings) * 100}%` },
      { stars: "3 star", percentage: `${((ratingCounts['3_star'] / totalRatings) * 100).toFixed(2)}%`, width: `${(ratingCounts['3_star'] / totalRatings) * 100}%` },
      { stars: "2 star", percentage: `${((ratingCounts['2_star'] / totalRatings) * 100).toFixed(2)}%`, width: `${(ratingCounts['2_star'] / totalRatings) * 100}%` },
      { stars: "1 star", percentage: `${((ratingCounts['1_star'] / totalRatings) * 100).toFixed(2)}%`, width: `${(ratingCounts['1_star'] / totalRatings) * 100}%` },
    ];
  };

  // Verifica si `product` tiene características antes de procesarlas
  const procesarCaracteristicas = (caracteristicas) => {
    if (!caracteristicas) return [];  // Si no hay características, retornamos un array vacío
    return caracteristicas.split('\n').map((linea) => {
      const [key, value] = linea.split(':');
      return { key: key.trim(), value: value ? value.trim() : '' };
    });
  };

  // Procesar las características del producto
  const caracteristicasProcesadas = procesarCaracteristicas(product.caracteristicas);

  // Siempre mostramos las propiedades adicionales
  const propiedadesAdicionales = [
    { key: "Marca", value: product.marca || "No disponible" },
    { key: "Peso en gramos", value: product.peso_en_gramos || "No disponible" },
    { key: "Ancho (cm)", value: product.ancho_cm || "No disponible" },
    { key: "Largo (cm)", value: product.largo_cm || "No disponible" },
    { key: "Profundidad (cm)", value: product.profundidad_cm || "No disponible" }
  ];

  // Concatenar propiedades adicionales con las características procesadas
  const listaCaracteristicas = [{ key: "Marca", value: product.marca || "No disponible" }, ...caracteristicasProcesadas, ...propiedadesAdicionales.slice(1)];

  // Generar la lista de ratings
  const ratingList = calcularPorcentajeRatings(product.rating_counts);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Pestañas */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center dark:text-gray-400" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`w-26 inline-block py-4 hover:bg-gray-200 dark:hover:bg-gray-900 pl-1 border-b-2 rounded-t-lg ${activeTab === "Características" ? "border-blue-500" : ""}`}
              onClick={() => handleTabClick("Características")}
              type="button"
              role="tab"
              aria-selected={activeTab === "Características"}
            >
              Características
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`w-26 inline-block p-4 hover:bg-gray-200 dark:hover:bg-gray-900 border-b-2 rounded-t-lg ${activeTab === "caja" ? "border-blue-500" : ""}`}
              onClick={() => handleTabClick("caja")}
              type="button"
              role="tab"
              aria-selected={activeTab === "caja"}
            >
              En la Caja
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`w-26 inline-block p-4 hover:bg-gray-200 dark:hover:bg-gray-900 border-b-2 rounded-t-lg ${activeTab === "Rating" ? "border-blue-500" : ""}`}
              onClick={() => handleTabClick("Rating")}
              type="button"
              role="tab"
              aria-selected={activeTab === "Rating"}
            >
              Rating
            </button>
          </li>
        </ul>
      </div>

      <div className="">
        {/* Tab de características */}
        {activeTab === "Características" && listaCaracteristicas.length > 0 ? (
          <div className="w-96 lg:w-100 relative overflow-x-auto shadow-md rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {listaCaracteristicas.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="pl-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.key}
                    </th>
                    <td className="pr-4 pl-1 py-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          activeTab === "Características" && (
            <p className="text-gray-500">No hay características disponibles</p>
          )
        )}
        {activeTab === "caja" && product.que_en_caja && product.que_en_caja.length > 0 ? (
          <div className="w-96 lg:w-100 relative overflow-x-auto shadow-md rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
            <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {product.que_en_caja.map((item) => (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="pl-4 py-4 text-gray-900 dark:text-white">
                      {item.Especificacion_Caja}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          activeTab === "caja" && (
            <div className="w-96 lg:w-100 relative overflow-x-auto shadow-md rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr>
                    <td className="pl-4 py-4 text-center text-gray-500 dark:text-gray-400">
                      Sin datos disponibles
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        )}

        {/* Tab de Ratings */}
        {activeTab === "Rating" && (
          <div className="w-96 lg:w-100 mx-auto place-content-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <p className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">{product.rating}</p>
              <p className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">de</p>
              <p className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>

            {/* Total ratings */}
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ( {product.cantidad_reviews}  ) Opiniones Totales
            </p>

            {/* Ratings breakdown */}
            {ratingList.map((rating, index) => (
              <div className="flex items-center mt-4" key={index}>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  {rating.stars}
                </span>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: rating.width }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {rating.percentage}
                </span>
              </div>
            ))}
            {/* Opiniones */}
            <div className="flex justify-center items-center "> {/* Contenedor centrado */}
              <button
                onClick={handleOpinionClick}  // Función que abre el modal
                className="w-44 md:w-48 lg:w-72 mt-4 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center 
                          dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
              >
                <span className="bi bi-chat-right-text-fill text-xl"></span>  {/* Ícono de comentarios */}
                <span className="ml-2">DEJAR OPINIÓN</span>  {/* Texto del botón */}
              </button>
            </div>


            {/* Modal para dejar una opinión */}
            {showOpinionesModal1 && <OpinionesModal setshowOpinionesModal1={setshowOpinionesModal1} productId={product.id} />} {/* Renderiza el modal solo si está abierto */}


          </div>
        )}
      </div>
    </div>
  );
};
