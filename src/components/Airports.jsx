import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";
import axios from '../api';
import Button from '@mui/material/Button';


const Airports = () => {

  const [airports,setAirports] = useState([]);

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
        const response = await axios.delete('/airports/${id}');
        console.log("API response:", response);
        alert("Airport deleted succesfully!");
        getAirports();
      }catch(error){
        console.error(error);
      }
  }


  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
    {airports.map((airport) => (
      <Box
        gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
        key={airport.id}
      >
        <Card>
          <CardContent>
            {airport.name}
            Code: {airport.code}
            Country: {airport.country}
            City: {airport.city}
          </CardContent>
          <Button variant="outlined" onClick={() => { deleteAirport(airport.id) }}>
              {" "}
              delete{" "}
          </Button>
        </Card>
      </Box>
    ))}
  </Box>
  );
};

export default Airports;