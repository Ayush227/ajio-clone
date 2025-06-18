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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-iconicdeals-superdry-flat50-EDITED.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-D-UHP-iconicdeals-p2-JJ-veromoda-ONLY-min60.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-D-UHP-iconicdeals-aldo-flat50-EDITED%20(1).jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-D-UHP-iconic-p4-AJIOLuxe.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-top-p5-brands-min30.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-iconic-p6-brands-flat65.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/25112022-unisex-d-iconic-p7-brands-flat60.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-Rewards-header.jpg"/>
    </div>
  );
}
