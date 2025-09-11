import { useEffect, useState } from "react";
import CommonMainAction from "../../components/suppliers/CommonMainAction";
import SupplierDetailsBody from "../../components/suppliers/SupplierDetailsBody";
import SupplierDetailsCard from "../../components/suppliers/SupplierDetailsCard";

import { FaLink } from "react-icons/fa6"
import { getAxios } from "../../helper/HelperAxios";
import { useParams } from "react-router-dom";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
export const SupplierDetails = () => {
  const {id} = useParams();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState();
  useEffect(()=>{
    getAxios( import.meta.env.VITE_BACK_END_URL + "suppliers/details/" + id, setDetails, setLoading);
  },[id]);
// console.log(details)
  return (
    <>
    {loading && <LoadingEffect />}
      <div className="m-0 p-0 pb-16">
        <div className="m-4 rounded-md  mb-2 bg-[var(--secondary-color)] shadow-md space-y-4">
          <div className="m-4 rounded-md bg-[var(--secondary-color)] shadow-md space-y-4 mb-2 mt-2">
            <h3 className=" font-bold text-center ">Supplier Details</h3>
          </div>
          <div className="p-3">
            <CommonMainAction />
          </div>
        </div>
        <SupplierDetailsBody details={details} />
        <SupplierDetailsCard details={details} />
  
          
      </div>
    </>
  );
};
