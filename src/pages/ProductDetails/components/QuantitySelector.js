export const QuantitySelector = ({ quantity, setQuantity, stock }) => {
    // Función para incrementar la cantidad
    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    // Función para decrementar la cantidad
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Función para manejar cambios en el input
    const handleQuantityChange = (e) => {
        let value = parseInt(e.target.value, 10);

        // Si el valor ingresado es mayor que el stock, ajustarlo al stock máximo
        if (value > stock) {
            value = stock;
        }

        // Si el valor es menor que 1, ajustarlo a 1
        if (value < 1 || isNaN(value)) {
            value = 1;
        }

        setQuantity(value);
    };

    return (
        <div className="flex items-center ">
            {/* Botón de decremento */}
            <button
                className="px-4 py-2 border rounded-l-lg text-xl font-bold text-gray-600 hover:bg-gray-200 focus:outline-none"
                onClick={handleDecrement}
                disabled={stock === 0 || quantity === 1} // Deshabilitado si no hay stock o si ya está en 1
            >
                −
            </button>

            {/* Campo de entrada para la cantidad */}
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-14 md:w-24 text-center border-t border-b text-lg font-semibold text-gray-700 bg-white"
                disabled={stock === 0} // Deshabilitado si no hay stock
                min="1"
                max={stock} // El máximo es el stock disponible
            />

            {/* Botón de incremento */}
            <button
                className="px-4 py-2 border rounded-r-lg text-xl font-bold text-gray-600 hover:bg-gray-200 focus:outline-none"
                onClick={handleIncrement}
                disabled={stock === 0 || quantity >= stock} // Deshabilitado si no hay stock o si alcanzó el límite
            >
                +
            </button>
        </div>
    );
};
