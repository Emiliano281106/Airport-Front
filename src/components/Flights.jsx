import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";
import axios from '../api';
import Button from '@mui/material/Button';

const Flights = () => {

  const [flights, setFlights] = useState([]);

  const getFlights = async () => {
    try {
      const response = await axios.get("/flights/getFlights");
      console.log("API Response:", response);
      setFlights(response.data || []); 
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFlights();
  }, []);

  const deleteFlight = async (id) => {
    try {
      const response = await axios.delete(`/flights/${id}`);
      console.log("API response:", response);
      alert("Flight deleted successfully!");
      getFlights();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {flights.map((flight) => (
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
          key={flight.id}
        >
          <Card>
            <CardContent>
              {flight.flightNumber}
              Departure Time: {flight.departureTime}
              Arrival Time: {flight.arrivalTime}
              Status: {flight.status}
            </CardContent>
            <Button variant="outlined" onClick={() => { deleteFlight(flight.id) }}>
              {" "}
              delete{" "}
            </Button>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Flights;