import axios from 'axios';
import { errorToast, successToast } from '../components/custom/Toastify';

export async function getAxios(url, setLoader, setObject) {
  try {
    setLoader(true);
    const token = localStorage.getItem('token')
    const response = await axios.get(url,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
    },
    // withCredentials:true,
  });
    // successToast('Data Received Successfully!')
    // ✅ Wait for 2 seconds before proceeding
    await new Promise(resolve => setTimeout(resolve, 1000));
    setObject(Object.values(response.data.data) );
  } catch (error) {
    errorToast('Failed to Receive Data!')
    console.error('Error fetching data:', error);
  } finally {
    setLoader(false);
  }
}


export async function postAxios(url, setLoader, setObject, token = true, contentType = true) {
  try {
    setLoader(true);
    const token = localStorage.getItem('token')
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    contentType ? headers["Content-Type"] = "application/json" : headers["Content-Type"] = "multipart/form-data"
    // if (contentType) {
    //   headers["Content-Type"] = "application/json";
    // } else {
    //   headers["Content-Type"] = "multipart/form-data";
    //   // headers["Accept"] = "application/json"; // Optional
    // }
    const response = await axios.post(url, setObject, { headers });
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(response.data);
     return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoader(false);
  }
}
