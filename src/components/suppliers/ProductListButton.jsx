import React, { useState, useRef, useEffect } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";

const ProductListButton = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  //for pop up
  useEffect(() => {
    function handleOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    if (mobileOpen) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [mobileOpen]);
  return (
    <div className="mt-4 mb-2">
      <h1 className="text-lg font-semibold text-center">
        ABC Meat & Poultry - Product List
      </h1>
      <div className="flex justify-between mt-3 items-center">
        <select
          id="categories"
          className="bg-orange-500 text-white border-2 border-orange-500 rounded-lg p-1"
        >
          <option>All Category</option>
          <option>Meat</option>
        </select>

        <div className="relative " ref={menuRef}>
          {/* Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md focus:outline-none"
          >
            <FiMenu className="bg-white border-2 border-orange-500 text-orange-500 p-1 rounded-full  text-xl h-7 w-7" />
          </button>

          {/* Dropdown Menu */}
          {mobileOpen && (
            
            <div className="absolute top-full -right-5 bg-white shadow-lg rounded-lg  pr-0  w-[380px] mt-2 z-10 p-4 grid grid-cols-2 gap-1">
              <button className="text-left px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white flex items-center gap-2 focus:outline-none">
                <FiMenu className="text-orange-500 text-xl" />
                <span>Standard Prices</span>
              </button>

              <button className="text-left px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white flex items-center  gap-2 focus:outline-none">
                <FaSackDollar className="text-blue-500  text-xl" />

                <span>My Prices</span>
              </button>

              <button className="text-left px-4 py-2 border-2 border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white flex items-center gap-2 focus:outline-none">
                <FaRegStar className="text-green-500  text-xl" />
                <span>My Special</span>
              </button>

              <button className="text-left px-4 py-2 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white flex items-center gap-2 focus:outline-none">
                <FaBullhorn className="text-red-500  text-xl" />
                <span>Promotions</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductListButton;
