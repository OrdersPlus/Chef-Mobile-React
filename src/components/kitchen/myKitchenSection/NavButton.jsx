import React from 'react'
import { Link, NavLink } from 'react-router'

const NavButton = () => {
  return (
    <div>
        <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
       <NavLink
  to="/kitchen/home"
  className={({ isActive }) =>
    `flex-1 py-3 text-center ${isActive ? 'bg-orange-500 font-semibold text-white border-b-2 border-orange-500' : 'text-sm'} rounded-lg text-sm`
}
>
  Section
</NavLink>

<NavLink
  to="/kitchen/pantry-list"
  className={({ isActive }) =>
    `flex-1 py-3 text-center ${isActive ? 'bg-orange-500 font-semibold text-white border-b-2 border-orange-500' : 'text-sm'}`
  }
>
  Pantry-list
</NavLink>

<NavLink
  to="/kitchen/prep-list"
  className={({ isActive }) =>
    `flex-1 py-3 text-center ${isActive ? 'bg-orange-500 font-semibold text-white border-b-2 border-orange-500' : 'text-sm'}`
  }
>
  Prep-list
</NavLink>



      </div>

     
    </div>
  )
}

export default NavButton
