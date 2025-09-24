import React, { useState, useEffect } from "react";
import axios from "axios";
import { successToast, errorToast } from "../custom/Toastify";

const ProductListModal = ({
  modalOpen,
  handleModalClose,
  modalTitle,
  supplier,
}) => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (supplier?.notes) {
      setNotes(supplier.notes);
    } else {
      setNotes("");
    }
  }, [supplier]);

  if (!modalOpen) return null;

  const handleAddToPantry = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACK_END_URL}suppliers/update-pantry/${supplier?.id}`,
        { notes },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        }
      );

      successToast(response.data.message || "Notes updated successfully.");
      handleModalClose();
    } catch (error) {
      errorToast(
        error?.response?.data?.message || "Something went wrong updating notes."
      );
    }
  };

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="fixed inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center z-100"
    >
      <div className="bg-[var(--secondary-color)] rounded-2xl shadow-lg pt-3 p-3 w-[85%] sm:max-w-xs sm:w-[90%] md:max-w-sm md:w-[85%] lg:max-w-md lg:w-[70%] xl:max-w-lg xl:w-[60%] max-h-[80vh] md:h-[70%] relative overflow-y-auto">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 z-10 border-2 border-gray-200 rounded-full text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <h2 className="text-lg font-bold mb-1">{modalTitle}</h2>
        <div className="flex justify-center items-center sm:flex-row gap-x-0">
          <div className="w-full flex sm:w-3/5 mr-2">
            <img
              src={supplier?.product_image}
              alt="Product"
              className="rounded-lg w-full h-44 object-cover bg-[var(--secondary-color)] border-2 border-gray-400 shadow-lg"
            />
          </div>

          <div className="w-full sm:w-2/5 mt-4 sm:mt-0">
            <div className="space-y-1">
              <div>
                <strong>Brand: </strong>
                <span className="text-gray-600">
                  {supplier?.product_brand || "N/A"}
                </span>
              </div>
              <div>
                <strong>Cost: </strong>
                <span className="text-gray-600">
                  {supplier?.unit_qty} {supplier?.unit_of_measurement}
                </span>
              </div>
              <div>
                <strong>SKU: </strong>
                <span className="text-gray-600">{supplier?.sku}</span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <strong>Price: </strong>
                <span className="text-lg font-semibold text-gray-900">
                  ${supplier?.cost_price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-center">
          <textarea
            className="w-full border border-gray-400 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
            rows="3"
            placeholder="Notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            className="bg-[var(--primary-color)] hover:bg-orange-700 text-[var(--text-secondary)] px-4 py-2 rounded text-sm shadow-2xl shadow-orange-700"
            onClick={handleAddToPantry}
          >
            Add to pantry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListModal;
