import React from 'react';
import About from '../About/About';
import Ambulance from '../Ambulance/Ambulance';
import DoctorHome from '../DoctorHome/DoctorHome';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Ambulance></Ambulance>
            <Services></Services>
            <DoctorHome></DoctorHome>
            <About></About>
        </div>
    );
};

export default Home;