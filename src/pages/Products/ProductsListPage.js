import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";
import { SortMenu } from "./components/SortMenu";
import { FilterPanel } from "./components/FilterPanel";
import { ProductList } from "./components/ProductList";
import Pagination from "./components/Pagination";

export const ProductsListPage = () => {
  const { products, initialProductList } = useFilter();
  const [categorias, setCategorias] = useState([]);
  const [tallas, setTallas] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]); // Añadir priceRanges en el estado
  const [totalProducts, setTotalProducts] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null); 
  const [selectedSort, setSelectedSort] = useState({ name: 'Más Vendido', value: 'mas_vendido' });
  const [page, setPage] = useState(1);

  // Estado para manejar el panel de filtros móviles
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const category = searchParams.get("category") ? searchParams.get("category").split(",") : [];
  const subcategory = searchParams.get("subcategory") ? searchParams.get("subcategory").split(",") : [];
  const marcasQuery = searchParams.get("marca") ? searchParams.get("marca").split(",") : [];
  const talla = searchParams.get("talla") ? searchParams.get("talla").split(",") : [];
  const query = searchParams.get("q") || null;
  const priceRangeQuery = searchParams.get("priceRange") ? searchParams.get("priceRange").split(",") : [];
  const ordering = searchParams.get("ordering") || "mas_vendido";

  useEffect(() => {
    const pageParam = searchParams.get("page"); // Obtiene el parámetro `page` de la URL
    if (pageParam) {
      setPage(parseInt(pageParam, 10)); // Si existe, actualiza `page` con el número de la URL
    } else {
      setPage(1); // Si no existe `page` en la URL, establece el valor en 1
    }
  }, [search]);

  const getUrlWithUpdatedPage = (newPage) => {
    const params = new URLSearchParams(search); // Copia los parámetros actuales
    params.set("page", newPage); // Actualiza el parámetro `page`
    return `/products?${params.toString()}`; // Devuelve la nueva URL
  };

  const [selectedFilters, setSelectedFilters] = useState({
    category: category,
    subcategory: subcategory,
    marca: marcasQuery,
    talla: talla,
    priceRange: priceRangeQuery,
  });

  const navigate = useNavigate();
  useTitle(query ? `Resultados para "${query}"` : "Explora Productos");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setCategorias([]);
        setSubcategorias([]);
        setMarcas([]);
        setPriceRanges([]);
        setTallas([]);

        const data = await getProductList(
          category.length > 0 ? category : null,
          subcategory.length > 0 ? subcategory : null,
          query ? query : null,
          marcasQuery.length > 0 ? marcasQuery : null,
          talla.length > 0 ? talla : null,
          ordering,
          selectedFilters.priceRange.length > 0 ? selectedFilters.priceRange : null,
          page 
        );

        console.log(data)

        // Cambiar `results` por productos y `count` para total
        if (JSON.stringify(data.results) !== JSON.stringify(products)) {
          initialProductList(data.results);
          setTotalProducts(data.count);
          setNext(data.next); // Actualiza la URL de la siguiente página
          setPrevious(data.previous); // Obtener el total desde `count`
        }

        setCategorias(data.categorias || []);
        setSubcategorias(data.subcategorias || []);
        setMarcas(data.marcas || []);
        setPriceRanges(data.rangos_precio || []);
        setTallas(data.tallas || []);

      } catch (error) {
        toast.error("Error al obtener productos.", { closeButton: true, position: "bottom-center" });
      }
    };

    fetchProducts();
  }, [
    category.join(),
    subcategory.join(),
    query,
    marcasQuery.join(),
    talla.join(),
    ordering,
    selectedFilters.priceRange.join(),
    page
  ]);

  const handleFilterChange = (value, type) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (query) {
      params.append('q', query);
    }
    if (selectedFilters.category.length > 0) {
      params.append('category', selectedFilters.category.join(','));
    }
    if (selectedFilters.subcategory.length > 0) {
      params.append('subcategory', selectedFilters.subcategory.join(','));
    }
    if (selectedFilters.marca.length > 0) {
      params.append('marca', selectedFilters.marca.join(','));
    }
    if (selectedFilters.priceRange.length > 0) {
      params.append('priceRange', selectedFilters.priceRange.join(','));
    }
    if (selectedSort.value) {
      params.append('ordering', selectedSort.value);
    }
    if (selectedFilters.talla.length > 0) {
      params.append('talla', selectedFilters.talla.join(','));
    }

    navigate(`/products?${params.toString()}`);
  };

  const handleSortChange = (option) => {
    setSelectedSort(option);

    const params = new URLSearchParams(search);
    params.set('ordering', option.value);
    navigate(`/products?${params.toString()}`);
  };

  return (
    <main className="bg-white dark:bg-gray-800">
      <section className="pb-6 pt-6">
        <div className="flex items-center justify-between mb-2 mt-2">
          <h1 className="text-base lg:text-2xl font-bold text-gray-900 dark:text-white">
            Productos encontrados: {totalProducts}
          </h1>
          
          <SortMenu selectedSort={selectedSort} onSortChange={handleSortChange} />
          <span
            className="lg:hidden text-2xl text-gray-900 dark:text-white cursor-pointer"
            onClick={() => setMobileFiltersOpen(true)}
            aria-label="Abrir filtros"
          >
            <i className="bi bi-funnel-fill"></i>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-4">
          <FilterPanel
            categorias={categorias}
            subcategorias={subcategorias}
            marcas={marcas}
            tallas={tallas}
            priceRanges={priceRanges}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onApplyFilters={applyFilters}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />
          <ProductList products={products} />
          
        </div>
        <Pagination next={next ? getUrlWithUpdatedPage(page + 1) : null}
          previous={previous ? getUrlWithUpdatedPage(page - 1) : null} 
          totalProducts={totalProducts} 
          page={page} />
      </section>
    </main>
  );
};
