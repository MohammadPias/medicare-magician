import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Signup = () => {

    const {handleSignup, handleGoogleSignin, error} = useAuth();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    return (
        <Container className="w-25 h-75 mx-auto bg-light mt-5 p-3">
            <h3 className="mb-3">Signup</h3>
            <div className="d-flex justify-content-center align-items-center">
                <Form onSubmit={(event)=>handleSignup(event, name, email, password)} className="w-100">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                        <Col sm="12">
                            <Form.Control onChange={handleNameChange} type="text" placeholder="Name" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Col sm="12">
                            <Form.Control onChange={handleEmailChange} type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm="12">
                            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" required />
                        </Col>
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button className="w-100 mb-3" type="submit">Signup</Button>
                </Form>
            </div>
            <small>Already have an Account? <Link to="/login">Sign in</Link></small>
            <br />
            <small>Forgot your password? <Link to="/signup">Recover password</Link></small>
            <p className="my-2">---or---</p>
            <Button onClick={handleGoogleSignin} className="w-100 mb-3" type="submit"><i className="fab fa-google"></i>  Login with google</Button>
        </Container>
    );
};

export default Signup;