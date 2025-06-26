import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

export const AddToCart2 = () => {
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
<div className="p-2 relative border border-gray-200 rounded shadow-sm mb-4">
      
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Beef Tenderloin
          </h2>

          <div className="flex flex-row gap-4 mb-4">
            <img
              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
              alt="Product"
              className="w-40 h-24 object-cover rounded border border-amber-50 shadow-lg shadow-gray-400"
            />
            <div className="text-sm space-y-1">
              <p className="font-semibold text-gray-900">ABC Meat & Poultry</p>
              <p className="text-gray-600">
                SKU: <span className="font-medium">BTL-12345</span>
              </p>
              <p className="text-green-600 font-semibold">In Stock</p>
              <p className="text-gray-500 text-xs">
                Next Del: <span className="font-medium">26/05/2023</span>
              </p>
              <p className="text-gray-700">5 kg</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-4 items-center">
            <MdDelete className="text-red-700 text-lg" />
            <MdEdit className="text-blue-400 text-lg" />
          </div>
        </div>
        {/* Order Summary */}
        <div className="text-sm mb-4 mt-1">
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
  )
}
