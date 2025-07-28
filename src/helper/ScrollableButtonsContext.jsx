import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const SectionsContext = createContext();
export const SectionsProvider = ({ children }) => {
    const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://onti-mise-en.spentry.tech/api/sections")
      .then(res => {
        setSections(res.data.sections);
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
 