import React from 'react';
import { Container, Row, Col,InputGroup,Button, Form, Card} from 'react-bootstrap';
import './Properties.css';
import { useState} from 'react';
import Residencies from '../ARRAYDATAS/residency.json';
import {useNavigate} from 'react-router';
import Footer from '../FOOTER/Footer';

const Properties = () => {


  const [filteredResidencies, setFilteredResidencies] = useState([...Residencies]);

  const handleChange = (e) => {
    const query = e.target.value;
    setFilteredResidencies(
      Residencies.filter((index) => index.Title.toLowerCase().includes(query.toLowerCase()))
    );
  };

       
const navigate=useNavigate();

const handleclick=(e)=>{
    navigate(`/Houses/${e}`);
}

  return (
    <div>
        <Container fluid  className='mt-5'>
            <Row className='justify-content-center' >
                <Col  xs={12} sm={8} md={6} lg={4}>
                <InputGroup >
                <Form.Control
                placeholder='search the residencies' 
                aria-label='residencies name'
                className='custom-input border-2 border-dark'
                type='text'
                onChange={handleChange}
                />
                <Button variant='outline-warning' className='custom-button border-2 border-dark'>search</Button>
                </InputGroup>
                </Col>
            </Row>

            <>
            <Row className='mt-5'>
            {filteredResidencies.map((cards) => (
                     <Col xs={12} sm={6} md={4} lg={3}  className='d-flex justify-content-center'>
                     <Card style={{width:'15rem'}} className='mt-5' id="custom-card" onClick={()=>handleclick(cards.Id)}>
                         <Card.Img variant='top'  src={cards.Imgsrc} className='img-fluid'/>
                         <Card.Body className='text-center'>
                             <Card.Title  style={{fontFamily: "Alegreya SC, serif"}} id="title-color">
                             {cards.Title}
                             </Card.Title>
                             <Card.Text  style={{ fontFamily: "Balthazar, serif"}} id="text-color">
                             {cards.Content}
                             </Card.Text>
                         </Card.Body>
                     </Card>
                  
                </Col>
                ))}
            </Row>  
            </>
            <Footer/>
        </Container>
    </div>
  )
}

export default Properties
