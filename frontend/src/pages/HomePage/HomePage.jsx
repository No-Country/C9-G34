import React, { useEffect, useState } from "react";
import { PostCard, Navbar } from "../../components";
import { motion, useScroll, useSpring } from "framer-motion";
import { instance } from "../../axios/axiosConfig";
import useDataContext from "../../hooks/useDataContext";
import {
  Col,
  Dropdown,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
export default function HomePage() {
  const [publicationsData, setPublicationsData] = useState([]);
  const { setLoader } = useDataContext();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoader(true);
    resetCategories();
    setTimeout(() => setLoader(false), 500);
  }, []);
  useEffect(() => {
    instance.get("categories/all").then((res) => setCategories(res.data));
  }, []);
  const filterCategory = (id) => {
    const mostrar = categories.filter((c) => c.id === id);
    setPublicationsData(mostrar[0].publications);
  };
  const resetCategories = () => {
    instance
      .get("users/publications/all")
      .then((res) => setPublicationsData(res.data));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <Row style={{ width: "100%" }}>
        <Col lg={3} >
          <ListGroup className=" m-auto mx-5 px-3 " >
            <Dropdown>
              <Dropdown.Toggle className="border-light btn-lg bg-light text-dark " style={{width:"100%"}} >
                Categorys
              </Dropdown.Toggle>
              <Dropdown.Menu style={{width:"100%"}}>
              <Dropdown.Item style={{ cursor: "pointer" }} onClick={resetCategories}>Todas</Dropdown.Item>
              {categories.map((category) => (
                <Dropdown.Item
                key={category.id}
                style={{ cursor: "pointer" }}
                onClick={() => filterCategory(category.id)}
                >
                  {category.title}
                </Dropdown.Item>
              ))}
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup>
        </Col>
        <Col className="mr-3">
          <div className="w-100 p-3 py-5 container py-sm-3 pb-sm-5  flex-sm-column align-items-center">
            {publicationsData.map((publication, i) => {
              return <PostCard data={publication} key={i + 1} />;
            })}
          </div>
        </Col>
      </Row>
    </motion.section>
  );
}
