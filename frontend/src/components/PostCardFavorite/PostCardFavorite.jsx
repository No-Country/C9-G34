import React, { useEffect, useState } from "react";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";

export default function PostCardFavorite({ id }) {
  const [dataCard, setDataCard] = useState({});
console.log(dataCard)
  useEffect(() => {
    instance
      .get(`users/publications/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setDataCard(res.data));
  }, []);

  const removeFavorite = () => {
    instance
      .post(`favorites/${data.id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div
      className="w-100 mx-auto p-2 p-lg-4 d-flex gap-3 justify-content-center align-items-center mb-5 bg-white shadow"
      style={{
        maxWidth: screen.width >= 768 ? "100%" : "340px",
        minHeight: screen.width >= 768 ? "500px" : "270px",
      }}
    >
      <div className="bg-white position-relative shadow w-50">
        <img
          src={dataCard.userProfileImg || assets.Test01.img}
          className="position-absolute z-3 border border-white"
          style={{
            top: screen.width >= 768 ? "-5%" : "0",
            right: screen.width >= 768 ? "-5%" : "0",
            maxWidth: "100px",
            aspectRatio: 1,
            objectFit: "cover",
            borderRadius: "50%"
          }}
        />
        <img
          src={dataCard.img || assets.Test02.img}
          className="w-100"
          style={{
            height: screen.width >= 768 ? "400px" : "200px",
            objectFit: "cover"
          }}
        />
        <div className="d-flex gap-4 justify-content-start p-2">
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
      <div className="w-50">
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
