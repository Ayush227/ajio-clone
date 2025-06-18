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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyAJIO-p1-Exclusiverange-REVISED%20(1).jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p2-ProduktbyJ&J.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p3-Avaasa.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p4-Gas.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p5-DNMX.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p6-Karigari.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p7-Netplay.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p8-JP.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p9-Walkstyleac.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-AJIOexclusive-superdry-edited.jpg"
        />
      </Card>
    </CardGroup>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-Header.jpg"/>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/2022_GAP_AJIO_1440x470.jpg"/>
    </div>
  );
}

export default GroupExample;
