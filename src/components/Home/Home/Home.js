import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Bannet/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;