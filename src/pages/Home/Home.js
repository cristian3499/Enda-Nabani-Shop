import React from 'react'
/* Components */
import Carousel from 'react-bootstrap/Carousel';
import CorrouselFrist from "../../assets/images/banner-03.jpg";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

/* Files locals */
import {  } from "./Home.css";
import ProductList from '../Products/ProductList'

/* Images */
import Tshirts from "../../assets/images/t-shirts-img.jpg"
import Wallet from "../../assets/images/wallet-img.jpg"
import Shoes from "../../assets/images/shoes-img.jpg"
import Shirt from "../../assets/images/shirt-img.jpg"
import WomenBag from "../../assets/images/women-bag-img.jpg"
import WomenShoes from "../../assets/images/women-shoes-img.jpg"
import ImageBlog from "../../assets/images/blog-img.jpg"


export const Home = () => {

  const PRODUCTS = ProductList.Menudeo

  const allProduct = []
  for (let index = 0; index < 6; index++) {
    const element = PRODUCTS[index];
    allProduct.push(element)
  }

  const highlights = [];
  for (let index = 0; index < 2; index++) {
    const element = PRODUCTS[index];
    highlights.push(element)
  }

  const bestSellers = [];
  for (let index = 0; index < 3; index++) {
    const element = PRODUCTS[index];
    bestSellers.push(element)
  }

  return (
    <>
    {/* Start carrousel */}
    <Carousel>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src={CorrouselFrist}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={CorrouselFrist}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CorrouselFrist}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* End to carrousel */}

    <Container>
      {/* CARDS 1 */}
      <CardGroup className='mt-5'>
        <Card>
          <Card.Img variant="top" src={Tshirts} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center show-category bg-card-footer'>
            <small className="text-muted show-category">Playeras</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Wallet} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center show-category bg-card-footer'>
            <small className="text-muted show-category ">Carteras</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={Shoes} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center show-category bg-card-footer'>
            <small className="text-muted show-category">Zapatos</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      {/* CARDS 2 */}
      <CardGroup className='mt-5'>
        <Card>
          <Card.Img variant="top" src={Shirt} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center show-category bg-card-footer'>
            <small className="text-muted show-category">Camisas</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={WomenBag} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center show-category bg-card-footer'>
            <small className="text-muted show-category">Bolso de mujer</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={WomenShoes} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='text-center show-category bg-card-footer'>
            <small className="text-muted show-category">Zapatos de mujer</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      {/* Start products */}
      <div class="products-box mt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>Productos destacados</h1>
                        <p>Conoce nuestros mejores productos!</p>
                    </div>
                </div>
            </div>
            <Tabs
              defaultActiveKey="all"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
      <Tab eventKey="all" title="Todos">
      <Container>
          <Row className="g-4">
            {
              allProduct.map((item, index) => {
                return(
                  <Col   md={4} className='mb-4'>
                    <div key={index} > 
                      <Card className='mb-3'>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title style={{color: '#d81a5a'}}> {item.name} </Card.Title>
                          <Card.Title style={{color: 'black', fontSize:'15px'}} > {item.category} </Card.Title>
                          <Card.Text>
                            {item.description}
                          </Card.Text>
                          <Row>
                              <Col md={6}>
                                </Col>
                                  <span style={{fontWeight: 'bold', color: 'black'}} >Presentación: {item.presentation}</span>
                                <Col style={{color: '#d81a5a'}} md={6}>
                                    {item.price} MXN
                                  </Col>
                                  </Row>
                          <Button className='col-12' variant="success">Comprar</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  
                )
              })
            }
          </Row>
          
        </Container>
      </Tab>
      <Tab eventKey="highlights" title="Más detcados">
        <Row className="g-4">
            {
              highlights.map((item, index) => {
                return(
                  <Col   md={4} className='mb-4'>
                    <div key={index} > 
                      <Card className='mb-3'>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title style={{color: '#d81a5a'}}> {item.name} </Card.Title>
                          <Card.Title style={{color: 'black', fontSize:'15px'}} > {item.category} </Card.Title>
                          <Card.Text>
                            {item.description}
                          </Card.Text>
                          <Row>
                              <Col md={6}>
                                </Col>
                                  <span style={{fontWeight: 'bold', color: 'black'}} >Presentación: {item.presentation}</span>
                                <Col style={{color: '#d81a5a'}} md={6}>
                                    {item.price} MXN
                                  </Col>
                                  </Row>
                          <Button className='col-12' variant="success">Comprar</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  
                )
              })
            }
        </Row>
      </Tab>
      <Tab eventKey="bestsellers" title="Más vendios">
        <Row className="g-4">
            {
              bestSellers.map((item, index) => {
                return(
                  <Col   md={4} className='mb-4'>
                    <div key={index} > 
                      <Card className='mb-3'>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title style={{color: '#d81a5a'}}> {item.name} </Card.Title>
                          <Card.Title style={{color: 'black', fontSize:'15px'}} > {item.category} </Card.Title>
                          <Card.Text>
                            {item.description}
                          </Card.Text>
                          <Row>
                              <Col md={6}>
                                </Col>
                                  <span style={{fontWeight: 'bold', color: 'black'}} >Presentación: {item.presentation}</span>
                                <Col style={{color: '#d81a5a'}} md={6}>
                                    {item.price} MXN
                                  </Col>
                                  </Row>
                          <Button className='col-12' variant="success">Comprar</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  
                )
              })
            }
        </Row>
      </Tab>
    </Tabs>
        </div>
    </div>
    {/* End to products */}
    </Container>

    {/* Start Blog */}
      <div className='latest-blog'>
        <Container>
          <Row className="g-4">
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={ImageBlog} />
                  <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={ImageBlog} />
                  <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={ImageBlog} />
                  <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
        </Container>
      </div>
    {/* End to blog */}
    
    </>
  )
}
