import React, { useState } from 'react'
import Sentorder from '../../components/orders/orderDetails/Sentorder'
import Pagination from '../../components/suppliers/Pagination'

import { GiNotebook } from "react-icons/gi";
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { CommonPagination } from "../../components/custom/CommonPagination";
import { GrView } from 'react-icons/gr';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import ShortMissingModal from '../../components/delivery/modal/ShortMissingModal';
import { WrongItemsmodal } from '../../components/delivery/modal/WrongItemsmodal';
import { UderWeightModal } from '../../components/delivery/modal/UderWeightModal';
import { OverWeightModal } from '../../components/delivery/modal/OverWeightModal';

export const SupplierOrdersBreakdown = () => {
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
      name: "Beef Tenderloin",
      qty: "5kg",
      image:
        "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3",
    },
    
    
  ];

  

  
 

  return (
    <div className='bg-white p-0 m-0 pb-16 min-h-screen w-full no-scrollbar '>
      

           {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6 ">
              <div className=" items-center gap-3 rounded-xl border border-gray-300 bg-white p-4 shadow h-36 w-50 inset-shadow-sm shadow-xl/30">
                <div> <MdOutlineCalendarMonth className='h-12 w-16 mx-auto mb-4'  /> </div>
                <div className="font-medium text-center">Delivery Date</div>
              </div>
              <div className=" items-center gap-3 rounded-xl border border-gray-300 bg-white p-4 shadow h-36 w-50 inset-shadow-sm shadow-xl/30">
                <div> <IoIosCheckboxOutline  className='h-12 w-16 mx-auto mb-4'  /> </div>
                <div className="font-medium text-center">Check Deliveries</div>
              </div>
            </div> */}

      <Pagination />

            {/* Orders Section */}
            <h2 className="text-lg font-semibold mb-4 mt-4">MG Proveedores</h2>
                  <div className="mt-5 space-y-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white p-6 rounded-lg inset-shadow-sm shadow-xl/30 border border-white"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-md object-cover border border-amber-50 shadow-lg shadow-gray-400"
          />

          <div className="flex-1 px-3 ml-2">
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">{item.qty}</p>
          </div>

  
        </div>
      ))}


                <div className="max-w-xl mx-auto mt-2 border border-gray-200 rounded-lg shadow-md p-6 bg-white">
      <h2 className="text-center text-lg font-semibold mb-4">
        Select Order Item to Check Delivery:
      </h2>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Wrong Item</span>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500 "
             onClick={() => document.getElementById("wrong_items_modal").showModal()}
          />
          <WrongItemsmodal />
        </div>

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Short & Missing</span>
          <input
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
           onClick={() => document.getElementById("short_missing_modal").showModal()}
         
          />
                <ShortMissingModal />
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

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Underweight</span>
          <input
            type="checkbox"
             onClick={() => document.getElementById("under_weight_modal").showModal()}
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
          <UderWeightModal />
        </div>

            <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Overweight</span>
          <input
           onClick={() => document.getElementById("over_weight_modal").showModal()}
            type="checkbox"
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
          <OverWeightModal />
        </div>

        <div className="flex items-center justify-between mb-4w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl">
          <span className="text-gray-700">Wrong Substitute</span>
          <input
            type="checkbox"
             onClick={() => document.getElementById("short_missing_modal").showModal()}
            className="form-checkbox text-yellow-500 h-4 w-4 border-yellow-500"
          />
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


                   
           

    
      
  
    </div>
  )
}