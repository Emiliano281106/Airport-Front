import React, { useEffect, useState } from 'react';
import axios from '../../Middleware/api';
import {
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const Flights = () => {

  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();
  const [airports, setAirports] = useState([]);
  const [planes,setPlanes] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const response = await axios.get("/flights/getFlights");
        console.log("API Response:", response);
        setFlights(response.data || []); 
      } catch (error) {
        console.error(error);
      }
    };

    const getAirports = async () => {
      try {
        const response = await axios.get("/airports/getAirports");
        console.log("API Response:", response);
        setAirports(response.data || []); 
      } catch (error) {
        console.error(error);
      }
    };

    const getPlanes = async () => {
      try {
        const response = await axios.get("/planes/getPlanes");
        console.log("API Response:", response);
        setPlanes(response.data || []); 
      } catch (error) {
        console.error(error);
      }
    };

    getFlights();
    getPlanes();
    getAirports();
  }, []);

  const deleteFlight = async (id) => {
    try {
      const response = await axios.delete(`/flights/deleteFlight/${id}`);
      console.log("API response:", response);
      alert("Flight deleted successfully!");
      getFlights();
    } catch (error) {
      console.error(error);
    }
  };

  const createFlight = () => {

    navigate('/flights/create', {state : {airports, planes}});
  }

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Button 
        variant='outlined' 
        onClick={createFlight} 
        sx={{ marginBottom: 2 }}
      >
        Create New Flight
      </Button>
      
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="flights table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell><strong>Flight Number</strong></TableCell>
              <TableCell><strong>Departure</strong></TableCell>
              <TableCell><strong>Arrival</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <TableRow
                key={flight.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <strong>{flight.flightNumber}</strong>
                </TableCell>
                <TableCell>{flight.departureTime}</TableCell>
                <TableCell>{flight.arrivalTime}</TableCell>
                <TableCell>
                  <Typography 
                    sx={{ 
                      color: flight.status === 'ON_TIME' ? 'green' : 
                            flight.status === 'CANCELLED' ? 'red' : 
                            flight.status === 'DELAYED' ? 'orange' : 
                            flight.status === 'SCHEDULED' ? 'blue' : 'inherit',
                      fontWeight: 'bold'
                    }}
                  >
                    {flight.status}
                  </Typography>
                </TableCell>
                <TableCell sx={{ display: 'flex', gap: 1 }}>
                <Button 
                  variant="contained" 
                  sx={{
                    bgcolor: 'error.light', // Softer red tone
                    '&:hover': {
                      bgcolor: 'error.main',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.2s ease-in-out',
                    boxShadow: 1
                  }}
                  onClick={() => { deleteFlight(flight.id) }}
                >
                  Delete
                </Button>
                <Button 
                  variant="contained" 
                  sx={{
                    bgcolor: 'info.light', // Softer blue tone
                    '&:hover': {
                      bgcolor: 'info.main',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.2s ease-in-out',
                    boxShadow: 1
                  }}
                  onClick={() => { updateFlight(flight.id) }}
                >
                  Update
                </Button>
                <Button 
                  variant="contained" 
                  sx={{
                    bgcolor: 'success.light', // Softer green tone
                    '&:hover': {
                      bgcolor: 'success.main',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.2s ease-in-out',
                    boxShadow: 1
                  }}
                  onClick={() => { detailsFlight(flight.id) }}
                >
                  Details
                </Button>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};


export default Flights;