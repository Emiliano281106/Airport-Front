import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api';


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

    return(

        <Paper>
            <TextField
             label="Airport code"
             name="code"
             value={formData.code}
             onChange={handleChange}
             fullWidth
             margin="normal"
             required/>

            <TextField
             label="Airport name"
             name="name"
             value={formData.name}
             onChange={handleChange}
             fullWidth
             margin="normal"
             required/>
            
             <TextField
             label="Airport country"
             name="country"
             value={formData.country}
             onChange={handleChange}
             fullWidth
             margin="normal"
             required/>

            <TextField
             label="Airport city"
             name="city"
             value={formData.city}
             onChange={handleChange}
             fullWidth
             margin="normal"
             required/>
            <Button type = "submit" onClick={handleSubmit}>Create Airport</Button>
        </Paper>
    );
}

export default CreateAirportForm