import React from'react'
import "./Men.css"
import Nav from'../Components/Nav'
import Footer from '../Components/Footer';
import {Container,Col,Row,Button}from "react-bootstrap"
import img6 from './img6.jpg'
import img7 from './img7.jpg'

function Women() {
    return (
        <div>
            <Nav/>
            
             <h1 style={{textAlign:'center',marginTop:'5%'}}>Women Clothing</h1>
             <img src={img7} class="center" />
                 
        <Container style={{marginTop:'5%'}}>
  <Row>
    <Col xs={6} md={4} style={{textAlign:'center'}}>
      <img src={img6} width='300px' height='300px' />
      <h3> T-Shirt</h3>
      <p> T-Shirt for all sizes</p>
      <Button variant="primary">Buy Now</Button>
    </Col>
    <Col xs={6} md={4} style={{textAlign:'center'}} >
      <img src={img6} width='300px' height='300px'  />
      <h3> T-Shirt</h3>
      <p> T-Shirt for all sizes</p>
      <Button variant="primary">Buy Now</Button>
    </Col>
    <Col xs={6} md={4} style={{textAlign:'center'}}>
      <img src={img6} width='300px' height='300px'  />
      <h3> T-Shirt</h3>
      <p> T-Shirt for all sizes</p>
      <Button variant="primary">Buy Now</Button>
    </Col>
  </Row>
</Container>
<Footer/>
</div>

    );
}
export default Women ;