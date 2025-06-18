import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p9-winterwear.jpg"
        />
      </Card>
      <Card style={{border:"0px"}}>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p5-aceesories.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p6-beauty.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-p7-internationalbrands.jpg"
        />
      </Card>
    </CardGroup>

  
  );
}

export default GroupExample;
