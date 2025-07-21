import { useEffect, useState } from "react";
import { HelperAxios } from "../HelperAxios";
import { LoadingEffect } from "../custom/LoadingEffect";
// import { toast } from "../custom/Toastify";
import { ToastContainer, toast, Slide } from 'react-toastify';



export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const notify = () => toast.error('🦄 Wow so easy!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
});


useEffect(() => {
    HelperAxios('https://www.course-api.com/react-store-products', setProducts, setLoader);
}, []);


  return (
    <>
        <div>
        <button onClick={notify}>Notify!</button>
<ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}
/>
      </div>
      {loader && <LoadingEffect />}
        <h1>Hello How Are You</h1>
      {products.length === 0 ? (
        <p>Loading...</p> // ✅ no side effects here
      ) : (
        <>
          <p className="text-orange-500">First product ID: {products[0].id}</p>
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </>
      )}


            {/* <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}


      <p>{products.length > 0 ? products[2].price : ''}</p>
      <p>{products.length > 0 && products[2].price}</p>
      {/* <button onClick={() => toast("This is a toast message!")}>Toastify</button> */}

    </>
  );
};
