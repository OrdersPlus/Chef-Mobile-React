import React from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const PantryListDetailsModal = () => {
  return (
  
 <dialog id="productModal" className="modal">
         <div className="modal-box w-[400px] p-6 relative">
           <button
             className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
             onClick={() => document.getElementById('productModal').close()}
           >
             &times;
           </button>
 
           <h2 className="text-lg font-bold text-gray-800 mb-2">Beef Tenderloin</h2>
 
           <div className="flex flex-row gap-4 mb-4">
             <img
               src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
               alt="Product"
               className="w-40 h-24 object-cover rounded border border-amber-50 shadow-lg shadow-gray-400"
             />
             <div className="text-sm space-y-1">
               <p className="font-semibold text-gray-900">ABC Meat & Poultry</p>
               <p className="text-gray-600">SKU: <span className="font-medium">BTL-12345</span></p>
               <p className="text-green-600 font-semibold">In Stock</p>
               <p className="text-gray-500 text-xs">Next Del: <span className="font-medium">26/05/2023</span></p>
               <p className="text-gray-700">5 kg</p>
             </div>
           </div>
 
   <div className="mb-4 flex flex-col items-center">
             <label className="text-sm text-gray-600 mb-1">Quantity</label>
             <div className="relative w-16">
               <input
                 type="number"
                 defaultValue="1"
                 min="1"
                 className="w-full border border-gray-300 rounded px-2 py-1 text-center appearance-none"
               />
               <div className="absolute right-0 top-0 flex flex-col h-full justify-between py-1 pr-1">
                 <button className="text-gray-500 hover:text-gray-700">
                   <BiChevronUp  size={16} />
                 </button>
                 <button className="text-gray-500 hover:text-gray-700">
                   <BiChevronDown size={16} />
                 </button>
               </div>
             </div>
           </div>
 
 
              <div className="mb-4 flex justify-center">
             <textarea
               className="w-72 border border-gray-300 rounded p-2 resize-none"
               rows="3"
               placeholder="Notes..."
             >Hello</textarea>
           </div>
 
             <div className="flex justify-center gap-3 pt-4 items-center">
             <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-green-700">Save Notes</button>
             <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">Add to Order</button>
           </div>
         </div>
       </dialog>
    
  )
}

export default PantryListDetailsModal
