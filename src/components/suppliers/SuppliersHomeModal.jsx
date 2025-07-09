import React, { useState } from 'react';
import { FaWifi } from 'react-icons/fa';
const SuppliersHomeModal = () => {
  // Declare showModal state to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* This button will trigger the modal */}
   <button
      onClick={() => setShowModal(true)}
      className="bg-green-500 text-[var(--text-secondary)] mt-2 mb-2 shadow-xl shadow-gray-200 px-2 py-2 rounded-lg lg:w-2/5 w-64 flex items-center justify-center space-x-2"
    >
     
      <span>Connect Supplier Using Token</span> {/* Text */}
       <FaWifi size={20}  /> {/* Icon */}
    </button>
          

      {showModal && (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Semi-transparent background
          className="fixed inset-0 flex items-center justify-center z-100"
        >
          <div className="relative bg-[var(--secondary-color)] rounded-2xl shadow-xl p-8 w-11/12 max-w-md text-center space-y-4">
            <button
              onClick={() => setShowModal(false)} // Close the modal when clicked
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold shadow-xl"
            >
              &times;
            </button>
            <h2 className="font-semibold text-gray-700 mt-4 text-lg">Connect Supplier Using Token</h2>
            <input
              type="text"
              placeholder="Enter Token For Verification"
              className="w-full px-4 py-2 text-gray-600 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
            />
            <button
              onClick={() => setShowModal(false)}  // This will close the modal
              className="bg-green-500 text-[var(--text-secondary)] px-6 py-2 rounded-lg font-semibold shadow-2xl shadow-orange-700"
            >
              Verify Token
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuppliersHomeModal;
