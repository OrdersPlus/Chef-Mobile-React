import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import OrderHistoryButton from "../../components/orders/orderHistory/OrderHistoryButton";
import OrderHistoryTable from "../../components/orders/orderHistory/OrderHistoryTable";
import Pagination from "../../components/suppliers/Pagination";
import { useEffect, useState } from "react";
import { getAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { CommonPagination } from "../../components/custom/CommonPagination";


export const OrderHistory = () => {

  const [loader, setLoader] = useState(false);
  const [historyObj, setHistoryObj] = useState();
  const [historyPagination, setHistoryPagination] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "orders/history",
        setHistoryObj,
        setLoader
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (historyObj?.orders) {
      setHistoryPagination({
        current_page: historyObj?.orders.current_page,
        first_page_url: historyObj?.orders.first_page_url,
        from: historyObj?.orders.from,
        last_page: historyObj?.orders.last_page,
        last_page_url: historyObj?.orders.last_page_url,
        links: historyObj?.orders.links,
        next_page_url: historyObj?.orders.next_page_url,
        path: historyObj?.orders.path,
        per_page: historyObj?.orders.per_page,
        prev_page_url: historyObj?.orders.prev_page_url,
        to: historyObj?.orders.to,
        total: historyObj?.orders.total,
      });
      setHistory(historyObj?.orders?.data);
    }
  }, [historyObj]);

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
      }orders/history?search=${debouncedSearch}`;
      await getAxios(url, setHistoryObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

// console.log(historyObj?.orders)
  return (
    <>
      {loader && <LoadingEffect />}
    <div className="font-sans w-full min-h-screen bg-white m-0 p-0 pb-16">
      <div className="rounded-lg shadow-lg">
        <div className="m-3  rounded-md bg-white shadow-md space-y-4 mb-2 mt-4 pt-2">
          <div className="m-4  rounded-md bg-white shadow-md space-y-4 mb-2 ">
            <h3 className="text-center font-bold pb-2">Order History</h3>
          </div>

          <div className="mt-5 mb-5">
            <ThreeCommonButton
              firstBtn="Master Order"
              firstUrl="/orders/home"
              secondBtn="Order History"
              secondUrl="/orders/history"
              thirdBtn="Repeat Orders"
              thirdUrl="/orders/repeat-orders"
              />
            </div>


          <OrderHistoryButton />

        </div>

          <CommonPagination
            paginationData={historyPagination}
            onPageChange={(page) => {
              getAxios(
                `${
                  import.meta.env.VITE_BACK_END_URL
                }orders/history?page=${page}&search=${debouncedSearch}`,
                setHistoryObj,
                setLoader
              );
            }}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        {/* Order Table */}
        <OrderHistoryTable
          history={history} 
        />

      </div>
    </div>
    </>
  );
};
