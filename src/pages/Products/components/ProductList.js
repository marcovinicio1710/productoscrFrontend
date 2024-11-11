// components/ProductList.js
import { ProductCardLIST } from '../../../components';

export const ProductList = ({ products }) => (
  <div className="lg:col-span-3 grid grid-cols-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
    {products.map((product) => (
      <ProductCardLIST key={product.id} product={product} />
    ))}
  </div>
);
