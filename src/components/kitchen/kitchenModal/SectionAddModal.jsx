import React from 'react'

const SectionAddModal = () => {
  return (
      
      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-semibold mb-2">Create New Section</h2>
          <input type="text" placeholder="Enter Section Name" className="w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4  shadow-gray-400" />
          <select className="select select-bordered w-full px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400">
            <option>Select a Main Chef for Section [optional]</option>
            <option value="chef_1">Chef John</option>
            <option value="chef_2">Chef Marie</option>
          </select>
          <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">Save Section</button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
  )
}

export default SectionAddModal
