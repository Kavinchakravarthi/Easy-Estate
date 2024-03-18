import React from 'react';
import './popularimage.css';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { useState, useEffect} from 'react';




const cardData = [
  { id: 1, rupees:'$', price: '2000', title:'Cedar Ridge...',content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.holidify.com/images/cmsuploads/compressed/266905214_20231017161531.jpg' },
  { id: 2, rupees:'$', price: '10000', title:'Crimsen Peak', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://i.pinimg.com/736x/fa/56/2d/fa562dea7a95cf59a11dcda3d71977d6.jpg' },
  { id: 3, rupees:'$', price: '2000', title:'Summerhil E...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.hotelieracademy.org/wp-content/uploads/2018/12/nandini-main-1.jpg' },
  { id: 4, rupees:'$', price: '2000', title:'Rivestone..', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/235843754.jpg?k=49110ec6827925f6c5f997059ae0fb1e0b6f8f63f925c61f180fe912ad552984&o=&hp=1' },
  { id: 5, rupees:'$', price: '5000', title:'Autumn mist...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/235842148.jpg?k=41320938a9e6b3fb9a8117c1b1e8dd9585eade1f5da3b179fb57d7c2d7cdbee7&o=&hp=1' },
  { id: 6, rupees:'$', price: '6000', title:'Orange Cortage...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 7, rupees:'$', price: '8000', title:'Rolling Hill...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.shutterstock.com/shutterstock/photos/2183226477/display_1500/stock-photo-vacation-couple-on-the-beach-near-swimming-pool-luxury-travel-2183226477.jpg' },
  { id: 8, rupees:'$', price: '2000', title:'Golden field...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://www.cayugacollection.com/wp-content/uploads/2020/07/Master-Suite-1024x683.jpg' },
  { id: 9, rupees:'$', price: '2000', title:'Mordern Marve...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1' },
  { id: 10, rupees:'$', price: '3000', title:'Green Cortage...', content:'Massive opportunity to build your dream home at the base of mummy mountain in...',  imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/513565971.jpg?k=964fbc76f3bd30137eb7e6b629a2196ca49a6e59510a0908cc05857def71f1dc&o=&hp=1' },

];

const Popularimage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(1);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, cardData.length - displayCount));
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(window.innerWidth < 576 ? 1 : 4);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  return (
    <>
    <Container className='mt-5'>
      <Row className="text-center">
        <Col xs={12} sm={3} md={3} className="order-1 order-sm-1 ">
             <img
              src='https://eim.idoxgroup.com/wp-content/uploads/2022/01/PROLOGIS-Logo.png'
              className='img-fluid'
              id='popularimages1'
              alt='Popular Image 1'
              
            />
         </Col>

            <Col xs={12} sm={3} md={3} className="mb-3 order-2 order-sm-2 mt-sm-2"> 
            <img
              src='https://logowik.com/content/uploads/images/american-tower-corporation9094.logowik.com.webp'
              className='img-fluid'
              id='popularimages2'
              alt='Popular Image 2'
             
            />
          </Col>

            <Col xs={12} sm={3} md={3} className="mb-3 order-4 order-sm-3 mt-sm-2">
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_A8OyQnNdHyr-RLdIma39CLSAaXycZqY3c80pjRUqA&s'
              className='img-fluid'
              id='popularimages3'
              alt='Popular Image 3'
           
            />
          </Col>

            <Col xs={12} sm={3} md={3} className="mb-3 order-3 order-sm-4 mt-sm-3">
            <img
              src='https://logowik.com/content/uploads/images/digital-realty9875.jpg'
              className='img-fluid'
              id='popularimages4'
              alt='Popular Image 4'
            />
          </Col>
      </Row>
      </Container>

      <Container>
      <Row>
      <Col className={`mt-2 ${window.innerWidth < 576 ? 'text-center' : 'text-left'}`} xs={12} sm={12}>
      <h3><span style={{fontFamily: "Racing Sans One, sans-serif"}}>Best Choices</span></h3>
      <h1><span style={{fontFamily: "Racing Sans One, sans-serif"}}>Popular Residencies</span></h1>
      </Col>
      </Row>
      </Container>

      <Container fluid>
  <div className="card-carousel-container">
  <Row className="justify-content-end mb-5">
      <Col xs={6} sm={2} md={1} lg={1}>
        <Button onClick={handlePrev} disabled={currentCardIndex === 0} id='button-color1' >
        <i class="bi bi-caret-left-fill"></i>
        </Button>
      </Col>
      <Col xs={6} sm={2} md={1} lg={1}>
        <Button onClick={handleNext} disabled={currentCardIndex === cardData.length - displayCount} id='button-color2' >
        <i class="bi bi-caret-right-fill"></i>
        </Button>
      </Col>
    </Row>
    
    <Row className="card-carousel">
      {cardData.slice(currentCardIndex, currentCardIndex + displayCount).map((card) => (
        <Col key={card.id} xs={12} sm={6} md={3}>
          <Card className="carousel-card " >
          <Button variant="link" className="heart-button" style={{ position: 'absolute', top: 0, right: 0 }}>
          <i class="bi bi-suit-heart-fill"></i>
          </Button>
            <Card.Img variant="top" src={card.imageSrc} alt={`Image for ${card.content}`} className='img-fluid'/>
            <Card.Body id='price'> <span style={{fontFamily: "Protest Revolution ,sans-serif"}}> {card.rupees}</span></Card.Body>
            <Card.Body id='rupees'> <span style={{fontFamily: "Protest Revolution ,sans-serif"}}> {card.price}</span></Card.Body>
            <Card.Title id='title'><span style={{fontFamily: "Alegreya SC, serif"}}>{card.title}</span> </Card.Title>
            <Card.Text><span style={{ fontFamily: "Balthazar, serif"}}>{card.content}</span></Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
</Container>
      </>  
  );
};

export default Popularimage;
