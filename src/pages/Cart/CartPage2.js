import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList2 } from "./components/CartList2";
import { useCart } from "../../context";

export const CartPage2 = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  

  return (
    <main className="p-4">
      { cartList.length ? <CartList2 /> : <CartEmpty /> }   
    </main>
  );
};
