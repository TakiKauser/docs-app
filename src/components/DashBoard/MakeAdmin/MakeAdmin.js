import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(jsonData => console.log(jsonData))
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', mx: 'auto' }}
                    // defaultValue={user?.email}
                    name="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    size="small"
                    type="email"
                />
                <Button type='submit' variant='contained' sx={{ ml: 3 }} style={{ backgroundColor: '#39EAD6' }}>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;