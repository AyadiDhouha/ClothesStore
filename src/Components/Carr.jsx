import React from "react";
import {Carousel,Jumbotron,Container,Col,Row,Button} from 'react-bootstrap'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'


export default function Carr() {
  return (
    <div>
        <div style={{textAlign:"center",marginLeft:'10%',marginRight:'10%', }}>
        <Jumbotron fluid>
         <Container>
         <h1>Clothes Store</h1>
         <p>
         Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.
        </p>
        </Container>
        </Jumbotron>
        </div>
        <Carousel style={{marginLeft:'10%',marginRight:'10%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome To Our Clothes Store</h3>
            <p>We provide have the top clothing quality out there </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Here we Have clothes for Men</h3>
            <p>All Men wear are available in our store and you can shippable them everywhere</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>As well for Women</h3>
            <p>
            Find your unique style
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <Container style={{marginTop:'5%'}}>
  <Row>
    <Col xs={6} md={4} style={{textAlign:'center'}}>
      <img src={img4}  />
      <h3> T-Shirt</h3>
      <p> T-Shirt for all sizes</p>
      <Button variant="primary">Buy Now</Button>
    </Col>
    <Col xs={6} md={4} style={{textAlign:'center'}} >
      <img src={img4}  />
      <h3> T-Shirt</h3>
      <p> T-Shirt for all sizes</p>
      <Button variant="primary">Buy Now</Button>
    </Col>
    <Col xs={6} md={4} style={{textAlign:'center'}}>
      <img src={img4}  />
      <h3> T-Shirt</h3>
      <p> T-Shirt for all sizes</p>
      <Button variant="primary">Buy Now</Button>
    </Col>
  </Row>
</Container>
    </div>
  );
}

