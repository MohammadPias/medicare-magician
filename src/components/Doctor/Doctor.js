import React from 'react';
import { Button } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({doctor}) => {
    console.log(doctor);
    const {name, age, type, consulting_fee, url} = doctor;
    return (
        <div className="col">
            <div><img className="img-fluid img-class" src={url} alt="`doctor`" /></div>
            <div className="doctor-card p-4">
                <h5>{name}</h5>
                <h6>Specialist: {type}</h6>
                <p>Age: {age}</p>
                <p>Consulting fee: ${consulting_fee}</p>
                <Button variant="primary">Appoint</Button>
            </div>
        </div>
    );
};

export default Doctor;