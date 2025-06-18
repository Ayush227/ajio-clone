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
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-UHP-D-UHPwomen-p1-ritukumar-masaba-starting2499.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-UHP-D-UHPwomen-p2-carltonlondon-everqupid-30to70.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-UHP-D-UHPwomen-p3-homesparrow-goodhomes-starting249.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-UHP-D-UHPwomen-p4-puma-performax-min40.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/19112022-UHP-D-UHPwomen-p5-indiepicks-pothys-upto80.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
 <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-UHPWomen-Header.jpg"/>
 </div>
  );
}
