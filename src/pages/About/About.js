import React from 'react'
import  {NavLink}  from "react-router-dom";

/* Components */
import { Container, Col, Row } from "react-bootstrap";

/* Files locals */
import {  } from "./About.css";

/* Images */
import AboutImage from "../../assets/images/about-img.jpg"

export const About = () => {
  return (
    <>
      <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>SOBRE NOSOTROS</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Inicio</NavLink></li>
                        <li class="breadcrumb-item active" style={{color:'white'}}>Sobre nosotros</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className='about-box-main'>
      <Container>
        <Row className="g-4">
          <Col sm={6}>
            <h2 className="noo-sh-title">Nosotros somos <span>Enda Nabani</span></h2>
            <p className="text-justify text-style-p">
                        Somos el resultado de un proyecto que busca el conocimiento de la cultura mexicana
                        principalmente desde su gastronomía, ya que consideramos que ésta es fundamental de la
                        identidad y la preservación cultural de nuestro país.
                        <br />
                        La gastronomía del sur de México y en especial, de Oaxaca se caracteriza por su amplio colorido,
                        sabores, texturas y elementos que han sido fundamentales en las fiestas, rituales, costumbres,
                        incluso en la defensa de su territorio, convirtiéndola en única en el mundo.
                        <br />
                        Por lo tanto, nuestro objetivo es llevar a su mesa esta gastronomía, los más representativos y los
                        que son elaborados de manera artesanal, buscando resaltar su sabor, historia y calidad. Asimismo,
                        creemos firmemente en el comercio justo, en la solidaridad y comunalidad que caracterizan a las
                        poblaciones originarias del sur de México, lo que nos hace una empresa comprometida con todas
                        las personas que nos regalan sus sabores e historias.
                    </p>
          </Col>
          <Col sm={6}>
            <div className='banner-frame'>
              <img className='img-thumbnail img-fluid' src={AboutImage} />
            </div>
          </Col>
        </Row>
        <Row className="g-4 mt-5">
          <Col>
            <div className='service-block-inner'>
              <h3>SOMOS DE CONFIANZA</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. </p>
            </div>
          </Col>
          <Col>
            <div class="service-block-inner">
              <h3>Nosotros somos profesionales</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </Col>
          <Col>
            <div class="service-block-inner">
              <h3>Nosotros somos expertos</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </Col>
        </Row>
        <h2 class="noo-sh-title mt-5">CONOZCA A NUESTRO EQUIPO</h2>
        <Row className="g-4">
          <Col>
            <div class="our-team"> <img src="images/img-11.jpg" alt="" />
              <div class="team-content">
                <h3 class="title">Cristian HR</h3> <span class="post">Web Developer</span> 
              </div>
              <div class="team-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class="our-team"> <img src="images/img-11.jpg" alt="" />
              <div class="team-content">
                <h3 class="title">Cristian HR</h3> <span class="post">Web Developer</span> 
              </div>
              <div class="team-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}
