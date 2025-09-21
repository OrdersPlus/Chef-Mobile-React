// import React, { useState } from 'react'

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdDelete, MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { LoadingEffect } from "../components/custom/LoadingEffect";
import axios from "axios";
import { confirmAction, deleteAxios, getAxios, postAxios } from "../helper/HelperAxios";
import { errorToast, successToast } from "../components/custom/Toastify";

const AddToCart = () => {
  const [fav, setFav] = useState(false);

  const [loader, setLoader] = useState();
  const [data, setData] = useState();
  const [items, setItems] = useState();
  const [suppliers, setSuppliers] = useState();
  const [price, setPrice] = useState();
  const [selected_supplier, setSelected_supplier] = useState();
  const [delivery_date, setDelivery_date] = useState();
  const [last_order_time, setLast_order_time] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "cart",
        setData,
        setLoader
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    setItems(data?.cart_items);
    setSuppliers(data?.suppliers);
    setPrice(data?.total_price);
    setSelected_supplier(data?.selected_supplier);
    setDelivery_date(data?.delivery_date);
    setLast_order_time(data?.last_order_time);
  }, [data]);

  const handleSaveOrder = async () => {
    const payload = { supplier_id: selected_supplier.id };
    const confirm = await confirmAction("Add this item to the cart!!!");
    if (confirm) {
      await postAxios(
        `${import.meta.env.VITE_BACK_END_URL}save-cart`,
        setLoader,
        payload
      );
    }
  };

  const handleSendOrder = async () => {
    try {
      const payload = {
        supplier_id: selected_supplier.id,
        delivery_date,
        order_note: "",
      };

      const confirm = await confirmAction("Add this item to the cart!!!");
      if (confirm) {
        setLoader(true);
        const token = localStorage.getItem("token");
        const headers = {};
        headers["Authorization"] = `Bearer ${token}`;
        headers["Content-Type"] = "application/json";
        const response = await axios.post(
          `${import.meta.env.VITE_BACK_END_URL}send-order`,
          payload,
          { headers }
        );
        if (response?.data?.status === "success") {
          successToast(response?.data?.message);
          setData(null);
          setItems([]);
          setSuppliers([]);
          setPrice(0);
          setSelected_supplier(null);
          setDelivery_date("");
          setLast_order_time("");
        }
      }
    } catch (error) {
      console.log(error);
      errorToast(error?.response?.data?.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      {loader && <LoadingEffect />}
      <div className="max-w-md mx-auto p-4 bg-white text-gray-700 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="text-red-500">
            Order Date:{" "}
            {data?.cart_items[items?.length - 1]?.created_at.slice(0, 10)}
          </p>
          <p className="text-gray-600">{items?.length} Items Selected</p>
        </div>

        {/* Supplier Tags */}
        <div className="flex gap-2 mb-4">
          {suppliers?.map((supplier, index) => (
            <span
              key={index}
              className="bg-orange-500 text-white px-2 py-1 rounded text-xs"
            >
              {supplier?.company_name}
            </span>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="mb-4 text-sm">
          <p className="text-green-500">
            Last Order Cutoff:{" "}
            <span className="font-semibold">{last_order_time}</span>
          </p>
          <p className="text-gray-600">
            Next Delivery Date:{" "}
            <span className="font-semibold">{delivery_date}</span>
          </p>
        </div>

        {/* Date & Note Inputs */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-1">
              Delivery Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 px-2 py-1 rounded"
              value={delivery_date || ""}
              readOnly
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-1">
              <span className="flex items-center gap-1">
                Order Note
                <GiNotebook className="w-4 h-4" />
              </span>
            </label>

            <input
              type="text"
              placeholder="Enter Order Note"
              autoComplete="off"
              className="w-full border border-gray-300 px-2 py-1 rounded bg-blue-300"
              value={
                items
                  ?.map((item) => (item?.note != null ? item.note : "none"))
                  .join(", ") || ""
              }
              readOnly
            />
          </div>
        </div>

        {/* Product Card */}
        {items?.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow p-4 mb-4 relative border-gray-300"
          >
            <div className="flex justify-between items-start">
              {/* Left Side - Image and Info */}
              <div className="flex space-x-4">
                {/* Product Image */}
                <div
                  className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex items-center justify-center"
                  style={{
                    boxShadow:
                      "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                  }}
                >
                  <img
                    src={
                      item?.product?.product_image?.startsWith("http")
                        ? item?.product?.product_image
                        : `https://res.cloudinary.com/dnawewlz7/image/upload/v1/${item?.product?.product_image}`
                    }
                    alt={item?.product?.product_image}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <p className="font-semibold">{item?.product?.name}</p>
                  <p className="text-xs">
                    {item?.product?.unit_qty}{" "}
                    {item?.product?.unit_of_measurement}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item?.supplier?.company_name}
                  </p>
                  <p className="text-xs text-gray-400">
                    SKU: {item?.product?.sku}
                  </p>
                  <p
                    className={`text-xs ${
                      item?.product?.stock_quantity >= item?.quantity
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item?.product?.stock_quantity >= item?.quantity
                      ? "In Stock"
                      : "Out of Stock"}
                  </p>

                  <p className="text-red-600 font-semibold mt-1">
                    $ {item?.product?.cost_price}
                  </p>

                  {/* Quantity Selector */}
                  <div className="mb-4 gap-4 ">
                    <label className="text-sm text-gray-400 flex justify-center">
                      Quantity
                    </label>
                    <div className="flex items-center border border-gray-300 rounded bg-green-500 mt-2">
                      <button
                        className="w-8 h-8 flex justify-center items-center px-0 py-0 text-white bg-green-500"
                        onClick={() => {
                          setItems((prevItems) =>
                            prevItems.map((i) =>
                              i.id === item.id && i.quantity > 1
                                ? { ...i, quantity: i.quantity - 1 }
                                : i
                            )
                          );
                        }}
                      >
                        -
                      </button>

                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border-l border-r border-gray-300 bg-green-500 text-gray-200"
                      />

                      <button
                        className="w-8 h-8 flex justify-center items-center px-0 py-0 text-white bg-green-500"
                        onClick={() => {
                          setItems((prevItems) =>
                            prevItems.map((i) =>
                              i.id === item.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                            )
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Actions */}
              <div className="relative flex gap-8">
                {" "}
                {/* Make the parent relative */}
                <div className="absolute -top-2 -right-2">
                  <MdDelete
                    className="text-red-700 text-lg cursor-pointer m-2"
                    onClick={() =>
                      deleteAxios(
                        `${import.meta.env.VITE_BACK_END_URL}cart`,
                        `${item?.id}`,
                        setItems,
                        setLoader,
                        "Item Deleted Successfully"
                      )
                    }
                  />
                </div>
                <div className="flex flex-col items-center justify-between h-full gap-6 mt-15">
                  {/* Action Buttons */}
                  <div className="mr-8 flex gap-2 flex-col">
                    {/* Edit Button */}
                    <MdEdit className="text-green-400 text-lg cursor-pointer mb-5" />

                    {/* Favorite Button */}
                    <FaHeart
                      onClick={() => setFav((prev) => !prev)}
                      className={`${
                        fav ? "text-red-500" : "text-gray-500"
                      } text-lg cursor-pointer`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div className="text-sm mb-4 p-2 shadow-2xl border-1 border-gray-300">
          <h3 className="text-center font-semibold mb-2">ORDER SUMMARY</h3>
          <div className="grid grid-cols-2 gap-y-2">
            <p>Total Amount</p>
            <p className="text-right font-semibold">$ {price}</p>

            <p>TAX/GST</p>
            <p className="text-right font-semibold">$ 0.00</p>

            <p>Delivery Fee</p>
            <p className="text-right font-semibold">$ {data?.flight_charge}</p>

            <p>Total Amount Payable</p>
            <p className="text-right font-semibold text-green-600">
              $ {price + data?.flight_charge}
            </p>

            <p>Payment Method</p>
            <p className="text-right">Credit Card</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 bg-cyan-600 text-white py-2 rounded"
            onClick={handleSaveOrder}
          >
            Save Order
          </button>
          <button
            className="flex-1 bg-green-600 text-white py-2 rounded"
            onClick={handleSendOrder}
          >
            Send Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
