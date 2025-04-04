import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
              <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">My Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link to="" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/AboutUs" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/ContactUs" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Nav
