import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import { useEffect, useState } from "react";
import { confirmDelete, deleteAxios, getAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { ScrollableButton } from "../../components/common/ScrollableButton";
import AddToOrderForPantryList from "../../components/kitchen/kitchenModal/AddToOrderForPantryList";
import axios from "axios";
import { errorToast, successToast } from "../../components/custom/Toastify";

export const KitchenPantryList = () => {
  const [popUp, setPopUp] = useState(false);

  const [loader, setLoader] = useState(false);
  const [pantryListObj, setPantryListObj] = useState();
  // const [ordersPagination, setOrdersPagination] = useState();
  const [pantryList, setPantryList] = useState();
  const [sendModalItems, setSendModalItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "kitchen/pantry-list",
        setPantryListObj,
        setLoader
      );
    };
    fetchData();
  }, []);

  const [sections, setSections] = useState();

  useEffect(() => {
    if (pantryListObj) {
      setPantryList(pantryListObj?.pantryLists);
      setSections(pantryListObj?.sections);
    }
  }, [pantryListObj]);

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
      }kitchen/pantry-list?search=${debouncedSearch}`;
      await getAxios(url, setPantryListObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  // console.log(sections)

  const handleClearList = async () => {
    try {
      const token = localStorage.getItem("token");
      const confirm = await confirmDelete();
      if (confirm) {
        setLoader(true);
        const headers = {};
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }
        const res = await axios.delete(`${import.meta.env.VITE_BACK_END_URL}kitchen/clear-pantry-list`, { headers });
        if (res.status === 200) {
          successToast(res.data.message || message);
          setPantryList("");
        } else {
          errorToast("Failed to delete!");
        }
      }
    } catch (error) {
      console.error("Delete error:", error);
      errorToast(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader && <LoadingEffect />}
      <div className="pb-24 max-w-screen-lg mx-auto">
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
          <button
            onClick={() => setPopUp(!popUp)}
            className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
          >
            Action
          </button>

          {popUp && (
            <div className="absolute left-5 top-60 w-36 p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
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
            </div>
          )}
          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <Link
            to="/kitchen/add-to-pantry"
            className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
          >
            Edit Pantry
          </Link>
        </div>

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

        <div className="rounded-md space-y-4">
          {/* <NavButton /> */}

          <div className="mb-8">
            <ScrollableButton
              buttonLabels={sections}
              categoryFilter={(section) => {
                getAxios(
                  `${
                    import.meta.env.VITE_BACK_END_URL
                  }kitchen/pantry-list?section_id=${section}`,
                  setPantryListObj,
                  setLoader
                );
              }}
            />
            {/* <SectionsProvider>
              <ScrollableButtonKitchen />
            </SectionsProvider> */}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3">
            <div className="flex items-center border border-orange-500 rounded-md overflow-hidden bg-gray-50 w-full sm:w-1/3 md:w-1/4 inset-shadow-sm shadow-xl/30">
              <input
                type="text"
                placeholder="Search Item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 bg-transparent focus:outline-none"
              />
              <div className="px-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center font-semibold text-lg flex-grow ">
              Pan Pantry List
            </div>

            <button
              className="border border-orange-500 text-orange-500 font-medium px-4 py-2 rounded-md hover:bg-orange-50 w-full sm:w-auto inset-shadow-sm shadow-xl/30"
              onClick={handleClearList}
            >
              Clear List
            </button>
          </div>

          {/* Pantry items list */}
          <div className="mx-auto mt-10 space-y-4">
            {pantryList?.length > 0 ? (
              pantryList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg inset-shadow-sm shadow-xl/30 border border-white "
                >
                  <img
                    src={
                      item?.product?.product_image?.startsWith("http")
                        ? item?.product?.product_image
                        : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product?.product_image}`
                    }
                    alt={item?.product?.name}
                    className="w-16 h-16 rounded-md object-cover border border-amber-50 shadow-lg shadow-gray-400"
                  />

                  <div className="flex-1 px-3 ml-2">
                    <p className="font-semibold text-gray-800">
                      {item?.product?.name}
                    </p>
                    <p className="text-sm text-gray-500">{`${item?.product?.unit_qty} / ${item?.product?.unit_of_measurement}`}</p>
                  </div>

                  <div className="flex-1 px-2">
                    <p className="font-semibold text-gray-800">Price</p>
                    <p className="text-sm text-red-500">
                      ${item?.product?.rrp}
                    </p>
                  </div>

                  <div className="flex items-center gap-10">
                    <button
                      onClick={() => {
                        setSendModalItems(item?.product);
                        document.getElementById("productModal").showModal();
                      }}
                      className="border-2 border-blue-500 text-blue-500 rounded p-1 hover:bg-orange-100"
                    >
                      <AiOutlineInfoCircle className="h-5 w-5" />
                    </button>
                    <button
                      className="border-2 border-orange-500 text-orange-500 rounded p-1 hover:bg-orange-100"
                      onClick={() =>
                        deleteAxios(
                          import.meta.env.VITE_BACK_END_URL +
                          "kitchen/pantry-list",
                          item.id,
                          setPantryList,
                          setLoader,
                          true
                        )
                      }
                    >
                      <AiOutlineClose className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No items found</p>
            )}
          </div>

          <AddToOrderForPantryList item={sendModalItems} />
        </div>
      </div>
    </>
  );
};
