import React, { createContext, useEffect, useState } from "react";
import { instance } from "../axios/axiosConfig";

// --------------------------------------------------------------------

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loader, setLoader] = useState(true)
  const [imgProfile, setImgProfile] = useState(null)
  const [userCredentials, setUserCredentials] = useState({
    id: "",
    login: localStorage.getItem("token"),
  });

  useEffect(() => { 
    instance
      .get("users/get", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setImgProfile(res.data.imgProfile));
    setTimeout(() => {setLoader(false)}, 500)
  }, [])

  return (
    <DataContext.Provider value={{ userCredentials, loader, setLoader, imgProfile }}>
      {children}
    </DataContext.Provider>
  );
};
