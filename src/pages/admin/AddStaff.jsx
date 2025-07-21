
import axios from "axios";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

export const AddStaff = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [taxFileNumber, setTaxFileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [positionRank, setPositionRank] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [weeklySalary, setWeeklySalary] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");

const staffData = {
  full_name: fullName,
  email: email,
  tax_file_number: taxFileNumber,
  dob: dob,
  password: loginPassword,
  rank: positionRank,
  employment_type: employmentType,
  amount: weeklySalary,
  phone_no: mobileNo,
  ec_name: emergencyContactName,
  ec_phone_number: emergencyContactPhone,
  residential_address: residentialAddress,
  access_level: "Staff" // Example access level
};


  const createNewStaff=(event)=>{
    event.preventDefault()
    console.log(staffData)
axios.post('http://fardin-mise-en.spentry.tech/api/save-staff', staffData, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
})
.then(res => {
  console.log("✅ Success:", res.data);
})
.catch(err => {
  if (err.response) {
    console.error("❌ API Error:", err.response.data);
  } else {
    console.error("❌ Network Error:", err.message);
  }
});
  }


  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-8 max-w-6xl mx-auto my-8 pb-18">
        <div className="flex items-center justify-center pb-4 border-b border-gray-200 mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Add Staff
          </h1>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center justify-center md:justify-start gap-4 p-4 md:p-0">

          <div class="profile-avatar rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <CgProfile className="h-26 w-26 bg-blue-400 text-white rounded-full object-cover"/>
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
            <form onSubmit={createNewStaff}> 
              {/* Full Name */}
              <div>
                <label htmlFor="Full Name" className="block text-gray-700 mb-1">
                  Full Name
                </label>
                <input onChange={(e) => setFullName(e.target.value)}
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
                <input onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>

              {/* Tax File Number */}
              <div>
                <label
                  htmlFor="taxFileNumber"
                  className="block text-gray-700 mb-1"
                >
                  Tax File Number
                </label>
                <input onChange={(e) => setTaxFileNumber(e.target.value)}
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
                <input onChange={(e) => setDob(e.target.value)}
                  type="date"
                  id="dob"
                  name="dob"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>

              {/* Login Password */}
              <div>
                <label
                  htmlFor="loginPassword"
                  className="block text-gray-700 mb-1"
                >
                  Login Password
                </label>
                <input onChange={(e) => setLoginPassword(e.target.value)}
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>

              {/* Position / Rank */}
              <div>
                <label
                  htmlFor="positionRank"
                  className="block text-gray-700 mb-1"
                >
                  Position / Rank
                </label>
                <input onChange={(e) => setPositionRank(e.target.value)}
                  type="text"
                  id="positionRank"
                  name="positionRank"
                  placeholder="Position / Rank"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label
                  htmlFor="employmentType"
                  className="block text-gray-700 mb-1"
                >
                  Employment Type
                </label>
                <select onChange={(e) => setEmploymentType(e.target.value)}
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
                <label
                  htmlFor="weeklySalary"
                  className="block text-gray-700 mb-1"
                >
                  Weekly Salary
                </label>
                <input onChange={(e) => setWeeklySalary(e.target.value)}
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
                <input onChange={(e) => setMobileNo(e.target.value)}
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Mobile No."
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>

              {/* Emergency Contact */}
              <div>
                <label
                  htmlFor="emergencyContact"
                  className="block text-gray-700 mb-1"
                >
                  Emergency Contact
                </label>
                <div className="flex gap-2">
                  <input onChange={(e) => setEmergencyContactName(e.target.value)}
                    type="text"
                    id="emergencyContactName"
                    name="emergencyContactName"
                    placeholder="Contact Name"
                    className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                  />
                  <input onChange={(e) => setResidentialAddress(e.target.value)}
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
                <label
                  htmlFor="residentialAddress"
                  className="block text-gray-700 mb-1"
                >
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
              {/* Save Button */}
              <div className="mt-8 text-center">
                <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
