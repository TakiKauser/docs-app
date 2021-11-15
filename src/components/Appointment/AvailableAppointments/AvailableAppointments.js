import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Bookings from '../Bookings/Bookings';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        fee: 13
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        fee: 17
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        fee: 19
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        fee: 11
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        fee: 14
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        fee: 23
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', fontWeight: 600, my: 4 }}>Appointments Available on "{date.toDateString()}"</Typography>
            {
                bookingSuccess &&
                <Alert variant="filled" severity="success">
                    Appointment has booked successfully.
                </Alert>
            }

            <Grid container spacing={2}>
                {
                    bookings?.map(booking => <Bookings
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;