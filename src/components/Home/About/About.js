import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div id="about" className="mb-4 container">
            <h3 className="heading">About us</h3>
            <div className="line"></div>
            <Container>
                <div className="row row-cols-1 row-cols-md-2 g-5 p-3">
                    <div className="col about-banner">

                    </div>
                    <div className="col">
                        <div>
                            <p>We are an online healthcare service provider that is the utilization of computerized data and correspondence innovations, like PCs and cell phones, to get to medical care benefits distantly and deal with your medical services. These might be innovations you use from home or that your PCP uses to improve or uphold medical care administrations.
                        <br />
                        <br />
                            One of the best online medicine store is Truemeds, its provides best quality medicines at discounted prices, It is an online pharmacy store offering medicines for senior care.
                            </p>
                            <Button variant="primary">Learn More</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;