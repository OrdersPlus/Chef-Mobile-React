import React, { useState } from 'react';
import axios from 'axios';
const SectionAddModal = ({ selectChef }) => {
  // console.log(selectChef);
  const [sectionName, setSectionName] = useState("");
  const [mainChef, setMainChef] = useState("");

  const sectionData = {
    name: sectionName,
    mainChef: mainChef,
  };
  const createSection = (event) => {
    event.preventDefault();
    axios.post('http://onti-mise-en.spentry.tech/api/add-section', sectionData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      withCredentials: true,
    })
      .then(res => {
        console.log("✅ Success:", res.data);

        // 🔁 Send data to KitchenHome
//        if (onAdd && res.data.section) {
//   onAdd(res.data.section); // ✅ Send full section with ID back to KitchenHome
// }


        // Reset fields
        setSectionName("");
        setMainChef("");

        // Close modal
        document.getElementById('add_modal').close();
      })
      .catch(err => {
        if (err.response) {
          console.error("❌ API Error:", err.response.data);
        } else {
          console.error("❌ Network Error:", err.message);
        }
      });
  };
  return (
    <dialog id="add_modal" className="modal">
      <form onSubmit={createSection} className="modal-box">
        <h2 className="text-lg font-semibold mb-2">Create New Section</h2>

        <input
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          type="text"
          placeholder="Enter Section Name"
    className="w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400"
        />
        <select
          value={mainChef}
          onChange={(e) => setMainChef(e.target.value)}
          className="select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400"
        >
          <option value="">Select a Main Chef (optional)</option>
          {selectChef.map((chef, index) => (
            <option key={index} value={chef.id}>{chef.full_name}</option>
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
  );
};
export default SectionAddModal;