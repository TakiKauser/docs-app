import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user?.email}&date=${date}`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                setAppointments(jsonData);
            })
    }, [date]);

    return (
        <div>
            <h2>Appointments {appointments?.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="right">Action</TableCell>
                            <TableCell align="right">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="left">{row?.email}</TableCell>
                                <TableCell align="left">{row?.time}</TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Cancel">
                                        <IconButton>
                                            <CancelIcon sx={{ color: 'red' }} />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="right">{row?.payment ?
                                    "Paid" :
                                    <Link to={`/dashboard/payment/${row?._id}`}><Button>Pay</Button></Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;