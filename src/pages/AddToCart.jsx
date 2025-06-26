// import React, { useState } from 'react'

import { MdDelete, MdEdit, MdOutlineDeleteOutline } from "react-icons/md";

const AddToCart = () => {
  //  const [deliveryDate, setDeliveryDate] = useState("2025-06-23");
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
              readOnly
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-1">
              Order Note
            </label>
            <input
              type="text"
              placeholder="Enter Order Note"
              className="w-full border border-gray-300 px-2 py-1 rounded"
              value="Urgent delivery"
              readOnly
            />
          </div>
        </div>

        {/* Product Card */}
        <div className="border rounded-lg shadow p-4 mb-4 relative">
          <div className="flex items-center justify-between space-x-4">
            {/* Left Side - Product Info */}
            <div className="flex items-center space-x-4">
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
              <div className="ml-2">
                <p className="font-semibold">Lamb Rack</p>
                <p className="text-xs">1 kg</p>
                <p className="text-xs text-gray-500">ABC Meat & Poultry</p>
                <p className="text-xs text-gray-400">SKU: LMR-89012</p>
                <p className="text-xs text-green-500">In Stock</p>
                <p className="text-red-600 font-semibold mt-1">$ 36.00</p>
              </div>
            </div>

            {/* Right Side - Action Buttons */}
            <div className="flex flex-col items-center gap-2">
              <MdDelete className="text-red-700 text-lg" />
              <MdEdit className="text-blue-400 text-lg" />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="text-sm mb-4">
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
