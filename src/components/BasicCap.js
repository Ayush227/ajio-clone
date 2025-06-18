import React from 'react';
import Card from 'react-bootstrap/Card';

export default function BasicCap({ imageUrl }) {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
    </Card>
  );
}
