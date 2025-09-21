import axios from 'axios';
import { errorToast, successToast } from '../components/custom/Toastify';
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
// export async function getAxios(url, setLoader, setObject) {
//   try {
//     setLoader(true);
//     const token = localStorage.getItem('token')
//     const response = await axios.get(url,{
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//     },
//     // withCredentials:true,
//   });
//     // successToast('Data Received Successfully!')
//     // ✅ Wait for 2 seconds before proceeding
//     // await new Promise(resolve => setTimeout(resolve, 1000));
//     setObject(Object.values(response.data.data) );
//   } catch (error) {
//     errorToast('Failed to Receive Data!')
//     console.error('Error fetching data:', error);
//   } finally {
//     setLoader(false);
//   }
// }
export async function getAxios(url, setObject, setLoader, navigate) {
  try {
    setLoader(true);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setObject(response?.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoader(false);
  }
}



export async function postAxios(url, setLoader, setObject, navigate, useToken = true, contentType = true) {
  try {
    setLoader(true);

    const token = localStorage.getItem('token');
    if (useToken && !token) {
      navigate("/login", { replace: true });
      return;
    }

    const headers = {};
    if (useToken && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    headers["Content-Type"] = contentType ? "application/json" : "multipart/form-data";

    const response = await axios.post(url, setObject, { headers });

    successToast(response?.data?.message);
  } catch (error) {
    console.error('Error fetching data:', error?.response?.data);
    errorToast(error?.response?.data?.message);
  } finally {
    setLoader(false);
  }
}



export async function deleteAxios( url, id, setObjects, setLoader, token = false, message = "Data Deleted" ) {
  try {
    const token = localStorage.getItem("token");
    const confirm = await confirmDelete();
    if (confirm) {
      setLoader(true);
      const headers = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await axios.delete(`${url}/${id}`, { headers });
      if (res.status === 200) {
        setObjects((prev) => prev.filter((data) => data.id !== Number(id)));
        successToast(res.data.message || message);
      } else {
        errorToast("Failed to delete!");
      }
    }
  } catch (error) {
    console.error("Delete error:", error);
    errorToast(error?.response?.data?.message || "Something went wrong");
  } finally {
    setLoader(false);
  }
}

export const confirmDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33", // red
      cancelButtonColor: "#3085d6", // blue
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });
  return result.isConfirmed;
}

export const confirmAction = async (text="You won't be able to revert this!") => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: text,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#008000", // red
      cancelButtonColor: "#3085d6", // blue
      confirmButtonText: "Yes, Confirm!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });
  return result.isConfirmed;
}