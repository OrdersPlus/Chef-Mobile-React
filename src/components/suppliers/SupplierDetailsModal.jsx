
import React, { useState } from "react";
const SupplierDetailsModal = ({ isOpen, toggleModal }) => {
 return (
    <>
      {isOpen && (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className="fixed inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center z-100">
          <div className="bg-white rounded-lg pt-3 p-3 relative w-11/12 sm:w-96">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Add New Payment Card
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Card Number:
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  className="w-full px-4 py-2 text-gray-600 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
                  placeholder="Enter Card Number"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="expDate"
                    className="block text-gray-700 text-sm font-medium"
                  >
                    Exp Date:
                  </label>
                  <input
                    id="expDate"
                    type="text"
                    className="w-full px-4 py-2 text-gray-600 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
                    placeholder="eg. 08/24"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ctv"
                    className="block text-gray-700 text-sm font-medium"
                  >
                    CTV:
                  </label>
                  <input
                    id="ctv"
                    type="text"
                    className="w-full px-4 py-2 text-gray-600 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
                    placeholder="eg. 001"
                  />
                </div>
              </div>
<div className="flex justify-center items-center">
 <button
                type="submit"
                className="bg-blue-500  text-white px-4 py-2 rounded text-sm shadow-2xl shadow-blue-700 "
              >
                Save Card
              </button>
</div>
             
            </form>

            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 z-10 border-2 border-gray-200 rounded-full text-gray-600 hover:text-gray-900"
            >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Main Component
const PaymentForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div >
      {/* Button to open modal */}
      <button
        onClick={toggleModal}
        className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700"
      >
        + Add a new card
      </button>

      {/* Modal Component */}
      <PaymentModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default SupplierDetailsModal