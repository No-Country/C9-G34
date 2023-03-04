import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Image, Row } from "react-bootstrap";
import { alertOk, errorAlert } from "../../components/Alert/Alert";
import { useForm } from "react-hook-form";
import { Navbar } from "../../components";
import assets from "../../assets/index";
import { instance } from "../../axios/axiosConfig";
import useUploadImage from "../../hooks/useUploadImage";
import useDataContext from "../../hooks/useDataContext";
import { useNavigate } from "react-router-dom";

const EditUsers = () => {
  const [afterData, setAfterData] = useState({});
  const [loadImg, setImageLoad] = useState(null);
  const [image, setImage] = useState("");
  const { setLoader } = useDataContext();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const changeImage = async (e) => {
    setLoader(true);
    const targetImage = e.target;

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImageLoad(e.target.result);
    };

    let res = await useUploadImage(targetImage);

    if (res !== "No es imagen") {
      setImage(res);
      setTimeout(() => setLoader(false), 500);
    } else {
      return;
    }
  };

  useEffect(() => {
    setLoader(true);
    instance
      .get("users/get", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setAfterData(res.data);
        reset({
          name: res.data.name,
          surname: res.data.surname,
          phone: res.data.phone == null ? "" : res.data.phone,
        });
      });
    setTimeout(() => setLoader(false), 500);
  }, []);

  const submit = (data) => {
    data.password = afterData.password;
    data.email = afterData.email;
    data.imgProfile = image.length == 0 ? afterData.imgProfile : image;
    data.ratings = 0;

    instance
      .put("users/edit", data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        alertOk("Datos actualizados");
        setTimeout(() => {
          navigate("/profile");
        }, 3200);
      })
      .catch(() => errorAlert("Ocurrio un error, intentalo mas tarde"));
  };

  return (
    <Container>
      <Navbar />
      <Row className="pb-sm-5 px-3">
        <Card className="m-auto" style={{ width: "500px" }}>
          <Form className="my-5 " onSubmit={handleSubmit(submit)}>
            <h3>Editar Perfil</h3>
            <Form.Group controlId="formFile" className="mb-3 ">
              <Image
                className="rounded mx-auto d-block w-100 mb-4"
                src={loadImg ? loadImg : assets.Imgedit.img}
                alt={assets.Imgedit.info}
                title={assets.Imgedit.info}
                style={{ maxWidth: "150px" }}
              ></Image>
              <Form.Control
                {...register("imgProfile")}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  changeImage(e);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> First Name</Form.Label>
              <Form.Control
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder="Enter First name"
              />
              {errors.name?.type === "required" && (
                <p>el campo First Name es requerido</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                {...register("surname", {
                  required: true,
                })}
                type="text"
                placeholder="Enter Last name"
              />
              {errors.surname?.type === "required" && (
                <p>el campo Last Name es requerido</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label> Teléfono</Form.Label>
              <Form.Control
                {...register("phone", {
                  required: true,
                })}
                type="text"
                placeholder="+593 999 999 999"
              />
              {errors.telefono?.type === "required" && (
                <p>el campo Telefono es requerido</p>
              )}
            </Form.Group>
            <Button className="my-4" type="submit">
              Update
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default EditUsers;
