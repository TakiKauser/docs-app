import React from 'react';
import Appointment from '../Appointment/Appointment/Appointment';
import MenuBar from '../Shared/MenuBar/MenuBar';

const AppointmentPage = () => {
    return (
        <div>
            <MenuBar />
            <Appointment />
        </div>
    );
};

export default AppointmentPage;