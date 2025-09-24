import React, { useState, useEffect } from "react";

import { getAxios, postAxios } from "../../../helper/HelperAxios";
import { LoadingEffect } from "../../custom/LoadingEffect";
import axios from "axios";

const SectionEditModal = () => {
  //const { section } = useParams();
  const [editSection, setEditSection] = useState("");
  const [sectionId, setSectionId] = useState();
  const [sectionName, setSectionName] = useState();
  const [sectionChefId, setSectionChefId] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAxios(
      import.meta.env.VITE_BACK_END_URL + `kitchen/assign`,
      setEditSection,
      setLoader
    );
  }, []);



  // console.log(editSection);

  const formData = new FormData();
  formData.append("id", sectionId);
  formData.append("name", sectionName);
  formData.append("user_id", sectionChefId);

  formData.append("_method", "POST");

  const updateSection = (event) => {
    event.preventDefault();

    postAxios(
      import.meta.env.VITE_BACK_END_URL +
        `kitchen/update-section/${sectionId}`,
      setLoader,
      formData,
      true,
      true
    );

  };

  const deleteSection = async (id) => {
  try {
    console.log(`kitchen/delete-section/${id}`);
    const token = localStorage.getItem('token')
    await axios.delete(
      import.meta.env.VITE_BACK_END_URL + `kitchen/delete-section/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log("✅ Section deleted successfully");
    document.getElementById("edit_modal").close();
  } catch (err) {
    console.error("❌ Delete failed:", err.response?.data || err.message);
  }
};


  return (
    <>
      {loader && <LoadingEffect />}

      <dialog id="edit_modal" className="modal">
        <form onSubmit={updateSection} className="modal-box">
          <h2 className="text-lg font-semibold mb-2">Edit Section</h2>

          <select
            // value={sectionChefName}
            onChange={(e) => setSectionId(e.target.value)}
            className=" mb-4 select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400"
          >
            <option value="">Select a Main Chef (optional)</option>
            {editSection?.data?.map((chef, index) => (
              <option key={index} value={chef?.id}>
                {chef?.name}
              </option>
            ))}
          </select>

          <input
            // value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            type="text"
            placeholder="Enter Section Name"
            className="w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400"
          />

          <select
            value={sectionChefId}
            onChange={(e) => setSectionChefId(e.target.value)}
            className="select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400"
          >
            <option value="">Select a Main Chef (optional)</option>
            {editSection?.data?.map((chef, index) => (
              <option key={index} value={chef?.section_chef?.id}>
                {chef?.section_chef?.full_name}
              </option>
            ))}
          </select>

          <div className="flex justify-start gap-3 pt-4">
            <button
              type="submit"
              className="btn bg-green-500 text-white shadow-2xl shadow-green-700"
            >
              Update
            </button>
            <button
              type="button"
              className="btn bg-red-500 text-white shadow-2xl shadow-red-900"
              onClick={() => deleteSection(sectionId)}
            >
              Delete
            </button>

          </div>

          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("edit_modal").close()}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default SectionEditModal;
