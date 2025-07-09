import React from 'react'

const Sentorder = () => {
  return (
    <div>
         {/* <div className="rounded-lg shadow-lg "> */}
      <div className="m-3 p-4 pt-0 rounded-md bg-white shadow-md space-y-4 mb-2 ">
        {/* Back and Cancel Button */}
        <div className="flex justify-between items-center mb-4">
          {/* Order Details Section */}
          <div className=" mb-6">
            <p className="text-lg font-semibold text-gray-800">
              Order # ABC MEAT-035
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Status: <span className="text-yellow-500">SENT ORDER</span>
            </p>
            <p className="text-sm text-gray-600">
              Delivery Date:{" "}
              <span className="font-semibold text-black">Tue 24, Jun 2025</span>
            </p>
            <p className="text-sm text-gray-600">
              Delivery Fee:{" "}
              <span className="font-semibold text-black">$10.00</span>
            </p>
            <p className="text-lg font-semibold text-black mt-2">
              Total Cost: <span className="text-green-500">$36.00</span>
            </p>
          </div>
          <button className="bg-green-500 shadow-xl shadow-gray-400 text-white py-2 px-4 rounded-full text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sentorder