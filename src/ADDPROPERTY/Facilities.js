import React from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import Btnsuccess from './Btnsuccess'; 
import { useNavigate } from 'react-router-dom';
const Facilities = ({progress,onNextStep}) => {
const  navigate=useNavigate();
const handleclick=()=>{
  onNextStep();
  navigate('/facility');
}

  return (
    <div>
        <Btnsuccess  Showcomponent3={false} Showbutton3={false} progress={progress}/>
        <Row >
            <Col className='d-flex justify-content-center mt-5'>
            <Form>
                <Form.Group>
                    <Form.Label>No.of BedRooms</Form.Label>
                    <Form.Control type='number' style={{width:400}}/>
                    <Form.Label>No.of BathRooms</Form.Label>
                    <Form.Control type='number' style={{width:400}}/>
                    <Form.Label>No.of Parkings</Form.Label>
                    <Form.Control type='number' style={{width:400}}/>
                </Form.Group>
            </Form>
            </Col>
        </Row>
        <Col className='text-center mt-5'>
           <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }}  onClick={handleclick}>
             Next Step  
           </Button>
           </Col>
    </div>
  )
}

export default Facilities