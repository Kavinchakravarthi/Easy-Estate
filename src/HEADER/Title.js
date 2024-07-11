import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./title.css";
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Title = () => {
  const [value,setvalue]=useState(false);
  const a=localStorage.getItem("p_name");
  const namevalue=a || "";
  const check=namevalue.charAt(0) || "";
  const upper=check.toUpperCase();
  const navigate=useNavigate();
  
  useEffect(() => {
    if (check) {
      setvalue(true);
    }
  }, [check]);
  const handleclick=()=>{
    localStorage.setItem("p_name","");
    navigate("/");
  }

  return (
   <Navbar  expand="md"  data-bs-theme="dark" id='navbar'> 
    <Container>
      <Navbar.Brand href='/'><i className="bi bi-house-heart"><span style={{fontFamily: 'Lora ,serif'}} className='fw-bold'> Homyz</span></i></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
      <Nav id='nav'>
        <Nav.Link href='/residencies'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Residencies</span></Nav.Link>
        <Nav.Link href='/ourvalue'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Our Value</span></Nav.Link>
        <Nav.Link href='/contact'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Contact Us</span></Nav.Link>
        <Nav.Link href='/addimage'><span style={{fontFamily: 'Alegreya SC,serif'}} className='fw-bold'>Addproperty</span></Nav.Link>
       {value && <ButtonGroup>
          <DropdownButton title={upper}>
          <Dropdown.Item><Button onClick={handleclick}>logout</Button></Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
       }
      </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  )
}

export default Title