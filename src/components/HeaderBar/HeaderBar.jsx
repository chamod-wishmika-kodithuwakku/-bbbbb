import React from "react";
import { Link } from "react-router-dom";


const Headerbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    
        <span className="navbar-brand mb-0 h1">Library Management System</span>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/homeusers">User Page</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/homebooks">Books Page</Link></li>
        </ul>
      
    </nav>
  )

}

export default Headerbar;