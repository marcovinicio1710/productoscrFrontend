import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded-lg">
        <div className="my-5">
            <p className="bi bi-cart text-blue-600 text-7xl mb-5"></p>
            <p className="mb-5">Oops! tu carrito esta vacio!</p>
            <p>Agrega tus productos favoritos para completar tu nueva experencia de compra en Costa Rica.</p>
        </div>
        <Link to="/" type="button" className="w-44 md:w-60 lg:w-96 h-12 mb-10 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100">Continua Comprando <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
