import React from 'react'
import  {NavLink}  from "react-router-dom";

/* COMPONENETS */
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

/* FILES LOCALS */
import {  } from "./Contact.css";

export const Contact = () => {
  return (
    <>
      <div class="all-title-box">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2>CONTACTA CON NOSOTROS</h2>
                      <ul class="breadcrumb">
                          <li class="breadcrumb-item"><NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Inicio</NavLink></li>
                          <li class="breadcrumb-item active" style={{color:'white'}}>Contacto</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      <div className='contact-box-main'>
        <Container>

          <Row>
            <Col md={4}>
              <div className='contact-info-left'>
                <h2>Información de contacto</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, 
                  maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum 
                  rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                  <ul>
                            <li>
                                <p><i class="fas fa-map-marker-alt"></i>Ubicación: Toluca, Estado de México</p>
                            </li>
                            <li>
                                <p><i class="fas fa-phone-square"></i>Teléfono: <a href="tel:+1-888705770">+52 55 32 71 53 14</a></p>
                            </li>
                            <li>
                                <p><i class="fas fa-envelope"></i>Correo: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                            </li>
                        </ul>
              </div>
            </Col>
            <Col md={8}>
              <div className='contact-form-right'>
                <h2>PONERSE EN CONTACTO</h2>
                <p>Ingresa la información que se pide en el formulario y nos pondremos en contacto a la brevedad posible.</p>
                <Form>
                  <Form.Group className="mb-3" controlId="formGridName">
                    <FloatingLabel controlId="floatingInputGrid" label="Nombre Completo">
                      <Form.Control placeholder="Nombre Completo" />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridEmail">
                    <FloatingLabel controlId="floatingInputGrid" label="Ingresa tú Email">
                      <Form.Control type="email" placeholder="Ingresa tú Email" />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group controlId="formAasunto">
                    <FloatingLabel controlId="floatingInputGrid" label="Asunto">
                      <Form.Control placeholder="Asunto" />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <FloatingLabel
                      controlId="floatingTextarea"
                      label="Mensaje"
                      className="mb-3 mt-4"
                    >
                      <Form.Control as="textarea" placeholder="Aqui va tu mensaje" style={{ height: '100px' }}/>
                    </FloatingLabel>
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button style={{backgroundColor: '#d81a5a'}} size="lg" type="submit">
                      Enviar
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

    </>
  )
}
