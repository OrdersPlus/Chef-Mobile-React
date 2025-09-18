import React, { useEffect, useState } from "react";
import { postAxios } from "../../../helper/HelperAxios";
import { LoadingEffect } from "../../custom/LoadingEffect";

const PrepAddModal = ({sections}) => {
  const [loader, setLoader] = useState(false);
  const [sectionId, setSectionId] = useState();
  const [date, setDate] = useState();
  const [prepItem, setPrepItem] = useState();
  const [qtyRequired, setQtyRequired] = useState();
  const [unit, setUnit] = useState();

  const formData = new FormData();
  formData.append("section_id", sectionId ?? "");
  formData.append("date", date);
  formData.append("prep_item", prepItem);
  formData.append("qty_required", qtyRequired);
  formData.append("unit", unit);

  const createTask = (event) => {
    event.preventDefault();

    const res = postAxios(
      import.meta.env.VITE_BACK_END_URL + `kitchen/prep-list/add-task`,
      setLoader,
      formData,
      true,
      true
    );

    if (res) {
      document.getElementById("add_modal").close();
    }
  };
  console.log(sections);
  return (
    <>
      {loader && <LoadingEffect />}

      <div>
        <dialog id="add_modal" className="modal">
          <form onSubmit={createTask} className="modal-box">
            <h2 className="text-lg font-semibold mb-2">
              Add Task to Section Prep-List
            </h2>

            <select
              // value={}
              // sectionId
              onChange={(e) => setSectionId(e.target.value)}
              className="w-full px-4 py-2 border-2 border-white rounded-lg mb-4 shadow-xl"
            >
              <option>Select Task Section</option>

              {sections?.map((section, index) => (
                <option key={index} value={section.id}>
                  {section.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              onChange={(e) => setPrepItem(e.target.value)}
              placeholder="Enter Prep Item"
              className="w-full px-4 py-2 border-2 border-white rounded-lg mb-4 shadow-xl"
            />

            <div className="flex gap-2">
              <input
                type="number"
                onChange={(e) => setQtyRequired(e.target.value)}
                placeholder="Enter Quantity "
                className="w-1/2 px-4 py-2 border-2 border-white rounded-lg mb-4 shadow-xl"
              />
              <input
                type="text"
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Enter Unit"
                className="w-1/2 px-4 py-2 border-2 border-white rounded-lg mb-4 shadow-xl"
              />
            </div>

            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border-2 border-white rounded-lg mb-4 shadow-xl"
            />
            <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">
              Save Task
            </button>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default PrepAddModal;
