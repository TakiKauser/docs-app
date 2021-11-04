import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
            <Services />
            <Care />
            <AppointmentBanner />
        </div>
    );
};

export default Home;