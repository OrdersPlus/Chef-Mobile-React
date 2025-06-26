import { Nav } from "../common/Nav";
import { Footer } from "../common/Footer";

import MainAction from "./MainAction";

import ScrollableButton from "./ScrollableButton";
import Pagination from "./Pagination";
import SuppliersHomeTable from "./SuppliersHomeTable";
import SuppliersHomeModal from "./SuppliersHomeModal";
export const SuppliersHome = () => {
  return (
    <div className="font-sans w-full min-h-screen   m-0 p-0 bg-white pb-16">
      <div className="rounded-lg  shadow-lg ">
        <Nav />

        <div className="m-3 rounded-md bg-white shadow-md space-y-4 mb-2 mt-4 pt-2">
          <div className="m-4 rounded-md bg-white shadow-md space-y-4 mb-2 ">
            <h3 className="text-center font-bold pb-2">Manage Suppliers</h3>
          </div>

          <div className=" ml-2 mr-2 mt-4">
            <MainAction />
          </div>

          <ScrollableButton />
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
      <Footer />
    </div>
  );
};
