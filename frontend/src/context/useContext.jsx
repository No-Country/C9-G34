import React, { createContext, useEffect, useState } from "react";
import { instance } from "../axios/axiosConfig";

// --------------------------------------------------------------------

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState({
    id: "",
    login: localStorage.getItem("token"),
  });

//   useEffect(() => {
//     if (userCredentials.login !== null) {
//       instance
//         .get("api/auth/logged", {
//           auth: {
//             username: userCredentials.username,
//             password: userCredentials.password,
//           },
//         })
//         .then((res) => localStorage.setItem("token", res.data.token));
//     }
//   }, [userCredentials.login]);

  return (
    <DataContext.Provider value={{ userCredentials }}>
      {children}
    </DataContext.Provider>
  );
};
