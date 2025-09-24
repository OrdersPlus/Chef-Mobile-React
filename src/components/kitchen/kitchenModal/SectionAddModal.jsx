import React, { use, useEffect, useState } from 'react';
import { getAxios, postAxios } from '../../../helper/HelperAxios';
import { LoadingEffect } from '../../custom/LoadingEffect';
const SectionAddModal = () => {
  // console.log(selectChef);
  const [value, setValue] = useState();
  const [loader, setLoader] = useState(false);
  const [sectionName, setSectionName] = useState();
  const [sectionId, setSectionId] = useState();
  const [sectionChefName, setSectionChefName] = useState();
  const [sectionChefId, setSectionChefId] = useState();

  useEffect(() => {
    getAxios(import.meta.env.VITE_BACK_END_URL + "kitchen/assign", setValue, setLoader);
  }, []);

  // useEffect(() => {
  //   setSectionName(value?.name || "");
  //   setSectionId(value?.userId || "");
  //   setSectionChefName(value?.section_chef?.id)
  //   setSectionChefId(value?.section_chef?.full_name)
  // }, [value]);

// console.log(value);

  const formData = new FormData();
  formData.append('name', sectionName);
  formData.append('userId', setSectionChefId);

  const createSection = (event) => {
    event.preventDefault();

    // const res = async () => {
    const res = postAxios(import.meta.env.VITE_BACK_END_URL + "kitchen/add-section", setLoader, formData, true, true);
    // };
    if (res) {
      document.getElementById('add_modal').close();
    }
  //   useEffect(() => {
  //   const fetchUsers = () => {
  //     getAxios(import.meta.env.VITE_BACK_END_URL + "assign", setUserId);
  //   };
  //   fetchUsers();
  // }, []);


//       withCredentials: true,
//     })
//       .then(res => {
//         console.log("✅ Success:", res.data);

//         // 🔁 Send data to KitchenHome
// //        if (onAdd && res.data.section) {
// //   onAdd(res.data.section); // ✅ Send full section with ID back to KitchenHome
// // }


//         // Reset fields
//         setName("");
//         // setUserId("");
//         // Close modal
//         document.getElementById('add_modal').close();
//       })
//       .catch(err => {
//         if (err.response) {
//           console.error("❌ API Error:", err.response.data);
//         } else {
//           console.error("❌ Network Error:", err.message);
//         }
//       });
  };
  return (
    <>
      {loader && <LoadingEffect />}

    <dialog id="add_modal" className="modal">
      <form onSubmit={createSection} className="modal-box">
        <h2 className="text-lg font-semibold mb-2">Create New Section</h2>

        <input
          // value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          type="text"
          placeholder="Enter Section Name"
    className="w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400"
        />
        <select
          value={sectionChefName}
          onChange={(e) => setSectionChefId(e.target.value)}
          className="select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400"
        >
          <option value="">Select a Main Chef (optional)</option>
          {value?.data?.map((chef, index) => (
            <option key={index} value={chef?.section_chef?.id}>{chef?.section_chef?.full_name}</option>
          ))}
        </select>

        <button
          type="submit"
          className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700"
        >
          Save Section
        </button>

        <div className="modal-action">
          <button
            type="button"
            className="btn"
            onClick={() => document.getElementById('add_modal').close()}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>

    </>
  );
};
export default SectionAddModal;