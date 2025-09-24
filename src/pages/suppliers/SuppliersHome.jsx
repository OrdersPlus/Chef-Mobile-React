import CommonMainAction from "../../components/suppliers/CommonMainAction";
import SuppliersScrollableButton from "../../components/suppliers/SuppliersScrollableButton";
import Pagination from "../../components/suppliers/Pagination";
import SuppliersHomeTable from "../../components/suppliers/SuppliersHomeTable";
import SuppliersHomeModal from "../../components/suppliers/SuppliersHomeModal";
import { useEffect, useState } from "react";
import { getAxios } from "../../helper/HelperAxios";
import { CommonPagination } from "../../components/custom/CommonPagination";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { ScrollableButton } from "../../components/common/ScrollableButton";
export const SuppliersHome = () => {
  const [loader, setLoader] = useState(false);
  const [suppliersObj, setSuppliersObj] = useState();
  const [suppliersPagination, setSuppliersPagination] = useState();
  const [suppliers, setSuppliers] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    getAxios(
      import.meta.env.VITE_BACK_END_URL + `suppliers/home`,
      setSuppliersObj,
      setLoader
    );
  }, []);
// console.log(suppliersObj)
  useEffect(() => {
    if (suppliersObj) {
      setSuppliersPagination({
        current_page: suppliersObj.suppliers.current_page,
        first_page_url: suppliersObj.suppliers.first_page_url,
        from: suppliersObj.suppliers.from,
        last_page: suppliersObj.suppliers.last_page,
        last_page_url: suppliersObj.suppliers.last_page_url,
        links: suppliersObj.suppliers.links,
        next_page_url: suppliersObj.suppliers.next_page_url,
        path: suppliersObj.suppliers.path,
        per_page: suppliersObj.suppliers.per_page,
        prev_page_url: suppliersObj.suppliers.prev_page_url,
        to: suppliersObj.suppliers.to,
        total: suppliersObj.suppliers.total,
      });
      setSuppliers(suppliersObj?.suppliers?.data);
      setCategory(suppliersObj?.category);
    }
  }, [suppliersObj]);

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
      }suppliers/home?search=${debouncedSearch}`;
      await getAxios(url, setSuppliersObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  return (
    <>
      {loader && <LoadingEffect />}
      <div className="font-sans w-full min-h-screen m-0 p-0 bg-[var(--secondary-color)] pb-16">
        <div className="rounded-lg  shadow-lg ">
          <div className="m-3 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 mt-4 pt-2">
            <div className="m-4 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 ">
              <h3 className="text-center font-bold pb-2">Manage Suppliers</h3>
            </div>

            <div className="ml-2 mr-2 mt-4">
              <CommonMainAction />
            </div>

            <ScrollableButton 
              buttonLabels={category}
              categoryFilter={(category) => { 
                getAxios(`${ import.meta.env.VITE_BACK_END_URL }suppliers/home?category_id=${category}`, setSuppliersObj, setLoader );
              }} />
          </div>

          {/* Connect Supplier Button & Modal */}
          <div className="flex justify-center">
            <SuppliersHomeModal />
          </div>

          {/* Paginaton */}

          {/* <Pagination /> */}
          {/* Supplier Table */}
          <CommonPagination
            paginationData={suppliersPagination}
            onPageChange={(page) => {
              getAxios(
                `${
                  import.meta.env.VITE_BACK_END_URL
                }suppliers/home?page=${page}&search=${debouncedSearch}`,
                setSuppliersObj,
                setLoader
              );
            }}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <SuppliersHomeTable suppliers={suppliers}/>
        </div>
      </div>
    </>
  );
};
