import React from 'react';
import { Button } from 'react-bootstrap';
import './Ambulance.css'

const Ambulance = () => {
    return (
        <div id="ambulance" className="ambulance-service">
            <div>
                <Button className="call-btn">Call</Button>
            </div>
        </div>
    );
};

export default Ambulance;