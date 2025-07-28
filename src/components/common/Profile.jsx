import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { postAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../custom/LoadingEffect";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(false);
  const [loader, setLoader] = useState(false)
  // const [object, setObject] = useState([])
  const handleLogout = async () => {
    const res = await postAxios(
      import.meta.env.VITE_BACK_END_URL + "logout", setLoader, {}, true, true);
    if (res?.status === 'success') {
      localStorage.clear();
      navigate("/login");
    } else {
      alert("Logout failed.");
    }
  };
  return (
<div>
  {loader && <LoadingEffect/>}
  <h2 className="text-xl font-semibold text-center mb-5 text-orange-500">Mixing Pot Restaurant</h2>
  <div onClick={()=>setDetails(!details)} className="relative flex justify-between items-center bg-white rounded-2xl p-5 mb-6 inset-shadow-sm shadow-gray-400 shadow-xl">
    {/* Profile Info */}
    <div className="flex items-center gap-4">
      <img
        src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/afrbbciydcc8tgpxgxob"
        alt="Profile"
        className="w-16 h-16 rounded-xl border-2 border-white shadow-sm/10"
      />
      <div>
        <h2 className="text-xl font-semibold">Angelo Wilson</h2>
        <p className="text-sm">Head Chef</p>

          </div>
        </div>

        {/* Hamburger & Dropdown Menu Container */}
        <div className="relative">
          {/* Hamburger Button */}
          <button
            className={`w-8 h-8 rounded-full ${
              details ? "bg-orange-500" : "text-orange-500 border-2"
            }`}
          >
            <i
              className={`fi fi-rr-menu-burger  ${
                details ? "text-white" : "text-orange-500"
              }`}
            ></i>
          </button>

          {/* Dropdown Menu */}
          {details && (
            <div className="absolute right-0 mt-2 w-36  p-2 rounded shadow-md flex flex-col justify-end space-y-2 z-50 bg-white">
              <a
                href="#"
                className="bg-white text-orange-500 flex justify-center rounded-2xl border-2 gap-3"
              >
                Profile
                <span className="flex justify-center items-center"><CgProfile className="w-5 h-5" /></span>
              </a>
              <a
                onClick={handleLogout}
                className="bg-white flex justify-center rounded-2xl border-2 gap-3"
                style={{ color: "#FF3333" }}
              >
                Log out
                <span className="flex justify-center items-center">
                  {/* <TbLogout className="w-5 h-5 " /> */}
                  <FaPowerOff className="w-5 h-5" />

                  </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
