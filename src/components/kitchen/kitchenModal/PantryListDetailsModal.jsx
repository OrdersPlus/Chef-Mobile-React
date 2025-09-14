import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { postAxios } from "../../../helper/HelperAxios";
import { LoadingEffect } from "../../custom/LoadingEffect";

const PantryListDetailsModal = ({ items }) => {
  // console.log(items)

  const [loader, setLoader] = useState();
  const handleAddToCart = async () => {
    const quantity = parseInt(document.getElementById("quantityInput").value);
    const note = document.querySelector("textarea").value;

    const payload = {
      product_id: items?.product_id,
      supplier_id: items?.supplier_id,
      quantity: quantity,
      note: note,
    };
    await postAxios(
      `${import.meta.env.VITE_BACK_END_URL}orders/add-to-cart`,
      setLoader,
      payload
    );
  };

  return (
    <>
      {loader && <LoadingEffect />}
      <dialog id="productModal" className="modal">
        <div className="modal-box w-[400px] p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={() => document.getElementById("productModal").close()}
          >
            &times;
          </button>

          <h2 className="text-lg font-bold text-gray-800 mb-2">
            {items?.product?.name}
          </h2>

          <div className="flex flex-row gap-10 mb-1">
            {/* Main Image */}
            <img
              id="mainProductImage"
              src={
                items?.product?.product_image ||
                "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
              }
              alt="Product"
              className="w-40 h-24 object-cover rounded border border-amber-50 shadow-lg shadow-gray-400"
            />

            <div className="text-sm space-y-1">
              <p className="font-semibold text-gray-900">
                {items?.supplier?.company_name}
              </p>
              <p className="text-gray-600">
                SKU: <span className="font-medium">{items?.product?.sku}</span>
              </p>
              <p className="text-green-600 font-semibold">
                {items?.product?.stock_quantity > 0
                  ? "In Stock"
                  : "out of stock"}
              </p>
              <p className="text-gray-500 text-xs">
                Next Del: <span className="font-medium">26/05/2023</span>
              </p>
              <p className="text-gray-700">
                {items?.product?.unit_qty} {items?.product?.unit_of_measurement}
              </p>
            </div>
          </div>

          {/* Multiple Image Thumbnails */}
          <div className="flex items-center justify-between">
            <div className="gap-3 flex items-center">
              <img
                src={
                  items?.product?.product_image ||
                  "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
                }
                alt="Thumbnail 1"
                className="w-10 h-10 object-cover border border-gray-300 rounded cursor-pointer hover:border-orange-500"
                onClick={() =>
                  (document.getElementById("mainProductImage").src =
                    items?.product?.product_image ||
                    "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3")
                }
              />
              <img
                src={"https://i.pravatar.cc/100"}
                alt="Thumbnail 2"
                className="w-10 h-10 object-cover border border-gray-300 rounded cursor-pointer hover:border-orange-500"
                onClick={() =>
                  (document.getElementById("mainProductImage").src =
                    "https://i.pravatar.cc/100")
                }
              />
              <img
                src={
                  items?.product?.product_image ||
                  "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
                }
                alt="Thumbnail 3"
                className="w-10 h-10 object-cover border border-gray-300 rounded cursor-pointer hover:border-orange-500"
                onClick={() =>
                  (document.getElementById("mainProductImage").src =
                    items?.product?.product_image ||
                    "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3")
                }
              />
            </div>

            {/* Quantity Selector */}

            <div className="mb-4 gap-4 mr-9 ">
              <label className="text-sm text-gray-600 flex justify-center">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded bg-green-500">
                <button
                  className="px-3 py-1 text-gray-700 hover:bg-gray-200 bg-green-500"
                  onClick={() => {
                    const input = document.getElementById("quantityInput");
                    let value = parseInt(input.value);
                    if (value > 1) input.value = value - 1;
                  }}
                >
                  -
                </button>
                <input
                  id="quantityInput"
                  type="text"
                  defaultValue="1"
                  readOnly
                  className="w-10 text-center border-l border-r border-gray-300 bg-green-500"
                />
                <button
                  className="px-3 py-1 text-gray-700 hover:bg-gray-200 bg-green-500"
                  onClick={() => {
                    const input = document.getElementById("quantityInput");
                    let value = parseInt(input.value);
                    input.value = value + 1;
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4 flex justify-center">
            <textarea
              className="w-72 border border-gray-300 rounded p-2"
              rows="3"
              placeholder="Notes..."
            ></textarea>
          </div>

          <div className="flex justify-center gap-3 pt-4 items-center">
            <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-green-700">
              Save Notes
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700"
              onClick={() => {
                const quantity = parseInt(
                  document.getElementById("quantityInput").value
                );
                const note = document.querySelector("textarea").value;
                handleAddToCart(items, quantity, note);
              }}
            >
              Add to Order
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PantryListDetailsModal;
