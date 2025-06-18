import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Cap from './Cap'

function GroupExample() {
  return (
    <div>
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p1-Levis.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p2-puma.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p13-Performax.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p3-adidas.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p4-uspa.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p7-casio.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p9-Caprese.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p10-beinghuman.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Celeb-p14-grimelange.jpg"
        />
      </Card>
    </CardGroup>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-header.jpg"/>
    </div>
  );
}

export default GroupExample;
