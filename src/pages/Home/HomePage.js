import { useTitle } from "../../hooks/useTitle";//done
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";//done
import { RecienLlegados } from "./components/RecienLlegados";//done
import { OfertasImages } from "./components/OfertasImages";//done
import { BestSellers } from "./components/BestSellers";//done
import { CategoriasGrid } from "./components/CategoriasGrid";//done
import { Testimonials } from "./components/Testimonials";//done

import { Faq } from "./components/Faq";//done

export const HomePage = () => {
  useTitle("Tienda Online - Mejores Productos");
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <OfertasImages />
        <BestSellers />
        <RecienLlegados />
        <CategoriasGrid />
        <Testimonials />
        <Faq />
    </main>
  )
}
