import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, openBooking, handleBookingClose, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialBookingInfo = { patientName: user?.displayName, email: user?.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // console.log(appointment);

        // send to server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(response => response.json())
            .then(jsonData => {
                if (jsonData.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })

        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '95%', m: 2 }}
                            defaultValue={time}
                            size="small"
                            disabled
                        />
                        <TextField
                            sx={{ width: '95%', m: 2 }}
                            defaultValue={user?.displayName}
                            name="patientName"
                            onBlur={handleOnBlur}
                            label="Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 2 }}
                            defaultValue={user?.email}
                            name="email"
                            onBlur={handleOnBlur}
                            label="Email"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 2 }}
                            name="phone"
                            onBlur={handleOnBlur}
                            label="Contact Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '95%', m: 2 }}
                            label="Appointment Date"
                            defaultValue={date.toDateString()}
                            size="small"
                            disabled
                        />
                        <Button type='submit' variant='contained' style={{ backgroundColor: '#39EAD6' }}>BOOK APPOINTMENT</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;