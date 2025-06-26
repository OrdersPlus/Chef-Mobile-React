import { useNavigate } from "react-router-dom";

export const RosterManagement = () => {
  const navigate = useNavigate();

  const viewRosterClick = () => {
    navigate("/admin/roster/hours_controls");
  };
  return (
    <div>
      <main className="max-w-full mx-auto p-4">
        <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
          <button className="flex-1 py-3 text-center text-white font-semibold bg-orange-500 border-b-2 border-white rounded-lg text-sm">
            Roster Settings
          </button>
          <button
            onClick={viewRosterClick}
            className="flex-1 py-3 text-center text-gray-600 text-sm"
          >
            View Roster
          </button>
          <button className="flex-1 py-3 text-center text-gray-600 text-sm">
            Staff Attendance
          </button>
        </div>

        <div className="max-h-[50vh] max-w-[100vw] overflow-y-auto  grid grid-cols-1 gap-4 mb-6 shadow-gray-300 shadow-xl">
          <div className="flex justify start">
            <button
              className="flex items-center px-2 py-1 bg-orange-500 text-white rounded-md shadow-md text-xs"
              onClick={() =>
                document.getElementById("create_shift_modal").showModal()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
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
              Create Shift
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 shadow-gray-300 shadow-xl">
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Dinner
                </h3>
                <p className="text-sm text-gray-600">16:30 - 22:00</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Brunch
                </h3>
                <p className="text-sm text-gray-600">06:00 - 12:00</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6 shadow-gray-300 shadow-xl">
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>

              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Chills
                </h3>
                <p className="text-sm text-gray-600">14:54 - 18:30</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-orange-700">
                  Snacks
                </h3>
                <p className="text-sm text-gray-600">17:00 - 19:00</p>
              </div>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-2 pb-2">
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Mon</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Tue</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Wed</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Thus</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Fri</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Sat</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-white rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Sun</p>
              <p className="text-xs text-gray-500">67 hrs</p>
            </div>
          </div>
        </div>

      </main>
      <dialog id="create_shift_modal" className="modal">
        <div className="modal-box max-w-xl">
          <h2 className="text-lg font-semibold mb-4">Create New Shift</h2>

          {/* Shift Name */}
          <input
            type="text"
            placeholder="Enter Shift Name"
            className="w-full mb-4 px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400"
          />

          {/* Shift Label */}
          <select className="select select-bordered w-full mb-4 px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400">
            <option>Select Shift Label</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>

          {/* Shift Duration */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Shift Duration</p>
            <div className="flex gap-2">
              <input
                type="time"
                className="input input-bordered w-full"
                placeholder="From"
              />
              <input
                type="time"
                className="input input-bordered w-full"
                placeholder="To"
              />
            </div>
          </div>

          {/* Break Duration */}
          <div className="mb-4">
            <p className="font-semibold mb-1">Break Duration</p>
            <div className="flex gap-2">
              <input
                type="time"
                className="input input-bordered w-full"
                placeholder="From"
              />
              <input
                type="time"
                className="input input-bordered w-full"
                placeholder="To"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">
            Save Shift
          </button>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
