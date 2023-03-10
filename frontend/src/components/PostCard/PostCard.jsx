import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";
import { alertOk, errorAlert } from "../../components/Alert/Alert";
import useDataContext from "../../hooks/useDataContext";

export default function PostCard({ data }) {
  const { userCredentials, emailProfile } = useDataContext();
  const [showSquareComment, setShowSquareComment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentController, setCommentController] = useState("");
  const [comments, setComments] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getComments();
  }, []);

  const addFavorite = () => {
    fetch(`https://lumini-production.up.railway.app/favorites/${data.id}`, {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => alertOk("Se agrego correctamente"))
      .catch(() => errorAlert("Upps, ocurrio un error"));
  };

  const getComments = () => {
    instance
      .get(`comments/all/${data.id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setComments(res.data))
      .catch(() => errorAlert("Ocurrio un error al cargar los comentarios"));
  };

  const createComment = () => {
    const Comment = {
      content: commentController,
    };

    fetch(`https://lumini-production.up.railway.app/comments/new/${data.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(Comment),
    })
      .then((res) => {
        alertOk("Comentario creado");
        getComments();
        setCommentController("");
        setShowSquareComment(false);
      })
      .catch(() => errorAlert("Upps, ocurrio un error"));
  };

  const randomRat = (min = 1, max = 3) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const amdomRatPerCard = randomRat();

  const deleteComment = (id) => {
    fetch(`https://lumini-production.up.railway.app/comments/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alertOk("Se elimino correctamente");
        getComments();
        setCommentController("");
      })
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
          <img
            src={
              data.userImgProfile ||
              "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png"
            }
            className="position-absolute z-3 bg-white rounded-circle"
            style={{
              objectFit: "cover",
              width: screen.width <= 768 ? "80px" : "100px",
              aspectRatio: 1,
              top: screen.width >= 768 ? "-5%" : "-5%",
              right: screen.width >= 768 ? "-5%" : "-5%",
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
              data-aos="fade-up-left"
            >
              <textarea
                placeholder="Comentario..."
                autoFocus={true}
                style={{ resize: "none" }}
                className="border-0"
                value={commentController}
                onChange={(e) => setCommentController(e.target.value)}
              ></textarea>
              <button
                className="align-self-end p-2 rounded-pill border-0 text-light bg-dark mt-2"
                onClick={createComment}
              >
                Enviar
              </button>
            </div>
          )}
          <div className="d-flex gap-4 justify-content-between align-items-center py-2 px-4 w-100">

              <div className="d-flex align-items-center" onMouseEnter={() => setIsShown(true)}>
                <span className="me-3">{amdomRatPerCard}</span>
                <button
                  className="mx-1 border-0 "
                  onClick={() => setIsShown(false)}
                >
                  <img
                    src={assets.LikeIcon.img}
                    alt={assets.FavoriteIcon.info}
                    title={assets.FavoriteIcon.info}
                  />
                </button>
                {isShown && (
                  <div onMouseEnter={() => setIsShown2(true)}>
                    <button
                      className=" mx-1 border-0"
                      onClick={() => setIsShown2(false)}
                    >
                      <img
                        src={assets.LikeIcon.img}
                        alt={assets.FavoriteIcon.info}
                        title={assets.FavoriteIcon.info}
                      />
                    </button>
                    {isShown2 && (
                      <button
                        className="mx-1 border-0 "
                        onClick={() => setIsShown2(true)}
                      >
                        <img
                          src={assets.LikeIcon.img}
                          alt={assets.FavoriteIcon.info}
                          title={assets.FavoriteIcon.info}
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
            {userCredentials.login !== null && (
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
            )}
          </div>
        </div>
        <div className="w-50">
          <h5 className="fs-1 mb-4">{data.title}</h5>
          <p
            className="limit__card"
            style={{
              maxWidth: "500px",
              fontSize: screen.width >= 768 ? "30px" : "auto",
            }}
          >
            {data.description}
          </p>
          <div className="d-flex gap-4 justify-content-end">
            {userCredentials.login !== null && (
              <>
                <button
                  className="border-0 bg-transparent"
                  data-aos="fade-up"
                  onClick={() => {
                    if (userCredentials.login !== null) {
                      setShowComments(!showComments);
                    } else {
                      navigate("/login");
                    }
                  }}
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
              </>
            )}
          </div>
        </div>
      </section>
      {showComments && (
        <section
          data-aos="fade-down"
          className="w-100 p-3"
          style={{ height: "250px", overflowY: "scroll" }}
        >
          <h3>Comentarios:</h3>
          <ul className="d-flex flex-column gap-3 align-items-start ps-0">
            {comments.length !== 0 ? (
              comments.map((comment) => (
                <li key={comment.id} className="w-100 position-relative">
                  <img
                    className="rounded-circle me-3"
                    src={
                      comment.user.imgProfile ||
                      "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png"
                    }
                    style={{ maxWidth: "50px", aspectRatio: 1 }}
                  />
                  {comment.content}
                  {emailProfile === comment.user.email && (
                    <button
                      className="position-absolute top-0 end-0 border-0 bg-transparent"
                      onClick={() => deleteComment(comment.id)}
                    >
                      <i
                        className="bx bxs-trash"
                        style={{ color: "#d40d0d" }}
                      ></i>
                    </button>
                  )}
                </li>
              ))
            ) : (
              <span className="m-auto pt-5">Se el primero en comentar</span>
            )}
          </ul>
        </section>
      )}
    </div>
  );
}
