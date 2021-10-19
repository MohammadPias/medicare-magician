import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <Link to="/home"><Button>Home</Button></Link>
        </div>
    );
};

export default NotFound;