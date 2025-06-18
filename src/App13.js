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
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-D-UHP-men-p1-tshirt-brands-startingat499.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-D-UHP-men-p2-ajiogold-brands-3050.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-D-UHP-men-p3-brands-kidswear-3050.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-D-UHP-men-p4-boots-brands-min50.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-D-UHP-men-p5-night&loungewear-brands-upto70.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-UHPWomen-Header.jpg"/>
    </div>

  );
}
