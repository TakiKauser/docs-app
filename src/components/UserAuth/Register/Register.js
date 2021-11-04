import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleSignInSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert("Password didn't mathed!");
            return;
        }
        alert("Signing In...");
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item sx={{ my: 10 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: '600', color: '#39EAD6' }}>
                        SIGN UP
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
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="user-email"
                            label="Re-Type Password"
                            name="confirmPassword"
                            onChange={handleOnChange}
                            variant="standard"
                            type="password"
                        />
                        <Button type="submit" variant='contained' sx={{ width: '75%', m: 3, py: 2 }} style={{ backgroundColor: '#39EAD6' }}>
                            SIGN UP
                        </Button>
                        <NavLink
                            to="/login"
                            style={{ textDecoration: 'none', color: '#39EAD6' }}
                        >
                            <Button>
                                Already Resistered? Please SIGN IN
                            </Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;