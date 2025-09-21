import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const OrderHistoryTable = ({ history }) => {
  return (
    <div className="container mt-2 p-4 mx-auto overflow-auto ">
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full table-auto text-gray-700">
          <thead
            className="bg-white text-sm pt-2"
            style={{
              boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
            }}
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"
              >
                Order id
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"
              >
                Supplier
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {history?.map((item, index)=>(

            <tr key={index} className="rounded-lg shadow-lg shadow-gray-300">
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">
                {index+1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                {/* ABC MEAT-035 {item?.order_no} */}
                {item?.order_no || "None"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                {/* ABC Meat & Poutry {item?.supplier?.company_name} */}
                {/* {console.log(item?.supplier?.company_name)} */}
              {item?.supplier?.company_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  w-40 text-black">
                <button className={`${item?.status == "Delivered" ? "bg-blue-300 text-blue-700" : "" } ${item?.status == "Sent" ? "bg-green-100 text-green-400" : "bg-blue-100 text-blue-400" } px-2 py-1 rounded-lg`}>
                  {/* Delivered */}
                  {item?.status}
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                {/* Jun 22, 2025 */}
                {item?.delivery_date}
              </td>
              <td className="py-3 px-4">
                <div className="flex justify-center">
                  <Link to={`/orders/delivered-orders-details/${item?.id}`}>
                    <FaSearch className="text-xl text-orange-300 cursor-pointer" />
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
export default OrderHistoryTable;
