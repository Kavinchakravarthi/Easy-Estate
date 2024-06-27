import React, { useState } from 'react'
import { Col,Row,Container, Button, Modal, Form} from 'react-bootstrap'
import './Aboutus.css'



const Aboutus = () => {
     
    const [show,setshow]=useState(false);
    const [shouldalert,setshouldalert]=useState(false);
    const [show1,setsshow1]=useState(false);
    const handleclick=()=>{
        setshow(true)
    }
    const handleclose=()=>{
        setshow(false)
    }
    const handlesecondclick=()=>{
        setsshow1(true);
    }
    const handlebothclick=()=>{
         setshow(false);
         setshouldalert(true);
    }
   const handleExited=()=>{
    if(shouldalert)
        {
            handlesecondclick();
            setshouldalert(false);
        }
   }

  return (
    <div>
    
        <Container>
            <Row>
                <Col className='d-flex justify-content-center mt-5' >
                 <Button size='lg' id="contact" style={{fontFamily: "Alegreya SC, serif"}} onClick={handleclick} >contact us</Button>
                 <Modal show={show} onHide={handleclose} keyboard={false} backdrop="static" onExited={handleExited}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontFamily: "Alegreya SC, serif"}} className='fst-italic text-uppercase'>Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                    <Form.Group>
                        <Form.Label className='fst-italic'>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        placeholder='Enter your email'
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label className='fst-italic'>Explain Your Querries</Form.Label>
                        <Form.Control 
                        as="textarea" rows={3} placeholder={`What's the difficulty you have ?`}
                        />
                    </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleclose} id="button1">close</Button>
                        <Button  id="button2" onClick={handlebothclick}>Save Changes</Button>
                    </Modal.Footer> 
                 </Modal>

                 <Modal show={show1} onHide={()=> setsshow1(false)} backdrop="static" keyboard={false}> 
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontFamily: "Alegreya SC, serif"}} className='fst-italic text-uppercase'>Thank for your message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='fst-italic'>We have been working on the problem right now surely we will short it out. we request you to stay tuned with our website for future updates</p>
                    </Modal.Body>
                 </Modal>
                </Col>  
            </Row>
        </Container>
    
    </div>
  )
}

export default Aboutus