import EditPantryCartModal from "../../kitchen/kitchenModal/EditPantryCartModal";
import EditPentryDetailsModal from "../../kitchen/kitchenModal/EditPentryDetailsModal";
import PantryListDetailsModal from "../../kitchen/kitchenModal/PantryListDetailsModal";

export const OrdersNewOrderMain = () => {
  return (
    <div className="container mx-auto mt-4 mb-25">
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        {/* Header Row */}
        <div className="min-w-full text-gray-700">
          <div
            className="bg-white text-sm flex py-2 px-4"
            style={{
              boxShadow: "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
            }}
          >
            <div className="w-1/4 text-left py-2 px-4"></div>
            <div className="w-1/4 text-left py-2 px-4 text-orange-500 font-semibold ml-5">
              Product
            </div>
            <div className="w-1/4 text-center py-2 px-4 text-orange-500 font-semibold ml-18">
              Actions
            </div>
            <div className="w-1/4 text-left py-2 px-4"></div>
          </div>

          {/* Product Rows */}
          <div className="text-sm">
            {/* One product item */}
            <div className="rounded-lg shadow-xl shadow-gray-300 flex items-center py-3 px-4">
              <div className="w-1/4">
                <div
                  className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center"
                  style={{
                    boxShadow:
                      "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/b8eiofak8bph9can0voh"
                    alt="Beef Tenderloin"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-1/4 text-black px-5 text-left">
                <div className="flex flex-col">
                  <span className="font-semibold">Beef Tenderloin</span>
                  <span className="text-gray-600">$54.00/kg</span>
                </div>
              </div>
              <div className="w-1/4  text-black pl-4 flex justify-between items-center mt-5 font-semibold ml-15">
                <button onClick={() =>
                        document.getElementById("searchModal").showModal() } >
                  <i className="fi fi-rr-search"></i>
                  {/* <PantryListDetailsModal /> */}
                </button>
                  <EditPentryDetailsModal />
                <button className="ml-2">
                  <i className="fi fi-rr-shopping-bag"></i>
                </button>
                <button onClick={() =>
                        document.getElementById("productModal2").showModal()
                      } className="ml-2">
                  <i className="fi fi-rr-shopping-cart-add"></i>
                </button>
                  <EditPantryCartModal />
              </div>
              <div className="w-1/4"></div>
            </div>

            {/* Repeat for additional products */}
            <div className="rounded-lg shadow-xl shadow-gray-300 flex items-center py-3 px-4">
              <div className="w-1/4">
                <div
                  className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center"
                  style={{
                    boxShadow:
                      "inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/b8eiofak8bph9can0voh"
                    alt="Beef Tenderloin"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-1/4 text-black px-5 text-left">
                <div className="flex flex-col">
                  <span className="font-semibold">Beef Tenderloin</span>
                  <span className="text-gray-600">$54.00/kg</span>
                </div>
              </div>
              <div className="w-1/4 text-black pl-4 flex justify-between items-center mt-5 font-semibold ml-15">
                <button>
                  <i className="fi fi-rr-search"></i>
                </button>
                <button className="ml-2">
                  <i className="fi fi-rr-shopping-bag"></i>
                </button>
                <button className="ml-2">
                  <i className="fi fi-rr-shopping-cart-add"></i>
                </button>
              </div>
              <div className="w-1/4"></div>
            </div>
            {/* Add more product rows using the same block above */}
          </div>
        </div>
      </div>
    </div>
  );
};
