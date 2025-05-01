import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure to create this CSS file for custom styles

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg custom-navbar shadow">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="/Spice_fusion_logo.png" 
              alt="Restaurant Logo" 
              className="navbar-logo me-2"
            />
            {/* <span className="brand-text">Fine Dining</span> */}
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed ? true : false} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservations">Reservations</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;