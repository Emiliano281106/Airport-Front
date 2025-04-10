import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../Middleware/api';
const UpdateAirportForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const plane = location.state?.plane || {};
    const [formData, setFormData] = useState({
        
        model : plane.model || "",
        manufacturer : plane.manufacturer || "",
        capacity : plane.capacity || "",
        yearOfManufacture : plane.yearOfManufacture || "",

    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});  
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const respone = await axios.put(`/planes/updatePlane/${plane.id}`, formData);
            console.log("API Response:", respone);
            alert("Plane updated successfully!!!");
            navigate("/planes");
        }catch(error){
            console.error(error);
        };

    }
    return(
                <Paper>
                    <Typography variant="h4" align="center">Update Plane</Typography>
                    <form>
                        <TextField
                            label="Plane model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Plane manufacturer"
                            name="manufacturer"
                            value={formData.manufacturer}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Plane capacity"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Year of manufacture"
                            name="yearOfManufacture"
                            value={formData.yearOfManufacture}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" onClick = {handleSubmit}>Update Plane</Button>
                    </form>
                </Paper>
            );
}

export default UpdateAirportForm