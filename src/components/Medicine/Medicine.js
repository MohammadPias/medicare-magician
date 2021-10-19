import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Medicine.css'

const Medicine = ({medicine}) => {
    console.log(medicine);
    const {name, url, price} = medicine;
    return (
        <Col>
            <Card className="medicine-card">
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Button variant="primary">Order</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Medicine;