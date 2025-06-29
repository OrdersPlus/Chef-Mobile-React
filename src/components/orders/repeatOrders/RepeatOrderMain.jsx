import React from 'react'
import { FaFolderOpen } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
const RepeatOrderMain = () => {
  return (
      <div className='  pt-0 rounded-md bg-white shadow-md space-y-4 mb-2'>
<div className="bg-white  p-4 pr-3 pl-0 pt-1 pb-1 m-4 rounded-2xl flex gap-4 items-center relative" style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #807e7e66' }}>

  {/* Close Button (top-left corner) */}
  <button className="absolute top-0 right-0 m-2 border-2 rounded-full text-red-500 hover:text-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  {/* Card Content */}
  <div className="mt-2  space-y-2 flex flex-col justify-start">
    <div className="pl-2 pr-2 space-y-4 mb-1 mt-2">
      <div className='flex gap-2'>
          <p className="text-gray-700  ">
        <strong>Supplier:</strong>
        </p>
         <input type="text" defaultValue="Meatup" className="border-2 border-white inset-shadow-sm shadow-xl/30 shadow-gray-400 rounded-md w-[40%] pl-2 pr-2" />
      
      </div>
    
    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1 ">
       <div className='flex gap-2'>
  <p className="text-gray-700 ">
        <strong>Repeat Cycle:</strong> 
      </p>
        <select defaultValue="Weekly" className="border-2 border-white shadow-xl rounded-md w-[40%] pl-2 pr-2">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
       </div>
    
    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1">
      <div className='flex gap-2'>
          <p className="text-gray-700 ">
        <strong>Day of Delivery:</strong> 
      </p>
              <select defaultValue="Tuesday" className="border-2 border-white shadow-xl rounded-md w-[40%] pl-2 pr-2 ">
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>
      </div>
    

    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1">
      <div className='flex gap-2'>
  <p className="text-gray-700 ">
        <strong>Contact Person:</strong> 
      </p>

           <input type="text" defaultValue="Solomon Grandie" className="border-2 border-white inset-shadow-sm shadow-xl/30 shadow-gray-400 rounded-md w-[40%] pl-2 pr-2" />
      </div>
    
    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1">
      <div className='flex gap-2'>
     <p className="text-gray-700 ">
        <strong>Mobile No:</strong> 
      </p>
      <input type="text" defaultValue="0424 456 789" className="border-2 border-white inset-shadow-sm shadow-xl/30 shadow-gray-400 rounded-md w-[40%] pl-2 pr-2" />
      </div>
 
    </div>
  </div>

  {/* Action Buttons */}
  <div className="mt-4 flex flex-col gap-2 justify-end">
    <FaEdit className='text-orange-500 text-xl' />
    <FaFolderOpen className='text-amber-300 text-xl' />
  </div>
</div>
<div className="bg-white  p-4 pr-3 pl-0 pt-1 pb-1 m-4 rounded-2xl flex gap-4 items-center relative" style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #807e7e66' }}>

  {/* Close Button (top-left corner) */}
  <button className="absolute top-0 right-0 m-2 border-2 rounded-full text-red-500 hover:text-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  {/* Card Content */}
  <div className="mt-2  space-y-2 flex flex-col justify-start">
    <div className="pl-2 pr-2 space-y-4 mb-1 mt-2">
      <div className='flex gap-2'>
          <p className="text-gray-700  ">
        <strong>Supplier:</strong>
        </p>
         <input type="text" defaultValue="Meatup" className="border-2 border-white inset-shadow-sm shadow-xl/30 shadow-gray-400 rounded-md w-[40%] pl-2 pr-2" />
      
      </div>
    
    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1 ">
       <div className='flex gap-2'>
  <p className="text-gray-700 ">
        <strong>Repeat Cycle:</strong> 
      </p>
        <select defaultValue="Weekly" className="border-2 border-white shadow-xl rounded-md w-[40%] pl-2 pr-2">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
       </div>
    
    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1">
      <div className='flex gap-2'>
          <p className="text-gray-700 ">
        <strong>Day of Delivery:</strong> 
      </p>
              <select defaultValue="Tuesday" className="border-2 border-white shadow-xl rounded-md w-[40%] pl-2 pr-2 ">
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>
      </div>
    

    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1">
      <div className='flex gap-2'>
  <p className="text-gray-700 ">
        <strong>Contact Person:</strong> 
      </p>

           <input type="text" defaultValue="Solomon Grandie" className="border-2 border-white inset-shadow-sm shadow-xl/30 shadow-gray-400 rounded-md w-[40%] pl-2 pr-2" />
      </div>
    
    </div>

    <div className="pl-2 pr-2 space-y-4 mb-1">
      <div className='flex gap-2'>
     <p className="text-gray-700 ">
        <strong>Mobile No:</strong> 
      </p>
      <input type="text" defaultValue="0424 456 789" className="border-2 border-white inset-shadow-sm shadow-xl/30 shadow-gray-400 rounded-md w-[40%] pl-2 pr-2" />
      </div>
 
    </div>
  </div>

  {/* Action Buttons */}
  <div className="mt-4 flex flex-col gap-2 justify-end">
    <FaEdit className='text-orange-500 text-xl' />
    <FaFolderOpen className='text-amber-300 text-xl' />
  </div>
</div>
            </div>
  )
}
export default RepeatOrderMain;
