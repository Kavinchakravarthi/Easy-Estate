import React from 'react';
import { Container, Row, Col, Card, Button, Spinner} from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
  return (
    <>
    <Container fluid id="footercard">
        <Row>
            <Col xs={12} >
            <Card className='text-center border-2' id="cardcolor">
                <Card.Body>
                <Card.Title>
                    <h1 style={{fontFamily: "Racing Sans One, sans-serif"}} id='h1t'>Get started with Homyz</h1>
                </Card.Title>
                <Card.Text style={{ fontFamily: "Balthazar, serif"}} >
                    <em>Subscribe and find super attractive price from us
                    <br></br>
                    Find your residence soon</em>
                </Card.Text>
                <Button  style={{fontFamily: "Alegreya SC, serif"}} variant='outline-warning'>
                    Get started
                </Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>

    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <Card className='mt-5'>
            <Card.Body>
              <Row>
                <Col lg={6} xs={12} md={6}>
        
                  <h1 id='h1c' style={{ fontFamily: "Racing Sans One, sans-serif" }}>
                    Homyz <Spinner animation='grow' variant='warning'/>
                    </h1>
                    
                  <br></br>
                  <em style={{ fontFamily: "Balthazar, serif" }} className='fs-5'>our vision is to make all people <br></br> live their best</em>
                </Col>
                <Col lg={6} xs={12} md={6} className='text-lg-end'>
                  <h1 id='h1c' style={{ fontFamily: "Racing Sans One, sans-serif" }}>Information</h1>
                  <br></br>
                  <em style={{ fontFamily: "Balthazar, serif" }} className='fs-5'>155 new york,FL 4637, USA<br></br> live their best</em>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


     
 

    </>
  )
}

export default Footer