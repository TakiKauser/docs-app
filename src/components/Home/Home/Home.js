import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;