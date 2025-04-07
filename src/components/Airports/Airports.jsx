import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import axios from '../../Middleware/api';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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



const Airports = () => {

  const [airports,setAirports] = useState([]);
  const navigate = useNavigate();

  const getAirports = async () => {

    try{
      const response = await axios.get("/airports/getAirports");
      console.log("API Response:", response.data);
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
    <Box sx={{ width: '100%', p: 2 }}>
      <Button 
        variant='outlined' 
        onClick={createAirport} 
        sx={{ marginBottom: 2 }}
      >
        Create new Airport
      </Button>
      
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="airports table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Code</strong></TableCell>
              <TableCell><strong>Country</strong></TableCell>
              <TableCell><strong>City</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airports.map((airport) => (
              <TableRow
                key={airport.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Typography color="black">
                    <strong>{airport.name}</strong>
                  </Typography>
                </TableCell>
                <TableCell>{airport.code}</TableCell>
                <TableCell>{airport.country}</TableCell>
                <TableCell>{airport.city}</TableCell>
                <TableCell>
                  <Button 
                    variant="outlined" 
                    color="error"
                    onClick={() => { deleteAirport(airport.id) }}
                  >
                    Delete
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

export default Airports;