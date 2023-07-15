import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setDoctors(jsonData);
            })
    }, [])
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    {
                        doctors.map(doctor => (
                            <Doctor
                                key={doctor?._id}
                                doctor={doctor}
                            />
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Doctors;