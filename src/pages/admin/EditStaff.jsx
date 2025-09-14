import { useEffect, useState } from "react";
import { getAxios, postAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export const EditStaff = () => {
  const { id } = useParams();
  const [editStaff, setEditStaff] = useState();
  const [loader, setLoader] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [taxFileNumber, setTaxFileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [positionRank, setPositionRank] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [weeklySalary, setWeeklySalary] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");

  // Fetch data on mount
  useEffect(() => {
    getAxios(
      import.meta.env.VITE_BACK_END_URL + `admin/edit-staff/${id}`,
      setEditStaff,
      setLoader
    );
  }, [id]);

  useEffect(() => {
    setFullName(editStaff?.data?.full_name || "");
    setEmail(editStaff?.data?.email || "");
    setTaxFileNumber(editStaff?.data?.staffdetails?.tax_file_number || "");
    setDob(editStaff?.data?.dob || "");
    setPositionRank(editStaff?.data?.staffdetails?.rank || "");
    setEmploymentType(editStaff?.data?.staffdetails?.employment_type || "");
    setWeeklySalary(editStaff?.data?.staffdetails?.hourly_rate || "");
    setMobileNo(editStaff?.data?.phone_no || "");
    setEmergencyContactName(editStaff?.data?.ec_name || "");
    setEmergencyContactPhone(editStaff?.data?.ec_phone_number || "");
    setResidentialAddress(
      editStaff?.data?.staffdetails?.residential_address || ""
    );
    if (editStaff?.data?.profile_pic) {
      setProfileImage(editStaff?.data?.profile_pic);
    }
  }, [editStaff]);

  // console.log(editStaff?.data?.staffdetails?.employment_type);
  //   console.log(editStaff)
  // console.log(fullName)

  const submitEditStaff = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("tax_file_number", taxFileNumber);
    formData.append("dob", dob);
    formData.append("rank", positionRank);
    formData.append("employment_type", employmentType);
    formData.append("amount", weeklySalary);
    formData.append("phone_no", mobileNo);
    formData.append("ec_name", emergencyContactName);
    formData.append("ec_phone_number", emergencyContactPhone);
    formData.append("residential_address", residentialAddress);
    formData.append("access_level", positionRank);

    if (profileImage instanceof File) {
      formData.append("profile_pic", profileImage);
    }

    postAxios(
      import.meta.env.VITE_BACK_END_URL + `admin/update-staff/${id}`,
      setLoader,
      formData,
      true,
      false
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };
// console.log(taxFileNumber)
  return (
    <>
      {loader && <LoadingEffect />}
      <div className="bg-gray-100 min-h-screen font-sans">
        <div className="bg-white shadow-md rounded-lg p-4 md:p-8 max-w-6xl mx-auto my-8 pb-18">
          <div className="flex items-center justify-center pb-4 border-b border-gray-200 mb-6">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Edit Staff
            </h1>
          </div>

          {/* Profile Upload */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center md:justify-start gap-4 p-4 md:p-0">
            <div className="profile-avatar rounded-full overflow-hidden bg-gray-200 flex items-center justify-center w-24 h-24">
              {profileImage && typeof profileImage === "string" ? (
                <img
                  src={profileImage}
                  alt="Staff Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : profileImage instanceof File ? (
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
            <option value="kitchen Staff">Kitchen Staff</option>
          </select>
          </div>

          <form onSubmit={submitEditStaff}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="Full Name"
                    className="block text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                    required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <input
                    type="number"
                    id="taxFileNumber"
                    name="taxFileNumber"
                    placeholder="Tax File Number"
                    value={taxFileNumber}
                    onChange={(e) => setTaxFileNumber(e.target.value)}
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
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
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
                  <input
                    disabled
                    // value={positionRank}
                    type="text"
                    className="w-full px-4 py-2 border-2 border-white rounded-lg focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
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
                  <input
                    type="text"
                    id="positionRank"
                    name="positionRank"
                    placeholder="Position / Rank"
                    value={positionRank}
                    onChange={(e) => setPositionRank(e.target.value)}
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
                  <select
                    id="employmentType"
                    name="employmentType"
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                  >
                    <option value="">Select Employment Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Casual">Casual</option>
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
                  <input
                    type="number"
                    id="weeklySalary"
                    name="weeklySalary"
                    placeholder="Weekly Salary"
                    value={weeklySalary}
                    onChange={(e) => setWeeklySalary(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                  />
                </div>

                {/* Mobile No. */}
                <div>
                  <label
                    htmlFor="mobileNo"
                    className="block text-gray-700 mb-1"
                  >
                    Mobile No.
                  </label>
                  <input
                    type="text"
                    id="mobileNo"
                    name="mobileNo"
                    placeholder="Mobile No."
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
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
                    <input
                      type="text"
                      id="emergencyContactName"
                      name="emergencyContactName"
                      placeholder="Contact Name"
                      value={emergencyContactName}
                      onChange={(e) => setEmergencyContactName(e.target.value)}
                      className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                    />
                    <input
                      type="text"
                      id="emergencyContactPhone"
                      name="emergencyContactPhone"
                      placeholder="Contact Phone"
                      value={emergencyContactPhone}
                      onChange={(e) => setEmergencyContactPhone(e.target.value)}
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
                    value={residentialAddress}
                    onChange={(e) => setResidentialAddress(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
                  />
                </div>
              </div>
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
    </>
  );
};
