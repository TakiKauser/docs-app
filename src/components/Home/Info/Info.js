import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Box } from '@mui/system';

const Info = () => {
    return (
        <Container sx={{mt: -7}}>
            <Grid container spacing={2} sx={{flexGrow: 1, mx: 4}}>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <Paper elevation={3} sx={{width: '100%', backgroundColor: '#39EAD6', color: 'white', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">
                            <AccessTimeIcon sx={{ fontSize: 40 }} />
                        </Typography>
                        <Box sx={{ marginLeft: '20px' }}>
                            <Typography variant="h6">
                                Opening Hours
                            </Typography>
                            <Typography variant="subtitle1" color="white" sx={{ fontWeight: 'light' }}>
                                08:AM To 09:00PM
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex'}}>
                    <Paper elevation={3} sx={{width: '100%', backgroundColor: 'gray', color: 'white', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">
                            <LocationOnIcon sx={{ fontSize: 40 }} />
                        </Typography>
                        <Box sx={{ marginLeft: '20px' }}>
                            <Typography variant="h6">
                                Visit Our Location
                            </Typography>
                            <Typography variant="subtitle1" color="white" sx={{ fontWeight: 'light' }}>
                                SarishaBari, Mymenshingh
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex'}}>
                    <Paper elevation={3} sx={{width: '100%', backgroundColor: '#39EAD6', color: 'white', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">
                            <CallIcon sx={{ fontSize: 40 }} />
                        </Typography>
                        <Box sx={{ marginLeft: '20px' }}>
                            <Typography variant="h6">
                                Contact Us
                            </Typography>
                            <Typography variant="subtitle1" color="white" sx={{ fontWeight: 'light' }}>
                                +023 087 423
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid >
        </Container>
    );
};

export default Info;