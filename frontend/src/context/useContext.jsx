import React, { createContext, useState } from "react";

// --------------------------------------------------------------------

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState({
		id: "",
		name: "",
		login: localStorage.getItem("token"),
	});

  return <DataContext.Provider value={{userCredentials}}>{children}</DataContext.Provider>;
};
