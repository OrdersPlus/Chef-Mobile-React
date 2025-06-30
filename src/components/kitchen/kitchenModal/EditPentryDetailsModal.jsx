import React from "react";

const EditPentryDetailsModal = () => {
  return (
    <dialog id="searchModal" className="modal">
      <div className="modal-box w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-2xl shadow-lg relative pt-4 p-4">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-ghost absolute right-4 top-4 border-2 border-gray-400 text-gray-600 hover:text-gray-900">
            ✕
          </button>
        </form>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center sm:text-left">
          Beef Tenderloin
        </h2>

        {/* Content Area */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Image (Smaller, Aligned) */}
          <div className="w-full sm:w-[40%] flex justify-center sm:justify-start">
            <img
              src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
              alt="Beef Tenderloin"
              className="rounded-lg w-28 h-20 object-cover border-2 border-gray-400 shadow"
              style={{
                boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 6px #54545466",
              }}
            />
          </div>

          {/* Product Info */}
          <div className="w-full sm:w-[60%] space-y-1 text-sm text-center">
            <div>
              <strong className="text-gray-700">Brand:</strong>{" "}
              <span className="text-gray-600">A1C Traming</span>
            </div>
            <div>
              <strong className="text-gray-700">Cost:</strong>{" "}
              <span className="text-gray-600">1 kg</span>
            </div>
            <div>
              <strong className="text-gray-700">SKU:</strong>{" "}
              <span className="text-gray-600">EFL-3,855</span>
            </div>
            <div className="flex items-center space-x-2 mt-2 justify-center">
              <strong className="text-gray-700">Price:</strong>
              <span className="text-lg font-semibold text-gray-900">$7.02</span>
            </div>
          </div>
        </div>

        {/* Note + Action */}
        <div className="mb-4 flex justify-center">
          <textarea
            className="w-72 border border-gray-300 rounded p-2 resize-none"
            rows="3"
            placeholder="Notes..."
            defaultValue="Hello"
          />
        </div>

        <div className="flex justify-center gap-3 pt-4 items-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700">
            {" "}
            Add to Pantry
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default EditPentryDetailsModal;
