import React from 'react'

const RepeatOrderButton = () => {
  return (
    <div className='p-4 pt-0'>
            <button className="flex  shadow-xl shadow-gray-400  items-center bg-orange-500  text-white hover:bg-white hover:text-orange-500  border-2 border-orange-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
      <span className="text-xl">+</span>
    <span>New Repeat Order</span>
    </button>
    </div>

  )
}
export default RepeatOrderButton;