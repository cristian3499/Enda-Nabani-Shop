import React from 'react'
import  {NavLink}  from "react-router-dom";

/* Components */
import { Container, Row, Col } from "react-bootstrap";

export const AboutService = () => {
  return (
    <>
      <div class="all-title-box">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2>SERVICIOS</h2>
                      <ul class="breadcrumb">
                          <li class="breadcrumb-item"><NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Inicio</NavLink></li>
                          <li class="breadcrumb-item active" style={{color: 'white'}}>Servicios</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div className='services-box-main'>
        <Container>
          <Row className="g-4 mt-5 mb-5">
            <Col md={4}>
              <div className='service-block-inner'>
                <h3>Nuestra misión</h3>
                <p class="text-justify">
                  Llevar a todos los mexicanos y ciudadanos de otros países los sabores más auténticos de la
                  gastronomía mexicana, para realzar nuestra identidad e historia.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div class="service-block-inner">
                        <h3>Nuestra visión</h3>
                        <p class="text-justify">
                            Dar a conocer el valor cultural e histórico de la gastronomía mexicana, refrendando que es parte
                            fundamental de nuestra identidad nacional.
                        </p>
                    </div>
            </Col>
            <Col md={4}>
                    <div class="service-block-inner">
                        <h3>Nuestros valores</h3>
                        <p class="text-justify">
                            Comunalidad, solidaridad, utilidad, eficiencia, justicia, compromiso.
                        </p>
                    </div>
            </Col>
            <Col md={12}>
            <div class="service-block-inner">
                        <h3>Nuestro servicio</h3>
                        <p class="text-justify">
                            Nos caracterizamos por un servicio de entrega a domicilio eficiente, seguro y confiable. Buscamos
                            que nuestros clientes obtengan la mayor satisfacción posible a través de productos frescos, de alta
                            calidad y en reparticiones de cortos tiempos de envío.
                            <br />
                            Contamos con distribución de mercancías por mayoreo y menudeo en cualquier parte del país,
                            garantizando siempre su satisfacción.
                        </p>
                    </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
