import React from 'react';

export const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Página <span className="font-semibold text-gray-900 dark:text-white">{currentPage}</span> de{' '}
        <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span>
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800  border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
