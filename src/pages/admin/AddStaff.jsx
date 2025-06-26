export const AddStaff = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-8 max-w-6xl mx-auto my-8 pb-18">
        <div className="flex items-center justify-center pb-4 border-b border-gray-200 mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Add Staff
          </h1>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4"></div>
          </div>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center justify-center md:justify-start gap-4 p-4 md:p-0">
          <div className="profile-avatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm">
            Upload
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm">
            Select Access Control Level*
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="shadow-gray-200 shadow-xl">
              <label htmlFor="Full Name" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="Full Name"
                id="Full Name"
                required
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Tax File Number */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label htmlFor="taxFileNumber" className="block text-gray-700">
                Tax File Number
              </label>
              <input
                type="text"
                id="taxFileNumber"
                name="taxFileNumber"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Date of Birth */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label htmlFor="dob" className="block text-gray-700">
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  defaultValue="06/2025"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h.01M16 11h.01M9 15h.01M15 15h.01M9 19h.01M15 19h.01M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Login Password */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label
                htmlFor="loginPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Login Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Position / Rank */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label
                htmlFor="positionRank"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Position / Rank
              </label>
              <input
                type="text"
                id="positionRank"
                name="positionRank"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Employment Type */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label
                htmlFor="employmentType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Employment Type
              </label>
              <select
                id="employmentType"
                name="employmentType"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            {/* Weekly Salary */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label
                htmlFor="weeklySalary"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Weekly Salary
              </label>
              <input
                type="text"
                id="weeklySalary"
                name="weeklySalary"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Mobile No. */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label
                htmlFor="mobileNo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mobile No.
              </label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Emergency Contact */}
            <div className="col-span-1 shadow-gray-200 shadow-xl">
              <label
                htmlFor="emergencyContact"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Emergency Contact
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  placeholder="Name"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  id="emergencyContactPhone"
                  name="emergencyContactPhone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Residential Address */}
            <div className="col-span-1 md:col-span-2 shadow-gray-200 shadow-xl">
              <label
                htmlFor="residentialAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Residential Address
              </label>
              <textarea
                id="residentialAddress"
                name="residentialAddress"
                rows="2"
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Save Button Section */}
        <div className="mt-8 text-center">
          <button className="bg-orange-500 text-white font-semibold px-12 py-2 rounded-md hover:bg-orange-600 transition-colors text-2xl shadow-lg">
            Save
          </button>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};
