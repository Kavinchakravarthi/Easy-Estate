import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import Btnsuccess from './Btnsuccess';

const Parentcomponent = ({progress,onNextStep}) => {
  const navigate = useNavigate();

  const handleNextStep = (e) => {
    e.preventDefault();
   const formvalue=e.currentTarget;
   if(formvalue.checkValidity()===true)
    {
      onNextStep();
      navigate('/facility');
    }
  };

  return (
    <div>
      <Btnsuccess progress={progress} />
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Form onSubmit={handleNextStep}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' style={{ width: 400 }} required/>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' rows={3} style={{ width: 400 }} required/>
              <Form.Label>Price</Form.Label>
              <Form.Control type='text' style={{ width: 400 }} required minLength={4}/>
            </Form.Group>
            <Col className='text-center mt-5'>
            <Button
             id='button-color'
             style={{ fontFamily: 'Balthazar, serif' }}
             type='submit'
            >
            Next Step
            </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Parentcomponent;
