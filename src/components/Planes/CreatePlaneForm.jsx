import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../Middleware/api';
import { Box } from '@mui/material';


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

        try{
            await axios.post('/planes/createPlane', planeData);
            alert("Plane created succesfully!!!");
            navigate('/planes');
        }catch(error){
            console.error(error);
        }

    };

    return(
        <Paper>
            <Box>
                <TextField
                 label="Plane model"
                 name="model"
                 value={planeData.model}
                 onChange={handleChange}
                 fullWidth
                 margin="normal"
                 required/>

                  <TextField
                 label="Plane manufacturer"
                 name="manufacturer"
                 value={planeData.manufacturer}
                 onChange={handleChange}
                 fullWidth
                 margin="normal"
                 required/>

                  <TextField
                 label="Plane capacity"
                 name="capacity"
                 value={planeData.capacity}
                 onChange={handleChange}
                 fullWidth
                 margin="normal"
                 required/>

                  <TextField
                 label="Planes year of manufacture"
                 name="yearOfManufacture"
                 value={planeData.yearOfManufacture}
                 onChange={handleChange}
                 fullWidth
                 margin="normal"
                 required/>
                 <Button variant="outlined" type = "submit" onClick={handleSubmit}>Create plane</Button>
            </Box>
        </Paper>
    );
}

export default CreatePlaneForm