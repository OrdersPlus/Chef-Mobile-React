import SectionAddModal from "../../components/kitchen/kitchenModal/SectionAddModal";
import SectionEditModal from "../../components/kitchen/kitchenModal/SectionEditModal";
import ActiveTab from "../../components/kitchen/myKitchenSection/ActiveTab";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import { BiTransfer } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { useState } from "react";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";

export const KitchenHome = () => {
  const [popUp, setPopUp] = useState(false);
  return (
    <div>
      <div className="pb-24 max-w-screen-lg mx-auto sm:px-6 lg:px-8">
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
          <div className="relative">
            <button
              onClick={() => setPopUp(!popUp)}
              className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
            >
              Action
            </button>

            {popUp && (
              <div className="absolute left-0 mt-2 w-36 p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
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
              </div>
            )}
          </div>
          {/* skjdnjknvkafv */}
          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <button
            className="text-orange-500 bg-white border-y-orange-500 border-2 px-5 py-2 rounded-lg shadow"
            onClick={() => document.getElementById("add_modal").showModal()}
          >
            Add Section
          </button>
        </div>

        <div className="mt-7">
          <ThreeCommonButton
            firstBtn="Section"
            firstUrl="/kitchen/home"
            secondBtn="Pantry-list"
            secondUrl="/kitchen/pantry-list"
            thirdBtn="Prep-list"
            thirdUrl="/kitchen/prep-list"
          />
        </div>
        {/* Section Overview */}
        <div className="rounded-md space-y-4 overflow-x-auto ">
          {/* <NavButton /> */}
          <div className="mb-8">
            <ScrollableButton
              buttonLabels={[
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
              ]}
            />
          </div>
          {/* Ladder Info + Edit Modal */}
          <div className="flex flex-wrap justify-between items-center mt-2 mb-6 gap-2">
            <h2 className="text-sm font-semibold text-gray-700">
              Ladder Detail Info :
            </h2>
            <button
              className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm"
              onClick={() => document.getElementById("edit_modal").showModal()}
            >
              Edit Section
            </button>
          </div>

          <SectionEditModal />
          <SectionAddModal />

          <ActiveTab />
        </div>
      </div>
    </div>
  );
};
