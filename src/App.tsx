import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SearchResults from './pages/SearchResults';
import AircraftDetails from './pages/AircraftDetails';
import BookingCheckout from './pages/BookingCheckout';
import UserDashboard from './pages/UserDashboard';
import OperatorDashboard from './pages/OperatorDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/aircraft/:id" element={<AircraftDetails />} />
          <Route path="/booking" element={<BookingCheckout />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/operator" element={<OperatorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;