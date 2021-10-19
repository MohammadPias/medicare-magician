import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Login = () => {

    const { handleSignin, handleGoogleSignin, error } = useAuth();

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const history = useHistory();
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        handleGoogleSignin()
        .then(result =>{
            history.push(redirect_url)
        })
    }

    const handleNewSignin = (event, email, password) => {
        handleSignin(event, email, password)
        .then(result => {
            history.push(redirect_url)
        })
    }
    return (
        <Container className="w-25 h-75 mx-auto bg-light mt-5 p-3">
            <h3 className="mb-3">Login</h3>
            <div className="d-flex justify-content-center align-items-center">

                <Form onSubmit={(event) => handleNewSignin(event, email, password)} className="w-100">
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
                    <Button className="w-100 mb-3" type="submit">Signin</Button>
                </Form>
            </div>
            <small>Don't have any Account? <Link to="/signup">Signup</Link></small>
            <br />
            <small>Forgot your password? <Link to="/signup">Recovery password</Link></small>
            <p className="my-2">---or---</p>
            <Button onClick={handleGoogleLogin} className="w-100 mb-3" type="submit"><i className="fab fa-google"></i>  Login with google</Button>
        </Container>
    );
};

export default Login;