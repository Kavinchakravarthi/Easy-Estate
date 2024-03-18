import React from 'react';
import './Value.css';
import { Container, Col, Row, Accordion, Stack, Ratio} from 'react-bootstrap';

const Value = () => {
  return (
    <> 
          <Container fluid>
           <Row className='mt-4 justify-content-sm-center'>
            <Col xs={12} sm={12} md={5}>
            <img
              src='https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D'
              className='img-fluid border border-dark border-3  ms-lg-4 mt-sm-5 ' 
              id='value-image'
            />
            </Col>
            <Col xs={12} sm={12} md={7} className='mt-sm-5 mt-5'>
            <Accordion defaultActiveKey='0' id='accordian' className='mt-lg-4'>
              
              <h3  style={{fontFamily: "Racing Sans One, sans-serif"}}>Our value</h3>
              <h1  style={{fontFamily: "Racing Sans One, sans-serif"}}>value we give to you</h1>
              <p style={{ fontFamily: "Balthazar, serif"}}> Generally, interest rates and the stock market have an inverse relationship. When interest rates rise,
                  share prices fall. Bonds become more attractive. When interest rates</p>

              <Accordion.Item eventKey='0'>
                <Accordion.Header><i class="bi bi-award-fill"> </i><span id="accheader" style={{ fontFamily: "Balthazar, serif"}}>Best interest rate on the market</span></Accordion.Header>
                <Accordion.Body style={{ fontFamily: "Balthazar, serif"}}>
                  Generally, interest rates and the stock market have an inverse relationship. When interest rates rise,
                  share prices fall. Bonds become more attractive. When interest rates rise, it can make borrowing money
                  for a company more expensive, which means they have less money to invest back in the company and less
                  cash flow stability, which typically puts pressure on share prices. When interest rates fall, the inverse
                  is true for all of the above.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
              <Accordion.Header> <i class="bi bi-bank"></i> <span id="accheader" style={{ fontFamily: "Balthazar, serif"}}>Best interest rate on the market</span></Accordion.Header>
                <Accordion.Body style={{ fontFamily: "Balthazar, serif"}}>
                  Generally, interest rates and the stock market have an inverse relationship. When interest rates rise,
                  share prices fall. Bonds become more attractive. When interest rates rise, it can make borrowing money
                  for a company more expensive, which means they have less money to invest back in the company and less
                  cash flow stability, which typically puts pressure on share prices. When interest rates fall, the inverse
                  is true for all of the above.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
              <Accordion.Header>  <i class="bi bi-balloon-fill"></i>  <span id="accheader" style={{ fontFamily: "Balthazar, serif"}}>Best interest rate on the market</span></Accordion.Header>
                <Accordion.Body style={{ fontFamily: "Balthazar, serif"}}>
                  Generally, interest rates and the stock market have an inverse relationship. When interest rates rise,
                  share prices fall. Bonds become more attractive. When interest rates rise, it can make borrowing money
                  for a company more expensive, which means they have less money to invest back in the company and less
                  cash flow stability, which typically puts pressure on share prices. When interest rates fall, the inverse
                  is true for all of the above.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Col>
            </Row>
            </Container>
    </>
  );
};

export default Value;
