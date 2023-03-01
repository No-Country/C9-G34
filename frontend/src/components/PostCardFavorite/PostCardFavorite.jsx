import React, { useEffect, useState } from "react";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";

export default function PostCardFavorite({ id }) {
  const [dataCard, setDataCard] = useState({});

  useEffect(() => {
    instance
      .get(`users/publications/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setDataCard(res.data));
  }, []);

  console.log(dataCard)

  const removeFavorite = () => {
    instance
      .post(`favorites/${data.id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div
      className="d-flex gap-3 justify-content-center align-items-center mb-5"
      style={{
        maxWidth: screen.width >= 768 ? "100%" : "340px",
        minHeight: screen.width >= 768 ? "570px" : "340px",
      }}
    >
      <div className="bg-white position-relative">
        <img
          src={assets.Test01.img}
          className="position-absolute z-3"
          style={{
            top: screen.width >= 768 ? "-5%" : "-10%",
            right: screen.width >= 768 ? "-5%" : "-10%",
          }}
          data-aos="fade-down"
        />
        <img
          src={dataCard.img || assets.Test02.img}
          data-aos="fade-up-right"
          style={{
            width: screen.width >= 768 ? "450px" : "auto",
            maxHeight: "450px",
          }}
        />
        <div className="d-flex gap-4 justify-content-center my-2">
          <button className="border-0 bg-transparent">
            <img
              src={assets.LikeIcon.img}
              alt={assets.FavoriteIcon.info}
              title={assets.FavoriteIcon.info}
            />
          </button>
          <button className="border-0 bg-transparent">
            <img
              src={assets.LikeIcon.img}
              alt={assets.FavoriteIcon.info}
              title={assets.FavoriteIcon.info}
            />
          </button>
          <button className="border-0 bg-transparent">
            <img
              src={assets.LikeIcon.img}
              alt={assets.FavoriteIcon.info}
              title={assets.FavoriteIcon.info}
            />
          </button>
        </div>
      </div>
      <div>
        <h5 className="fs-1 mb-4">{dataCard.title}</h5>
        <p
          style={{
            maxWidth: "500px",
            fontSize: screen.width >= 768 ? "40px" : "auto",
          }}
        >
          {dataCard.description}
        </p>
        <div className="d-flex gap-4">
          <button className="border-0 bg-transparent" data-aos="fade-up">
            <img src={assets.Message02Icon.img} />
          </button>
          <button className="border-0 bg-transparent fs-1" data-aos="fade-up">
            <img
              src={assets.TrashIcon.img}
              alt={assets.TrashIcon.info}
              title={assets.TrashIcon.info}
              style={{ width: "40px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
