import axios from "axios";
import { useState, useEffect } from "react";
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
  const [profileImage, setProfileImage] = useState(null);

  // For cleaning up the object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const createNewStaff = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("tax_file_number", taxFileNumber);
    formData.append("dob", dob);
    formData.append("password", loginPassword);
    formData.append("rank", positionRank);
    formData.append("employment_type", employmentType);
    formData.append("amount", weeklySalary);
    formData.append("phone_no", mobileNo);
    formData.append("ec_name", emergencyContactName);
    formData.append("ec_phone_number", emergencyContactPhone);
    formData.append("residential_address", residentialAddress);
    formData.append("access_level", positionRank);

    if (profileImage) {
      formData.append("profile_pic", profileImage);
    }

    const token = localStorage.getItem("token");
    if (token) {
      formData.append("token", token);
    }

    axios
      .post(import.meta.env.VITE_BACK_END_URL+"save-staff", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Accept: "application/json",
        },
        // withCredentials: true,
      })
      .then((res) => {
        console.log("✅ Success:", res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.error("❌ API Error:", err.response.data);
        } else {
          console.error("❌ Network Error:", err.message);
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-8 max-w-6xl mx-auto my-8 pb-18">
        <div className="flex items-center justify-center pb-4 border-b border-gray-200 mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Add Staff
          </h1>
        </div>

        {/* Profile Upload */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center md:justify-start gap-4 p-4 md:p-0">
          <div className="profile-avatar rounded-full overflow-hidden bg-gray-200 flex items-center justify-center w-24 h-24">
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <CgProfile className="h-24 w-24 bg-blue-400 text-white rounded-full object-cover" />
            )}
          </div>

          <label className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm cursor-pointer">
            Upload Image
            <input
              name="profile_pic"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <select
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm"
            onChange={(e) => setPositionRank(e.target.value)}
            value={positionRank}
          >
            <option value="">Select Access Control Level*</option>
            <option value="Head Chef">Head Chef</option>
            <option value="Section Chef">Section Chef</option>
            <option value="kitchen Stuff">Kitchen Staff</option>
          </select>
        </div>

        {/* Form */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <form onSubmit={createNewStaff}>
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Tax File Number */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Tax File Number
                </label>
                <input
                  onChange={(e) => setTaxFileNumber(e.target.value)}
                  type="text"
                  placeholder="TFN"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* DOB */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Login Password
                </label>
                <input
                  onChange={(e) => setLoginPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Position / Rank */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Position / Rank
                </label>
                <input
                  disabled
                  value={positionRank}
                  type="text"
                  placeholder="Rank"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Employment Type */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Employment Type
                </label>
                <select
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                >
                  <option>Select Employment Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              {/* Weekly Salary */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Weekly Salary
                </label>
                <input
                  onChange={(e) => setWeeklySalary(e.target.value)}
                  type="number"
                  placeholder="Salary"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Mobile No */}
              <div>
                <label className="block text-gray-700 mb-1">Mobile No.</label>
                <input
                  onChange={(e) => setMobileNo(e.target.value)}
                  type="number"
                  placeholder="Mobile No."
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                />
              </div>
              {/* Emergency Contact */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Emergency Contact
                </label>
                <div className="flex gap-2">
                  <input
                    onChange={(e) => setEmergencyContactName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                  />
                  <input
                    onChange={(e) => setEmergencyContactPhone(e.target.value)}
                    type="number"
                    placeholder="Phone"
                    className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                  />
                </div>
              </div>
              {/* Residential Address */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">
                  Residential Address
                </label>
                <textarea
                  onChange={(e) => setResidentialAddress(e.target.value)}
                  rows={2}
                  placeholder="Residential Address"
                  className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                ></textarea>
              </div>

              {/* Submit */}
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
