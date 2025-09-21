import { useEffect, useState } from "react";
import { ScrollableButton } from "../../components/common/ScrollableButton";
import { NewOrdersMain } from "../../components/orders/newOrders/NewOrdersMain";
import { HomeMain } from "../../components/orders/ordersHome/OrdersHomeMain";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";
import { getAxios } from "../../helper/HelperAxios";
import { useNavigate } from "react-router-dom";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { CommonPagination } from "../../components/custom/CommonPagination";
import { ScrollableButtonSuppliers } from "../../components/common/ScrollableButtonSuppliers";

export const NewOrderItem = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [newOrderObj, setNewOrderObj] = useState();
  const [newOrderPagination, setNewOrderPagination] = useState();
  const [newOrder, setNewOrder] = useState();

  const [sections, setSections] = useState();
  const [suppliers, setSuppliers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "orders/products",
        setNewOrderObj,
        setLoader
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (newOrderObj?.products) {
      setNewOrderPagination({
        current_page: newOrderObj.products.current_page,
        first_page_url: newOrderObj.products.first_page_url,
        from: newOrderObj.products.from,
        last_page: newOrderObj.products.last_page,
        last_page_url: newOrderObj.products.last_page_url,
        links: newOrderObj.products.links,
        next_page_url: newOrderObj.products.next_page_url,
        path: newOrderObj.products.path,
        per_page: newOrderObj.products.per_page,
        prev_page_url: newOrderObj.products.prev_page_url,
        to: newOrderObj.products.to,
        total: newOrderObj.products.total,
      });
      setNewOrder(newOrderObj?.products?.data);
      setSections(newOrderObj?.sections);
      setSuppliers(newOrderObj?.suppliers);
    }
  }, [newOrderObj]);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${
        import.meta.env.VITE_BACK_END_URL
      }orders/products?search=${debouncedSearch}`;
      await getAxios(url, setNewOrderObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  // console.log(suppliers)

  return (
    <div>
      {loader && <LoadingEffect />}

<ScrollableButtonSuppliers
  buttonLabels={suppliers}
  categoryFilter={(supplierId) => {
    let url = `${import.meta.env.VITE_BACK_END_URL}orders/products`;

    if (supplierId) {
      url += `?supplier_id=${supplierId}`;
    }

    getAxios(url, setNewOrderObj, setLoader);
  }}
/>


      <CommonPagination
        paginationData={newOrderPagination}
        onPageChange={(page) => {
          getAxios(
            `${
              import.meta.env.VITE_BACK_END_URL
            }orders/products?page=${page}&search=${debouncedSearch}`,
            setNewOrderObj,
            setLoader
          );
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <NewOrdersMain products={newOrder} sections={sections} />
    </div>
  );
};
