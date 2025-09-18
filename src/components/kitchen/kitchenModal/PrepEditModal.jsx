import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAxios, postAxios } from '../../../helper/HelperAxios';

const PrepEditModal = ({ sections }) => {


   const [prepData, setPrepData] = useState();
   const [loader, setLoader] = useState(false);
  // const [selectedSection, setSelectedSection] = useState("");
  // const [prepItem, setPrepItem] = useState("");
  // const [qtyRequired, setQtyRequired] = useState("");
  // const [unit, setUnit] = useState("");
  // const [date, setDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await getAxios(
        import.meta.env.VITE_BACK_END_URL + `kitchen/prep-list/assign-task/${sections.id}`,
        setPrepData,
        setLoader
      );
    };
    fetchData();
  }, []);





  //   const handleSubmit = async (event) => {
  //     event.preventDefault();


  //   const formData = new FormData();
  //   formData.append('section', selectedSection);
  //   formData.append('prep_item', prepItem);
  //   formData.append('qty_required', qtyRequired);
  //   formData.append('unit', unit);
  //   formData.append('date', date);

  //   const res = await postAxios(
  //     import.meta.env.VITE_BACK_END_URL + '',
  //     setLoader,
  //     formData,
  //     true,
  //     true
  //   );

  //   // Close the modal if the request is successful
  //   if (res) {
  //     document.getElementById('add_modal2').close();
  //   }



  // }

  console.log("edit modal", sections);
  return (
  <form  id="add_modal2" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-semibold mb-2">Update Task in Section Prep-List</h2>
         
          <select
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            // onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option>Select Task Section</option>

             {sections?.map((section, index) => (
              <option key={index} value={section?.id}>
                {section?.name}
              </option>
            ))}
{/* <option value={items?.section?.name}>
      {items?.section?.name} 
    </option> */}




          </select>

  
            <input
            type="text"
            value={sections?.prep_item}
            // onChange={(e) => setPrepItem(e.target.value)}
            placeholder=""
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
          />

          <div className="flex gap-2">
            <input
              type="number"
              value={sections?.qty_required}
              // onChange={(e) => setQtyRequired(e.target.value)}
              className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            />
            <input
              type="text"
            value={sections?.unit}
            // onChange={(e) => setUnit(e.target.value)}
              className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            />
          </div>

          <input
            value={sections?.date}
            // onChange={(e) => setDate(e.target.value)}
            type="date"
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
          />
          <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">Update Task</button>
          <div className="modal-action">
            <form method="dialog">
              <button value="submit" className="btn">Close</button>
            </form>
          </div>
        </div>
      </form>
  )
}

export default PrepEditModal;
