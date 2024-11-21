export const TallaQuantitySelector = ({ product, selectedTalla, setSelectedTalla, quantity, setQuantity }) => {
    const tallas = product.tallas || []; // Lista de tallas del producto

    const handleTallaChange = (e) => {
        setSelectedTalla(e.target.value); // Actualizar la talla seleccionada
        setQuantity(1); // Reiniciar la cantidad al cambiar de talla
    };

    const handleIncrement = () => {
        const selectedStock = tallas.find(t => t.tallas_especifica === selectedTalla)?.cantidad || 0;
        if (quantity < selectedStock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityChange = (e) => {
        let value = parseInt(e.target.value, 10);
        const selectedStock = tallas.find(t => t.tallas_especifica === selectedTalla)?.cantidad || 0;

        if (value > selectedStock) {
            value = selectedStock;
        }

        if (value < 1 || isNaN(value)) {
            value = 1;
        }

        setQuantity(value);
    };

    return (
        <div className="flex flex-col space-y-2">
            {/* Selector de Tallas */}
            <select
                value={selectedTalla || ""}
                onChange={handleTallaChange}
                className="w-full p-2 border rounded"
            >
                <option value="" disabled>Seleccionar talla</option>
                {tallas.map(talla => (
                    <option key={talla.tallas_especifica} value={talla.tallas_especifica}>
                        {talla.tallas_especifica} (Stock: {talla.cantidad})
                    </option>
                ))}
            </select>

            {/* Selector de Cantidad */}
            <div className="flex items-center space-x-2">
                <button
                    onClick={handleDecrement}
                    disabled={!selectedTalla || quantity === 1}
                    className="px-4 py-2 border rounded-l-lg text-xl font-bold text-gray-600 hover:bg-gray-200"
                >
                    −
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    disabled={!selectedTalla}
                    className="w-14 md:w-24 text-center border-t border-b text-lg font-semibold text-gray-700 bg-white"
                />
                <button
                    onClick={handleIncrement}
                    disabled={!selectedTalla || quantity >= (tallas.find(t => t.tallas_especifica === selectedTalla)?.cantidad || 0)}
                    className="px-4 py-2 border rounded-r-lg text-xl font-bold text-gray-600 hover:bg-gray-200"
                >
                    +
                </button>
            </div>
        </div>
    );
};
 