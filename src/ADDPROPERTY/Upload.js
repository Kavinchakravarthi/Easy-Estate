import React, { useState } from 'react';
import { Form, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Upload.css';
import Btnsuccess from './Btnsuccess';

const Upload = ({progress,onNextStep}) => {
  const [chosenFile, setChosenFile] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setChosenFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = () => {
    onNextStep();
    navigate('/Basics');
  };

  return (
    <div>
      <Btnsuccess Showcomponent={false} showbutton={false} progress={progress} />
      <Row>
        <Col id='upload-grid' className='d-flex justify-content-center'>
          <Form.Group>
            <h2 id='h1-grid' style={{ fontFamily: 'Alegreya SC, serif' }}>
              Upload Your Own Property Image
            </h2>
            <br />
            <br />
            <Form.Label style={{ fontFamily: 'Balthazar, serif' }}>
              Upload Your Own Property Image
            </Form.Label>
            <Form.Control type='file' onChange={handleFileChange} />
            <div className='d-flex justify-content-center mt-5'>
              {chosenFile && <Image fluid src={chosenFile} id='upload-image' />}
            </div>
            <Col className='text-center mt-5'>
              <Button
                id='button-color'
                style={{ fontFamily: 'Balthazar, serif' }}
                onClick={handleNextStep}
                
              >
                Next Step
              </Button>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Upload;
