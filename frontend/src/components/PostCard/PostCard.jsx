import React from "react";
import assets from "../../assets/index";

export default function PostCard() {
  return (
    <div className="d-flex gap-3 justify-content-center align-items-center mb-5" style={{ maxWidth: "540px" }}>
      <div className="bg-white position-relative" >
        <img src={assets.Test01.img} className="position-absolute" style={{top: "-10%", right: "-10%"}}/>
        <img src={assets.Test02.img} />
        <div className="d-flex gap-4 justify-content-center my-2">
          <button className="border-0 bg-transparent">
            <img src={assets.LikeIcon.img} />
          </button>
          <button className="border-0 bg-transparent">
            <img src={assets.LikeIcon.img} />
          </button>
          <button className="border-0 bg-transparent">
            <img src={assets.LikeIcon.img} />
          </button>
        </div>
      </div>
      <div className="">
        <h5 className="">Card title</h5>
        <p className="">
          This is a wider card with supporting text below as a natural lead-in
          
        </p>
        <div className="d-flex gap-4">
          <button className="border-0 bg-transparent">
            <img src={assets.Message02Icon.img} />
          </button>
          <button className="border-0 bg-transparent">
            <img src={assets.FavoriteIcon.img} />
          </button>
        </div>
      </div>
    </div>
  );
}
