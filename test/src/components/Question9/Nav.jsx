import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Blog Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link to="" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/Blogs" className="nav-link">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav