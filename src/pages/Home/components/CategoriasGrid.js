import React from "react";
import { Link } from 'react-router-dom';

// Array con las imágenes de las categorías
const categorias = [
  {
    nombre: "Tecnologia",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/Imganes+Productos/Proyecto+nuevo.webp",
    page: "Tecnologia"
  },
  {
    nombre: "Hogar",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/hogar+(2).webp",
    page: "Hogar"
  },
  {
    nombre: "Regalos",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/categoria+regalo.webp",
    page: "Regalos"
  },
  {
    nombre: "Juguetes",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/categoria_ninos.webp",
    page: "Niños"
  },
  {
    nombre: "Ropa",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/categoria_ropa.webp",
    page: "Ropa"
  },
  {
    nombre: "Belleza",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/categoria_belleza.webp",
    page: "Belleza"
  },
  {
    nombre: "Audifonos",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/Imganes+Productos/amazondus-blanco1.webp",
    page: "Tecnologia&subcategory=Audifonos"
  },
  {
    nombre: "Mascotas",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/categoria_gatos.webp",
    page: "Mascotas"
  },
  {
    nombre: "SmartHome",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/Imganes+Productos/Amazon_Echo_Show_5_(3.%C2%AA_generaci%C3%B3n)__Pantalla_inteligente_con_2x_bajo_y_sonido_claro__Blanco_glaciar_imagen_1.webp",
    page: "Tecnologia&subcategory=SmartHome"
  },
  {
    nombre: "Ofertas",
    imagen: "https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/categoria_ofertas.webp",
    page: "Ofertas"
  },
];

export const CategoriasGrid = () => {
  return (
    <section className="my-10">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Categorías Populares
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categorias.map((categoria, index) => (
          <div key={index} >
            <Link
                key={index}
                to={`/products?category=${categoria.page}`}
                className="relative group mx-auto"
              >
                {/* Imagen de la categoría con bordes redondeados */}
                <img
                  src={categoria.imagen}
                  alt={categoria.nombre}
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-full md:h-full object-cover rounded-xl md:rounded-3xl shadow-lg mx-auto"
                />
                {/* Fondo negro con opacidad al hacer hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl md:rounded-3xl"></div>
                {/* Nombre de la categoría con borde dorado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-white text-sm md:text-xl font-semibold"
                    style={{ textShadow: "0px 0px 2px black, 0px 0px 5px black" }}
                  >
                    {categoria.nombre}
                  </span>
                </div>
            </Link>
            </div>
        ))}
      </div>
    </section>
  );
};
