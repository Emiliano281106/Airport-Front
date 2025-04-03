import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airports from './components/Airports';
import Planes from './components/Planes';
import Flights from './components/Flights';
import Home from './Home';
import Sidebar from './Sidebar';
import CreateAirportForm from './components/CreateAirportForm';
import CreatePlaneForm from './components/CreatePlaneForm';
import CreateFlightForm from './components/CreateFligthForm';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/airports" element={<Airports />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/planes/create" element={<CreatePlaneForm />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/create" element={<CreateFlightForm />} />
        <Route path="/airports/create" element={<CreateAirportForm/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;