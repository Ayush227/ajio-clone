import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
  return (
    <div>
      <br />
      <Card>
        <a href='https://www.ajio.com/ajiocare-tnc'>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg"
        />
        </a>
      </Card>
      <br />
    </div>
  );
}

export default ImageAndTextExample;