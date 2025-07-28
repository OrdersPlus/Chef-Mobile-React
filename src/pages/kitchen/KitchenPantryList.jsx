import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import PantryListDetailsModal from "../../components/kitchen/kitchenModal/PantryListDetailsModal";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import { useState } from "react";
import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";
import { SectionsProvider } from "../../helper/ScrollableButtonsContext";

export const KitchenPantryList = () => {
   const [popUp, setPopUp] = useState(false)
  return (
    <div>
      <div className="pb-24 max-w-screen-lg mx-auto">
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
            <button onClick={()=>setPopUp(!popUp)} className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow">
              Action
            </button>
      
            {popUp && <div className="absolute left-5 top-60 w-36 p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2"
              >
                Manage Order
              </a>
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2"
              >
              Check Delivery
              </a>
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2"
              >
              View Orders
              </a>
            </div>}
          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <Link
            to="/kitchen/add-to-pantry"
            className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
          >
            Edit Pantry
          </Link>
        </div>

                <div className="mt-7">
                        <ThreeCommonButton 
                        firstBtn= "Section"
                        firstUrl= "/kitchen/home"
                        secondBtn= "Pantry-list"
                        secondUrl= "/kitchen/pantry-list"
                        thirdBtn= "Prep-list"
                        thirdUrl= "/kitchen/prep-list"
                        />
                </div>

        <div className="rounded-md space-y-4">
          {/* <NavButton /> */}

                  <div className="mb-8">
                    <SectionsProvider>
                      <ScrollableButton />
                    </SectionsProvider>
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

          <div className="mx-auto mt-10   ">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg inset-shadow-sm shadow-xl/30 border border-white ">
              <img
                src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/uqxjazvsq0rgwrwnsvd3"
                alt="Beef"
                className="w-16 h-16 rounded-md object-cove border border-amber-50 shadow-lg shadow-gray-400 "
              />

              <div className="flex-1 px-3 ml-2">
                <p className="font-semibold text-gray-800 ">Beef Tenderloin </p>
                <p className="text-sm text-gray-500">5kg </p>
              </div>

              <div className="flex-1 px-2">
                <p className="font-semibold text-gray-800">Price</p>
                <p className="text-sm text-red-500">$55.8</p>
              </div>

              <div className="flex items-center gap-10">
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
