import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";
import EditPentryDetailsModal from "../../components/kitchen/kitchenModal/EditPentryDetailsModal";
import EditPantryCartModal from "../../components/kitchen/kitchenModal/EditPantryCartModal";
import { useEffect, useState } from "react";
import { confirmAction, getAxios, postAxios } from "../../helper/HelperAxios";
import { CommonPagination } from "../../components/custom/CommonPagination";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { ScrollableButton } from "../../components/common/ScrollableButton";
import { ScrollableButtonKitchen } from "../../components/kitchen/common/ScrollableButtonKitchen";
import { ScrollableButtonSuppliers } from "../../components/kitchen/common/ScrollableButtonSuppliers";
import AddToPantryCartModalOrders from "../../components/orders/newOrders/AddToPantryCartModalOrders";
import AddToOrderForPantryList from "../../components/kitchen/kitchenModal/AddToOrderForPantryList";

export const KitchenAddPantry = () => {
  const [loader, setLoader] = useState(false);
  const [pantryObj, setPantryObj] = useState();
  const [pantryPagination, setPantryPagination] = useState();
  const [Pantry, setPantry] = useState();
  const [suppliers, setSuppliers] = useState();
  const [categories, setCategories] = useState();
  const [sections, setSections] = useState();
  const [singleProcuct, setSingleProcuct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "kitchen/add-to-pantry",
        setPantryObj,
        setLoader
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (pantryObj?.products) {
      setPantryPagination({
        current_page: pantryObj?.products?.current_page,
        first_page_url: pantryObj?.products?.first_page_url,
        from: pantryObj?.products?.from,
        last_page: pantryObj?.products?.last_page,
        last_page_url: pantryObj?.products?.last_page_url,
        links: pantryObj?.products?.links,
        next_page_url: pantryObj?.products?.next_page_url,
        path: pantryObj?.products?.path,
        per_page: pantryObj?.products?.per_page,
        prev_page_url: pantryObj?.products?.prev_page_url,
        to: pantryObj?.products?.to,
        total: pantryObj?.products?.total,
      });
      setPantry(pantryObj?.products?.data);
    }
    setSuppliers(pantryObj?.suppliers);
    setCategories(pantryObj?.categories);
    setSections(pantryObj?.sections)
  }, [pantryObj]);

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
      }kitchen/add-to-pantry?search=${debouncedSearch}`;
      await getAxios(url, setPantryObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  // console.log(categories);


  
    const handleAddToOrderList = async (item) => {
      // console.log(item)
      const payload = {
        product_id: item?.id,
        supplier_id: item?.supplier?.id,
        quantity: 1,
        note: "",
      };
      const confirm = await confirmAction("Add this item to the order list!!!");
      if (confirm) {
        await postAxios(
          `${import.meta.env.VITE_BACK_END_URL}orders/add-order-list`,
          setLoader,
          payload
        );
      }
    };


  return (
    <>
      {loader && <LoadingEffect />}
      <div>
        <h1 className="text-xl font-bold text-center mb-2">Add to Pantry</h1>

        <div className="p-4">
          <NavButton />
        </div>

        <div className="bg-gray-300 overflow-x-auto w-full ">
          <ScrollableButtonSuppliers
            buttonLabels={suppliers}
            supplierFilter={(supplierId) => {
              const baseUrl = import.meta.env.VITE_BACK_END_URL;
              const supplierParam = supplierId
                ? `?supplier_id=${supplierId}`
                : "";
              getAxios(
                `${baseUrl}kitchen/add-to-pantry${supplierParam}`,
                setPantryObj,
                setLoader
              );
            }}
          />
        </div>

        <div className="overflow-x-auto w-full mt-2">
          <div className="flex space-x-4 p-4 min-w-[1000px]">
            <ScrollableButtonKitchen
              buttonLabels={categories}
              categoryFilter={(category) => {
                const baseUrl = import.meta.env.VITE_BACK_END_URL;
                const categoryParam = category
                  ? `?category=${encodeURIComponent(category)}`
                  : "";
                getAxios(
                  `${baseUrl}kitchen/add-to-pantry${categoryParam}`,
                  setPantryObj,
                  setLoader
                );
              }}
            />
          </div>
        </div>

        <CommonPagination
          paginationData={pantryPagination}
          onPageChange={(page) => {
            getAxios(
              `${
                import.meta.env.VITE_BACK_END_URL
              }kitchen/add-to-pantry?page=${page}&search=${debouncedSearch}`,
              setPantryObj,
              setLoader
            );
          }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="container mx-auto mt-4">
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full table-auto text-gray-700">
              <thead
                className="bg-white text-sm"
                style={{
                  boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                }}
              >
                <tr>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left text-orange-500">SKU</th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Product
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Description
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Sub Category
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Unit Price
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Detail
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Action
                  </th>
                  <th className="py-2 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {Pantry?.map((item, index) => (
                  <tr
                    key={index}
                    className="rounded-lg shadow-xl shadow-gray-300"
                  >
                    <td className="py-3 px-4">
                      <div
                        className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center"
                        style={{
                          boxShadow:
                            "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                        }}
                      >
                        <img
                          src={
                            item?.product_image?.startsWith("http")
                              ? item?.product_image
                              : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product_image}`
                          }
                          alt="Beef Tenderloin"
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      </div>
                    </td>
                    <td className="py-3 font-semibold w-40 text-black px-2">
                      {item?.sku}
                    </td>
                    <td className="py-2 w-40 text-black px-4">
                      <div className="flex flex-col">
                        <span className="font-semibold">{item?.name}</span>
                        <span className="text-gray-600"></span>
                      </div>
                    </td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 font-semibold w-40 text-black px-4">
                      {item?.category}
                    </td>
                    <td className="py-3 font-semibold w-40 text-black px-4">
                      {item?.rrp}
                    </td>
                    <td className="py-3 px-4">
                      <CiSearch
                        className="w-6 h-6"
                        onClick={() => {
                          setSingleProcuct(item);
                          document.getElementById("searchModal").showModal();
                        }}
                      />
                    </td>
                    <td className="py-3 px-4"
                    onClick={() => 
                      handleAddToOrderList(item)}
                      >
                      <MdOutlineShoppingBag className="w-6 h-6 text-amber-500" />
                    </td>
                    <td className="py-3 px-4">
                      <AiOutlineShoppingCart
                        className="w-6 h-6 text-amber-500"
                        onClick={() => {
                          setSingleProcuct(item)
                          document.getElementById("productModal").showModal();
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AddToPantryCartModalOrders 
          modalData={singleProcuct}
          sections={sections} 
        />
        {/* <EditPentryDetailsModal item={singleProcuct} /> */}
        <AddToOrderForPantryList
        item={singleProcuct}
        />
      </div>
    </>
  );
};
