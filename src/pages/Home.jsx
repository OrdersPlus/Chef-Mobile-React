import { useEffect, useState } from "react";
// import { toast } from "../custom/Toastify";
import { ToastContainer, toast, Slide } from 'react-toastify';
import {getAxios, postAxios} from '../helper/HelperAxios';
import {LoadingEffect} from '../components/custom/LoadingEffect';
import { successToast, errorToast } from "../components/custom/Toastify";


export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(1);

useEffect(() => {
  console.log("useEffect1")
    getAxios('https://www.course-api.com/react-store-products', setLoader, setProducts);
  console.log("useEffect2")

}, []);

const postData={
  name:"fardin",
}
const sendPost= ()=>{postAxios('http://fardin-mise-en.spentry.tech/api/testing', setLoader, postData ), false};

const addOne = ()=>{
  (setCount(count+1))
  console.log(count),[]}
  
  return (
    <>
        <div>
        <button onClick={() => successToast('Data Inserted Successfully!')}>successToast!</button>
        <br/>
        <button onClick={() => errorToast('Failed to Insert Data!')}>errorToast!</button>
    <ToastContainer />
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

      <p>{products.length > 0 ? products[2].price : ''}</p>
      <p>{products.length > 0 && products[2].price}</p>
      {/* <button onClick={() => toast("This is a toast message!")}>Toastify</button> */}

<button onClick={sendPost}>Send post request</button>
<br/>
<button onClick={addOne}>Add {count}</button>
    </>
  );
};
