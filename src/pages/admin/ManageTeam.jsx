// import React, { useState } from 'react';

import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { deleteAxios, getAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { CommonPagination } from "../../components/custom/CommonPagination";
export const ManageTeam = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [manageTeamObj, setManageTeamObj] = useState();
  const [manageTeamPagination, setManageTeamPagination] = useState();
  const [manageTeam, setManageTeam] = useState();

  const handleClick = () => {
    navigate("/admin/add-staff");
  };
  const rosterClick = () => {
    navigate("/admin/roster");
  };
  // const editClick = () => {
  //   navigate("/admin/edit-staff");
  // };
  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + "admin/home",
        setManageTeamObj,
        setLoader
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (manageTeamObj?.data) {
      setManageTeamPagination({
        current_page: manageTeamObj.data.current_page,
        first_page_url: manageTeamObj.data.first_page_url,
        from: manageTeamObj.data.from,
        last_page: manageTeamObj.data.last_page,
        last_page_url: manageTeamObj.data.last_page_url,
        links: manageTeamObj.data.links,
        next_page_url: manageTeamObj.data.next_page_url,
        path: manageTeamObj.data.path,
        per_page: manageTeamObj.data.per_page,
        prev_page_url: manageTeamObj.data.prev_page_url,
        to: manageTeamObj.data.to,
        total: manageTeamObj.data.total,
      });
      setManageTeam(manageTeamObj?.data?.data);
    }
  }, [manageTeamObj]);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${
        import.meta.env.VITE_BACK_END_URL
      }admin/home?search=${debouncedSearch}`;
      await getAxios(url, setManageTeamObj, setLoader);
    };
    fetchData();
  }, [debouncedSearch]);

  // console.log(manageTeamPagination)
  return (
    <>
      {loader && <LoadingEffect />}
      <div className="bg-white-100 min-h-screen font-sans">
        <header className="bg-white shadow-sm py-3 px-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-2">
            <h1 className="text-xl px-10 py-3 font-semibold text-gray-800 absolute left-1/2 -translate-x-1/2">
              Admin
            </h1>
          </div>
        </header>

        <main className="max-w-full mx-auto p-4">
          <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
            <button className="flex-1 py-3 text-center text-white font-semibold bg-orange-500 border-b-2 border-white rounded-lg text-sm">
              Manage Team
            </button>
            <button
              onClick={rosterClick}
              className="flex-1 py-3 text-center text-gray-600 text-sm"
            >
              Manage Roster
            </button>
          </div>

          <div className="mb-4">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-md shadow-md text-sm"
            >
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Staff
            </button>
          </div>
          
          <CommonPagination
            paginationData={manageTeamPagination}
            onPageChange={(page) => {
              getAxios(
                `${
                  import.meta.env.VITE_BACK_END_URL
                }admin/home?page=${page}&search=${debouncedSearch}`,
                setManageTeamObj,
                setLoader
              );
            }}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="shadow-gray-200 shadow-xl">
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs shadow-2xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Contact No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Emergency Contact
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Personal Info
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {/* {console.log(manageTeam)} */}
                {Array.isArray(manageTeam) &&
                  manageTeam.map((user, index) => (
                    <tr
                      key={user.id || index}
                      className="shadow-gray-200 shadow-xl"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.full_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.roles[0].name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.phone_no}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.ec_name} ({user.ec_phone_number})
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <Link
                          to={`/admin/edit-staff/${user.id}`}
                          className="text-orange-500 inline-block"
                        >
                          <FaRegEdit className="h-5 w-5 cursor-pointer" />
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button className="text-orange-500 inline-block ">
                          <MdDelete
                            onClick={() =>
                              deleteAxios(
                                `${
                                  import.meta.env.VITE_BACK_END_URL
                                }admin/staff`,
                                `${user.id}`,
                                setManageTeam,
                                setLoader,
                                "User Deleted Successfully"
                              )
                            }
                            className="h-6 w-6 text-red-500 cursor-pointer"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};
