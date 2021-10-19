import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, info, fee, rating, img } = service;
    return (
        <Col>
            <Card className="service-card" style={{ backgroundColor: '#F8F5F2' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info.slice(0, 50)}
                    </Card.Text>
                    <Card.Text>
                        <h6>Consulting Fee: ${fee}</h6>
                    </Card.Text>
                    <Card.Text>
                        Rating: <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="fa fa-star-o fa-x color"
                            fullSymbol="fa fa-star fa-x color"
                        />
                    </Card.Text>
                    <Link to={`/serviceDetail/${id}`}><Button variant='primary'>Booking</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;