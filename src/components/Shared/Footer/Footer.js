import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo3.svg'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container bg-dark text-white mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="logo col">
                    <img src={logo} alt="" />
                    <div>
                        <Link to="/"><i className="fab fa-linkedin font-style"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square font-style"></i></Link>
                        <Link to="/"><i className="fab fa-facebook-square font-style"></i></Link>
                    </div>
                </div>
                <div className="col d-flex flex-column">
                    <Link to="/">About Services</Link>
                    <Link to="/">Read our blog</Link>
                    <Link to="/">Signup to Booking</Link>
                    <Link to="/">Privacy and Policy</Link>
                </div>
                <div className="col d-flex flex-column">
                    <Link to="/">Get help</Link>
                    <Link to="/">Read FAQs</Link>
                    <Link to="/">View all cities</Link>
                    <Link to="/">Ambulance Service</Link>
                </div>
            </div>
            <div className="mt-5 border-top bg-dark">
                <Container className="d-flex justify-content-between">
                    <div className="mt-2"><p>copyright &copy; 2022 online Medicare</p></div>
                    <div className="mt-2">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of use</Link>
                        <Link to="/">Pricing</Link>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Footer;