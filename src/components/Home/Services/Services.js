import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();
    return (
        <Container id="services" className="mb-4">
            <h3 className="heading">Services</h3>
            <div className="line"></div>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;