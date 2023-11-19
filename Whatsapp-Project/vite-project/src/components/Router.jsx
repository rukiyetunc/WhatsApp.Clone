import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

const Router = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/contact" 
          element={<Contact />} 
        />
      </Routes>
    </Router>
  );
};

export default Router;
