import React from "react";
import assets from "../../assets/index";
import { linksBottomNavigationBar } from "../../data/data";
export default function BottomNavigationBar() {
  return (
    <section className="container fixed-bottom d-flex justify-content-between py-3 first-color">
      {linksBottomNavigationBar.map((e, i) => (
        <li key={i + 1}>
          <img
          style={{width: "40px", aspectRatio: 1}}
            src={assets[e.img].img}
            alt={assets[e.img].info}
            title={assets[e.img].info}
          />
        </li>
      ))}
    </section>
  );
}
