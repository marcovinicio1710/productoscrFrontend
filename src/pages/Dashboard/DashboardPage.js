import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { Pagination } from "./components/Pagination";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const pageSize = 5;
  const totalPages = Math.ceil(totalEntries / pageSize);

  useTitle("Mis Ordenes");

  // Memoizar fetchOrders usando useCallback para evitar que cambie en cada renderizado
  const fetchOrders = useCallback(async (url) => {
    try {
      const data = await getUserOrders(url);
      console.log(data);
      setOrders(data.results || []);
      setTotalEntries(data.count || 0);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);

      // Extraer el número de página de la URL
      const currentPageNumber = extractPageNumber(url);
      setCurrentPage(currentPageNumber);
    } catch (error) {
      setOrders([]);
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
  }, []);

  // useEffect para cargar las órdenes al iniciar
  useEffect(() => {
    fetchOrders(`${process.env.REACT_APP_HOST}/api/ordenes-historial/?page_size=5`);
  }, [fetchOrders]);

  // Función para extraer el número de página de una URL
  const extractPageNumber = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    return parseInt(params.get('page')) || 1;
  };

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchOrders(nextPageUrl);
    }
  };

  const handlePreviousPage = () => {
    if (prevPageUrl) {
      fetchOrders(prevPageUrl);
    }
  };

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Mis Órdenes</p>
      </section>

      <section>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order) => (
            <DashboardCard key={order.numero_orden} order={order} />
          ))
        ) : (
          <DashboardEmpty />
        )}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
    </main>
  );
};
