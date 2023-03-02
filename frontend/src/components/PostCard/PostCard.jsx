import React, { useState } from "react";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";
import axios from "axios";
import { alertOk, errorAlert } from "../../components/Alert/Alert";

export default function PostCard({ data }) {
  const [showSquareComment, setShowSquareComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const addFavorite = () => {
    fetch(`https://lumini-production.up.railway.app/favorites/${data.id}`, {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => alertOk("Se agrego correctamente"))
      .catch(() => errorAlert("Upps, ocurrio un error"));
  };

  return (
    <div
      className="w-100 mb-5 bg-white shadow p-2 p-lg-4"
      style={{
        maxWidth: screen.width >= 768 ? "850px" : "540px",
        minHeight: screen.width >= 768 ? "500px" : "260px",
      }}
    >
      <section className="d-flex gap-3 w-100 justify-content-center align-items-center gap-lg-5">
        <div
          className="bg-white position-relative shadow w-50 position-relative d-flex flex-column align-items-center"
          data-aos="fade-up-right"
        >
          {/*border border-3 border-white rounded-circle d-flex justify-content-center align-items-center */}
          <img
            src={assets.Test01.img}
            className="position-absolute z-3"
            style={{
              width: screen.width >= 768 ? "100px" : "auto",
              top: screen.width >= 768 ? "-5%" : "0",
              right: screen.width >= 768 ? "-5%" : "0",
            }}
          />
          <img
            src={data.urlImg || assets.Test02.img}
            className="w-100"
            style={{
              height: screen.width >= 768 ? "400px" : "200px",
              objectFit: "cover",
            }}
          />
          {showSquareComment && (
            <div
              className="bg-white shadow w-75 position-absolute top-50 d-flex flex-column p-3"
              style={{ borderRadius: "40px" }}
            >
              <textarea
                autoFocus={true}
                style={{ resize: "none" }}
                className="border-0"
              ></textarea>
              <button className="align-self-end p-2 rounded-pill border-0 text-light bg-dark mt-2">
                Enviar
              </button>
            </div>
          )}
          <div className="d-flex gap-4 justify-content-between py-2 px-4 w-100">
            <button className="border-0 bg-transparent">
              <img
                src={assets.LikeIcon.img}
                alt={assets.FavoriteIcon.info}
                title={assets.FavoriteIcon.info}
              />
            </button>
            <button
              className="border-0 bg-transparent"
              onClick={() => setShowSquareComment(!showSquareComment)}
            >
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
            <button
              className="border-0 bg-transparent"
              data-aos="fade-up"
              onClick={() => setShowComments(!showComments)}
            >
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
      </section>
      {showComments && (
        <section className="w-100 p-3" style={{ height: "250px" }}>
          <h3>Comentarios:</h3>
        </section>
      )}
    </div>
  );
}
