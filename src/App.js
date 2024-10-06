
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import FeaturesPage from './Components/LandingPage/Features';
import ContactPage from './Components/LandingPage/Contact';

function App() {
  return (
    <div>
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
           <Route path='/features' element={<FeaturesPage/>} />
           <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </div>
  );
}


export default App;
