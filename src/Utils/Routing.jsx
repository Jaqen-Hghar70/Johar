import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Added imports
import Home from '../Components/Home'; // Import Home component
import Tribes from '../Components/Tribes';
import Dance from '../Components/Dance';
import Food from '../Components/Food';
import Festivals from '../Components/Festivals';
import Tourism from '../Components/Tourism';

function Routing() {
  return (
     
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/tribes" element={<Tribes />} /> {/* Route for Tribes */}
        <Route path="/dance" element={<Dance />} /> {/* Route for Dance */}
        <Route path="/food" element={<Food />} /> 
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/tourism-hotspots" element={<Tourism />}/>
      </Routes>
    
  );
}

export default Routing;
