import { FaCartPlus } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import AddToPantryCartModalOrders from "./AddToPantryCartModalOrders";
import { confirmAction, postAxios } from "../../../helper/HelperAxios";
import PantryListDetailsModal from "../../kitchen/kitchenModal/PantryListDetailsModal";
import AddToCartModalNewOrder from "../commonForOrder/AddToCartModalNewOrder";
import { LoadingEffect } from "../../custom/LoadingEffect";

export const NewOrdersMain = ({ products, sections }) => {
  // console.log(products)sections
  const [modalData, setModalData] = useState();
  
  const [loader, setLoader] = useState(false);
  // const quantity = parseInt(document.getElementById("quantityInput").value);
  // const note = document.querySelector("textarea").value;
  const handleAddToCart = async (item) => {
    const payload = {
      product_id: item?.product_id,
      supplier_id: item?.supplier_id,
      quantity: 1,
      note: "",
    };
    const confirm = await confirmAction("Add this item to the cart!!!");
    if (confirm) {
      await postAxios(
        `${import.meta.env.VITE_BACK_END_URL}orders/add-to-cart`,
        setLoader,
        payload
      );
    }
  };

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

  // console.log("products",products)
  // console.log("sections",sections)
  return (
    <>
    {loader && <LoadingEffect />}
    <div className="container mx-auto mt-4 mb-25">
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        {/* Header Row */}
        <div className="min-w-full text-gray-700">
          <div
            className="bg-white text-sm flex py-2 px-4"
            style={{
              boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
            }}
          >
            <div className="w-1/4 text-left py-2 px-4"></div>
            <div className="w-1/4 text-left py-2 px-4 text-orange-500 font-semibold ml-5">
              Product
            </div>
            <div className="w-1/4 text-center py-2 px-4 text-orange-500 font-semibold ml-18">
              Actions
            </div>
            <div className="w-1/4 text-left py-2 px-4"></div>
          </div>

          {/* Product Rows */}
          <div className="text-sm">
            {/* One product item */}

            {products?.map((product, index) => (
              <div
                key={index}
                className="rounded-lg shadow-xl shadow-gray-300 flex items-center py-3 px-4"
              >
                <div className="w-1/4">
                  <div
                    className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center"
                    style={{
                      boxShadow:
                        "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                    }}
                  >
                    <img
                      src={
                        product?.product_image?.startsWith("http")
                        ? product?.product_image
                        : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${product?.product_image}`
                      }
                      alt={product?.product_image || "Unnamed Product"}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-1/4 text-black px-5 text-left">
                  <div className="flex flex-col">
                    <span className="font-semibold">{product?.name}</span>
                    <span className="text-gray-600">
                      ${product?.cost_price}/{product?.unit_of_measurement}
                    </span>
                  </div>
                </div>
                <div className="w-1/4 text-black flex justify-between items-center font-semibold ml-15">
                  <button
                    onClick={() => {
                      setModalData(product);
                      document.getElementById("searchModal").showModal();
                    }}
                  >
                    <IoSearch className="text-orange-500 h-7 w-7 ml-4" />
                  </button>
                    <AddToPantryCartModalOrders 
                      modalData={modalData}
                      sections={sections} 
                    />

                  <button className="ml-2"
                   onClick={() => 
                      handleAddToOrderList(product)}
                   >
                    <FaBagShopping className="text-amber-400 h-7 w-7 ml-4" />
                  </button>

                  <button
                    onClick={() =>{
                      setModalData(product);
                      document.getElementById("productModal").showModal()
                    }
                    }
                    className="ml-2"
                  >
                    <FaCartPlus className="text-blue-500 h-7 w-7 ml-4" />
                  </button>
                  <AddToCartModalNewOrder 
                    items={modalData}
                    className="text-amber-300 h-7 w-7" />
                </div>
                <div className="w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
