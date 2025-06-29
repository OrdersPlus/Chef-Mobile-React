import CommonMainAction from "../../components/suppliers/CommonMainAction";
import SupplierDetailsBody from "../../components/suppliers/SupplierDetailsBody";
import SupplierDetailsCard from "../../components/suppliers/SupplierDetailsCard";

import { FaLink } from "react-icons/fa6"
export const SupplierDetails = () => {
  return (
    <>
      <div className="m-0 p-0 pb-16">
        <div className="m-4 rounded-md  mb-2 bg-white shadow-md space-y-4">
          <div className="m-4 rounded-md bg-white shadow-md space-y-4 mb-2 mt-2">
            <h3 className=" font-bold text-center ">Supplier Details</h3>
          </div>
          <div className=" p-3 ">
            <CommonMainAction />
          </div>
        </div>
        <SupplierDetailsBody />
        <SupplierDetailsCard />
  
          
      </div>
    </>
  );
};
