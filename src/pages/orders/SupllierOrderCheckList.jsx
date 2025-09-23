import React from 'react'
import Sentorder from '../../components/orders/orderDetails/Sentorder'
import Pagination from '../../components/suppliers/Pagination'

import { GiNotebook } from "react-icons/gi";
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { CommonPagination } from "../../components/custom/CommonPagination";
import { GrView } from 'react-icons/gr';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const SupllierOrderCheckList = () => {

    const products = [
    {
      id: 1,
      name: "Beef Tenderloin",
      qty: "5kg",
      image:
        "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3",
    },
    {
      id: 2,
      name: "Salmon Fillet",
      qty: "3kg",
      image:
        "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/sample1",
    },
    {
      id: 3,
      name: "Chicken Breast",
      qty: "10kg",
      image:
        "https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/sample2",
    },
  ];

  const navigate = useNavigate();



  const handleNavigate = () => {
    navigate('/orders/supplier-orders-breakdown');
  }

  

  
 

  return (
    <div className='bg-white p-0 m-0 pb-16 min-h-screen w-full  overflow-x-hidden '>
      

           <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6 no-scrollbar ">
              <div className=" items-center gap-3 rounded-xl border border-gray-300 bg-white p-4 shadow h-36 w-40 inset-shadow-sm shadow-xl/30">
                <div> <MdOutlineCalendarMonth className='h-12 w-16 mx-auto mb-2'  /> </div>
                <div className="font-medium text-center">Delivery Date</div>
              </div>
              <div className=" items-center gap-3 rounded-xl border border-gray-300 bg-white p-4 shadow h-36 w-40 inset-shadow-sm shadow-xl/30">
                <div> <IoIosCheckboxOutline  className='h-12 w-16 mx-auto mb-2'  /> </div>
                <div className="font-medium text-center">Check Deliveries</div>
              </div>
            </div>

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

          <div className="flex items-center gap-2">
            <button className="border-2 border-blue-500 text-blue-500 rounded p-1 hover:bg-orange-100">
              <AiOutlineInfoCircle className="h-5 w-5" />
            </button>
            <button className="border-2 border-orange-500 text-orange-500 rounded p-1 hover:bg-orange-100">
              <AiOutlineClose onClick={() => handleNavigate()} className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>


                   
           
     
    
    
      
  
    </div>
  )
}