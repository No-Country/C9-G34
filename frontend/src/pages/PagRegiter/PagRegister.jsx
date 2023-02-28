import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { instance } from "../../axios/axiosConfig";
import { alertOk, errorAlert } from "../../components/Alert/Alert";
import "./PagRegister.css";

const PagRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    instance
      .post("users/new", data)
      .then((res) => {
        alertOk(
          `${res.data.name} te registraste correctamente, ahora inicia sesion`
        );
        clear();
        setTimeout(() => {
          navigate("/login");
        }, 3200);
      })
      .catch((err) => errorAlert("Ocurrio un error, intenta de nuevo"));
  };

  const clear = () => {
    reset({
      name: "",
      surname: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container className="register ">
      <Row xs={1} lg={2}>
        <Col>
          <Form className="my-5 py-5" onSubmit={handleSubmit(submit)}>
            <Row>
              <Form.Group as={Col}>
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
              <Form.Group as={Col}>
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
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                })}
                type="email"
                placeholder="Enter email"
              />
              {errors.email?.type === "required" && (
                <p>el campo Email es requerido</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>El formato del Email es incorrecto</p>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 15,
                })}
                type="text"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p>el campo Password es requerido</p>
              )}
              {errors.password?.type === "minLength" && (
                <p>debe tener mas de 8 caracteres</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p>debe tener minimo de 15 caracteres</p>
              )}
            </Form.Group>
            <Button className="my-4" type="submit">
              Register
            </Button>
          </Form>
        </Col>
        <Col>
          <Card.Body className="mb-5 pb-5">
            <Card.Title>
              <h1>
                Lumini
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7678 6.375L15.9829 0.375C17.8094 0.775 19.4304 1.50833 20.8458 2.575C22.2605 3.64167 23.2889 4.90833 23.9312 6.375H11.7678ZM8.42587 8.875L4.30114 2.875C5.38501 1.99167 6.64471 1.29167 8.08023 0.775C9.51496 0.258333 11.0653 0 12.7312 0C12.9922 0 13.2933 0.0123333 13.6345 0.0369999C13.9757 0.0623333 14.2868 0.0916667 14.5678 0.125L8.42587 8.875ZM1.07963 12.5C0.9592 12.1 0.86406 11.6917 0.794211 11.275C0.723559 10.8583 0.688232 10.4333 0.688232 10C0.688232 8.81667 0.919057 7.7 1.38071 6.65C1.84235 5.6 2.49468 4.64167 3.33769 3.775L9.41942 12.5H1.07963ZM9.50974 19.625C7.68321 19.225 6.05741 18.4917 4.63232 17.425C3.20723 16.3583 2.17354 15.0917 1.53124 13.625H13.6646L9.50974 19.625ZM12.7312 20C12.4302 20 12.1243 19.9833 11.8136 19.95C11.5021 19.9167 11.2058 19.8833 10.9248 19.85L17.0366 11.125L21.1614 17.125C20.0775 18.0083 18.8182 18.7083 17.3835 19.225C15.9479 19.7417 14.3972 20 12.7312 20ZM22.1248 16.225L16.0431 7.5H24.3829C24.5033 7.9 24.5988 8.30833 24.6695 8.725C24.7393 9.14167 24.7743 9.56667 24.7743 10C24.7743 11.1667 24.5286 12.2833 24.0372 13.35C23.5451 14.4167 22.9076 15.375 22.1248 16.225Z"
                    fill="#323945"
                  />
                </svg>
              </h1>
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default PagRegister;
