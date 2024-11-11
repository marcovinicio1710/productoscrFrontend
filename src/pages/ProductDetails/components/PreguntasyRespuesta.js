import {  useNavigate } from "react-router-dom";
import { useState } from "react";

import { PreguntasModal } from './PreguntasModal'; 

export const PreguntasyRespuesta = ({ product }) => {
  const preguntasRespuestas = product.preguntas_respuestas || [];  // Verifica que esté definido
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handlePreguntasonClick = () => {
    if (token) {
      // Si está logueado, mostrar el modal de Preguntas
      setShowPreguntasModal(true);
    } else {
      // Si no está logueado, redirigir a la página de login
      navigate('/login');
      
    }
  };
  const [showPreguntasModal, setShowPreguntasModal] = useState(false);

  return (
    <section className="space-y-4">
      {/* Título de la sección con la cantidad de preguntas */}
      <h2 className="text-center text-lg font-bold text-gray-900 dark:text-white">
        Preguntas y Respuestas ({preguntasRespuestas.length})
      </h2>

      {preguntasRespuestas.length === 0 ? (
        // Si no hay preguntas, mostrar el mensaje
        <div className="flex justify-center">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Sé el primero en realizar una pregunta
          </span>
        </div>
      ) : (
        // Si hay preguntas, renderizar las burbujas de preguntas y respuestas
        preguntasRespuestas.map((item, index) => (
          <div key={index} className="space-y-4">
            {/* Pregunta del usuario (alineada a la izquierda) */}
            <div className="flex justify-center">
              <div className="w-full lg:w-100 flex justify-start ">
                <div className="flex items-start gap-2.5">
                  <div className="flex flex-col gap-1 w-full max-w-md">
                    <div className="flex items-center justify-start space-x-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.usuario}
                      </span>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {new Date(item.fecha_creacion).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex flex-col leading-1.5 p-4 border bg-gray-100 rounded-lg dark:bg-gray-700">
                      <p className="text-sm font-normal text-gray-900 dark:text-white">
                        {item.pregunta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Respuesta del admin (alineada a la derecha) */}
            {item.respuesta && (
              <div className="flex justify-center">
                <div className="w-full lg:w-100 flex justify-end">
                  <div className="flex items-start gap-2.5">
                    <div className="flex flex-col gap-1 w-full max-w-md">
                      <div className="flex items-center justify-end space-x-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          ProductosCR.com
                        </span>
                      </div>
                      <div className="flex flex-col leading-1.5 p-4 border bg-blue-100 rounded-lg dark:bg-blue-900">
                        <p className="text-sm font-normal text-gray-900 dark:text-white">
                          {item.respuesta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}

      {/* preguntas */}
      <div className="flex justify-center items-center "> {/* Contenedor centrado */}
              <button
                onClick={handlePreguntasonClick}  // Función que abre el modal
                className="w-48 md:w-48 lg:w-72 mt-4 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center 
                          dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
              >
                <span className="bi bi-question-octagon-fill text-xl"></span>  {/* Ícono de comentarios */}
                <span className="ml-2">HACER PREGUNTA</span>  {/* Texto del botón */}
              </button>
            </div>


            {/* Modal para dejar una opinión */}
            {showPreguntasModal && <PreguntasModal setShowPreguntasModal={setShowPreguntasModal}  productId={product.id} />} {/* Renderiza el modal solo si está abierto */}

    </section>
  );
};
