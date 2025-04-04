import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";

import {Link} from 'react-router-dom'

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Website</a>
        
        {/* Toggle Button for Mobile View */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/ContactUs" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">About US</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
