import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import assets from "../../assets/index";

const NewPost = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [categories, setCategories] = useState([]);
  const [Loadimag, setImageLoad] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://lumini-production.up.railway.app/categories/all')
      .then(res => setCategories(res.data))
  }, []);
  const changeImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e) => {
      e.preventDefault();
      setImageLoad(e.target.result)
    }
  }
  console.log(categories)
  const submit = (data) => {
    console.log(data)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <img
          src={assets.Logo.img}
          alt={assets.Logo.info}
          title={assets.Logo.info}
        />

        <Form className='m-5 p-5' onSubmit={handleSubmit(submit)}>
          <Row>
            <Col>
              <Form.Group controlId="formFile" className="m-3 ">
                {Loadimag ?
                  <Image className='rounded mx-auto my-3 d-block' style={{ width: '350px', height: '350px' }}
                    src={Loadimag}
                    alt={assets.Imgedit.img}
                    title='imagen'>
                  </Image> : <Image className='rounded mx-auto my-3 d-block'
                    src={assets.Imgedit.img}
                    alt={assets.Imgedit.info}
                    title={assets.Imgedit.info}
                  >
                  </Image>
                }
                <Form.Control {...register('img', {
                  required: true
                })} type="file" accept='image/*' onChange={(e) => { changeImage(e); }} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group >
                <Form.Label> Title</Form.Label>
                <Form.Control {...register('title', {
                  required: true
                })} type="text" placeholder="Enter Post Title" />
                {errors.title?.type === "required" && <p>el campo Post Title es requerido</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label> Description</Form.Label>
                <Form.Control {...register('description', {
                  required: true
                })} type="text" placeholder="Enter Description" />
                {errors.description?.type === "required" && <p>el campo Description es requerido</p>}
              </Form.Group>
              <Form.Label> Category</Form.Label>
              <Form.Group>
                <Form.Select defaultValue="Select" {...register('category',{valueAsNumber: true})} >
                  <option>Select</option>
                  {categories.map(category => (
                    <option key={category.id} style={{ cursor: 'pointer' }} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button className='my-4' type="submit">
                Post
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </motion.section>
  );
};

export default NewPost;