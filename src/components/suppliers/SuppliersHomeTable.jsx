import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
const SuppliersHomeTable = ({suppliers}) => {
  // console.log(suppliers);
  return (
    <div className="container mt-2 p-4 mx-auto overflow-auto ">
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
              >
                Name of Supplier
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Contact Person
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Phone No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Products & Prices
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"
              >
                Supplier Details
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {suppliers?.map((supplier, index) => (
            <tr key={index} className="rounded-lg shadow-lg shadow-gray-300">
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">
                {supplier?.company_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                {supplier?.alias_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                {supplier?.phone_number}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-blue-500">
                {supplier?.email}
              </td>
              <td className="py-3">
                <div className="flex justify-center">
                  <Link to={`/suppliers/product-list/${supplier?.id}`}>

                    <FaClipboardList className="text-green-500" size="2em" />
                  </Link>
                </div>
              </td>
              <td className="py-3">
                <div className="flex justify-center">
                  <Link to={`/suppliers/details/${supplier?.id}`}>
                    <FaFolder className="text-[#FFD700]" size="2em" />
                  </Link>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SuppliersHomeTable;
