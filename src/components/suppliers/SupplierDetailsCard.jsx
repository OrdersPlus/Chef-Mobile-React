import React, { useState } from 'react';
import { FaLink } from "react-icons/fa6";
import SupplierDetailsModal from './SupplierDetailsModal';
const SupplierDetailsCard = () => {
   // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal visibility
  };
  return (

    <div className='m-2 p-4 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 mt-3'>
          <div className="bg-[var(--secondary-color)] p-4 rounded-lg shadow"
              style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>
<div className="flex  items-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Supplier Info</h2>
        <FaLink className="text-blue-500"
        size="2em" />
       
        
      </div>
      <div className="flex flex-col mb-6 justify-between items-center bg-[var(--secondary-color)] p-2 rounded-lg shadow "
              style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>
                <span className="font-semibold text-gray-600">Supplier's Business Information</span>
              </div>



      {/* Payment Terms Section */}
  
      <div className="mb-6 ">
        <h3 className="text-xl font-semibold text-gray-700 ">Payment Terms</h3>
        <div className="mt-2 flex justify-between">
          <div className="flex  flex-col items-between text-sm text-gray-600 bg-[var(--secondary-color)] p-5 rounded-lg shadow"
              style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>
            <span className="font-medium">Credit Limit</span>
            <span>AUD $1,000.00</span>
          </div>
          <div className="flex flex-col justify-between text-sm text-gray-600 bg-[var(--secondary-color)] p-5 rounded-lg shadow"
              style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>
            <span className="font-medium">Account Type</span>
            <span>7 Days by Credit <br />   Card</span>
          </div>
        </div>
      </div>
      {/* Delivery Days Section */}
     
       <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700">Delivery Days</h3>
        <div className="grid grid-cols-5 sm:grid-cols-4 lg:grid-cols-7 gap-2 mt-6">
          <button className="bg-green-500 text-[var(--text-secondary)] text-lg rounded-lg float-left  py-3 shadow-2xl  ">Mon</button>
          <button className="bg-green-500 text-[var(--text-secondary)] text-lg rounded-lg float-left  py-3 shadow-2xl">Tue</button>
          <button className="bg-green-500 text-[var(--text-secondary)] text-lg rounded-lg float-left  py-3 shadow-2xl">Wed</button>
          <button className="bg-green-500 text-[var(--text-secondary)] text-lg rounded-lg float-left  py-3 shadow-2xl">Thu</button>
          <button className="bg-green-500 text-[var(--text-secondary)] text-lg rounded-lg py-3 shadow-2xl">Fri</button>
          <button className="bg-[var(--primary-color)] text-[var(--text-secondary)] text-lg rounded-lg py-3 shadow-2xl">Sat</button>
          <button className="bg-[var(--primary-color)] text-[var(--text-secondary)] text-lg rounded-lg py-3 shadow-2xl">Sun</button>
        </div>
      </div>
{/* Cut-off Time Card */}
<div className="mb-6 ">
  <h3 className="text-xl font-semibold text-gray-700 mb-2">Cut-Off Time</h3>
  <div className="bg-[var(--secondary-color)] p-4 rounded-xl shadow-md border border-gray-200"
    style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1">Order before this time for same-day delivery</p>
        <h4 className="text-3xl font-bold text-gray-800 tracking-wider">5:00 PM</h4>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Active</span>
        {/* Optional edit icon/button */}
        <button className="text-[var(--text-primary)] hover:text-orange-700 transition duration-200 text-sm underline">
          Change
        </button>
      </div>
    </div>
  </div>
</div>
      {/* Delivery Fee Section */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold">Delivery Fee</h3>
        <div className="mt-2">
          <p className="text-sm sm:text-base">Only apply when order is below minimum order</p>
          <div className="flex justify-between text-sm sm:text-base mt-1">
            <span className="font-medium">Fee</span>
            <span>AUD $10.00</span>
          </div>
        </div>
      </div>

      {/* Pay Methods Section */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold">Current Pay Methods</h3>
        <div className="mt-2 text-center">
          <p className="text-red-500 text-sm sm:text-base mb-2">No Pay Method Added</p>
          {/* <button className="bg-[var(--primary-color)] hover:bg-orange-700 text-[var(--text-secondary)] px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">+ Add a new card</button> */}
        {/* Button to Open Modal */}
        <div className="mt-4">
          <button
            onClick={toggleModal}
            className="bg-[var(--primary-color)] hover:bg-orange-700 text-[var(--text-secondary)] px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700"
          >
            + Add a new card
          </button>
        </div>
      </div>

      {/* SupplierDetailsModal component */}
      <SupplierDetailsModal isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
      </div>
        </div>
        
          
  )
}

export default SupplierDetailsCard;