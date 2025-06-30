// import React, { useState } from 'react'

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdDelete, MdEdit, MdOutlineDeleteOutline } from "react-icons/md";

const AddToCart = () => {
  const [fav, setFav] = useState(false);
  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-white text-gray-700 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center text-sm font-medium mb-2">
          <p className="text-red-500">Order Date: 19 June 2025</p>
          <p className="text-gray-600">3 Items Selected</p>
        </div>

        {/* Supplier Tags */}
        <div className="flex gap-2 mb-4">
          <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">
            ABC Meat & Poultry
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded text-xs">
            ABC Food Wholesale
          </span>
        </div>

        {/* Delivery Info */}
        <div className="mb-4 text-sm">
          <p className="text-green-500">
            Last Order Cutoff: <span className="font-semibold">10:00 AM</span>
          </p>
          <p className="text-gray-600">
            Next Delivery Date:{" "}
            <span className="font-semibold">23/06/2025</span>
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
              value="2025-06-23"
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
              className="w-full border border-gray-300 px-2 py-1 rounded bg-blue-300"
              value="Urgent delivery"
            />
          </div>
        </div>

        {/* Product Card */}
        <div className="border rounded-lg shadow p-4 mb-4 relative border-gray-300">
          <div className="flex justify-between items-start">
            {/* Left Side - Image and Info */}
            <div className="flex space-x-4">
              {/* Product Image */}
              <div
                className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex items-center justify-center"
                style={{
                  boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                }}
              >
                <img
                  src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
                  alt="Beef Tenderloin"
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div>
                <p className="font-semibold">Lamb Rack</p>
                <p className="text-xs">1 kg</p>
                <p className="text-xs text-gray-500">ABC Meat & Poultry</p>
                <p className="text-xs text-gray-400">SKU: LMR-89012</p>
                <p className="text-xs text-green-500">In Stock</p>
                <p className="text-red-600 font-semibold mt-1">$ 36.00</p>

                {/* Quantity Selector */}
                <div className="mb-4 gap-4 ">
                  <label className="text-sm text-gray-400 flex justify-center">
                    Quantity
                  </label>
                  <div className="flex items-center border border-gray-300 rounded bg-green-500 mt-2">
                    <button
                      className="px-3 py-1 text-white bg-green-500"
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
                      className="w-10 text-center border-l border-r border-gray-300 bg-green-500 text-gray-200"
                    />
                    <button
                      className="px-3 py-1 text-white bg-green-500"
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
            </div>

            {/* Right Side - Actions */}
            <div className="relative flex gap-8">
              {" "}
              {/* Make the parent relative */}
              <div className="absolute -top-2 -right-2">
                <MdDelete className="text-red-700 text-lg cursor-pointer m-2" />
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

        {/* Order Summary */}
        <div className="text-sm mb-4 p-2 shadow-2xl border-1 border-gray-300">
          <h3 className="text-center font-semibold mb-2">ORDER SUMMARY</h3>
          <div className="grid grid-cols-2 gap-y-2">
            <p>Total Amount</p>
            <p className="text-right font-semibold">$ 84.00</p>

            <p>TAX/GST</p>
            <p className="text-right font-semibold">$ 0.00</p>

            <p>Delivery Fee</p>
            <p className="text-right font-semibold">$ 10.00</p>

            <p>Total Amount Payable</p>
            <p className="text-right font-semibold text-green-600">$ 94.00</p>

            <p>Payment Method</p>
            <p className="text-right">Credit Card</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-cyan-600 text-white py-2 rounded">
            Save Order
          </button>
          <button className="flex-1 bg-green-600 text-white py-2 rounded">
            Send Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
