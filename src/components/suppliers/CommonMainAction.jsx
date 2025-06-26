
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
              className="border-2 bg-orange-500 border-orange-500 shadow-xl shadow-gray-400 text-white px-4 py-2 rounded-md hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition"
            >
              Main Menu
            </button>
            {mainMenuOpen && (
              <div className="absolute left-0 mt-2 bg-white border-2 border-orange-500 rounded-md shadow-lg w-48 z-20">
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
                  Sections
                </button>
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
                  Pantry List
                </button>
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
                  Prep-List
                </button>
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
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
              className="border-2 bg-orange-500 shadow-xl shadow-gray-400 border-orange-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition"
            >
              Action
            </button>
            {actionMenuOpen && (
              <div className="absolute left-[-40px] mt-2 bg-white border-2 border-orange-500 rounded-md shadow-lg w-[140px] z-20">
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
                  Manage Order
                </button>
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
                  Check Delivery
                </button>
                <button className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100">
                  View Orders
                </button>
              </div>
            )}
          </div>
    </div>
  )
}

export default CommonMainAction;
