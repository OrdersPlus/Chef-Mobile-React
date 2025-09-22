import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { LoadingEffect } from "../../custom/LoadingEffect";
import { confirmAction, postAxios } from "../../../helper/HelperAxios";

const EditPantryCartModal = ({ item }) => {
  // console.log(item);

  const [quantity, setQuantity] = useState(item?.unit_qty || 1);
  const [note, setNote] = useState("");
  const [loader, setLoader] = useState("");

  const handleAddToCart = async () => {
    const payload = {
      product_id: item?.id,
      supplier_id: item?.supplier_id,
      quantity: quantity,
      note: note,
    };

    // const confirm = await confirmAction("Add this item to the cart?");
    // if (confirm) {
        const response = await postAxios(
          `${import.meta.env.VITE_BACK_END_URL}orders/add-to-cart`,
          setLoader,
          payload
        );
        document.getElementById("productModal2")?.close();
    // }
  };

  return (
    <>
      {loader && <LoadingEffect />}
      <dialog id="productModal2" className="modal">
        <div className="modal-box w-[400px] p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={() => document.getElementById("productModal2").close()}
          >
            &times;
          </button>

          <h2 className="text-lg font-bold text-gray-800 mb-2">{item?.name}</h2>

          <div className="flex flex-row gap-10 mb-1">
            {/* Main Image */}
            <img
              id="mainProductImage"
              src={
                item?.product?.product_image?.startsWith("http")
                  ? item?.product?.product_image
                  : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product_image}`
              }
              alt="Product"
              className="w-40 h-24 object-cover rounded border border-amber-50 shadow-lg shadow-gray-400"
            />

            <div className="text-sm space-y-1">
              <p className="font-semibold text-gray-900">
                {item?.supplier?.company_name}
              </p>
              <p className="text-gray-600">
                SKU: <span className="font-medium">{item?.sku}</span>
              </p>
              <p className="text-green-600 font-semibold">
                {item?.stock_quantity > item?.unit_qty
                  ? "In Stock"
                  : "Out of Stock"}
              </p>
              {/* <p className="text-gray-500 text-xs">Next Del: <span className="font-medium">26/05/2023</span></p> */}
              <p className="text-gray-700">
                {`${item?.unit_qty} ${item?.unit_of_measurement}`}{" "}
              </p>
            </div>
          </div>

          {/* Multiple Image Thumbnails */}
          <div className="flex items-center justify-between">
            <div className="gap-3 flex items-center">
              <img
                src={
                  item?.product?.product_image?.startsWith("http")
                    ? item.product.product_image
                    : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product_image}`
                }
                alt="Product"
                className="w-10 h-10 object-cover border border-gray-300 rounded cursor-pointer hover:border-orange-500"
                onClick={() => {
                  const mainImage = document.getElementById("mainProductImage");
                  if (mainImage) {
                    mainImage.src = item?.product?.product_image?.startsWith(
                      "http"
                    )
                      ? item.product.product_image
                      : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product_image}`;
                  }
                }}
              />

              <img
                src="https://i.pravatar.cc/100"
                alt="Thumbnail 2"
                className="w-10 h-10 object-cover border border-gray-300 rounded cursor-pointer hover:border-orange-500"
                onClick={() =>
                  (document.getElementById("mainProductImage").src =
                    "https://i.pravatar.cc/100")
                }
              />
              <img
                src={
                  item?.product?.product_image?.startsWith("http")
                    ? item.product.product_image
                    : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product_image}`
                }
                alt="Product"
                className="w-10 h-10 object-cover border border-gray-300 rounded cursor-pointer hover:border-orange-500"
                onClick={() => {
                  const mainImage = document.getElementById("mainProductImage");
                  if (mainImage) {
                    mainImage.src = item?.product?.product_image?.startsWith(
                      "http"
                    )
                      ? item.product.product_image
                      : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product_image}`;
                  }
                }}
              />
            </div>

            {/* Quantity Selector */}

            <div className="mb-4 gap-4 mr-9">
              <label className="text-sm text-gray-600 flex justify-center">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-10 text-center border-l border-r border-gray-300"
                />
                <button
                  className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Note textarea */}
          <div className="mb-4 flex justify-center">
            <textarea
              className="w-72 border border-gray-300 rounded p-2"
              rows="3"
              placeholder="Notes..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center gap-3 pt-4 items-center">
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700"
            >
              Add to Order
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditPantryCartModal;
