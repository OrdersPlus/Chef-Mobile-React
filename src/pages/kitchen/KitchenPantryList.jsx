import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import PantryListDetailsModal from "../../components/kitchen/kitchenModal/PantryListDetailsModal";

export const KitchenPantryList = () => {
  return (
    <div>
      <div className="pb-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
          <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm">
            Action
          </button>
          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <Link
            to="/add-to-pantry"
            className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm"
          >
            Edit Pantry
          </Link>
        </div>

        <div className="p-4 sm:p-6 rounded-md space-y-4 mt-4">
          <NavButton />

          <div className="overflow-x-auto w-full mt-2">
            <div className="flex space-x-4 p-4 min-w-[1000px]">
              {[
                "Pan",
                "Lader",
                "Prep-list",
                "Bar",
                "Pan",
                "Prep-list",
                "Prep-list",
                "Prep-list",
                "Prep-list",
                "Prep-list",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-20 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3">
            <div className="flex items-center border border-orange-500 rounded-md overflow-hidden bg-gray-50 w-full sm:w-1/3 md:w-1/4 inset-shadow-sm shadow-xl/30">
              <input
                type="text"
                placeholder="Search Item"
                className="w-full px-3 py-2 bg-transparent focus:outline-none"
              />
              <div className="px-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center font-semibold text-lg flex-grow ">
              Pan Pantry List
            </div>

            <button className="border border-orange-500 text-orange-500 font-medium px-4 py-2 rounded-md hover:bg-orange-50 w-full sm:w-auto inset-shadow-sm shadow-xl/30">
              Clear List
            </button>
          </div>

          <div className="mx-auto mt-10 px- sm:px-6 lg:px-8  ">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg inset-shadow-sm shadow-xl/30 border border-white ">
              <img
                src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
                alt="Beef"
                className="w-16 h-16 rounded-md object-cove border border-amber-50 shadow-lg shadow-gray-400 "
              />

              <div className="flex-1 px-3">
                <p className="font-semibold text-gray-800">Beef Tenderloin </p>
                <p className="text-sm text-gray-500">5kg </p>
              </div>

              <div className="flex-1 px-2">
                <p className="font-semibold text-gray-800">Price</p>
                <p className="text-sm text-red-500">$55.8</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    document.getElementById("productModal").showModal()
                  }
                  className="border-2 border-blue-500 text-blue-500 rounded p-1 hover:bg-orange-100"
                >
                  <AiOutlineInfoCircle className="h-5 w-5" />
                </button>
                <button className="border-2 border-orange-500 text-orange-500 rounded p-1 hover:bg-orange-100">
                  <AiOutlineClose className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <PantryListDetailsModal />
        </div>
      </div>
    </div>
  );
};
