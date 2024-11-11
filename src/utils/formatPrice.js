// src/utils/formatPrice.js

export const formatPrice = (price) => {
    const numericPrice = Number(price);
    if (isNaN(numericPrice)) return "Precio no disponible";
    const [whole, decimals] = numericPrice.toFixed(2).split(".");
    return (
      <>
        ₡{parseInt(whole).toLocaleString("es-CR")}.<sup className="text-xs">{decimals}</sup>
      </>
    );
  };
  