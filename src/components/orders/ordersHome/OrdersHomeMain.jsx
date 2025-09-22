import { FaCartPlus, FaListAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
// import PantryListDetailsModal from "../../kitchen/kitchenModal/PantryListDetailsModal";
import { CommonPagination } from "../../custom/CommonPagination";
import { LoadingEffect } from "../../custom/LoadingEffect";
import { useEffect, useState } from "react";
import { confirmAction, deleteAxios, getAxios, postAxios } from "../../../helper/HelperAxios";
import { ScrollableButton } from "../../common/ScrollableButton";
import AddToCartModal from "../commonForOrder/AddToCartModal";

export const HomeMain = () => {
  // const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [ordersObj, setOrdersObj] = useState();
  const [ordersPagination, setOrdersPagination] = useState();
  const [orders, setOrders] = useState([]);
  const [sendModalItems, setSendModalItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "orders/home",
        setOrdersObj,
        setLoader
      );
    };
    fetchData();
  }, []);
  
  const [category, setCategory] = useState();

  useEffect(() => {
    if (ordersObj?.data) {
      setOrdersPagination({
        current_page: ordersObj?.data?.current_page,
        first_page_url: ordersObj?.data?.first_page_url,
        from: ordersObj?.data?.from,
        last_page: ordersObj?.data?.last_page,
        last_page_url: ordersObj?.data?.last_page_url,
        links: ordersObj?.data?.links,
        next_page_url: ordersObj?.data?.next_page_url,
        path: ordersObj?.data?.path,
        per_page: ordersObj?.data?.per_page,
        prev_page_url: ordersObj?.data?.prev_page_url,
        to: ordersObj?.data?.to,
        total: ordersObj?.data?.total,
      });
      setOrders(ordersObj?.data?.data);
      setCategory(ordersObj?.categories);
    }
  }, [ordersObj]);

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
      }orders/home?search=${debouncedSearch}`;
      await getAxios(url, setOrdersObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  console.log(category)

  const handleAddToCart = async (item) => {
  const payload = {
    product_id: item?.product_id,
    supplier_id: item?.supplier_id,
    quantity: 1,
    note: "",
  };
    const confirm = await confirmAction("Add this item to the cart!!!");
    if (confirm) {
      await postAxios(`${import.meta.env.VITE_BACK_END_URL}orders/add-to-cart`, setLoader, payload)   
    }
};

  return (
    <>
      {loader && <LoadingEffect />}
      <ScrollableButton
        buttonLabels={category}
        categoryFilter={(category) => {
          getAxios(
            `${
              import.meta.env.VITE_BACK_END_URL
            }orders/home?category_id=${category}`,
            setOrdersObj,
            setLoader
          );
        }}
      />
      <CommonPagination
        paginationData={ordersPagination}
        onPageChange={(page) => {
          getAxios(
            `${
              import.meta.env.VITE_BACK_END_URL
            }orders/home?page=${page}&search=${debouncedSearch}`,
            setOrdersObj,
            setLoader
          );
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="mx-auto p-2 space-y-1">
        {/* Header Row */}
        <div
          className="bg-white text-sm font-medium rounded-t-lg px-4 py-3 grid grid-cols-3"
          style={{
            boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
          }}
        >
          <div></div> {/* Empty first column */}
          <div className="text-orange-500">Product</div>
          <div className="text-orange-500 text-center">Details</div>
        </div>

        {/* Product Card */}
        {orders?.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-xl shadow-gray-300 p-4 mb-4"
          >
            {/* Close Button */}
            <button
              className="absolute -top-3 -right-3 z-10 bg-white rounded-full w-8 h-8 grid place-items-center text-red-500 text-xl shadow"
              onClick={() =>
                deleteAxios(
                  import.meta.env.VITE_BACK_END_URL + "orders/home",
                  item.id,
                  setOrders,
                  setLoader,
                  true
                )
              }
            >
              <MdCancel />
            </button>

            {/* Grid Layout for Card */}
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Image */}
              <div className="flex items-center">
                <div
                  className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-xl grid place-items-center"
                  style={{
                    boxShadow:
                      "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                  }}
                >
                  <img
                    src={
                      item?.product?.product_image?.startsWith("http")
                        ? item?.product?.product_image
                        : 
                      `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product?.product_image}`
                    }
                    alt={item?.product?.name || "Unnamed Product"}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="font-semibold text-black">
                  {item?.product?.name || "Unnamed Product"}
                </div>
                <div className="text-gray-600 text-sm">
                  ${item?.product?.rrp || "0.00"}/kg
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-8 text-black font-semibold">
                <button
                  onClick={() =>{
                    setSendModalItems(item);
                    document.getElementById("productModal").showModal();
                  }}
                >
                  <FaListAlt className="text-orange-500 h-7 w-7" />
                </button>
                <button className="h-7 w-7"
                 onClick={() => handleAddToCart(item)}
                >
                  <FaCartPlus className="text-blue-500 h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <AddToCartModal
        items={sendModalItems}
        />
      </div>
    </>
  );
};
