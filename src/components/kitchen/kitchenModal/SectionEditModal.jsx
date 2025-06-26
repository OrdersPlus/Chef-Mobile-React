import React from 'react'

const SectionEditModal = () => {
  return (

                <dialog id="edit_modal" className="modal">
          <div className="modal-box">
            <h2 className="text-lg font-semibold mb-2 ">Edit Pan</h2>
            <input type="text" defaultValue="Pan" className="input input-bordered w-full my-2 text-sm px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500  shadow-gray-400" />
            <select className="select select-bordered w-full text-sm  px-4 py-2 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-4  shadow-gray-400 z-50">
              <option>Select a Main Chef for Section [optional]</option>
              <option selected value="alexa">Alexa Huson</option>
              <option value="john">John Doe</option>
              <option value="jane">Safaet</option>
            </select>
            <div className="flex justify-start gap-3 pt-4">
              <button className="btn bg-green-500 text-white shadow-2xl shadow-green-700">Update</button>
              <button className="btn bg-red-500 text-white shadow-2xl shadow-red-900">Delete</button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
   
  )
}

export default SectionEditModal
