
import { Link } from 'react-router'
import React, { useState, useRef, useEffect } from 'react';

const CommonMainAction = () => {
     // State for controlling dropdowns and modal visibility
      const [mainMenuOpen, setMainMenuOpen] = useState(false);
      const [actionMenuOpen, setActionMenuOpen] = useState(false);
        // Refs for dropdowns
        const mainMenuRef = useRef(null);
        const actionMenuRef = useRef(null);
    // Function to handle clicks or touches outside
  const handleClickOutside = (event) => {
    if (mainMenuRef.current && !mainMenuRef.current.contains(event.target)) {
      setMainMenuOpen(false);
    }
    if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
      setActionMenuOpen(false);
    }
  };      
  // Close the dropdown when clicking/touching outside
  useEffect(() => {
    // Add event listeners for mouse clicks and touch events
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup the event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);
  return (
    <div className="flex justify-between items-center mt-4">
        {/* Main Menu Dropdown */}
          <div className="relative" ref={mainMenuRef}>
            <button
              onClick={() => {
                setMainMenuOpen(!mainMenuOpen);
                setActionMenuOpen(false);
              }}
              className="border-2 text-orange-500 border-orange-500 bg-white shadow-xl shadow-gray-400 px-4 py-2 rounded-xl transition"
            >
              Main Menu
            </button>
            {mainMenuOpen && (
              <div className="absolute left-0 mt-2 bg-white  rounded-md shadow-lg w-36 z-20 space-y-2 p-2">
                <button className="w-full text-center px-4 py-2 text-orange-500 border-2 rounded-xl">
                  Sections
                </button>
                <button className="w-full text-center px-4 py-2 text-orange-500 border-2 rounded-xl">
                  Pantry List
                </button>
                <button className="w-full text-center px-4 py-2 text-orange-500 border-2 rounded-xl">
                  Prep-List
                </button>
                <button className="w-full text-center px-4 py-2 text-orange-500 border-2 rounded-xl">
                  Supplier
                </button>
              </div>
            )}
          </div>

          {/* Action Dropdown */}
          <div className="relative" ref={actionMenuRef}>
            <button
              onClick={() => {
                setActionMenuOpen(!actionMenuOpen);
                setMainMenuOpen(false);
              }}
              className="border-2 text-orange-500 border-orange-500 bg-white shadow-xl shadow-gray-400 px-4 py-2 rounded-xl transition"
            >
              Action
            </button>
            {actionMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white  rounded-md shadow-lg w-42 z-20 space-y-2 p-2">
                <button className="w-full text-center px-4 py-2 text-orange-500 hover:bg-orange-100 border-2 rounded-xl">
                  Manage Order
                </button>
                <button className="w-full text-center px-4 py-2 text-orange-500 hover:bg-orange-100 border-2 rounded-xl">
                  Check Delivery
                </button>
                <button className="w-full text-center px-4 py-2 text-orange-500 hover:bg-orange-100 border-2 rounded-xl">
                  View Orders
                </button>
              </div>
            )}
          </div>
    </div>
  )
}

export default CommonMainAction;
