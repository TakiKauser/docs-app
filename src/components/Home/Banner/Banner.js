import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import background from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBackground = {
    background: `url(${background})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}

const Banner = () => {
    return (
        <Container style={bannerBackground} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Tour New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 4, fontSize: 14, color: 'gray', fontWeight: 300 }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci maiores temporibus quisquam molestiae enim laboriosam eveniet accusantium aliquam debitis qui vero, minima delectus alias. Nulla ipsam culpa eius temporibus!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#39EAD6' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} alt="chair" style={{ width: '450px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;