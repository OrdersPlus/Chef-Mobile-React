import React from 'react'
import { Link, NavLink } from 'react-router'
const OrderButton = () => {
  return (
    <div>
       <div className='m-4 '>
        <div className="flex  bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-2">
       <NavLink
  to="/orders/history"
  className={({ isActive }) =>
    `flex px-1 py-3  text-center ${isActive ? 'bg-orange-500 font-semibold text-white border-b-2 border-orange-500' : 'text-sm'} rounded-lg text-sm`
}
>
  Master Order List
</NavLink>

<NavLink
  to="/"
  className={({ isActive }) =>
    `flex px-1 py-3 text-center ${isActive ? 'bg-orange-500 font-semibold text-white border-b-2 border-orange-500' : 'text-sm'}`
  }
>
  Order History
</NavLink>

<NavLink
  to="/prep-list"
  className={({ isActive }) =>
    `flex px-1 py-3 text-center ${isActive ? 'bg-orange-500 font-semibold text-white border-b-2 border-orange-500' : 'text-sm'}`
  }
>
  Repeat Orders
</NavLink>



      </div>

     
    </div>
       
            
    </div>
        
  )
}
export default OrderButton;