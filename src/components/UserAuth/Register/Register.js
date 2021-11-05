import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleSignInSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert("Password didn't mathed!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item sx={{ my: 10 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: '600', color: '#39EAD6' }}>
                        SIGN UP
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleSignInSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-name"
                                label="Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="text"
                            />
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-email"
                                label="Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="email"
                            />
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-password"
                                label="Password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="password"
                            />
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-password-confirm"
                                label="Re-Type Password"
                                name="confirmPassword"
                                onBlur={handleOnBlur}
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
                    }
                    {
                        isLoading &&
                        <LinearProgress />
                    }
                    {
                        user?.email &&
                        <Alert variant="filled" severity="success">
                            Registration Successfull.
                        </Alert>
                    }
                    {
                        authError &&
                        <Alert variant="filled" severity="error">
                            {authError}
                        </Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;