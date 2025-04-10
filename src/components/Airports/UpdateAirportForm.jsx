import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../Middleware/api';

const UpdateAirportForm = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const airport = location.state?.airport || {};
    const [formData, setFormData] = useState({
        code: airport.code || "",
        name: airport.name || "",
        country: airport.country || "",
        city: airport.city || "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/airports/updateAirport/${airport.id}`, formData);
            console.log("API Response:", response);
            alert("Airport updated successfully!!!");
            navigate("/airports");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Paper>
            <Typography variant="h4" align="center">Update Airport</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Airport code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Airport name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" onClick = {handleSubmit}>Update Airport</Button>
            </form>
        </Paper>
    );
}

export default UpdateAirportForm