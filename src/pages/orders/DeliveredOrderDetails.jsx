import React from 'react'
import Sentorder from '../../components/orders/orderDetails/Sentorder'
import Pagination from '../../components/suppliers/Pagination'
import { useState } from "react";
import { GiNotebook } from "react-icons/gi";

export const DeliveredOrderDetails = () => {
    const [note, setNote] = useState(false);
    const [showUpload, setShowUpload] = useState({
    poorQuality: false,
    damaged: false,
  });

  const toggleUpload = (key) => {
    setShowUpload((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
const products = [
  {
    id: 1,
    name: "Parmmassan",
    sku: "FL-0042247",
    size: "1 ml/Can",
    price: 91,
    image:
      "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3",
  },
  {
    id: 2,
    name: "Another Product",
    sku: "FL-0042248",
    size: "2 ml/Can",
    price: 120,
    image:
      "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3",
  },
 
];
  return (
    <div className='bg-white p-0 m-0 pb-16 min-h-screen w-full '>
      <Sentorder />
      <Pagination />
      <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex relative border border-gray-300 rounded-md p-4 pr-0 max-w-4xl bg-white shadow-sm mt-2 inset-shadow-sm shadow-xl/30"
        >
          <div className="flex gap-2">
            <div className="flex gap-2">
              <div className="flex justify-center pt-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 rounded-md object-cover border border-amber-50 shadow-lg shadow-gray-400"
                />
              </div>
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <h4 className="font-medium text-green-500">
                  SKU: {product.sku}
                </h4>
                <p className="font-medium">{product.size}</p>
                <h3 className="font-medium text-orange-600">
                  $ {product.price}
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <label className="text-sm text-gray-600 flex justify-center">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded bg-green-500">
                  <button
                    className="px-3 py-1 text-gray-700 hover:bg-gray-200 bg-green-500"
                    onClick={() => {
                      const input = document.getElementById(
                        `quantityInput-${product.id}`
                      );
                      let value = parseInt(input.value);
                      if (value > 1) input.value = value - 1;
                    }}
                  >
                    -
                  </button>
                  <input
                    id={`quantityInput-${product.id}`}
                    type="text"
                    defaultValue="1"
                    readOnly
                    className="w-10 text-center border-l border-r border-gray-300 bg-green-500"
                  />
                  <button
                    className="px-3 py-1 text-gray-700 hover:bg-gray-200 bg-green-500"
                    onClick={() => {
                      const input = document.getElementById(
                        `quantityInput-${product.id}`
                      );
                      let value = parseInt(input.value);
                      input.value = value + 1;
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div
                onClick={() => setNote(!note)}
                className="text-orange-500 mt-3 flex justify-center"
              >
                <GiNotebook className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
          
      ))}
    </div>
         <div
          className={`${note ? "" : "hidden"} bg-gray-100 p-4 mt-3 rounded-lg mb-6`}
        >
          <p className="text-sm font-semibold text-gray-800">Order Notes:</p>
          <p className="text-xs text-gray-600">
            No special instructions for this order.
          </p>
        </div>
          <div className="max-w-xl mx-auto mt-10 border border-gray-200 rounded-lg shadow-md p-6 bg-white">
      <h2 className="text-center text-lg font-semibold mb-4">
        Select Order Item to Check Delivery:
      </h2>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Missing</span>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500 "
          />
        </div>

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Wrong Substitute</span>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
        </div>


        <div className=" items-center  w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleUpload('poorQuality')}
          >
            <span className="text-gray-700">Poor Quality</span>
            <span className="text-gray-600 text-lg">
              {showUpload.poorQuality ? '▲' : '▼'}
            </span>
          </div>
          {showUpload.poorQuality && (
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                Upload Picture of Item:
              </label>
              <input
                type="file"
                className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          )}
        </div>

        <div className="items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleUpload('damaged')}
          >
            <span className="text-gray-700">Damaged</span>
            <span className="text-gray-600 text-lg">
              {showUpload.damaged ? '▲' : '▼'}
            </span>
          </div>
          {showUpload.damaged && (
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">
                Upload Picture of Item:
              </label>
              <input
                type="file"
                className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3
                       file:rounded file:border-0 file:text-sm file:font-semibold
                       file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Underweight</span>
          <span className="text-gray-600 text-lg onclick()">▼</span>
        </div>

        <div className="flex items-center justify-between w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Overweight</span>
          <span className="text-gray-600 text-lg">▼</span>
        </div>

        <div className="flex-col gap-2">
            <div className='flex justify-center'>
    <button className="bg-green-500 text-white shadow-2xl shadow-green-700 w-[80%] h-10 hover:bg-green-600  font-semibold py-2 px-4 rounded">
            Product In Good Condition
          </button>
            </div>
      <div className='flex justify-center'>
        <button className="bg-blue-500 mt-2 shadow-blue-700 shadow-2xl hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Save Complaint
          </button>
      </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}
