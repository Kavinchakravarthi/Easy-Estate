import React from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import Btnsuccess from './Btnsuccess'; 
import { useNavigate } from 'react-router-dom';
const Facilities = ({progress,onNextStep}) => {
const  navigate=useNavigate();
const handleclick=(e)=>{
  e.preventDefault();
  const formvalue=e.currentTarget;
  if(formvalue.checkValidity()===true)
  {
  onNextStep();
  navigate('/home');
  }
}

  return (
    <div>
        <Btnsuccess  progress={progress}/>
        <Row >
            <Col className='d-flex justify-content-center mt-5'>
            <Form onSubmit={handleclick}>
                <Form.Group>
                    <Form.Label>No.of BedRooms</Form.Label>
                    <Form.Control type='number' style={{width:400}} required />
                    <Form.Label>No.of BathRooms</Form.Label>
                    <Form.Control type='number' style={{width:400}} required/>
                    <Form.Label>No.of Parkings</Form.Label>
                    <Form.Control type='number' style={{width:400}} required/>
                </Form.Group>
                <Col className='text-center mt-5'>
               <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }} type='submit' >
                Next Step  
                </Button>
                </Col>  
            </Form>
            </Col>
        </Row>

    </div>
  )
}

export default Facilities