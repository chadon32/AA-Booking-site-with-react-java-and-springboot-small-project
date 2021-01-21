import React from 'react';
import Bookings from './components/Bookings';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Bookings</a>
        </div>
      </nav>
      <div className="row">
        <Bookings />
      </div>
    </div>
  );
}

export default App;
