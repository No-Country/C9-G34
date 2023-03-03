import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/index";
import { linksBottomNavigationBar } from "../../data/data";
import useDataContext from "../../hooks/useDataContext";

export default function BottomNavigationBar() {
  const { userCredentials, imgProfile } = useDataContext();
  const navigate = useNavigate();

  return (
    <section className="container fixed-bottom d-flex justify-content-center py-3 first-color gap-5">
      {linksBottomNavigationBar.map((e, i) => {
        if (e.to == "/newPost" || e.to == "/profile") {
          if (userCredentials.login !== null) {
            return (
              <li key={i + 1} onClick={() => navigate(e.to)}>
                <img
                  style={{
                    width: "40px",
                    aspectRatio: 1,
                    borderRadius: e.to == "/profile" ? "50%" : "0",
                  }}
                  src={
                    e.to == "/profile"
                      ? imgProfile || assets[e.img].img
                      : assets[e.img].img
                  }
                  alt={assets[e.img].info}
                  title={assets[e.img].info}
                />
              </li>
            );
          }
        } else {
          return (
            <li key={i + 1} className="mx-5" onClick={() => navigate(e.to)}>
              <img
                style={{ width: "40px", aspectRatio: 1 }}
                src={assets[e.img].img}
                alt={assets[e.img].info}
                title={assets[e.img].info}
              />
            </li>
          );
        }
      })}
    </section>
  );
}
