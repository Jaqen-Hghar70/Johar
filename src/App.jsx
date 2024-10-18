import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './Components/Navbar';
import Routing from './Utils/Routing';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routing>
    </Routing>
    </>
  );
}

export default App;
