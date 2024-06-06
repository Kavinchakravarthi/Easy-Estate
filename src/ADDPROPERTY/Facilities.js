import React from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import Btnsuccess from './Btnsuccess'; 
const Facilities = () => {
  return (
    <div>
        <Btnsuccess Buttoncolor2={"rgb(0, 191, 0)"} ShowButton={false} ShowImage={false}/>
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
           <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }} href='/facility'>
             Next Step  
           </Button>
           </Col>
    </div>
  )
}

export default Facilities