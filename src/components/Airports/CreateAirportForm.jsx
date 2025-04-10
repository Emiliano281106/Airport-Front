import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../Middleware/api';


const CreateAirportForm = () => {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        code : "",
        name : "",
        country : "",
        city : "",
    });

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData({...formData, [name] : value});

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/airports/createAirport', formData);
            alert("Airport created successfully!!!");
            navigate("/airports");

        }catch(error){
            console.error(error);
        }
        
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', }}>
            <Paper elevation={3} style={{ padding: '30px', maxWidth: '500px', width: '100%' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Create New Airport
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        label="Airport Code"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Airport Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Airport Country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Airport City"
                        name="city"
                        value={formData.city}
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

export default CreateAirportForm