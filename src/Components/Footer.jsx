import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer({ car, addCount }) {
  const { brand, model, price, color, year, banType, engine, img } = car;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
      <Card>
        <Card.Img variant="top" src={img} style={{ objectFit: 'cover', height: '200px'}} />
        <Card.Body >
          <Card.Title>{price}</Card.Title>
          <div className="d-flex flex-column">
          <Card.Text> {brand}, {model}, {model}, {color}, {year}, {banType}, {engine}</Card.Text>
          </div>
          <Button variant="primary" onClick={addCount}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Footer;
//171,143