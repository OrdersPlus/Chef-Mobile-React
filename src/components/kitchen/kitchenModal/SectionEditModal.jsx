import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SectionEditModal = ({ selectSections, selectChef }) => {
  const [editSectionName, setEditSectionName] = useState("");
  const [mainChef, setMainChef] = useState("");
  const [sectionId, setSectionId] = useState(null);

  // useEffect(() => {
  //   if (section) {
  //     setEditSectionName(section.name || "");
  //     setMainChef(section.mainChef || "");
  //     setSectionId(section.id || null);
  //   }
  // }, [section]);

  const updateSection = (event) => {
    event.preventDefault();
    console.log("Update Operation1 Triggered");
  //   const updatedSection = {
  //     name: editSectionName,
  //     mainChef: mainChef,
    };

  //   if (!sectionId) {
  //     console.error("❌ No section ID found for update.");
  //     return;
  //   }

  //   axios.post(`http://onti-mise-en.spentry.tech/api/edit-section/9`, updatedSection, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     withCredentials: true,
  //   })
  //     .then(res => {
  //       console.log("✅ Section updated:", res.data);
  //       setEditSectionName("");
  //       setMainChef("");
  //       document.getElementById('edit_modal').close();
  //     })
  //     .catch(err => {
  //       if (err.response) {
  //         console.error("❌ API Error:", err.response.data);
  //       } else {
  //         console.error("❌ Network Error:", err.message);
  //       }
  //     });
  // };

  return (
    <dialog id="edit_modal" className="modal">
      <form onSubmit={updateSection} className="modal-box">
        <h2 className="text-lg font-semibold mb-2">Edit Section</h2>

        <input
          value={editSectionName}
          onChange={(e) => setEditSectionName(e.target.value)}
          type="text"
          className="input input-bordered w-full my-2 text-sm px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400"
        />

        <select
          value={mainChef}
          onChange={(e) => setMainChef(e.target.value)}
          className="select select-bordered w-full text-sm px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-4 shadow-gray-400 z-50"
        >
          <option value="">Select a Main Chef for Section [optional]</option>
          {selectChef.map((chef, index) => (
            <option key={index} value={chef.id}>
              {chef.full_name}
            </option>
          ))}
          {/* Example static options, can be removed if not needed */}
          {/* <option value="alexa">Alexa Huson</option>
          <option value="john">John Doe</option>
          <option value="jane">Safaet</option> */}
        </select>

        <div className="flex justify-start gap-3 pt-4">
          <button type="submit" className="btn bg-green-500 text-white shadow-2xl shadow-green-700">Update</button>
          <button type="button" className="btn bg-red-500 text-white shadow-2xl shadow-red-900">Delete</button>
        </div>

        <div className="modal-action">
          <button type="button" className="btn" onClick={() => document.getElementById('edit_modal').close()}>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default SectionEditModal;
