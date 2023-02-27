import React from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/index";
import useDataContext from "../../hooks/useDataContext";

export default function Navbar() {
  const { userCredentials } = useDataContext();

  return (
    <nav className="navbar container">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src={assets.Logo.img}
            alt={assets.Logo.info}
            title={assets.Logo.info}
          />
        </a>
        {userCredentials.login === null && (
          <div className="d-flex gap-4">
            <Link
              className="border-0 bg-transparent text-decoration-none text-muted"
              to="/login"
            >
              Iniciar sesion
            </Link>
            <Link
              className="border-0 bg-transparent text-decoration-none text-muted"
              to="/register"
            >
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
