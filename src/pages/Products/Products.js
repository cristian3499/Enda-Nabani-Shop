import React from 'react'

/* Components */
import  {NavLink}  from "react-router-dom";
import { Container, Row, Col, Form, Button, Card} from "react-bootstrap";

/* FILES LOCALS */
import {  } from "./Products.css";
import ProductList from './ProductList'

export const Products = () => {
  const PRODUCTS = ProductList.Menudeo

  const handleButtonClick = (AddProduct) => {
    //console.log(AddProduct)
  };
  return (
    <>
      <div class="all-title-box">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2>Tienda</h2>
                      <ul class="breadcrumb">
                          <li class="breadcrumb-item"><NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Inicio</NavLink></li>
                          <li class="breadcrumb-item active" style={{color: 'white'}}>Tienda</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div className='shop-box-inner mt-5 mb-5'>
        <Container>
        <Row>          
          <Col md={12} className='shop-content-right'>
            <div className='right-product-box'>
              <Row>
                  
                {
                    PRODUCTS.map((productList, index) =>{
                      return(
                      <Col   md={4} className='mb-4'>
                        <div key={index}>
                          <Card >
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                              <Card.Title style={{color: '#d81a5a'}} > {productList.name} </Card.Title>
                              <Card.Title style={{color: 'black', fontSize:'15px'}} > {productList.category} </Card.Title>
                              <Card.Text>
                                {productList.description}
                              </Card.Text>
                                <Row>
                                  <Col md={6}>
                                  </Col>
                                    <span style={{fontWeight: 'bold', color: 'black'}} >Presentación: {productList.presentation}</span>
                                  <Col style={{color: '#d81a5a'}} md={6}>
                                    {productList.price} MXN
                                  </Col>
                                </Row>
                              <Button className='col-12 mt-2' onClick={() => handleButtonClick(productList)} variant="success">Comprar</Button>
                            </Card.Body>
                          </Card>
                        </div>
                      </Col>
                      )
                    })
                  }
                
              </Row>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  )
}
