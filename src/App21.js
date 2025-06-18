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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p1-bedsheets,Blants&comforters.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p2-decor.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p3-kitchen.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p4-showpieces.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-home-homeexpressions-upto70.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Home&Kitchen-p6-upto80.jpg"
        />
      </Card>
    </CardGroup>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-DiscOnlineStores-Header.jpg"/>
    </div>
  );
}

export default GroupExample;
