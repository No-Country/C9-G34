import React, { createContext, useEffect, useState } from "react";
import { instance } from "../axios/axiosConfig";

// --------------------------------------------------------------------

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState({
    id: "",
    login: localStorage.getItem("token"),
  });

  return (
    <DataContext.Provider value={{ userCredentials }}>
      {children}
    </DataContext.Provider>
  );
};
