import React, { useEffect, useState } from "react";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";
import { alertOk, errorAlert } from "../../components/Alert/Alert";

export default function PostCardFavorite({ id }) {
  const [dataCard, setDataCard] = useState({});

  useEffect(() => {
    instance
      .get(`users/publications/${id.publicationId}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setDataCard(res.data));
  }, []);

  console.log(dataCard);

  const removeFavorite = () => {
    instance
      .delete(`favorites/${id.id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        alertOk("Eliminado");
        setTimeout(() => {
          window.location.reload();
        }, 3200);
      })
      .catch(() => {
        errorAlert("Ocurrio un error");
      });
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
          src={dataCard.userImgProfile || assets.Test01.img}
          className="position-absolute z-3 border border-white"
          style={{
            top: screen.width >= 768 ? "-5%" : "0",
            right: screen.width >= 768 ? "-5%" : "0",
            maxWidth: screen.width >= 768 ? "100px" : "50px",
            aspectRatio: 1,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <img
          src={dataCard.urlImg || assets.Test02.img}
          className="w-100"
          style={{
            height: screen.width >= 768 ? "400px" : "200px",
            objectFit: "cover",
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
        </div>
      </div>
      <div className="w-50">
        <h5 className="fs-1 mb-4">{dataCard.title}</h5>
        <p
        className="limit__card"
          style={{
            maxWidth: "500px",
            fontSize: screen.width >= 768 ? "30px" : "auto",
          }}
        >
          {dataCard.description}
        </p>
        <div className="d-flex gap-4">
          <button
            className="border-0 bg-transparent fs-1"
            data-aos="fade-up"
            onClick={removeFavorite}
          >
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
