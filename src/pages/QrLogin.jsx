export const QrLogin = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl mx-4">
        {/* Left Section with Image */}
        <div className="md:w-1/2 bg-white p-6 flex items-center justify-center">
          <div className="border-15 border-white inset-shadow-sm shadow-xl/30 rounded-xl">
            <img
              src="https://chef.ordersplus.com.au/img/logo_icons/orderplus_chef_logo.png"
              alt="Chef Cooking"
              className="rounded-xl p-5 w-36 h-36 object-cover shadow-[inset_4px_4px_6px_rgba(0,0,0,0.3),_inset_-4px_-4px_6px_rgba(255,255,255,0.2)]"
            />
          </div>
        </div>

        {/* Right Section with QR Sign In */}
        <div className="md:w-1/2 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Chef Portal Login
          </h2>

          <div className="text-orange-600 text-center mb-4">
            <a href="#">Staff QR Sign In</a>
          </div>

          {/* Centered QR Code Box */}
          <div className="p-4 bg-white rounded-xl shadow-2xl border border-gray-200 flex justify-center items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=https://your-login-url.com&size=150x150"
              alt="QR Code"
              className="w-56 h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
