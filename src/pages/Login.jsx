const Login = () => {
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

        {/* Right Section with Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Chef Portal Login
          </h2>

          <form action="" method="POST" className="space-y-5">
            <div>
              <label for="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label for="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 border-15 border-white rounded-lg shadow-xl/30 hover:bg-orange-700"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center text-orange-600">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
