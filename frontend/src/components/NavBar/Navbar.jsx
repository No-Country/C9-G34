import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/index";
import Dropdown from "react-bootstrap/Dropdown";
import useDataContext from "../../hooks/useDataContext";
import { instance } from "../../axios/axiosConfig";

export default function Navbar() {
  const { userCredentials } = useDataContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    instance.get("categories/all").then((res) => setCategories(res.data));
  }, []);

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
        {userCredentials.login === null ? (
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
        ) : (
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              Todas
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Todas</Dropdown.Item>
              {categories.map((category) => (
                <Dropdown.Item
                  key={category.id}
                  style={{ cursor: "pointer" }}
                  value={category.id}
                >
                  {category.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </nav>
  );
}
