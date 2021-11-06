import React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Calendar
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Appointments
                    date={date}
                />
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;