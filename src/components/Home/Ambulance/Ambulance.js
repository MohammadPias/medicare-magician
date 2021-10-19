import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Ambulance.css'
import ambulance from '../../../images/banners/ambulance.jpg'

const Ambulance = () => {
    return (
        <div>
            <h3 className="heading">Ambulance Service</h3>
            <div className="line"></div>
            <div id="ambulance" className="ambulance-service mb-4">
                <img className="img-fluid" src={ambulance} alt="" />
                <div className="w-25 mx-auto">
                    <button type="button" className="btn btn-lg btn-primary call-btn rounded-pill" data-bs-toggle="popover" title="+88 01800000000" data-bs-content="+88 01845028736">Call us</button>
                </div>
            </div>
        </div>
    );
};

export default Ambulance;