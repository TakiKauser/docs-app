import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained' style={{ backgroundColor: '#39EAD6' }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid >
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
            ></BookingModal>

        </>
    );
};

export default Bookings;