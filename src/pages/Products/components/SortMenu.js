// components/SortMenu.js
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const sortOptions = [
  { name: 'Populares', value: 'mas_vendido' },
  { name: 'Mejor Ranking', value: 'ranking' },
  { name: 'Más Nuevos', value: 'nuevo_a_viejo' },
  { name: 'Precio: Menos a Más', value: 'precio_asc' },
  { name: 'Precio: Más a Menos', value: 'precio_desc' },
];

export const SortMenu = ({ selectedSort, onSortChange }) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <MenuButton className="group inline-flex justify-center text-xs lg:text-base font-medium text-gray-700 hover:text-gray-900 dark:text-white dark:bg-gray-900  dark:hover:bg-gray-700 hover:bg-gray-100 p-2 rounded-lg ">
        Ordenar: {selectedSort.name}
        <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
      </MenuButton>
    </div>
    <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5">
      {sortOptions.map((option) => (
        <MenuItem key={option.value} as="div">
          <button
            onClick={() => onSortChange(option)}
            className={`${selectedSort.value === option.value ? 'font-bold' : ''} block px-4 py-2 text-xs  lg:text-xs text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800`}
          >
            {option.name}
          </button>
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);
