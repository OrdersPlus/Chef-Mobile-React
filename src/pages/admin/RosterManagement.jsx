import { useEffect, useState } from "react";
import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import { getAxios, postAxios } from "../../helper/HelperAxios";
import { LoadingEffect } from "../../components/custom/LoadingEffect";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { RosterShiftModal } from "./RosterShiftModal";



export const RosterManagement = () => {








  const [value, setValue] = useState()
   const [editShift, setEditShift] = useState();
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [label, setLabel] = useState();
  const [break_start_time, setBreakStartTime] = useState();
  const [break_end_time, setBreakEndTime] = useState();
 
const [modalData, setModalData] = useState();
// const [shifts, setShifts] = useState();

    useEffect(() => {
      getAxios(import.meta.env.VITE_BACK_END_URL + "roster/get-shift", setValue, setLoader);
    }, []);

    console.log(value)

    // console.log(value);

    // useEffect(() => {

   const formData = new FormData();
   formData.append("name", name);
    formData.append("from", from);
    formData.append("to", to);
    formData.append("label", label);
    formData.append("break_start_time", break_start_time);
    formData.append("break_end_time", break_end_time);


      const createShift = async (event) => {
        event.preventDefault();

        try {
          const res = await postAxios(
            import.meta.env.VITE_BACK_END_URL + `roster/create-shift`,
            setLoader,
            formData,
            true,
            true
          );

   console.log('postAxios response:', res.data);

          if (res) {
            document.getElementById("create_shift_modal").close();
            setName("");
            setFrom("");
            setTo("");
            setLabel("");
            setBreakStartTime("");
            setBreakEndTime("");
          
            }
        } catch (error) {
          console.error("Error creating shift:", error);
        }
      };
      
      // useEffect(() => {

      // })




  // const [loader, setLoader] = useState(false);
  // const [allData, setSetAllData] = useState();
  // const [shifts, setShifts] = useState();
  // const [roasterHour, setRoasterHour] = useState([]);
  // const [totalHours, setTotalHours] = useState([]);
    // function formatTime(timeStr) {
    //   const [hour, minute] = timeStr.split(':');
    //   const date = new Date();
    //   date.setHours(+hour);
    //   date.setMinutes(+minute);
    //   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // }

  // useEffect(()=>{
  //   const fetchData= async ()=>{ const res = await getAxios(import.meta.env.VITE_BACK_END_URL+'admin/roster/roaster-settings', setLoader, setSetAllData) 
  //     //  if (res) {
  //       // setShifts(allData)
  //       // setRoasterHour(allData.roster_hours)
  //       // setTotalHours(allData.total_hours)
  //     // }
  //   }
  //   fetchData();

  // },[])
  
  // console.log(allData.shifts)
  // console.log(shifts)
  // console.log(roasterHour)
  // console.log(totalHours)
  return (
    <div>
      {/* {loader && <LoadingEffect />} */}
      <main className="max-w-full mx-auto p-4">

        <ThreeCommonButton 
        firstBtn= "Roster Setting"
        firstUrl= "/admin/roster"
        secondBtn= "View Roster"
        secondUrl= "/admin/roster/view"
        thirdBtn= "Staff Attendance"
        thirdUrl= "/admin/roster/staff-attendance"
        />

        <div className="max-h-[50vh] max-w-[100vw] overflow-y-auto  grid grid-cols-1 gap-4 mb-6 shadow-gray-300 shadow-xl">
          <div className="flex justify start p-4">
            <button
              className="flex items-center px-2 py-1 bg-orange-500 text-white rounded-md shadow-md text-xs"
              onClick={() =>
                document.getElementById("create_shift_modal").showModal()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create Shift
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 shadow-gray-300 shadow-xl">




{value?.data?.map((item, index) => (

            <div  key={index} className={`border-4 border-${item?.label} p-4 rounded-lg shadow-gray-300 shadow-xl flex items-center justify-between `}>
              <div>
                <h3 className={`text-lg font-semibold text-orange-700`}>
                  {item?.label}
                </h3>
                <p className="text-sm text-gray-600">{(item?.break_start_time)} - {(item?.break_end_time)}</p>
              </div>

              <button onClick={() => {
                setModalData(item);
                document.getElementById("update_shift_modal").showModal();
              }} 
              className="text-black hover:text-orange-700">
              <FaPen />
              </button>
            </div>

   ))}
        


          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-2 pb-2">
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Mon</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Tue</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Wed</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Thus</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Fri</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Sat</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
            <div className="flex-shrink-0 w-24 p-2 bg-green-100 rounded-lg shadow-sm text-center border border-gray-200">
              <p className="text-sm font-medium text-green-400">Sun</p>
              <p className="text-xs text-green-700">67 hrs</p>
            </div>
          </div>
        </div>

      </main>
<dialog id="create_shift_modal" className="modal">
  <form onSubmit={createShift} className="modal-box max-w-xl">
    <h2 className="text-lg font-semibold mb-4">Create New Shift</h2>

    {/* Shift Name */}
    <input
      type="text"
      placeholder="Enter Shift Name"
      // value={editShift?.name}
      onChange={(e) => setName(e.target.value)}
      className="w-full mb-4 px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400"
    />

    {/* Shift Label */}
    <select
      value={label}
      onChange={(e) => setLabel(e.target.value)}
      className="select select-bordered w-full mb-4 px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-gray-400"
    >
      <option value="">Select Shift Label</option>
      {value?.data?.map((labelOption, index) => (
        <option key={index} value={labelOption?.id}>
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
          // value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="time"
          // value={to}
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
          // value={break_start_time}
          onChange={(e) => setBreakStartTime(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="time"
          // value={break_end_time}
          onChange={(e) => setBreakEndTime(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
    </div>

    {/* Save Button */}
    <button
      type="submit"
      className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700"
    >
      Save Shift
    </button>

    <div className="modal-action">
      <button
        type="button"
        onClick={() => document.getElementById("create_shift_modal").close()}
        className="btn"
      >
        Close
      </button>
    </div>
  </form>
</dialog>

  <RosterShiftModal 
    modalData={modalData}
    shifts={value?.shifts}
  />

    </div>

    
  );
};
