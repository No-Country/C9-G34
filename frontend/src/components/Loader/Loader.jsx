import React from "react";
import useDataContext from "../../hooks/useDataContext";
import "./index.css";

const Loader = () => {
  const { loader } = useDataContext();

  return (
    <div
      className="loader__backdrop"
      style={{
        display: loader ? "flex" : "none",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
