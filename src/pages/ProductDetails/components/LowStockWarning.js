export const LowStockWarning = ({ stock }) => {
    if (stock > 0 && stock < 10) {
        return (
            <p className="text-red-500 text-xs my-1 px-1 md:px-4">
                Solo quedan ( {stock} ) disponibles.
            </p>
        );
    }
    return null; // No mostrar nada si el stock es mayor o igual a 10
};
