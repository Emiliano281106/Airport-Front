import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from '../../api';
import {
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";


const CreateFlightForm = () => {

    const [formData, setFormData] = useState({

        flightNumber : "",
        departureAirportId : "",
        arrivalAirportId : "",
        planeId : "",
        departureTime: dayjs(),
        arrivalTime : dayjs(),
        status : "",
        
    });
    const navigate = useNavigate();
    const location = useLocation();
    const {planes, airports} = location.state || {};

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({...formData, [name] : value});
    }

    const handleDateChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = async (e) => {

        try{
            const flightData = {

                flightNumber : formData.flightNumber ,
                departureAirport :{id: formData.departureAirportId} ,
                arrivalAirport : {id : formData.arrivalAirportId},
                plane : {id : formData.planeId},
                departureTime:formData.departureTime,
                arrivalTime : formData.arrivalTime,
                status : formData.status,
            };
            console.log("Sending:", JSON.stringify(flightData, null, 2));
            await axios.post('/flights/createFlight', flightData);
            alert("Flight created succesfully!!!");
            navigate("/flights");
        }catch (error) {
          console.error("Full error details:", error.response?.data); 
          alert(`Failed to create flight: ${error.response?.data?.message || error.message}`);
        }

    };

    

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Paper
          style={{ padding: "20px", maxWidth: "500px", margin: "20px auto" }}
        >
          <h2>Create New Flight</h2>
          <form onSubmit={handleSubmit}>
            <TextField
                label="Flight Number"
                name="flightNumber"
                value={formData.flightNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
                />
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="departureAirport-select-label">Departure Airport</InputLabel>
              <Select
                labelId="departureAirport-select-label"
                id="departureAirportId"
                name="departureAirportId"
                value={formData.departureAirportId}
                label="departureAirport"
                onChange={handleChange}
              >
                {airports.map((airport) => (
                  <MenuItem key={airport.id} value={airport.id}>
                    {airport.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="arrivalAirport-select-label">Arrival Airport</InputLabel>
              <Select
                labelId="arrivalAirport-select-label"
                id="arrivalAirportId"
                name="arrivalAirportId"
                value={formData.arrivalAirportId}
                label="arrivalAirport"
                onChange={handleChange}
              >
                {airports.map((airport) => (
                  <MenuItem key={airport.id} value={airport.id}>
                    {airport.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" required>
              <InputLabel id="plane-select-label">Plane</InputLabel>
              <Select
                labelId="plane-select-label"
                id="planeId"
                name="planeId"
                value={formData.planeId}
                label="Plane"
                onChange={handleChange}
              >
                {planes.map((plane) => (
                  <MenuItem key={plane.id} value={plane.id}>
                    {plane.model}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            <Box sx={{ display: "flex", gap: 2 }}>
              <DatePicker
                label="Departure Date"
                value={formData.departureTime}
                onChange={(newValue) => handleDateChange("departureTime", newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" />
                )}
              />
  
              <DatePicker
                label="Arrival Date"
                value={formData.arrivalTime}
                onChange={(newValue) => handleDateChange("arrivalTime", newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" />
                )}
              />
            </Box>
  
            <TextField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
  
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
              Create Flight
            </Button>
          </form>
        </Paper>
      </LocalizationProvider>
    );


}

export default CreateFlightForm