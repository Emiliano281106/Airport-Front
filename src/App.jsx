import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airports from './components/Airports/Airports';
import Flights from './components/Flights/Flights';
import Planes from './components/Planes/Planes';
import Home from './Pages/Home';
import Sidebar from './components/Layout/Sidebar';
import CreateAirportForm from './components/Airports/CreateAirportForm';
import CreateFlightForm from './components/Flights/CreateFligthForm';
import CreatePlaneForm from './components/Planes/CreatePlaneForm';
import UpdateAirportForm from './components/Airports/UpdateAirportForm';
import UpdatePlaneForm from './components/Planes/UpdatePlaneForm';
import AirportDetails from './components/Airports/AirportDetails';
import PlaneDetails from './components/Planes/PlaneDetails';


const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/airports" element={<Airports />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/planes/create" element={<CreatePlaneForm />} />
        <Route path="/flights/create" element={<CreateFlightForm />} />
        <Route path="/airports/create" element={<CreateAirportForm/>}/>
        <Route path="/airports/update/:id" element={<UpdateAirportForm />} />
        <Route path="/planes/update/:id" element={<UpdatePlaneForm />} />
        <Route path="/airports/details/:id" element={<AirportDetails />} />
        <Route path="/planes/details/:id" element={<PlaneDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;