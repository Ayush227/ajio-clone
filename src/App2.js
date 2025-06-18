import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Cap from './Cap'

export default function IndividualIntervalsExample() {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <a href='#'>
        <img
      
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-UHP-GoLive-D-1440x470-Top-banner-gif.gif"
          alt="First slide"
           />
           </a>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <a href='#'>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/M-UHP-min60-1440x470.jpg"
          alt="Second slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-top-p3-brands-flat50.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-top-p4-brands-min60.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-top-p5-brands-under1999.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-top-p6-banner-starting399.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90.jpg"/>
    </div>
  );
}
