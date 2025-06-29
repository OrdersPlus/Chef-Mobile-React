import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { FaFolderOpen } from "react-icons/fa";
const SuppliersHomeTable = () => {
  return (
     <div className="container mt-2 p-4 mx-auto overflow-auto ">
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full table-auto text-gray-700">
            <thead
              className="bg-white text-sm pt-2"
              style={{
                boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466',
              }}
            >
              <tr>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Name of Supplier</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Contact Person</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Phone No.</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Email</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Products & Prices</th>
                <th scope="col"  className="px-6 py-3 text-left text-orange-500  tracking-wider whitespace-nowrap">Supplier Details</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poultry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Joe Blow</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                    
  <Link to="/suppliers/product_list"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                    
                    <Link to="/suppliers/details"> 
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poultry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Joe Blow</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                   
                         <Link to="/suppliers/product_list"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                            <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poultry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Joe Blow</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                                  
                         <Link to="/suppliers/product_list"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                            <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
              <tr className="rounded-lg shadow-lg shadow-gray-300">
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black ">ABC Meat & Poutry</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">Damen Deng</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">0404670200</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold w-40 text-black">
                  damendeng <br/>2000@gmail.com
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                                  
                         <Link to="/suppliers/product_list"> {/* Wrap the icon with the Link component */}
      <FaClipboardList
        className="text-orange-500"
        size="2em"
          
      />
      </Link>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex justify-center">
                            <Link to="/suppliers/details"> {/* Wrap the icon with the Link component */}
        <FaFolderOpen className="text-orange-500" size="2em" />
      </Link>
                  </div>
                </td>
              </tr>
           
            </tbody>
          </table>
            
        </div>
        
      </div>
  )
}
export default SuppliersHomeTable;