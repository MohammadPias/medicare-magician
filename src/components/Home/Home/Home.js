import React from 'react';
import Ambulance from '../Ambulance/Ambulance';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Ambulance></Ambulance>
            <Services></Services>
        </div>
    );
};

export default Home;