

import React from 'react';

import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
const ProductListTable = ({ handleModalOpen }) => {
  return (
   
    <div className="overflow-x-auto shadow-lg rounded-lg bg-[var(--secondary-color)]">
                <table className="min-w-full table-auto text-gray-700">
                  <thead className="bg-[var(--secondary-color)] text-sm pt-2"style={{
                  boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
                }}>
                    <tr>
                      <th scope="col"  className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"></th>
                      <th scope="col"  className="px-6 py-3 text-left   tracking-wider text-[var(--text-primary)] whitespace-nowrap">SKU</th>
                      <th scope="col"  className="px-6 py-3 text-left tracking-wider text-[var(--text-primary)] whitespace-nowrap">Product</th>
                      <th scope="col"  className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap">Description</th>
                      <th scope="col"  className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap">Sub Category</th>
                      <th scope="col"  className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap">Unit Price</th>
                      <th scope="col"  className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap">Detail</th>
                      <th scope="col"  className="px-6 py-3 text-left text-[var(--text-primary)]  tracking-wider whitespace-nowrap"></th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="rounded-lg shadow-xl shadow-gray-300">
                      <td className="py-4 px-6 whitespace-nowrap w-40">
                        <div className="w-16 h-16 bg-[var(--secondary-color)] border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center">
               
                          <img src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/x44vv6k8yqbppyrrjnlb" alt="Beef Tenderloin" className="w-12 h-12 object-cover rounded-lg" />
                        </div>
                      </td>
                       
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">BTL-12345</td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                        <div className="flex flex-col">
                          <span className="font-semibold">Beef Tenderloin</span>
                          <span className="text-gray-600">1 kg</span>
                        </div>
                      </td>
                     <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black"></td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Meat</td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">$54.00</td>
                      <td className="py-3 px-4">
                       <FaSearch
    className="text-xl text-orange-300 cursor-pointer"
    onClick={() => handleModalOpen('Beef Tenderloin')}
  />
                      </td>
                      <td className="py-3">
                        <button className="py-1 px-4 text-sm text-[var(--text-secondary)] bg-[var(--primary-color)] rounded border border-[var(--border-color] hover:bg-[var(--secondary-color)] hover:text-gray-900 mt-2 flex items-center space-x-2">
                         <FaShoppingBag className='text-xl' />
                        </button>
                      </td>
                    </tr>
                    <tr className="rounded-lg shadow-xl shadow-gray-300">
                      <td className="py-4 px-6 whitespace-nowrap w-40">
                        <div className="w-16 h-16 bg-[var(--secondary-color)] border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center">
                            <img src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/x44vv6k8yqbppyrrjnlb" alt="Beef Tenderloin" className="w-12 h-12 object-cover rounded-lg" />
                        </div>
                      </td>
                       
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">BTL-12345</td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                        <div className="flex flex-col">
                          <span className="font-semibold">Beef Tenderloin</span>
                          <span className="text-gray-600">1 kg</span>
                        </div>
                      </td>
                     <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black"></td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Meat</td>
                      <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">$54.00</td>
                      <td className="py-3 px-4">
                       <FaSearch
    className="text-xl text-orange-300 cursor-pointer"
    onClick={() => handleModalOpen('Beef Tenderloin')}
  />
                      </td>
                      <td className="py-3">
                        <button className="py-1 px-3 text-sm text-[var(--text-secondary)] bg-[var(--primary-color)] rounded border border-[var(--border-color] hover:bg-[var(--secondary-color)] hover:text-gray-900 mt-2 flex items-center space-x-2">
                         <FaShoppingBag className='text-xl' />
                        </button>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
  );
};

export default ProductListTable;