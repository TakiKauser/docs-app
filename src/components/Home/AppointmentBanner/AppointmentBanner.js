import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import background from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${background})`,
    backgroundColor: 'rgba(45, 58, 74, .85)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="doctor" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justtifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ my: 2 }} style={{ color: '#39EAD6' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus ab itaque, eius quas animi velit quasi harum deserunt ex perspiciatis aut accusantium placeat obcaecati eaque dignissimos voluptas similique iure?
                        </Typography>
                        <Button variant='contained' sx={{ my: 3 }} style={{ backgroundColor: '#39EAD6' }}>LEARN MORE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;