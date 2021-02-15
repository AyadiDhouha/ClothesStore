import React from'react';
import{Navbar,Nav,} from "react-bootstrap";


function Navbar1(props) {
    const Home = props.name
    return (
        <div>
        <Navbar bg="light" variant="light">
       <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
       <Nav className="mr-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/Men">Men</Nav.Link>
       <Nav.Link href="/Women">Women</Nav.Link>
       </Nav>
       </Navbar>
       </div>
     );
    
}
export default Navbar1;
  

