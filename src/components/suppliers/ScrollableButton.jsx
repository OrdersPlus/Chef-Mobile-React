import React from 'react'

 const ScrollableButton = () => {
  return (
   
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-orange-500 font-bold text-lg text-center">Categories</h2>
          </div>

          <div className="container mx-auto pl-2 mb-2 px-1">
            <div className="overflow-x-auto">
              <div className="flex gap-3 py-2 min-w-max">
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  All Categories
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Fruit & Vegetables
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Meat & Poultry
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Seafood
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Dry Good
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Bakery & Patisserie
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Dairy & Cheese
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Coffee & Tea
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Alcohol
                </button>
                <button className="py-2 px-4 hover:bg-gray-200 hover:text-orange-500 rounded-lg bg-orange-500 text-white border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-orange-500 focus:text-white transition">
                  Dairy
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}
export default ScrollableButton;