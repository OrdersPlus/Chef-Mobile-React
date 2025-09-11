import React, { useEffect, useState } from "react";
import CommonMainAction from "../../components/suppliers/CommonMainAction";
import ProductListButton from "../../components/suppliers/ProductListButton";
import Pagination from "../../components/suppliers/Pagination";
import ProductListTable from "../../components/suppliers/ProductListTable";
import { useParams } from "react-router-dom";
import { getAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { CommonPagination } from "../../components/custom/CommonPagination";

export const SupplierProductList = () => {

  

  
  const {id} = useParams();
  const [loader, setLoader] = useState();
  const [suppliersObj, setSuppliersObj] = useState();
  const [suppliersPagination, setSuppliersPagination] = useState();
  const [suppliers, setSuppliers] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "suppliers/product-list/" + id,
        setSuppliersObj,
        setLoader
      );
    };
    fetchData();
  }, [id]);


  useEffect(() => {
    if (suppliersObj) {
      setSuppliersPagination({
        current_page: suppliersObj?.current_page,
        first_page_url: suppliersObj?.first_page_url,
        from: suppliersObj?.from,
        last_page: suppliersObj?.last_page,
        last_page_url: suppliersObj?.last_page_url,
        links: suppliersObj?.links,
        next_page_url: suppliersObj?.next_page_url,
        path: suppliersObj?.path,
        per_page: suppliersObj?.per_page,
        prev_page_url: suppliersObj?.prev_page_url,
        to: suppliersObj?.to,
        total: suppliersObj?.total,
      });
      setSuppliers(suppliersObj?.data);
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
      }suppliers/product-list/${id}?search=${debouncedSearch}`;
      await getAxios(url, setSuppliersObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

// console.log(suppliers)

  return (
    <>
    {loader && <LoadingEffect />}
    <div className="m-0 p-0 pb-16">
      {/* Main Content */}
      <div className="max-w-screen-sm mx-auto p-4 bg-[var(--secondary-color)] rounded-lg shadow-lg">
        <div className="p-2 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4">
          {/* Header */}
          <div className="m-4 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 mt-2">
            <h3 className="text-center font-bold pb-2">Product List</h3>
          </div>

            <CommonMainAction />
            
          <ProductListButton />
        </div>

          <CommonPagination
            paginationData={suppliersPagination}
            onPageChange={(page) => {
              getAxios(
                `${
                  import.meta.env.VITE_BACK_END_URL
                }suppliers/product-list/${id}?page=${page}&search=${debouncedSearch}`,
                setSuppliersObj,
                setLoader
              );
            }}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        <div className="container mx-auto mt-2">
          <ProductListTable 
            suppliers ={suppliers}
            />
        </div>
      </div>
    </div>
    </>
  );
};
