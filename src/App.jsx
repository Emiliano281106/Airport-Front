import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airports from './components/Airports';
import Planes from './components/Planes';
import Flights from './components/Flights';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/airports" element={<Airports />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/" element={<Flights />} />
      </Routes>
    </Router>
  );
};

export default App;