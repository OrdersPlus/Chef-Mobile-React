export const EditStaff = () => {
  return (
     <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-8 max-w-6xl mx-auto my-8 pb-18">
        <div className="flex items-center justify-center pb-4 border-b border-gray-200 mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Edit Staff
          </h1>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center justify-center md:justify-start gap-4 p-4 md:p-0">
          <div class="profile-avatar rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-26 w-26 text-gray-500" viewBox="0 0 20 20"
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

            {/* Full Name */}
            <div>
              <label htmlFor="Full Name" className="block text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="Full Name"
                id="Full Name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Tax File Number */}
            <div>
              <label htmlFor="taxFileNumber" className="block text-gray-700 mb-1">
                Tax File Number
              </label>
              <input
                type="text"
                id="taxFileNumber"
                name="taxFileNumber"
                placeholder="Tax File Number"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Login Password */}
            <div>
              <label htmlFor="loginPassword" className="block text-gray-700 mb-1">
                Login Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="Password"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Position / Rank */}
            <div>
              <label htmlFor="positionRank" className="block text-gray-700 mb-1">
                Position / Rank
              </label>
              <input
                type="text"
                id="positionRank"
                name="positionRank"
                placeholder="Position / Rank"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Employment Type */}
            <div>
              <label htmlFor="employmentType" className="block text-gray-700 mb-1">
                Employment Type
              </label>
              <select
                id="employmentType"
                name="employmentType"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              >
                <option>Select Employment Type</option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            {/* Weekly Salary */}
            <div>
              <label htmlFor="weeklySalary" className="block text-gray-700 mb-1">
                Weekly Salary
              </label>
              <input
                type="text"
                id="weeklySalary"
                name="weeklySalary"
                placeholder="Weekly Salary"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Mobile No. */}
            <div>
              <label htmlFor="mobileNo" className="block text-gray-700 mb-1">
                Mobile No.
              </label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="Mobile No."
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              />
            </div>

            {/* Emergency Contact */}
            <div>
              <label htmlFor="emergencyContact" className="block text-gray-700 mb-1">
                Emergency Contact
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  placeholder="Contact Name"
                  className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
                <input
                  type="text"
                  id="emergencyContactPhone"
                  name="emergencyContactPhone"
                  placeholder="Contact Phone"
                  className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
            </div>

            {/* Residential Address */}
            <div className="md:col-span-2">
              <label htmlFor="residentialAddress" className="block text-gray-700 mb-1">
                Residential Address
              </label>
              <textarea
                id="residentialAddress"
                name="residentialAddress"
                rows={2}
                placeholder="Residential Address"
                className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
