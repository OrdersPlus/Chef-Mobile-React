import React from 'react'

const OrderHistoryButton = () => {
  return (
    <div className="p-4 pt-0">
         <button class="flex  shadow-xl shadow-gray-400  items-center bg-orange-500  text-white hover:bg-white hover:text-orange-500  border-2 border-orange-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      All Orders
    </button>
    </div>
  
  )
}
export default OrderHistoryButton;
