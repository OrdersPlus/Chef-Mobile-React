import axios from 'axios';

export async function GetAxios(url, setObject, setLoader) {
  try {
    setLoader(true);
    const response = await axios.get(url);
    
    // ✅ Wait for 2 seconds before proceeding
    await new Promise(resolve => setTimeout(resolve, 5000));

    setObject(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoader(false);
  }
}
