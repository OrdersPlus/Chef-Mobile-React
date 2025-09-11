import React, { useState } from 'react';
import axios from 'axios';
import { FaWifi } from 'react-icons/fa';
import { errorToast, successToast } from '../custom/Toastify';

const SuppliersHomeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyToken = async () => {
    if (!token.trim()) {
      errorToast('Token is required!');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACK_END_URL + 'suppliers/verify-token',
        { token },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
          },
        }
      );

      successToast(response.data.message || 'Supplier connected!');
      setShowModal(false);
      setToken('');
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to verify token.';
      errorToast(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 w-full text-[var(--text-secondary)] mt-2 mb-2 shadow-xl shadow-gray-200 px-2 py-2 rounded-lg lg:w-2/5 flex items-center justify-center space-x-2 ml-4 mr-4"
      >
        <span>Connect Supplier Using Token</span>
        <FaWifi size={20} />
      </button>

      {/* Modal */}
      {showModal && (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="fixed inset-0 flex items-center justify-center z-100"
        >
          <div className="relative bg-[var(--secondary-color)] rounded-2xl shadow-xl p-8 w-11/12 max-w-md text-center space-y-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="font-semibold text-gray-700 mt-4 text-lg">
              Connect Supplier Using Token
            </h2>

            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter Token For Verification"
              className="w-full px-4 py-2 text-gray-600 border-2 border-white rounded-lg inset-shadow-sm shadow-xl/30 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 shadow-gray-400"
            />

            <button
              onClick={handleVerifyToken}
              disabled={loading}
              className={`bg-green-500 text-[var(--text-secondary)] px-6 py-2 rounded-lg font-semibold shadow-2xl shadow-orange-700 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Verifying...' : 'Verify Token'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuppliersHomeModal;
