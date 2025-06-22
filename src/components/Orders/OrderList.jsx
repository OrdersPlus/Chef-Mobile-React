import React from 'react';
import { Nav } from '../common/Nav';
import { Footer } from '../common/Footer';
import { BiChevronDown, BiChevronUp, BiInfoCircle } from 'react-icons/bi';
export const OrderList = () => {
  return (
       <div className="bg-white p-0 m-0 pb-16 min-h-screen  w-full ">
        <div className='rounded-lg shadow-lg '>
           {/* Header Part */}
                      <Nav />
                      <div className="m-3 p-4 pt-0 rounded-md bg-white shadow-md space-y-4 mb-2 ">
        {/* Back and Cancel Button */}
      <div className="flex justify-between items-center mb-4">
         {/* Order Details Section */}
      <div className=" mb-6">
        <p className="text-lg font-semibold text-gray-800">Order # ABC MEAT-035</p>
        <p className="text-sm text-gray-500 mb-2">Status: <span className="text-yellow-500">SENT ORDER</span></p>
        <p className="text-sm text-gray-600">Delivery Date: <span className="font-semibold text-black">Tue 24, Jun 2025</span></p>
        <p className="text-sm text-gray-600">Delivery Fee: <span className="font-semibold text-black">$10.00</span></p>
        <p className="text-lg font-semibold text-black mt-2">Total Cost: <span className="text-green-500">$36.00</span></p>
      </div>
        <button className="bg-red-500 shadow-xl shadow-gray-400 text-white py-2 px-4 rounded-full text-sm hover:bg-red-600">Cancel Order</button>
      </div>
                      </div>
        
<div className='m-3 p-4 pt-0 mb-2 mt-4 rounded-md bg-white shadow-md space-y-4 '>
<div className="flex justify-center pt-2">
   <img
              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
              alt="Beef"
              className="w-30 h-30 rounded-md object-cove border border-amber-50 shadow-lg shadow-gray-400 "
            />
</div>
   {/* Product Details Section */}
      <div className="flex gap-20  items-center bg-white shadow-md p-3 rounded-lg mb-4">
        

        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-800">Lamb Rack</p>
          <p className="text-xs text-gray-500">SKU: LMR-89012</p>
          <p className="text-xs text-gray-500">1 kg</p>
          <p className="text-xs text-gray-500 mt-2">Price: <span className="font-semibold text-black">$36.00</span> GST Included</p>
        </div>
         {/* QTY and Price Section */}
<div className="mb-4 flex flex-col items-center">
            <label className="text-sm text-gray-600 mb-1">Quantity</label>
            <div className="relative w-16">
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-full border border-gray-300 rounded px-2 py-1 text-center appearance-none"
              />
              <div className="absolute right-0 top-0 flex flex-col h-full justify-between py-1 pr-1">
                <button className="text-gray-500 hover:text-gray-700">
                  <BiChevronUp  size={16} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <BiChevronDown size={16} />
                </button>
              </div>
              
            </div>
          </div>


      </div>
      
        
</div>

</div>


      {/* Notes Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-sm font-semibold text-gray-800">Order Notes:</p>
        <p className="text-xs text-gray-600">No special instructions for this order.</p>
      </div>
      <Footer />
        </div>



  )
}
