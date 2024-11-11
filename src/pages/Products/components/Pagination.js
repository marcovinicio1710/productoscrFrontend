import { Link } from "react-router-dom";

const Pagination = ({ next, previous, totalProducts, page }) => {
  const pageItemsFinal = page * 24;
  const pageItemsInicial = pageItemsFinal - 23;

  if (pageItemsFinal >= totalProducts) {
    next = null;
  }

  return (
    <div className="flex flex-col items-center mt-4 w-full justify-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Mostrando <span className="font-semibold text-gray-900 dark:text-white">{pageItemsInicial}</span> hasta <span className="font-semibold text-gray-900 dark:text-white">{pageItemsFinal}</span> de <span className="font-semibold text-gray-900 dark:text-white">{totalProducts}</span> Productos
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {previous && (
          <Link 
            to={previous} 
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0l4 4M1 5l4-4" />
            </svg>
            Prev
          </Link>
        )}
        {next && (
          <Link 
            to={next} 
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 border-0 border-l border-gray-700 rounded-r dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;

  