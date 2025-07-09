// import React, { useState } from 'react';

import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { MdDelete } from "react-icons/md";
export const ManageTeam = () => {
  // const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/add-staff");
  };
  const rosterClick = () => {
    navigate("/admin/roster");
  };
  const editClick = () => {
    navigate("/admin/edit-staff");
  };

  return (
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

        <div className="mb-6">
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
        <div className="flex items-center justify-end mt-4">
          <nav
            className="relative z-0 inline-flex shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-orange-500 text-white text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>

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
              <tr className="shadow-gray-200 shadow-xl">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Alex Hales
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Chef
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  0404670200
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Jamal (0412389528)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                    onClick={editClick}
                    className="text-orange-500 inline-block"
                  >
                    <FaRegEdit  className="h-5 w-5" />
                    {/* Use imported image */}
                  </button>
                </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                   
                    className="text-orange-500 inline-block"
                  >
                    <MdDelete className="h-6 w-6 text-red-500" />

                    
                  </button>
                </td>
              </tr>
              <tr className="shadow-gray-200 shadow-xl">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Gabriall Greenwood
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Chef
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  0404670200
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Damen (0404070201)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-orange-500 inline-block"
                  >
                    <FaRegEdit  className="h-5 w-5" />
                  </a>
                </td>
                             <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                   
                    className="text-orange-500 inline-block"
                  >
                    <MdDelete className="h-6 w-6 text-red-500" />

                    
                  </button>
                </td>
              </tr>
              <tr className="shadow-gray-200 shadow-xl">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Adam Go
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Head Chef
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  0411235698
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Alicia (04041024567)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-orange-500 inline-block"
                  >
                    <FaRegEdit  className="h-5 w-5" />
                  </a>
                </td>
                             <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                   
                    className="text-orange-500 inline-block"
                  >
                    <MdDelete className="h-6 w-6 text-red-500" />

                    
                  </button>
                </td>
              </tr>
              <tr className="shadow-gray-200 shadow-xl">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Alexa Huston
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Chef de Partie
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  0414321654
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Hunter (0456321456)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                    onClick={editClick}
                    className="text-orange-500 inline-block"
                  >
                    <FaRegEdit  className="h-5 w-5" />
                  </button>
                </td>
                             <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                   
                    className="text-orange-500 inline-block"
                  >
                    <MdDelete className="h-6 w-6 text-red-500" />

                    
                  </button>
                </td>
              </tr>
              <tr className="shadow-gray-200 shadow-xl">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Jhon Cena
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Chef de Partie
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  0404670301
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  George (0404670500)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-orange-500 inline-block"
                  >
                    <FaRegEdit  className="h-5 w-5" />
                  </a>
                </td>
                             <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                   
                    className="text-orange-500 inline-block"
                  >
                    <MdDelete className="h-6 w-6 text-red-500" />

                    
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
