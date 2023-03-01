import React, { createContext, useEffect, useState } from "react";
import { instance } from "../axios/axiosConfig";

// --------------------------------------------------------------------

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loader, setLoader] = useState(true)
  const [userCredentials, setUserCredentials] = useState({
    id: "",
    login: localStorage.getItem("token"),
  });

  useEffect(() => { 
    setTimeout(() => {setLoader(false)}, 500)
  }, [])

  return (
    <DataContext.Provider value={{ userCredentials, loader, setLoader }}>
      {children}
    </DataContext.Provider>
  );
};
