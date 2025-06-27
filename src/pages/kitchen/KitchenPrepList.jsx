import { BiTransfer } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { AiOutlineEdit, AiOutlineShoppingCart } from "react-icons/ai";
import { MdDelete, MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import NavButton from "../../components/kitchen/myKitchenSection/NavButton";
import { SearchPagination } from "../../components/orders/ordersHome/SearchPagination";
import PrepAddModal from "../../components/kitchen/kitchenModal/PrepAddModal";
import PrepEditModal from "../../components/kitchen/kitchenModal/PrepEditModal";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";

export const KitchenPrepList = () => {
  return (
    <div>
      <div className="pb-24 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex flex-wrap justify-between gap-2 items-center">
          <button className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm">
            Action
          </button>
          <p className="font-bold text-sm sm:text-base">My Kitchen</p>

          <button
            className="bg-orange-500 text-white px-2 py-2 rounded-md text-sm"
            onClick={() => document.getElementById("add_modal").showModal()}
          >
            Add Task
          </button>
        </div>

        {/* Section Overview */}
        <div className="rounded-md space-y-4 overflow-x-auto">
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
        </div>

        <SearchPagination />

        <h1 className="text-xl font-semibold text-center">Ladder Prep List</h1>

        <div className="container mx-auto mt-4">
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full table-auto text-gray-700">
              <thead
                className="bg-white text-sm"
                style={{
                  boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                }}
              >
                <tr>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left text-orange-500">Date</th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Assigned To
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Prep Item
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    QTy Required
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Time Start
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Completed
                  </th>
                  <th className="py-2 px-4 text-left text-orange-500">
                    Time Count
                  </th>
                  <th className="py-2 px-4 text-left"></th>
                  <th className="py-2 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4].map((_, index) => (
                  <tr
                    key={index}
                    className="rounded-lg shadow-xl shadow-gray-300"
                  >
                    <td className="py-3 px-4"></td>
                    <td className="py-3 font-semibold w-40 text-black px-2">
                      22-05-2024
                    </td>
                    <td className="py-2 w-40 text-black px-4">Alex</td>
                    <td className="py-3 px-4">Wash potato </td>
                    <td className="py-3 font-semibold w-40 text-black px-4">
                      10 Kg
                    </td>
                    <td className="py-3 font-semibold w-40 text-black px-4">
                      01:18
                    </td>
                    <td className="py-3 px-4">3 min</td>
                    <td className="  py-3 px-4">01:21</td>
                    <td className="py-3 px-4 flex gap-2 my-2">
                      <FaRegEdit
                        className="text-amber-500 w-4 h-4"
                        onClick={() =>
                          document.getElementById("add_modal2").showModal()
                        }
                      />
                      <MdDelete className="text-red-500 w-4 h-4" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PrepAddModal />
      <PrepEditModal />
    </div>
  );
};
