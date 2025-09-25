import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { errorToast, successToast } from "../custom/Toastify";
import axios from "axios";
import ProductListModal from "./ProductListModal";
const ProductListTable = ({ suppliers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleModalOpen = (title, supplier) => {
    setModalTitle(title);
    setSelectedSupplier(supplier);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // console.log(suppliers)

  const handleAddToOrderList = async (supplier) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACK_END_URL + "suppliers/add-order-list", // adjust the endpoint if needed
        {
          product_id: supplier.id,
          list_type: supplier.list_type, // Make sure this exists
          supplier_id: supplier.supplier_id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        }
      );
      successToast(response.data.message || "Product added!");
    } catch (error) {
      // console.error(error?.response?.data?.message);
      errorToast(error?.response?.data?.message || "Failed to add product.");
      // console.error(error);
    }
  };
  return (
    <>
      <ProductListModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        modalTitle={modalTitle}
        supplier={selectedSupplier}
      />

      <div className="overflow-x-auto shadow-lg rounded-lg bg-[var(--secondary-color)]">
        <table className="min-w-full table-auto text-gray-700">
          <thead
            className="bg-[var(--secondary-color)] text-sm pt-2"
            style={{
              boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
            }}
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left   tracking-wider text-[var(--text-primary)] whitespace-nowrap"
              >
                SKU
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left tracking-wider text-[var(--text-primary)] whitespace-nowrap"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Sub Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Unit Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Detail
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              ></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {suppliers?.map((supplier, index) => (
              <tr key={index} className="rounded-lg shadow-xl shadow-gray-300">
                <td className="py-4 px-6 whitespace-nowrap w-40">
                  <div className="w-16 h-16 bg-[var(--secondary-color)] border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center">
                    <img
                      src={supplier?.product_image}
                      alt="Beef Tenderloin"
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  {supplier?.sku}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  <div className="flex flex-col">
                    <span className="font-semibold">{supplier?.name}</span>
                    <span className="text-gray-600">
                      {supplier?.unit_qty} {supplier?.unit_of_measurement}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  {supplier?.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  {supplier?.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  $ {supplier?.cost_price}
                </td>
                <td className="py-3 px-4">
                  <FaSearch
                    className="text-xl text-orange-300 "
                    onClick={() => handleModalOpen(supplier?.name, supplier)}
                  />
                </td>
                <td className="py-3 px-4">
                  <button
                    className="py-1 px-2 text-sm text-[var(--text-secondary)] bg-[var(--primary-color)] rounded border border-[var(--border-color] hover:bg-[var(--secondary-color)] hover:text-gray-900   "
                    onClick={() => handleAddToOrderList(supplier)}
                  >
                    <FaShoppingBag className="text-xl " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductListTable;
