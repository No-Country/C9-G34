import React from "react";
import assets from "../../assets/index";

export default function PostCard({ isfavorite = false }) {
  return (
    <div
      className="d-flex gap-3 justify-content-center align-items-center mb-5"
      style={{
        maxWidth: isfavorite ? "540px" : screen.width >= 768 ? "100%" : "540px",
        minHeight: isfavorite ? "auto" : screen.width >= 768 ? "570px" : "auto",
      }}
    >
      <div className="bg-white position-relative">
        <img
          src={assets.Test01.img}
          className="position-absolute z-3"
          style={{
            top: isfavorite ? "-10%" : screen.width >= 768 ? "-5%" : "-10%",
            right: isfavorite ? "-10%" : screen.width >= 768 ? "-5%" : "-10%",
          }}
          data-aos="fade-down"
        />
        <img
          src={assets.Test02.img}
          data-aos="fade-up-right"
          style={{
            width: isfavorite ? "auto" : screen.width >= 768 ? "450px" : "auto",
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
      <div >
        <h5 className="fs-1 mb-4">Card title</h5>
        <p style={{maxWidth: "500px", fontSize: isfavorite ? "auto" : screen.width >= 768 ? "40px" : "auto",}}>
          This is a wider card with supporting text below as a natural lead-in
        </p>
        <div className="d-flex gap-4">
          <button className="border-0 bg-transparent" data-aos="fade-up">
            <img src={assets.Message02Icon.img} />
          </button>
          {isfavorite ? (
            <button className="border-0 bg-transparent fs-1" data-aos="fade-up">
              <img
                src={assets.TrashIcon.img}
                alt={assets.TrashIcon.info}
                title={assets.TrashIcon.info}
                style={{ width: "40px" }}
              />
            </button>
          ) : (
            <button className="border-0 bg-transparent" data-aos="fade-up">
              <img
                src={assets.FavoriteIcon.img}
                alt={assets.FavoriteIcon.info}
                title={assets.FavoriteIcon.info}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
