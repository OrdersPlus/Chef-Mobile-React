import React, { useState } from "react";
import CommonMainAction from "../../components/suppliers/CommonMainAction";
import ProductListButton from "../../components/suppliers/ProductListButton";
import Pagination from "../../components/suppliers/Pagination";
import ProductListModal from "../../components/suppliers/ProductListModal";
import ProductListTable from "../../components/suppliers/ProductListTable";

export const SupplierProductList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const handleModalOpen = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="m-0 p-0 pb-16">
      {/* Main Content */}
      <div className="max-w-screen-sm mx-auto p-4 bg-[var(--secondary-color)] rounded-lg shadow-lg">
        <div className="p-2 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4">
          {/* Header */}
          <div className="m-4 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 mt-2">
            <h3 className="text-center font-bold pb-2">Product List</h3>
          </div>

            <CommonMainAction />
            
          <ProductListButton />
        </div>
        {/* Paginaton */}

        <Pagination />

        <div className="container mx-auto mt-2">
          <ProductListTable handleModalOpen={handleModalOpen} />

          <ProductListModal
            modalOpen={modalOpen}
            handleModalClose={handleModalClose}
            modalTitle={modalTitle}
          />
        </div>
      </div>
    </div>
  );
};
