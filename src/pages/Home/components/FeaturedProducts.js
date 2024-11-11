import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeaturedProductsSkeleton from './FeaturedProductsSkeleton';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
        setLoading(false); // Detener la carga
      } catch (error) {
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      } 
        
      
    }
    fetchProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5 ,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3.5 ,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5 // Cambiado a 1 solo item en pantallas móviles
    }
  };

  return (  
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Ofertas del día</h1>
      {/* Integrando el carrusel */}
      {loading ? (
        <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={false}
        keyBoardControl={false}
        containerClass="carousel-container"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <FeaturedProductsSkeleton key={index} />
        ))}
      </Carousel>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          draggable={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          transitionDuration={200}
          minimumTouchDrag={20}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </section>
  )
}
