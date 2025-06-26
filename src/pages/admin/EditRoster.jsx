import { NavLink } from "react-router-dom";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";


export const EditRoster = () => {
  return (
    <div> 
        <main className="max-w-full mx-auto p-4">
      {/* <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
        <button className="flex-1 py-3 text-center text-white font-semibold bg-orange-500 border-b-2 border-gray-600 rounded-lg text-sm">Roster Settings</button>
        <button className="flex-1 py-3 text-center text-gray-600 text-sm">View Roster</button>
        <button className="flex-1 py-3 text-center text-gray-600 text-sm">Staff Attendance</button>
      </div> */}

        <ThreeCommonButton 
        firstBtn= "Roster Setting"
        firstUrl= "/admin/roster"
        secondBtn= "View Roster"
        secondUrl= "/admin/roster/view"
        thirdBtn= "Staff Attendance"
        thirdUrl= "/admin/roster/staff-attendance"
        />

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="shadow-gray-200 shadow-xl">
                      <th scope="col" className="px-6 py-3 text-left text-xs shadow-2xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Shift</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Mon</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Tue</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Wed</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Thu</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Fri</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Sat</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-orange-500 uppercase tracking-wider whitespace-nowrap">Sun</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="shadow-gray-200 shadow-xl">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Breakfast</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">36</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">30</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        
                      </td>
                    </tr>
                    <tr className="shadow-gray-200 shadow-xl">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lunch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">36</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">30</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        
                      </td>
                    </tr>
                    <tr className="shadow-gray-200 shadow-xl">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Snacks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">36</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">30</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        
                      </td>
                    </tr>
                    </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};