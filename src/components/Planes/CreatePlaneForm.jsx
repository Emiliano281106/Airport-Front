import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../Middleware/api';
import Typography from '@mui/material/Typography';


const CreatePlaneForm = () => {

    const navigate = useNavigate();
    const [planeData, setPlaneData] = useState({

        model: "",
        manufacturer: "",
        capacity: "",
        yearOfManufacture: "",
    });

    const handleChange = (e) => {
        const{name,value} = e.target;
        setPlaneData({...planeData, [name] : value});

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting plane data:", planeData);
        try {
            await axios.post('/planes/createPlane', planeData);
            alert("Plane created successfully!");
            navigate('/planes');
        } catch (error) {
            console.error("Error creating plane:", error.response?.data || error.message);
            alert(`Error: ${error.response?.data?.message || "Failed to create plane. Please check your input."}`);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Paper elevation={3} style={{ padding: '30px', maxWidth: '500px', width: '100%' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Create New Airport
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        label="Airport Code"
                        name="code"
                        value={planeData.code}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Airport Name"
                        name="name"
                        value={planeData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Airport Country"
                        name="country"
                        value={planeData.country}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                       <TextField
                        label="Airport City"
                        name="city"
                        value={planeData.city}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <Button variant="contained" color="primary" type="submit" style={{ alignSelf: 'center' }}>
                        Create Airport
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default CreatePlaneForm