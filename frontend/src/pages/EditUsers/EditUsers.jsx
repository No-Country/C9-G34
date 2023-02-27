import React from 'react';
import { Button, Card, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Navbar } from '../../components';
import assets from "../../assets/index";
const EditUsers = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const submit = (data) => {
    console.log(data);
  }
  
  return (
    <Container>
      <Navbar/>
      <Row>       
        <Card className='m-auto' style={{ width: '500px' }}>        
          <Form className='my-5 ' onSubmit={handleSubmit(submit)}>
          <h3>Edit Perfil</h3>
            <Form.Group controlId="formFile" className="mb-3 ">
            <Image className='rounded mx-auto d-block'
            src={assets.Imgedit.img}
            alt={assets.Imgedit.info}
            title={assets.Imgedit.info}           
          >
            </Image>                     
            <Form.Control type="file"/>             
            </Form.Group>
            <Form.Group >              
              <Form.Label> First Name</Form.Label>
              <Form.Control {...register('name', {
                required: true
              })} type="text" placeholder="Enter First name" />
              {errors.name?.type === "required" && <p>el campo First Name es requerido</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label> Last Name</Form.Label>
              <Form.Control {...register('surname', {
                required: true
              })} type="text" placeholder="Enter Last name" />
              {errors.surname?.type === "required" && <p>el campo Last Name es requerido</p>}
            </Form.Group>
            <Form.Group>
                  <Form.Label> Teléfono</Form.Label>
                  <Form.Control {...register('telefono', {
                    required: true
                  })} type="text" placeholder="+593 999 999 999" />
                  {errors.telefono?.type === "required" && <p>el campo Telefono es requerido</p>}
                </Form.Group>
            <Button className='my-4' type="submit">
              Update
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default EditUsers;