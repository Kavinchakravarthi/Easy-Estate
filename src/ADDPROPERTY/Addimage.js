import React from 'react';
import './Addimage.css';
import { useState} from 'react';
import {Form,Row,Col,} from 'react-bootstrap';
import { MapContainer,Marker,TileLayer } from 'react-leaflet';
import Addproperties from '../ARRAYDATAS/addproperties.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const Addimage = () => {


  const[Center,setcenter]=useState({latitude:51.505,longitude: -0.09});
  const[marketcity,setmarkercity]=useState({latitudecity:51.505,longitudecity: -0.09});
  const[address,setaddress]=useState(false); 
  
    
  const handlechange=(e)=>{
    const countryname=e.target.value;
    const countrydata=Addproperties.find((temp)=>temp.Title && temp.Title.toLowerCase()===countryname.toLowerCase());
    if(countrydata){
      setcenter({
        latitude:countrydata.latitude,
        longitude:countrydata.longitude
      });
    }
  };  
  
  const handlemarker=(e)=>{
    const cityname=e.target.value;
    const citydata=Addproperties.find((temp)=>temp.City && temp.City.toLowerCase()===cityname.toLowerCase());
    if(citydata){
      setmarkercity({
        latitudecity:citydata.latitude1,
        longitudecity:citydata.longitude1,
      });
    }
  }

    const handleaddress=(e)=>{
      const addressname=e.target.value;
      const addressdata=addressname.length;
      setaddress(addressdata>1);
    };

    const handlemouseover=(e)=>{
      if(address){
        const map=e.target._map;
          map.setView([marketcity.latitudecity,marketcity.longitudecity],map.getZoom()+2);
      }
    };

   
  const customIcon=new L.Icon({
    iconUrl:'https://static.vecteezy.com/system/resources/previews/009/589/758/non_2x/location-location-pin-location-icon-transparent-free-png.png',
    iconSize:[50,50],
    iconAnchor:[25,50],
  });

  const handlemarkerclick=(e)=>{
    const map=e.target._map;
    map.setView([Center.latitude,Center.longitude],map.getZoom() + 2);
  }; 

 

  return (
    <>
            
            <Row>
            <Col xs={12} lg={6}> 
            <Form className='text-xs-center text-sm-left total-center'>
                <Form.Group>
                    <Form.Label column sm="1">Country</Form.Label>
                    <Col xs={12} sm={9}>
                    <Form.Control type='text' placeholder='Country Name'  
                     onChange={handlechange} 
                    />
                    </Col>
                </Form.Group>
                <br/>
                <Form.Group >
                  <Form.Label>State</Form.Label>
                  <Col xs={12} sm={9}>
                  <Form.Control type='text' placeholder='State Name'
                  onChange={handlemarker}
                  />
                  </Col>
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Col xs={12} sm={9}>
                  <Form.Control  type='text' placeholder='Address'
                  onChange={handleaddress}
                  />
                  </Col>
                </Form.Group>
                </Form>
                </Col>
          <Col xs={12} lg={6} className='mt-5 mt-lg-0'> 
          <MapContainer key={`${Center.latitude},${Center.longitude}`} center={[Center.latitude, Center.longitude]} zoom={3} style={{ height: '300px', width: '65%' }} className='map-center' id='mapxs'>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />  
          <Marker position={[marketcity.latitudecity,marketcity.longitudecity]} icon={customIcon} eventHandlers={{click:handlemarkerclick,mouseover:handlemouseover,}}
          />
            </MapContainer>
            </Col>
          </Row>
          

    </>
  )
}

export default Addimage