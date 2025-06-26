import React from 'react'
const ProductListModal = ({ modalOpen, handleModalClose, modalTitle }) => {
 if (!modalOpen) return null;

  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className="fixed inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center z-100"
    >
      <div className="bg-white rounded-2xl shadow-lg pt-3 p-3 w-[85%] sm:max-w-xs sm:w-[90%] md:max-w-sm md:w-[85%] lg:max-w-md lg:w-[70%] xl:max-w-lg xl:w-[60%] max-h-[80vh] md:h-[70%] relative overflow-y-auto">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 z-10 border-2 border-gray-200 rounded-full text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-lg font-bold mb-1">{modalTitle}</h2>
        <div className="flex justify-center items-center sm:flex-row gap-x-0">
          {/* Product Image */}
          <div className="w-full flex sm:w-3/5 mr-2">
            <img
              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/x44vv6k8yqbppyrrjnlb"
              alt="Product"
              className="rounded-lg w-full h-44 object-cover bg-white border-2 border-gray-400 shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-2/5 mt-4 sm:mt-0">
            <div className="space-y-1">
              <div>
                <strong className="">Brand:</strong>
                <span className="text-gray-600">A1C Traming</span>
              </div>
              <div>
                <strong className="">Cost:</strong>
                <span className="text-gray-600">1 kg</span>
              </div>
              <div>
                <strong className="">SKU:</strong>
                <span className="text-gray-600">EFL-3,855</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <strong className="">Price:</strong>
                <span className="text-lg font-semibold text-gray-900">$7.02</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note Field and Button Section */}
        <div className="mt-2 flex justify-center">
          <textarea
            className="w-65 border-1 border-gray-400 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
            rows="3"
            placeholder="Notes..."
          >
            Hello
          </textarea>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">
            Add to pantry
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductListModal;