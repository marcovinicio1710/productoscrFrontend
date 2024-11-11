import { useState } from "react";
import { addQuestionAPI } from '../../../services'; // Importar la función para enviar preguntas

export const PreguntasModal = ({ setShowPreguntasModal, productId }) => {
    const [pregunta, setPregunta] = useState("");  // Estado para manejar la pregunta
    const [loading, setLoading] = useState(false); // Estado para manejar el loading

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Mostrar indicador de carga

        try {
            // Llamar a la API para enviar la pregunta
            await addQuestionAPI(productId, pregunta);
            alert("Pregunta enviada con éxito!");
            setPregunta(""); // Limpiar el campo de la pregunta
            setShowPreguntasModal(false); // Cerrar el modal
        } catch (error) {
            console.error("Error al enviar la pregunta:", error);
            alert("Hubo un error al enviar tu pregunta. Inténtalo de nuevo.");
        } finally {
            setLoading(false); // Ocultar indicador de carga
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* Contenido del modal */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Encabezado del modal */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Haz una Pregunta
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => setShowPreguntasModal(false)}
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

                    {/* Cuerpo del modal */}
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                        {/* Campo de la pregunta */}
                        <div className="mb-4">
                            <label htmlFor="pregunta" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Tu pregunta
                            </label>
                            <textarea
                                id="pregunta"
                                rows="4"
                                value={pregunta}
                                onChange={(e) => setPregunta(e.target.value)}
                                className="block w-full p-2.5 border rounded"
                                placeholder="Escribe tu pregunta aquí!"
                                required
                            ></textarea>
                        </div>

                        {/* Botones */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mr-2"
                                disabled={loading} // Deshabilitar mientras se envía
                            >
                                {loading ? "Enviando..." : "Enviar Pregunta"}
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                onClick={() => setShowPreguntasModal(false)}
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
