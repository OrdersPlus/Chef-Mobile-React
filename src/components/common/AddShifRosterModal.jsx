import axios from 'axios';
import { useState } from 'react'

const AddShiftRosterModal = () => {
  
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

const object= {
  shift_id: selectedShift,
  roster_id: selectedSection
}

  const handleSaveShift = (event) => {
    event.preventDefault();
    if (!selectedShift || !selectedSection) {
      alert('Please select both shift and section');
    }
    console.log('Shift saved:', selectedShift, 'Section:', selectedSection);
    axios.post('http://safaet-mise-en.spentry.tech/api/hours_controls/save', object, {})
      .then(response => {
        console.log('Shift added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding shift:', error);
      });
  }

  return (

    <dialog id="add_modal" className="modal">
      <div className="modal-box">
        <h2 className="text-lg font-semibold mb-2">Add Shift To Roster</h2>
        <form onSubmit={handleSaveShift}>
          <select
            className="select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30"
            value={selectedShift}
            onChange={(e) => setSelectedShift(e.target.value)}
          >
            <option value="">Select Shift</option>
            <option value="1">Chef John</option>
            <option value="4">Chef Marie</option>
          </select>

          <select
            className="mt-4 select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="1">Section A</option>
            <option value="2">Section B</option>
            <option value="3">Section C</option>
          </select>

          <button
            onClick={handleSaveShift}
            className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white"
          >
            Save Shift
          </button>
        </form>
        <div className="modal-action">
          <button type="button" onClick={() => document.getElementById('add_modal').close()} className="btn">
            Close
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default AddShiftRosterModal;
