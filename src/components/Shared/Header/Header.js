import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.svg'
import './Header.css'
import useAuth from '../../../Context/useAuth';

const Header = () => {
    const {user, handleSignOut} = useAuth();
    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="150"
                            height="50"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto custom-nav">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#ambulance">Ambulance</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            { user?.email && <Nav.Link as={Link} to="/"><h5>{user?.displayName}</h5></Nav.Link>}
                            {!user?.email ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : <Button variant="primary" size="sm" onClick={handleSignOut}>Sign Out</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;