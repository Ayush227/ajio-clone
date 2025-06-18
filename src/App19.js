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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p2-starting559ac.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p3-min40.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p4-upto70.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p5-starting179.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p6-min40.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-kidswear-p7-starting199.jpg"
        />
      </Card>
    </CardGroup>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-BandofBrands-Header.jpg"/>
    </div>
  );
}

export default GroupExample;
