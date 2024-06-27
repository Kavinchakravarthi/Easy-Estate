import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./title.css";
const Title = () => {
  return (
   <Navbar  expand="md"  data-bs-theme="dark" id='navbar'> 
    <Container>
      <Navbar.Brand href='home'><i className="bi bi-house-heart"><span style={{fontFamily: 'Lora ,serif'}} className='fw-bold'> Homyz</span></i></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
      <Nav id='nav'>
        <Nav.Link href='/residencies'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Residencies</span></Nav.Link>
        <Nav.Link href='/ourvalue'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Our Value</span></Nav.Link>
        <Nav.Link href='/contact'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Contact Us</span></Nav.Link>
        <Nav.Link href='/success'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Addproperty</span></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  )
}

export default Title