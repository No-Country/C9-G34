import React from "react";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";

export default function PostCard({ data }) {
  const addFavorite = () => {
    instance
      .post(`favorites/${data.id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div
      className="d-flex gap-3 w-100 justify-content-center align-items-center mb-5 bg-white shadow-sm p-4"
      style={{
        maxWidth: screen.width >= 768 ? "850px" : "540px",
        minHeight: screen.width >= 768 ? "530px" : "300px",
      }}
    >
      <div
        className="bg-white position-relative shadow-sm w-50"
        data-aos="fade-up-right"
      >
        <img
          src={assets.Test01.img}
          className="position-absolute z-3"
          style={{
            top: screen.width >= 768 ? "-5%" : "-10%",
            right: screen.width >= 768 ? "-5%" : "-10%",
          }}
        />
        <img
          src={data.urlImg || assets.Test02.img}
          className="w-100"
          style={{
            height: screen.width >= 768 ? "400px" : "200px",
            objectFit: "contain",
          }}
        />
        <div className="d-flex gap-4 justify-content-between my-2 mx-4">
          <button className="border-0 bg-transparent">
            <img
              src={assets.LikeIcon.img}
              alt={assets.FavoriteIcon.info}
              title={assets.FavoriteIcon.info}
            />
          </button>
          <button className="border-0 bg-transparent">
            <img
              src={assets.NewComentIcon.img}
              alt={assets.NewComentIcon.info}
              title={assets.NewComentIcon.info}
            />
          </button>
        </div>
      </div>
      <div className="w-50">
        <h5 className="fs-1 mb-4">{data.title}</h5>
        <p
          style={{
            maxWidth: "500px",
            fontSize: screen.width >= 768 ? "30px" : "auto",
          }}
        >
          {data.description}
        </p>
        <div className="d-flex gap-4 justify-content-end">
          <button className="border-0 bg-transparent" data-aos="fade-up">
            <img src={assets.Message02Icon.img} />
          </button>
          <button
            className="border-0 bg-transparent"
            data-aos="fade-up"
            onClick={addFavorite}
          >
            <img
              src={assets.FavoriteIcon.img}
              alt={assets.FavoriteIcon.info}
              title={assets.FavoriteIcon.info}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
