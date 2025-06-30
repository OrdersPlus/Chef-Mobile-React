import { FaCartPlus, FaListAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import PantryListDetailsModal from "../../kitchen/kitchenModal/PantryListDetailsModal";

export const HomeMain = () => {
  return (
    <div className="mx-auto p-2 space-y-1">
      {/* Header Row */}
      <div
        className="bg-white text-sm font-medium rounded-t-lg px-4 py-3 grid grid-cols-3"
        style={{
          boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
        }}
      >
        <div></div> {/* Empty first column */}
        <div className="text-orange-500">Product</div>
        <div className="text-orange-500 text-center">Details</div>
      </div>

      {/* Product Card */}
      {[1, 2, 3].map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-xl shadow-gray-300 p-4 mb-4"
        >
          {/* Close Button */}
            <button className="absolute -top-3 -right-3 z-10 bg-white rounded-full w-8 h-8 grid place-items-center text-red-500 text-xl shadow">
              <MdCancel />
            </button>

          {/* Grid Layout for Card */}
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Image */}
            <div className="flex items-center">
              <div
                className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-xl grid place-items-center"
                style={{
                  boxShadow:
                    'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
                }}
              >
                <img
                  src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/b8eiofak8bph9can0voh"
                  alt="Beef Tenderloin"
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="font-semibold text-black">
                Beef Tenderloin
              </div>
              <div className="text-gray-600 text-sm">$54.00/kg</div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-8 text-black font-semibold">
              <button onClick={() =>
                    document.getElementById("productModal").showModal()} >
                <FaListAlt  className="text-orange-500 h-7 w-7"  />
              </button>
              <button className="h-7 w-7">
                <FaCartPlus className="text-blue-500 h-7 w-7"/>
              </button>
            </div>
          </div>
        </div>
        
      ))}

      <PantryListDetailsModal />
    </div>

  );
};
