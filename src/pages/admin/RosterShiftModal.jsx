import React, { useEffect, useState } from 'react'
import { deleteAxios, getAxios, postAxios } from '../../helper/HelperAxios';
import axios from 'axios';

export const RosterShiftModal = ({modalData,shifts}) => {

  const id = modalData?.id;
  const[editData,setEditData] =useState();
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [label, setLabel] = useState();
  const [break_start_time, setBreakStartTime] = useState();
  const [break_end_time, setBreakEndTime] = useState();

  useEffect(() => {
    getAxios(
      import.meta.env.VITE_BACK_END_URL + `roster/edit-shift/${id}`,
      setEditData,
      setLoader
    );
  }, [id]);

  // initialize local state from modalData so inputs are editable
  useEffect(() => {
    if (modalData) {
      setName(modalData?.name ?? "");
      setLabel(modalData?.label ?? "");
      setFrom(modalData?.from ?? "");
      setTo(modalData?.to ?? "");
      setBreakStartTime(modalData?.break_start_time ?? "");
      setBreakEndTime(modalData?.break_end_time ?? "");
    }
  }, [modalData]);

  console.log('dd',shifts);

  const updateShift = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name ?? "");
    formData.append("from", from ?? "");
    formData.append("to", to ?? "");
    formData.append("label", label ?? "");
    formData.append("break_start_time", break_start_time ?? "");
    formData.append("break_end_time", break_end_time ?? "");
    // If your Laravel route expects PUT/PATCH, uncomment:
    // formData.append(''_method'', ''PUT'');

    try {
      const res = await postAxios(
        import.meta.env.VITE_BACK_END_URL + `roster/update-shift/${id}`,
        setLoader,
        formData,
        true,
        true
      );

      console.log('postAxios response:', res?.data);

      if (res) {
        document.getElementById("update_shift_modal").close();
      }
    } catch (error) {
      console.error("Error creating shift:", error);
    }
  };


//   const deleteShift = async () => {
//   try {
//     const res = await axios.delete(
//       import.meta.env.VITE_BACK_END_URL + `roster/delete-shift/${id}`
//     );
//     console.log("Shift deleted:", res.data);

//     // close modal after delete
//     document.getElementById("update_shift_modal").close();
//   } catch (error) {
//     console.error("Error deleting shift:", error);
//   }
// };

  const deleteShift = async (id) => {
  try {
    
    const token = localStorage.getItem('token')
    await axios.delete(
   import.meta.env.VITE_BACK_END_URL + `roster/delete-shift/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log(" Shift deleted successfully");
    document.getElementById("update_shift_modal").close();
  } catch (err) {
    console.error(" Delete failed:", err.response?.data || err.message);
  }
};


  return (
<dialog id="update_shift_modal" className="modal">
  <form className="modal-box max-w-xl">
    <h2 className="text-lg font-semibold mb-4">Update Shift</h2>

    {/* Shift Name */}
    <input
      type="text"
      placeholder="Enter Shift Name"
      value={name ?? ""}
      onChange={(e) => setName(e.target.value)}
      className="w-full mb-4 px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400"
    />

    {/* Shift Label */}
    <select
      value={label ?? ""}
      onChange={(e) => setLabel(e.target.value)}
      className="select select-bordered w-full mb-4 px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400"
    >
      <option value="">Select Shift Label</option>
      {shifts?.map((labelOption, index) => (
        <option key={index} value={labelOption?.label}>
          {labelOption?.label}
        </option>
      ))}
    </select>

    {/* Shift Duration */}
    <div className="mb-4">
      <p className="font-semibold mb-1">Shift Duration</p>
      <div className="flex gap-2">
        <input
          type="time"
          value={from ?? ""}
          onChange={(e) => setFrom(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="time"
          value={to ?? ""}
          onChange={(e) => setTo(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
    </div>

    {/* Break Duration */}
    <div className="mb-4">
      <p className="font-semibold mb-1">Break Duration</p>
      <div className="flex gap-2">
        <input
          type="time"
          value={break_start_time ?? ""}
          onChange={(e) => setBreakStartTime(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="time"
          value={break_end_time ?? ""}
          onChange={(e) => setBreakEndTime(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
    </div>

    {/* Save Button */}
    <div className='flex gap-2'>
      <button
        type="submit"
        className="btn block mx-auto w-1/2 mt-4 bg-green-500 text-white shadow-2xl shadow-green-700"
        onClick={updateShift}
      >
        Update Shift
      </button>

      <button
        type="button"
        className="btn block mx-auto w-1/2 mt-4 bg-red-500 text-white shadow-2xl shadow-red-700"
        onClick={() => deleteShift(id)}
                                  
      >
        Delete Shift
      </button>
    </div>

    <div className="modal-action">
      <button
        type="button"
        onClick={() => document.getElementById("update_shift_modal").close()}
        className="btn"
      >
        Close
      </button>
    </div>
  </form>
</dialog>
  )
}
