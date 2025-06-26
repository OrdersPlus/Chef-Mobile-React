import React from 'react'

const PrepEditModal = () => {
  return (
  <dialog id="add_modal2" className="modal">
        <div className="modal-box">
          <h2 className="text-lg font-semibold mb-2">Update Task in Section Prep-List</h2>
         
          <select
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
          >
            <option>Select Task Section</option>
            <option value="chef_1">Bar</option>
            <option value="chef_2">Pan</option>
          </select>
                     <input
            type="text"
            placeholder="Wash potato"
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
          />

          <div className="flex gap-2">
            <input
              type="number"
              placeholder="10 Kg"
              className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            />
            <input
              type="text"
              placeholder="portion"
              className="w-1/2 px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
            />
          </div>

          <input
            type="date"
            className="w-full px-4 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-xl"
          />
          <button className="btn block mx-auto w-1/2 mt-4 bg-orange-500 text-white shadow-2xl shadow-orange-700">Update Task</button>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
  )
}

export default PrepEditModal
