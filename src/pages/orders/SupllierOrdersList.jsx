import React, { use } from 'react'
import Sentorder from '../../components/orders/orderDetails/Sentorder'
import Pagination from '../../components/suppliers/Pagination'

import { GiNotebook } from "react-icons/gi";
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { CommonPagination } from "../../components/custom/CommonPagination";
import { GrView } from 'react-icons/gr';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';

export const SupplierOrdersList = () => {

  const navigate = useNavigate();

  
   const orders = [
    "MG Proveedores",
    "The duck farmers",
    "Master Meats",
    "Chefs Warehouse",
    "Fresh & Co.",
  ];

  const handleNavigate = () => {
    navigate('/orders/supplier-orders-checklist');
  }
  
 

  return (
    <div className='bg-white p-0 m-0 pb-16 min-h-screen w-full no-scrollbar '>
      

           <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6 no-scrollbar  ">
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
            <h2 className="text-lg font-semibold mb-4 mt-4">Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 i">
              {orders.map((order, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow inset-shadow-sm shadow-xl/30"
                >
                  <span className=" text-base font-semibold">{order}</span>
                  <span > <IoIosCheckboxOutline onClick={() => handleNavigate()}  className='text-orange-500 text-lg h-10 w-10' /> </span>
                </div>
              ))}
 
    
                     
            </div>
     
    
    
      
  
    </div>
  )
}