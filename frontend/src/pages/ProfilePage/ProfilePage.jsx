import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { PostCard } from "../../components";
import { motion } from "framer-motion";
import { instance } from "../../axios/axiosConfig";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [dataUser, setDataUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    instance
      .get("users/get", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setDataUser(res.data));
  }, []);

  console.log(dataUser);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="container w-100 position-relative"
        style={{ height: screen.width >= 992 ? "400px" : "200px" }}
      >
        <img
          data-aos="fade-down"
          className="w-100 h-100"
          src="https://www.marketingdirecto.com/wp-content/uploads/2018/03/dise%C3%B1o.jpg"
          alt="Banner Profile"
        />
        <img
          style={{
            maxWidth: "150px",
            left: screen.width >= 992 ? "0" : "50%",
            transform:
              screen.width >= 992
                ? "translateX(50%) translateY(-50%)"
                : "translateX(-50%) translateY(-50%)",
          }}
          className="w-100 position-absolute top-100"
          src={
            dataUser.imgProfile ||
            "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png"
          }
          alt="Avatar"
        />
      </div>
      <Container className="d-lg-flex">
        <div className="mt-5 pt-5 pb-5 me-lg-4">
          <h2
            className="text-center text-lg-start position-relative"
            data-aos="fade-up-right"
          >
            {dataUser.name + " " + dataUser.surname}
            <button
              className="position-absolute top-0 right-0 bg-transparent border-0"
              onClick={() => navigate("/edit-user")}
            >
              <i
                class="bx bxs-pencil"
                style={{  fontSize: "2rem" }}
              ></i>
            </button>
          </h2>
          <ul className="ps-0" data-aos="fade-up-right">
            <li className="mt-2">
              <i className="me-2 bx bxs-phone"></i>{" "}
              {dataUser.phone || "Telefono"}
            </li>
            <li className="mt-2">
              <i className="me-2 bx bxs-envelope"></i>{" "}
              {dataUser.email || "Email"}
            </li>
          </ul>
        </div>
        <div
          className="ps-lg-5"
          style={{ width: screen.width >= 992 ? "75%" : "100%" }}
        >
          <h2 className="text-center mt-5 mb-5" data-aos="fade-up-right">
            Publicaciones Favoritas
          </h2>
          {dataUser.favoritePublications?.length !== 0 ? (
            dataUser.favoritePublications?.map((card, i) => {
              return <PostCard isfavorite={true} key={i + 1} />;
            })
          ) : (
            <h3 className="text-center">
              Aun no tienes publicaciones favoritas
            </h3>
          )}
        </div>
      </Container>
    </motion.section>
  );
};

export default ProfilePage;
