import React, { useEffect, useState } from "react";
import { postAxios } from "../../../helper/HelperAxios";
import { useNavigate } from "react-router-dom";


const PrepEditModal = ({ sections, signleItem }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [prepItem, setPrepItem] = useState("");
  const [qtyRequired, setQtyRequired] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (signleItem) {
      setPrepItem(signleItem.prep_item || "");
      setSelectedSection(signleItem.section?.id || "");
      setQtyRequired(signleItem.qty_required || "");
      setUnit(signleItem.unit || "");
      setDate(signleItem.date || "");
    }
  }, [signleItem]);

  // Submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      section_id: selectedSection,
      prep_item: prepItem,
      qty_required: qtyRequired,
      unit,
      date,
    };

    const res = await postAxios(
      `${import.meta.env.VITE_BACK_END_URL}kitchen/prep-list/update-task/${signleItem?.id}`,
      setLoader,
      payload,
      navigate,
      true,
      true
    );

    // Close modal if successful
    if (res) {
      document.getElementById("prep_edit_modal").close();
    }
  };

  return (
    <dialog id="prep_edit_modal" className="modal">
      <div className="modal-box">
        <h2 className="text-lg font-semibold mb-2">
          Update Task in Section Prep-List
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Section Selector */}
          <select
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            required
          >
            <option value="">Select Task Section</option>
            {sections?.map((section, index) => (
              <option key={index} value={section.id}>
                {section.name}
              </option>
            ))}
          </select>

          {/* Prep Item Name */}
          <input
            type="text"
            value={prepItem}
            onChange={(e) => setPrepItem(e.target.value)}
            placeholder="Enter task name"
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            required
          />

          {/* Quantity & Unit */}
          <div className="flex gap-2">
            <input
              type="number"
              value={qtyRequired}
              onChange={(e) => setQtyRequired(e.target.value)}
              placeholder="Qty"
              className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              required
            />
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="Unit"
              className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
              required
            />
          </div>

          {/* Date */}
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700"
            disabled={loader}
          >
            {loader ? "Updating..." : "Update Task"}
          </button>
        </form>

        {/* Close Button */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PrepEditModal;
