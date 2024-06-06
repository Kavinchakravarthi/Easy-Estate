import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';
import Addimage from './Addimage';


const Btnsuccess = ({Showcomponent=true,showbutton=true,ShowButton=true,ShowAddImage=true,ShowImage=true,btncolor}) => {
  

  return (
    <div>
        <Row className='mt-5'>
          <div className="d-flex justify-content-center align-items-center">

          <Button id="circle-button" style={{backgroundColor:btncolor}}>1</Button>  
          <hr className="mx-2" style={{ borderColor: 'black' }} />
          <Button id="circle-button"  >2</Button>
          <hr className="mx-2" style={{ borderColor: 'black' }} />
          <Button id="circle-button" >3</Button>
          <hr className="mx-2"/>
          <Button id="circle-button" >4</Button>
          </div>
          </Row> 
          { Showcomponent && ShowImage && <Addimage />}
          {ShowButton && !Showcomponent && ShowAddImage &&  <Addimage/>}
          { showbutton && ShowImage && <Col className='text-center mt-5'>
           <Button id="button-color" style={{ fontFamily: "Balthazar, serif" }} href='/upload'  >
             Next Step  
           </Button>
           </Col>
          }
           
    </div>
  
  )
}

export default Btnsuccess