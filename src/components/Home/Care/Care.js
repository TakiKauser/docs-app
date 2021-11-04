import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Care = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '90%', height: '500px' }} src={treatment} alt="dental-treatment" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{ textAlign: 'left', mx: 5 }}>
                        <Typography variant="h4" sx={{ my: 5, fontWeight: 600 }}>
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 300, fontSize: '16px', my: 5 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat commodi, unde natus pariatur vitae laborum veritatis deserunt temporibus rerum ullam nesciunt porro architecto obcaecati! Eligendi voluptas tempora recusandae eius animi blanditiis voluptates. Expedita fugit soluta necessitatibus, consequatur officiis aliquam.</Typography>
                        <Button variant='contained' style={{ backgroundColor: '#39EAD6', marginTop: '40px' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Care;