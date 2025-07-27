import { FiClock } from "react-icons/fi";
import { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const ClockIn = () => {
  const [clock, setClock] = useState(false);
  return (
    <>
      <div
        onClick={() => setClock(!clock)}
        className="flex justify-between items-center inset-shadow-sm shadow-xl/30 mt-5 p-2 rounded-lg"
      >
        {/* <div> */}
        <div>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl border-2 ${
              clock ? "bg-orange-500 text-white" : "text-orange-500"
            }`}
          >
            Clock In/Out
            <FaRegClock className="mt-1" />
          </button>
        </div>
        {/* Right: Status Indicator */}
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm text-green-600 font-medium">Active</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">04h 32m</p>
        </div>
      </div>

      <div
        className={`${
          clock ? "" : "hidden"
        } max-w-2xl p-3 bg-white rounded-2xl shadow-xl border border-gray-100 mx-5 mb-5 mt-1`}
      >
        {/* Clock In / Take a Break Section */}
        <div className="mx-auto p-2 flex justify-between">
          <div>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl border-2 whitespace-nowrap ${
                clock ? "bg-orange-500 text-white" : "text-orange-500"
              }`}
            >
              <span className="flex items-center gap-2">
                Clock In/Out
                <FaRegClock className="text-base" />
              </span>
            </button>

            <button className="bg-orange-500 text-white px-4 py-2 rounded-2xl mt-2 inline-flex items-center gap-1">
              Take a Break
              <GiCoffeeCup className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoWifiOutline className="text-2xl text-gray-500 mb-1" />
            <button className="text-gray-500 px-4 py-2 rounded-2xl text-lg">
              Location (Office)
            </button>
          </div>
        </div>

        {/* Active & Break Time Summary */}
        <div className="bg-gray-50 rounded-xl p-4 mx-2 my-4 border border-gray-200 shadow-sm">
          <div className="flex justify-around text-center text-sm font-medium text-gray-700">
            <div className="flex flex-col items-center">
              <CiClock2 className="w-7 h-6 text-green-500 mb-1" />
              <span>Total Active Time</span>
              <span className="text-lg font-semibold text-gray-900">
                4h 32m
              </span>
            </div>
            <div className="border-l border-gray-300 h-12 mx-4"></div>
            <div className="flex flex-col items-center">
              <CiClock2 className="w-7 h-6 text-yellow-500 mb-1" />
              <span>Total Break Time</span>
              <span className="text-lg font-semibold text-gray-900">
                1h 10m
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockIn;
