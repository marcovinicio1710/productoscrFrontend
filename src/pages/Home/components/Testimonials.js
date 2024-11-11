export const Testimonials = () => {
    return (
      <section className='my-20'>
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Opiniones de nuestros clientes</h1>    
        <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Excelente servicio y variedad</h3>
              <p className="my-4 font-light">"ProductosCR tiene una gran variedad de productos y el servicio al cliente es impecable. ¡Siempre encuentro lo que necesito!"</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Carlos Ramírez</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Comprador frecuente</div>
              </div>
            </figcaption>    
          </figure>
  
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Entrega rápida y confiable</h3>
              <p className="my-4 font-light">"La entrega siempre llega a tiempo, y los productos son de excelente calidad. Recomiendo totalmente comprar en ProductosCR."</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>María Fernández</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Diseñadora gráfica</div>
              </div>
            </figcaption>    
          </figure>
  
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Gran calidad de productos</h3>
              <p className="my-4 font-light">"Cada compra que he hecho ha superado mis expectativas. La calidad de los productos es excepcional y los precios son muy competitivos."</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>José Martínez</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Ingeniero de software</div>
              </div>
            </figcaption>    
          </figure>
  
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atención al cliente de primera</h3>
              <p className="my-4 font-light">"El equipo de soporte siempre está dispuesto a ayudar, y hacen que todo el proceso de compra sea muy fácil y rápido."</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Pablo Pérez</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Gerente de proyectos</div>
              </div>
            </figcaption>    
          </figure>
  
        </div>
      </section>
    )
  }
  