import { useState,useEffect } from 'react';
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Map from './Map';
import Residencies from '../ARRAYDATAS/residency.json';
import { useParams } from 'react-router-dom';
import Footer from '../FOOTER/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Houses.css';

const Houses = () => {

    const {e}=useParams(); 
    const dispaly=Residencies.filter((temp)=>temp.Id ==e);
    
   
   
    const [mapCenter, setMapCenter] = useState({ latitude: 0, longitude: 0 });
    const [click,setclick]=useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [showalert,setshowalert]=useState(false);
    
    const handleDateClick = (date) => {
      setSelectedDate(date);
      setIsDateSelected(true);
    };

    const handleBookButtonClick = () => {
      alert("date is selected");
    };

  useEffect(() => {
    const city = dispaly[0].City;
    const cityCoordinates = Residencies.find(residency => residency.City === city);
    
    if (cityCoordinates) {
      setMapCenter({
        latitude: cityCoordinates.latitude,
        longitude: cityCoordinates.longitude,
      });
    }
  }, [dispaly]);

  
  const calendarclick=()=>{
    setclick(!click);
  }


  if(dispaly.length===0)
  {
    return(
      <p>no data found for id: {e}</p>
    );
  }

  return (
    <div>
    <Container className={`mt-5 ${click ? '' : 'dimmed'}`}  fluid >
    <div className={`overlay ${click ? '' : 'dimmed'}`} onClick={calendarclick}></div>
      <Row className='text-center'>
        <Col>
          <Image
            src={dispaly[0].Imgsrc}
            className='img-fluid'
            id="Image-custom"
            alt="Crimesen Peak Chalet"
          />
        </Col>
        </Row>
        <Row className='mt-5'>
          <Col sm={12} md={6} lg={6}>
          <h1 style={{ fontFamily: "Racing Sans One, sans-serif" }}>{dispaly[0].Title}</h1>
          <p style={{ fontFamily: "Balthazar, serif" }}>
            React-Bootstrap replaces the Bootstrap JavaScript. Each component
            has been built from scratch as a true React component, without
            unneeded dependencies like jQuery. As one of the oldest React
            libraries, React-Bootstrap has evolved and grown alongside React,
            making it an excellent choice as your UI foundation.
          </p>
          <div className='mt-4 '>
          <i class="bi bi-geo-alt-fill">  street 2 chikogo US
          <span className='fs-3 fw-bolder text-warning'> Cost: {dispaly[0].amount}</span>
          </i>
          </div>
          <div className='d-grid mt-5'>
            <Button variant='outline-warning border-dark border-2' style={{fontFamily: "Alegreya SC, serif"}}
            onClick={calendarclick}
            >
            Book your visit
            </Button>
            <Col>
            {click &&
            <div id="calendarcomponent">
              <Calendar  
              onChange={handleDateClick}
              value={selectedDate}
             
              />
               {isDateSelected && (
        <Button onClick={() => handleBookButtonClick(selectedDate)}
         className='ms-5' 
         variant='warning border-dark border-2'
         style={{fontFamily: "Alegreya SC, serif"}}
        >
          Book Visit on {selectedDate.toDateString()}
        </Button>
      )}
            </div>
            } 
              </Col>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6} className='mt-5 mt-md-0 mt-lg-0'>
          <Map latitude={mapCenter.latitude} longitude={mapCenter.longitude} />
        </Col>
      </Row>
      <Footer/>
    </Container>
    </div>
  )
}

export default Houses