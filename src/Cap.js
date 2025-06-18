import React from 'react'
import Card from 'react-bootstrap/Card';

export default function BasicExample({imageUrl}) {
  return (

    <Card>
        
      <Card.Img variant="top" src={imageUrl} />
    </Card>
  );
}

