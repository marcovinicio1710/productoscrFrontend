import { useState } from "react";
import { addRatingAPI } from '../../../services'; // Importar la función para enviar calificaciones

export const OpinionesModal = ({ setshowOpinionesModal1, productId }) => {
    const [rating, setRating] = useState(5);  // Valor por defecto de 5 estrellas
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Llamar a la API para enviar la calificación
            await addRatingAPI(productId, rating, comment);
            alert("Calificación enviada con éxito!");
            setRating(5); // Restablecer a 5 estrellas
            setComment(""); // Limpiar el campo del comentario
            setshowOpinionesModal1(false); // Cerrar el modal
        } catch (error) {
            console.error("Error al enviar la calificación:", error);
            alert("Hubo un error al enviar tu calificación. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
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
                            Deja una Opinión
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => setshowOpinionesModal1(false)}
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
                        {/* Rating */}
                        <div className="mb-4">
                            <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Calificación
                            </label>
                            <select
                                id="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="block w-full p-2.5 border rounded"
                            >
                                <option value="5">⭐⭐⭐⭐⭐ - Altamente recomendado</option>
                                <option value="4">⭐⭐⭐⭐☆ - Lo recomiendo</option>
                                <option value="3">⭐⭐⭐☆☆ - Buen producto</option>
                                <option value="2">⭐⭐☆☆☆ - Le falta algo</option>
                                <option value="1">⭐☆☆☆☆ - No lo recomiendo</option>
                            </select>
                        </div>

                        {/* Comentario */}
                        <div className="mb-4">
                            <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Comentario
                            </label>
                            <textarea
                                id="comment"
                                rows="4"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="block w-full p-2.5 border rounded"
                                placeholder="Escribe tu opinión aquí"
                            ></textarea>
                        </div>

                        {/* Botones */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mr-2"
                                disabled={loading}
                            >
                                {loading ? "Enviando..." : "Enviar Opinión"}
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                onClick={() => setshowOpinionesModal1(false)}
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
