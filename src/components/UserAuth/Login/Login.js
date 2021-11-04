import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSignInSubmit = e => {
        alert("Signing In...");
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item sx={{ my: 10 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: '600', color: '#39EAD6' }}>
                        SIGN IN
                    </Typography>
                    <form onSubmit={handleSignInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="user-email"
                            label="Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                            type="email"
                        />
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="user-email"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                            type="password"
                        />
                        <Button type="submit" variant='contained' sx={{ width: '75%', m: 3, py: 2 }} style={{ backgroundColor: '#39EAD6' }}>Sign in</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;