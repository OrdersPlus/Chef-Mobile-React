import React from 'react'
import { MdOutlineCalendarMonth } from 'react-icons/md'

const Sentorder = ({order, supplier}) => {
  // console.log("order", order)
  // console.log("supplier", supplier)
  return (
    <div>
         {/* <div className="rounded-lg shadow-lg "> */}
       {/* className="rounded-md bg-white shadow-md " */}

    <div>
         {/* <div className="rounded-lg shadow-lg "> */}
      <div className="m-3 p-4 pt-0 rounded-md bg-white shadow-md space-y-4 mb-2 ">
        {/* Back and Cancel Button */}
        <div className="flex justify-between items-center mb-4">
          {/* Order Details Section */}
          <div className=" mb-6">
            <p className="text-lg font-semibold text-gray-800">
              {/* Order # ABC MEAT-035 */}
              Order # {order?.order_no}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Status: <span className="text-yellow-500 text-lg">{order?.status}</span>
            </p>
            <p className="text-sm text-gray-600">
              Delivery Date:{" "}
              {/* <span className="font-semibold text-black">Tue 24, Jun 2025</span> */}
              <span className="font-semibold text-black">{order?.delivery_date}</span>
            </p>
            <p className="text-sm text-gray-600">
              Delivery Fee:{" "}
              <span className="font-semibold text-black">${order?.delivery_fee}</span>
            </p>
            <p className="text-lg font-semibold text-black mt-2">
              Total Cost: <span className="text-green-500">${order?.total_amount}</span>
            </p>
          </div>
          <button className="bg-green-500 shadow-xl shadow-gray-400 text-white py-2 px-4 rounded-full text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  
     

    </div>
  )
}

export default Sentorder