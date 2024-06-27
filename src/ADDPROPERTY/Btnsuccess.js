import React from 'react'
import {Button,Row,Col, ProgressBar} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Addimage from './Addimage';
import './Btnsuccess.css';

const Btnsuccess = ({
  Showcomponent=true,
  showbutton=true,
  Showcomponent2=true,
  showbutton2=true,
  Showcomponent3=true,
  Showbutton3=true ,
  progress,
  onNextStep
 
}) => {

 const navigate=useNavigate();


 const handlenextstep=()=>{
    onNextStep();
    navigate('/upload');
 }


  return (
    <div>
        <Row className='mt-5'>
          <Col>
          <div className='d-flex justify-content-center' >
          <ProgressBar now={progress} label={`${progress}%` }  id='progressbar'  variant='primary' animated />
          </div>
          </Col>
        </Row> 

        {Showcomponent && Showcomponent2 && Showcomponent3 && <Addimage /> }
          {showbutton && showbutton2 && Showbutton3 &&
           <Col className='text-center mt-5'>
           <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }}   onClick={handlenextstep} >
             Next Step
           </Button>
           </Col>
}
           
    </div>
  
  )
}

export default Btnsuccess