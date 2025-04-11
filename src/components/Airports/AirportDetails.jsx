import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const AirportDetails = () => {
    const location = useLocation();
    const airport = location.state?.airport || {};
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
      };

    
    return(
        <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {airport.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {airport.country} , {airport.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Code:</strong> {airport.code}
        </Typography>
      </CardContent>
      <Button size="small" onClick={handleBackClick}>
        Back
      </Button>
    </Card>
    );
}

export default AirportDetails