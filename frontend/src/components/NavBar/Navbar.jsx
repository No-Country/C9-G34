import React from "react";
import assets from "../../assets/index";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src={assets.Logo.img}
            alt={assets.Logo.info}
            title={assets.Logo.info}
          />
        </a>
        <button className="border-0 bg-transparent">
          <img
            src={assets.Message01Icon.img}
            alt={assets.Message01Icon.info}
            title={assets.Message01Icon.info}
          />
        </button>
      </div>
    </nav>
  );
}
