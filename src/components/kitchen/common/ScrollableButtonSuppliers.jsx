import { useState } from "react";

export const ScrollableButtonSuppliers = ({ buttonLabels, supplierFilter }) => {
  const [activeSupplier, setActiveSupplier] = useState('');

  const handleSupplierClick = (supplierId) => {
    setActiveSupplier(supplierId);
    supplierFilter(supplierId); // Call parent with selected supplier ID
  };

  return (
    <div className="overflow-x-auto w-full mt-5 shadow mb-5">
      <div className="flex space-x-3 p-4 min-w-full">
        {/* All Button */}
        <div
          className={`p-1 px-4 rounded-md shadow flex justify-center items-center whitespace-nowrap min-w-max cursor-pointer
            ${activeSupplier === '' ? 'bg-green-600 text-white' : 'bg-white text-green-600'}
          `}
          onClick={() => handleSupplierClick('')}
        >
          All
        </div>

        {/* Supplier Buttons */}
        {buttonLabels?.map((item) => (
          <div
            key={item.id}
            className={`p-1 px-4 rounded-md shadow flex justify-center items-center whitespace-nowrap min-w-max cursor-pointer
              ${activeSupplier === item.id ? 'bg-green-600 text-white' : 'bg-white text-green-600'}
            `}
            onClick={() => handleSupplierClick(item.id)}
          >
            {item.company_name}
          </div>
        ))}
      </div>
    </div>
  );
};
