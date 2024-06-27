import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import Btnsuccess from './Btnsuccess';

const Parentcomponent = ({progress,onNextStep}) => {
  const navigate = useNavigate();
  const handleNextStep = () => {
   onNextStep();
   navigate('/facility');
  };

  return (
    <div>
      <Btnsuccess Showcomponent2={false} showbutton2={false} progress={progress} />
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' style={{ width: 400 }} />
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' rows={3} style={{ width: 400 }} />
              <Form.Label>Price</Form.Label>
              <Form.Control type='number' style={{ width: 400 }} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Col className='text-center mt-5'>
        <Button
          id='button-color'
          style={{ fontFamily: 'Balthazar, serif' }}
          onClick={handleNextStep}
        >
          Next Step
        </Button>
      </Col>
    </div>
  );
};

export default Parentcomponent;
