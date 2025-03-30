import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";
import axios from '../api';
import Button from '@mui/material/Button';

const Planes = () => {

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
      const response = await axios.delete(`/planes/${id}`);
      console.log("API response:", response);
      alert("Plane deleted successfully!");
      getPlanes();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {planes.map((plane) => (
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3" }}
          key={plane.id}
        >
          <Card>
            <CardContent>
              {plane.model}
              Manufacturer: {plane.manufacturer}
              Capacity: {plane.capacity}
            </CardContent>
            <Button variant="outlined" onClick={() => { deletePlane(plane.id) }}>
              {" "}
              delete{" "}
            </Button>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Planes;
