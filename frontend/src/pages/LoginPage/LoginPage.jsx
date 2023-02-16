import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React from "react";
import images from "../../assets/index";
// CSS
import "./index.css";

export default function LoginPage() {
  return (
    <Container
      className="p-0 my-3 opacity-75 h-100 d-flex flex-column align-items-center justify-content-center gap-4"
      style={{ minHeight: "100vh" }}
    >
      <Card.Img
        className="w-25 h-100 d-sm-none"
        src={images.Logo.img}
      />
      <Container className="d-flex flex-column align-items-center justify-content-center flex-sm-row justify-content-sm-around">
        <Card.Img
          className="w-50 h-50"
          src={images.LoginImg.img}
          style={{ maxWidth: "400px" }}
        />
        <Form className="p-5 d-flex gap-3 h-100 flex-column justify-content-center align-items-center">
        <Card.Img
        className="w-100 h-100 mb-4 d-none d-sm-block"
        src={images.Logo.img}
      />
          <h6>LOGIN</h6>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Usuario" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button
            type="submit"
            className="w-75"
            style={{ backgroundColor: "#512C1F" }}
          >
            Iniciar sesion
          </Button>
          <h6>Aun no eres usuario</h6>
          <Button type="submit" className="w-75 bg-secondary">
            Registrate
          </Button>
        </Form>
      </Container>
    </Container>
  );
}
