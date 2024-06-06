import React, { useState } from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import Btnsuccess from './Btnsuccess';
const Parentcomponent = () => {
  const [btncolor,setbtncolor]=useState("rgb(0, 7, 218)");
  const clicked=()=>{
    setbtncolor("rgb(0, 191, 0)");
  }

  return (
    <div>
      <Btnsuccess btncolor={btncolor} ShowButton={false} ShowImage={false}/>
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' style={{width:400}}/>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} style={{width:400}}/>
            <Form.Label>Price</Form.Label>
            <Form.Control type='number' style={{width:400}}/>
          </Form.Group>
        </Form>
        </Col>
        </Row>
        <Col className='text-center mt-5'>
           <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }} href='/facility' onClick={clicked}>
             Next Step  
           </Button>
           </Col>
    </div>
  )
}

export default Parentcomponent