
import CommonMainAction from "../../components/suppliers/CommonMainAction";
import SuppliersScrollableButton from "../../components/suppliers/SuppliersScrollableButton";
import Pagination from "../../components/suppliers/Pagination";
import SuppliersHomeTable from "../../components/suppliers/SuppliersHomeTable";
import SuppliersHomeModal from "../../components/suppliers/SuppliersHomeModal";
import { ScrollableButton } from "../../components/orders/ordersHome/ScrollableButton";
export const SuppliersHome = () => {
  return (
    <div className="font-sans w-full min-h-screen m-0 p-0 bg-white pb-16">
      <div className="rounded-lg  shadow-lg ">

        <div className=" rounded-md bg-white shadow-md space-y-4 mb-2 mt-4 pt-2">
          <div className="rounded-md bg-white shadow-md space-y-4 mb-2 ">
            <h3 className="text-center font-bold pb-2">Manage Suppliers</h3>
          </div>

          <div className="mt-4 mb-8">
            <CommonMainAction />
          </div>
          <ScrollableButton 
          buttonLabels={[
          "Fruit & Vegetables",
          "Meat & Poultry",
          "Seafood",
          "Dry Good",
          "Bakery & Patisserie",
          "Dairy & Cheese",
          "Coffee & Tea",
          "Alcohol",
          "Dairy",
        ]}
        />
        </div>
        {/* Connect Supplier Button & Modal */}
        <div className="flex justify-center">
          <SuppliersHomeModal />
        </div>

        {/* Paginaton */}

        <Pagination />
        {/* Supplier Table */}

        <SuppliersHomeTable />
      </div>
    </div>
  );
};
