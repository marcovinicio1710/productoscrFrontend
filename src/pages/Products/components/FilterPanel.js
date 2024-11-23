import { Disclosure, Dialog } from '@headlessui/react';
import { PlusIcon, MinusIcon, XMarkIcon } from '@heroicons/react/20/solid';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const FilterPanel = ({
  categorias,
  subcategorias,
  marcas,
  tallas,
  priceRanges,
  selectedFilters,
  onFilterChange,
  onApplyFilters,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) => {
  // Función para renderizar las opciones de filtro
  const renderFilterSection = (section) => (
    <Disclosure as="div" className="border-b border-gray-200 py-6 dark:border-gray-700">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="group flex w-full items-center justify-between bg-white hover:bg-gray-100 py-3 text-sm text-gray-400 hover:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-300 dark:hover:text-gray-400 px-3 rounded-full">
              <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon className={`${open ? 'hidden' : 'block'} h-5 w-5`} />
                <MinusIcon className={`${open ? 'block' : 'hidden'} h-5 w-5`} />
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4 pl-4">
              {section.options.map((option, optionIdx) => (
                <div key={optionIdx} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      section.type === 'priceRange'
                        ? selectedFilters[section.type].includes(option.value)
                        : selectedFilters[section.type].includes(option)
                    }
                    onChange={() =>
                      onFilterChange(
                        section.type === 'priceRange' ? option.value : option,
                        section.type
                      )
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:text-indigo-400 dark:bg-gray-800 "
                  />
                  <label className="ml-3 text-sm text-gray-600 dark:text-gray-300 hover:font-bold">
                    {option.label || option}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  return (
    <>
      {/* Panel de filtros en escritorio */}
      <div className="hidden lg:block">
        <form>
          {[{ name: 'Categorías', options: categorias, type: 'category' },
            { name: 'Subcategorías', options: subcategorias, type: 'subcategory' },
            { name: 'Marcas', options: marcas, type: 'marca' },
            { name: 'Tallas', options: tallas, type: 'talla' },
            { name: 'Rango de Precio', options: priceRanges, type: 'priceRange' }].map((section, idx) => (
            <div key={idx}>
              {renderFilterSection(section)}
            </div>
          ))}
          <button
            type="button"
            onClick={onApplyFilters}
            className="w-full h-12 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
          >
            <span className="bi bi-filter-circle-fill text-2xl px-2"></span>
            <span> Aplicar Filtro</span>
          </button>
        </form>
      </div>

      {/* Panel de filtros en móvil */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto h-full w-full max-w-xs bg-white dark:bg-gray-800 py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4 pt-20">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filtros</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 dark:bg-gray-900 dark:text-gray-300"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <form className="mt-4 border-t border-gray-200 dark:border-gray-700">
              {[{ name: 'Categorías', options: categorias, type: 'category' },
                { name: 'Subcategorías', options: subcategorias, type: 'subcategory' },
                { name: 'Marcas', options: marcas, type: 'marca' },
                { name: 'Rango de Precio', options: priceRanges, type: 'priceRange' },
                { name: 'Tallas', options: tallas, type: 'talla' }].map((section, idx) => (
                <div key={idx}>
                  {renderFilterSection(section)}
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileFiltersOpen(false);
                  onApplyFilters();
                }}
                className="w-76 h-12 mt-5 ml-3 py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-lg text-center dark:text-gray-900 dark:bg-gradient-to-r dark:from-red-200 dark:via-red-300 dark:to-yellow-200 dark:focus:ring-red-100"
              >
                Aplicar Filtro
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
