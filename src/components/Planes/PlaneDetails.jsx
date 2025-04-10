import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
const PlaneDetails = () => {

    const location = useLocation();
    const plane = location.state?.plane || {};
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
      }

    return (
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {plane.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Model: {plane.manufacturer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capacity: {plane.capacity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year of manufacture: {plane.yearOfManufacture}  
        </Typography>      
      </CardContent>
      <Button size="small" onClick={handleBackClick}>
        Back
      </Button>
    </Card>

    );
}

export default PlaneDetails;
