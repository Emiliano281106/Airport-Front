import React from "react";
import { Card, CardContent, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to my Airport-System</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Here you can see and manage every flight,plane and airport. </Typography>
          <Typography variant="body2">
            Feel free to use it!!!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;

