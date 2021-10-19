import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctor from '../../../images/banners/doctors.jpg';
import medicine from '../../../images/banners/medicine.jpg'
import './DoctorHome.css'

const DoctorHome = () => {
    return (
        <Container>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                <Link to="/doctors">
                    <h3 className="heading">Our Expert Doctors</h3>
                    {/* <div className="line"></div> */}
                    <div className="col img-custom">
                        <img src={doctor} alt="" />
                    </div>
                </Link>
                <Link to="/medicineShop">
                    <h3 className="heading">Medicine Shop</h3>
                    <div className="col img-custom">
                        <img src={medicine} alt="" />
                    </div>
                </Link>
            </div>
        </Container>
    );
};

export default DoctorHome;