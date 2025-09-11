import { BiTransfer } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { AiOutlineEdit, AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete, MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";
import PrepAddModal from "../../components/kitchen/kitchenModal/PrepAddModal";
import PrepEditModal from "../../components/kitchen/kitchenModal/PrepEditModal";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import { useEffect, useState } from "react";
import { SectionsProvider } from "../../helper/useContexts/ScrollableButtonsKitchenContext";
import { ScrollableButtonKitchen } from "../../components/kitchen/common/ScrollableButtonKitchen";
import { deleteAxios, getAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { CommonPagination } from "../../components/custom/CommonPagination";
// import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";

export const KitchenPrepList = () => {
   const [popUp, setPopUp] = useState(false)

   
  
   const [loader, setLoader] = useState(false);
   
   const [PrepItemsObj, setPrepItemsObj] = useState();
   const [PrepItemsPagination, setPrepItemsPagination] = useState();
   const [prepItems, setPrepItems] = useState();

  useEffect(() => {
     const fetchData = async () => {
       await getAxios(
         import.meta.env.VITE_BACK_END_URL + `kitchen/prep-list/assign-task`,
         setPrepItemsObj,
         setLoader
       );
     };
     fetchData();
  }, []);

    useEffect(() => {
    if (PrepItemsObj) {
      setPrepItemsPagination({
        current_page: PrepItemsObj?.data?.current_page,
        first_page_url: PrepItemsObj?.data?.first_page_url,
        from: PrepItemsObj?.data?.from,
        last_page: PrepItemsObj?.data?.last_page,
        last_page_url: PrepItemsObj?.data?.last_page_url,
        links: PrepItemsObj?.data?.links,
        next_page_url: PrepItemsObj?.data?.next_page_url,
        path: PrepItemsObj?.data?.path,
        per_page: PrepItemsObj?.data?.per_page,
        prev_page_url: PrepItemsObj?.data?.prev_page_url,
        to: PrepItemsObj?.data?.to,
        total: PrepItemsObj?.data?.total,
      });
      setPrepItems(PrepItemsObj?.data?.data);
    }
  }, [PrepItemsObj]);

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
      const url = `${import.meta.env.VITE_BACK_END_URL}kitchen/prep-list/assign-task?search=${debouncedSearch}`;
      await getAxios(url, setPrepItemsObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

console.log(prepItems)



  
  return (
    <>
      {loader && <LoadingEffect />}
    <div>
      <div className="pb-24 max-w-screen-lg mx-auto ">
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
            <button onClick={()=>setPopUp(!popUp)} className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow">
              Action
            </button>
      
            {popUp && <div className="absolute left-5 top-60 w-36 p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2"
              >
                Manage Order
              </a>
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2"
              >
              Check Delivery
              </a>
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2"
              >
              View Orders
              </a>
            </div>}
          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <button
            className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
            onClick={() => document.getElementById("add_modal").showModal()}
          >
            Add Task
          </button>
        </div>

        {/* Section Overview */}
        <div className="rounded-md space-y-4 overflow-x-auto">
          <div className="mt-7">
            <ThreeCommonButton
              firstBtn="Section"
              firstUrl="/kitchen/home"
              secondBtn="Pantry-list"
              secondUrl="/kitchen/pantry-list"
              thirdBtn="Prep-list"
              thirdUrl="/kitchen/prep-list"
            />
          </div>
          <div className="mb-8">
            <SectionsProvider>
              <ScrollableButtonKitchen />
            </SectionsProvider>
          </div>
        </div>

        {/* <SearchPagination /> */}
        <CommonPagination
          paginationData={PrepItemsPagination}
          onPageChange={(page) => {
            getAxios(`${import.meta.env.VITE_BACK_END_URL}kitchen/prep-list/assign-task?page=${page}&search=${debouncedSearch}`, setPrepItemsObj, setLoader);
          }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <h1 className="text-xl font-semibold text-center">Ladder Prep List</h1>

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
                  <th className="py-2 px-4 text-left text-orange-500">Date</th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Assigned To
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Prep Item
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    QTy Required
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Time Start
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Completed
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Time Count
                  </th>
                  <th className="py-2 px-4 text-center text-orange-500">Action</th>
                  <th className="py-2 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody className="text-sm">

              {Array.isArray(prepItems) &&
                prepItems?.map((item, index) => (
                  <tr
                  key={index}
                  className="rounded-lg shadow-xl shadow-gray-300"
                  >
                    <td className="py-3 px-4"></td>
                    <td className="py-3 font-semibold w-full text-black px-2">
                      {item.date}
                    </td>
                    <td className="py-2 w-40 text-black px-4">{item?.assigned_to?.full_name}</td>
                    <td className="py-3 px-4">{item.prep_item}</td>
                    <td className="py-3 font-semibold w-40 text-black px-4">
                      {item.qtyRequired}
                    </td>
                    <td className="py-3 font-semibold w-40 text-black px-4">
                      {item.start_time}
                    </td>
                    <td className="py-3 px-4">{item.end_time}</td>
                    <td className="  py-3 px-4">{item.time_count}</td>
                    <td className="py-3 px-4 flex gap-12 my-2">
                      <FaRegEdit
                        className="text-amber-500 w-5 h-5"
                        onClick={() =>

                        
                          document.getElementById("add_modal2").showModal()
                        }
                      />
                      <MdDelete
                        onClick={() =>
                          deleteAxios(
                            import.meta.env.VITE_BACK_END_URL +
                              `kitchen/prep-list/delete-task`,
                              item?.id,
                              setPrepItems,
                               setLoader,
                               true,
                               "Prep item Deleted Successfully"
                          )
                        }
                        className="text-red-500 w-5 h-5"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PrepAddModal />
      <PrepEditModal />
    </div>

    </>
  );
};
