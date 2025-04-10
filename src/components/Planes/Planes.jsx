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

const Planes = () => {

  const navigate = useNavigate();

  const [planes, setPlanes] = useState([]);

  const getPlanes = async () => {
    try {
      const response = await axios.get("/planes/getPlanes");
      console.log("API Response:", response);
      setPlanes(response.data || []); 
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPlanes();
  }, []);

  const deletePlane = async (id) => {
    try {
      const response = await axios.delete(`/planes/deletePlane/${id}`);
      console.log("API response:", response);
      alert("Plane deleted successfully!");
      getPlanes();
    } catch (error) {
      console.error(error);
    }
  };

  const createPlane = () => {
    navigate('/planes/create');
  }

  const updatePlane = (id) => {
    const plane = planes.find(plane => plane.id === id);
    console.log("Response" ,plane);
    if (!plane) {
      console.error("Plane not found");
      return;
    }
    navigate(`/planes/update/${id}`, { state: { plane } });
  }


  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Button 
        variant='outlined' 
        onClick={createPlane} 
        sx={{ marginBottom: 2 }}
      >
        Create New Plane
      </Button>
      
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="planes table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell><strong>Model</strong></TableCell>
              <TableCell><strong>Manufacturer</strong></TableCell>
              <TableCell><strong>Capacity</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {planes.map((plane) => (
              <TableRow
                key={plane.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Typography color="black">
                    <strong>{plane.model}</strong>
                  </Typography>
                </TableCell>
                <TableCell>{plane.manufacturer}</TableCell>
                <TableCell>{plane.capacity}</TableCell>
                <TableCell>
                <Button 
                    variant="contained" 
                    color="error"
                    onClick={() => { deletePlane(plane.id) }}
                    sx={{
                      '&:hover': {
                        bgcolor: 'error.dark',
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.2s ease-in-out',
                      boxShadow: 1
                    }}
                  >
                    Delete
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => { updatePlane(plane.id) }}
                    sx={{
                      '&:hover': {
                        bgcolor: 'secondary.dark',
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.2s ease-in-out',
                      boxShadow: 1
                    }}
                  >
                    Update
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



export default Planes;
