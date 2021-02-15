import React from'react'
import "./Men.css"
import Nav from'../Components/Nav'
import Footer from '../Components/Footer';
import {Container,Col,Row,Button}from "react-bootstrap"
import img4 from './img4.jpg'
import img5 from './img5.jpg'

function Men() {
    return (
        <div>
            <Nav/>
           
             <h1 style={{textAlign:'center',marginTop:'5%'}}>Men Clothing</h1>
             <img src={img5} class="center" />
             


       
       
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
<Footer/>
</div>

    );
}
export default Men ;