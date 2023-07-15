import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleAddDoctor = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(jsonData => {
                if (jsonData.insertedId) {
                    setSuccess("Doctors' info added successfully.");
                }
                // console.log('Success:', jsonData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleAddDoctor}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic" label="Name"
                    onBlur={e => setName(e.target.value)}
                    variant="standard"
                    required
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic" label="Email"
                    type="email"
                    onBlur={e => setEmail(e.target.value)}
                    variant="standard"
                    required
                />
                <br /> <br />
                <Input accept="image/*" type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success &&
                <Alert variant="filled" severity="success">
                    {success}
                </Alert>
            }
        </div>
    );
};

export default AddDoctor;