import React from "react";

const ShortMissingModal = () => {
  

  return (
 <dialog id="short_missing_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* Close button */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
    </form>

    <h3 className="font-bold text-lg text-center mb-4">Short & Missing</h3>

    <div className="mb-4">
      <label className="block text-gray-700 mb-1">QTY Order</label>
      <input
        type="number"
        className="input input-bordered w-full inset-shadow-sm shadow-xl/30"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 mb-1">QTY Delivered</label>
      <input
        type="number"
        className="input input-bordered w-full inset-shadow-sm shadow-xl/30"
      />
    </div>

    <div className="modal-action">
      <form method="dialog" className="w-full">
        <button className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white">
          Save & Continue
        </button>
      </form>
    </div>
  </div>
</dialog>
  );
};

export default ShortMissingModal;
