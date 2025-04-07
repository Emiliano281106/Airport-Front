import React from 'react';
import { 
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Chip,
  Button
} from '@mui/material';
import {
  FlightTakeoff,
  AirportShuttle,
  AirplanemodeActive,
  Flight,
  RocketLaunch
} from '@mui/icons-material';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box 
        sx={{ 
          textAlign: 'center',
          mb: 4,
          animation: 'fadeIn 1s ease-in',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 700,
            mb: 2,
            color: 'primary.main',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          Welcome to Airport Management System
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            color: 'text.secondary',
            mb: 3
          }}
        >
          Your complete aviation management solution
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card 
            sx={{ 
              borderRadius: 2,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(to bottom right, #f5f9ff, #ffffff)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h5" 
                component="h3" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2,
                  color: 'primary.dark'
                }}
              >
                <FlightTakeoff sx={{ verticalAlign: 'middle', mr: 1 }} />
                Comprehensive Aviation Management
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  lineHeight: 1.6
                }}
              >
                Manage your entire aviation operations in one place - flights, planes, 
                and airports with real-time updates and intuitive controls.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Chip 
                  icon={<AirportShuttle />} 
                  label="Airports" 
                  color="primary" 
                  variant="outlined" 
                />
                <Chip 
                  icon={<AirplanemodeActive />} 
                  label="Planes" 
                  color="secondary" 
                  variant="outlined" 
                />
                <Chip 
                  icon={<Flight />} 
                  label="Flights" 
                  color="success" 
                  variant="outlined" 
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ 
        mt: 5,
        textAlign: 'center',
        opacity: 0.8,
        '&:hover': { opacity: 1 }
      }}>
        <Typography 
          variant="caption" 
          display="block" 
          sx={{ mt: 2, fontStyle: 'italic' }}
        >
          Simple, powerful, and ready to use!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;