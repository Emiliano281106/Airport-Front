import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";
import axios from '../api';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



const Airports = () => {

  const [airports,setAirports] = useState([]);
  const navigate = useNavigate();

  const getAirports = async () => {

    try{
      const response = await axios.get("/airports/getAirports");
      console.log("API Response:", response);
      setAirports(response.data || []); 
    }catch(error){
      console.error(error);
    }
    
  }

  useEffect(() => {
    getAirports();
  }, []);

  const deleteAirport = async (id) => {
      try{
        const response = await axios.delete(`/airports/deleteAirport/${id}`);
        console.log("API response:", response);
        alert("Airport deleted succesfully!");
        getAirports();
      }catch(error){
        console.error(error);
      }
  }

  const createAirport = () => {
    navigate('/airports/create')
  }


  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
    <Button variant='contained'onClick={createAirport} >Create new Airport</Button>
  {airports.map((airport) => (
    <Box
      gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
      key={airport.id}
    >
      <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom color="lightblue"  >
            <strong>{airport.name}</strong>
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            <strong>Code:</strong> {airport.code}
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            <strong>Country:</strong> {airport.country}
          </Typography>
          
          <Typography variant="body1" gutterBottom>
            <strong>City:</strong> {airport.city}
          </Typography>
        </CardContent>
        
        <Button 
          variant="outlined" 
          color="grey"
          onClick={() => { deleteAirport(airport.id) }}
          sx={{ margin: 2 }}
        >
          Delete Airport
        </Button>
      </Card>
    </Box>
  ))}
</Box>
  );
};

export default Airports;