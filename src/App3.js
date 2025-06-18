import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Cap from './Cap'

export default function IndividualIntervalsExample() {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/Citi-1440x128.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Payupto5Bankoffer.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440x128%202.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-mob%20500.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-RelianceOne-Bankoffer.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br/>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/25112022-D-UHP-iconicdeals-header.jpg"/>
    </div>
    

  );
}
