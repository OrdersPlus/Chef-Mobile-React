import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../components/custom/Toastify";
import { ToastContainer } from "react-toastify";
import { LoadingEffect } from "../components/custom/LoadingEffect";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("masktrend@gmail.com");
  const [password, setPassword] = useState("Admin123");
  const [loader, setLoader] = useState();
  const userData = {
    email: email,
    password: password,
  };
const userLogin= (event)=>{
  event.preventDefault();
    setLoader(true);
    axios.post(import.meta.env.VITE_BACK_END_URL+'login', userData, {
    headers: {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    },
  })
  .then(res => {

    // console.log("✅ Success:", res.data);
    localStorage.setItem('token', res?.data?.data?.token);

    localStorage.setItem('status', 'active');
    // successToast("login succesfull");
    // setTimeout(()=>{
    successToast("Login successful");
    navigate('/', { state: { showToast: true } });
    // },1000)
  })
  .catch(err => {
    if (err.response) {
      errorToast(err.response.data.message || "Login failed.");
      // console.error("❌ API Error:", err.response.data);
    } else {
      errorToast(err.message);
      // console.error("❌ Network Error:", err.message);
    }
  })
  .then(() => {
    setLoader(false);
  });
  }
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

        {loader && <LoadingEffect />}

        {/* Right Section with Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Chef Portal Login
          </h2>

          <form className="space-y-5" onSubmit={userLogin} autoComplete="on"> 
            <div>
              <label className="block text-gray-700">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full px-4 py-2 border-2 border-white rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Password
              </label>
              <input
              value={password}
                onChange={(e) => setPassword(e.target.value)}
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
