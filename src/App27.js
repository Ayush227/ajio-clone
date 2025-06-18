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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-p1-shipping.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/Ajio-Exp-extra25-D.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-p3-inviteyourfriends.jpg"
        />
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Ajioexp-p4-newonajio.jpg"
        />
      </Card>
    </CardGroup>
    <Cap  imageUrl="https://assets.ajio.com/cms/AJIO/WEB/50.0.jpg"/>
    </div>

  
  );
}

export default GroupExample;
