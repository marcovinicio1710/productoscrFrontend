
import {GiftWrappingPlans} from "./components/GiftWrappingPlans";

export const GiftWrappingInfo = () => {
  return (
    <section className="bg-white py-16">
      {/* Título principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          🎁 ¡Envolvemos tus compras con amor y profesionalismo!
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          Sorprende a tus seres queridos con regalos envueltos de manera elegante y festiva. Nuestro equipo se encarga de que cada compra llegue lista para regalar, con envolturas personalizadas para cada ocasión especial.
        </p>
      </div>

      {/* Sección: ¿Por qué elegirnos? */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ¿Por qué envolver tus regalos con nosotros?
        </h3>
        <div className="lg:flex lg:justify-between lg:items-start gap-8">
          <div className="lg:w-2/3 text-gray-700 text-lg">
            <p className="mb-6">
              Sabemos que existen compras muy especiales para las que no tendrás la oportunidad de envolver tú mismo, o simplemente quieres mantener el factor sorpresa. Por eso, hemos decidido ofrecer diferentes categorías de tamaños para que se ajusten al regalo que deseas dar.
            </p>
            <p className="mb-6">
              Ofrecemos envolturas en tamaños: <b>XS, SM, MD, Large, XL</b> y <b>2XL</b>, para que puedas seleccionar el que mejor se ajuste a tu compra, desde la comodidad de tu casa.
            </p>
            <p>
              Al elegir el tamaño y confirmar la tarifa, podrás personalizar tu envoltura para diversas ocasiones: <b>Navidad, Regalos para niños y niñas, Amor, Día de la madre, Graduación, y más</b>. Te contactaremos vía WhatsApp para confirmar todos los detalles y asegurarnos de que tu regalo sea perfecto.
            </p>
          </div>
          <div className="lg:w-1/3 text-gray-700 text-lg my-3">
            <img
              src="https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/regalo+imagen+1.webp"
              alt="Regalo envuelto profesionalmente"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Imágenes de ejemplos */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <img
          src="https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/DALL%C2%B7E+2024-11-11+20.40.05+-+A+realistic+image+of+a+gift+bag+with+a+decorative+bow.+The+gift+bag+is+golden+with+subtle+elegant+patterns%2C+tied+with+a+bright+red+ribbon.+The+backgro.webp"
          alt="Regalo envuelto profesionalmente"
          className="rounded-lg shadow-lg"
        />
        <img
          src="https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/regalo_nino.webp"
          alt="Envoltura para cumpleaños"
          className="rounded-lg shadow-lg"
        />
        <img
          src="https://heron3.s3.us-east-2.amazonaws.com/productos_cr/info_imagenes/regalo_amor.webp"
          alt="Ejemplo de envoltura romántica"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Nueva sección de precios */}
      <div>
        <GiftWrappingPlans />
       </div>
    </section>
  );
};


