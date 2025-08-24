import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const SectionsContext = createContext();
export const SectionsProvider = ({ children }) => {
    const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(import.meta.env.VITE_BACK_END_URL+"kitchen/sections",{
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
    },
  })
    // http://fardin-mise-en.spentry.tech/api/kitchen/sections
      .then(res => {
        setSections(res.data.data);
        // console.log(res.data.data)
      })
      .catch(err => console.error("Error fetching sections:", err))
    //   .finally(() => setLoading(false));
  }, []);

  return (
    <SectionsContext.Provider value={{ sections }}>
      {children}
    </SectionsContext.Provider>
  );
};

export const useSections = () => useContext(SectionsContext);
 